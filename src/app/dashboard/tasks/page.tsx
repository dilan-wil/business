'use client'
import { useState, useEffect } from "react";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";
import { db } from "@/functions/firebase"; // Firebase initialized here
import { useAuth } from "@/components/context/auth-context"; // Provides `userInfo`
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Plan = {
  id: string;
  name: string;
  price: string;
  daily: number;
  times: number;
  purchaseDate: string;
  lastClicked?: string; // ISO date string
};

export default function Page() {
  const { userInfo, setUserInfo, setTransactions } = useAuth();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()

  const handleTaskClick = async (plan: Plan) => {
    if (loading) return;

    const now = new Date();
    const lastClicked = plan.lastClicked ? new Date(plan.lastClicked) : null;

    // Enforce 24-hour cooldown
    if (lastClicked && now.getTime() - lastClicked.getTime() < 24 * 60 * 60 * 1000) {
      const timeLeft = 24 * 60 * 60 * 1000 - (now.getTime() - lastClicked.getTime());
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

      toast({
        variant: "destructive",
        title: "24h.",
        description: `Vous devez attendre encore ${hours} heures et ${minutes} minutes avant de refaire cette tâche.`,
      })
      return;
    }

    // Prevent further clicks if times are exhausted
    if (plan.times <= 0) {
      toast({
        variant: "destructive",
        title: "Plus de taches.",
        description: "Vous avez épuisé le nombre de taches pour ce plan.",
      })
      return;
    }

    setLoading(true);

    try {
      const userDocRef = doc(db, "users", userInfo?.uid);

      // Update the clicked plan
      const updatedPlans = userInfo?.plans.map((p: Plan) =>
        p.id === plan.id
          ? {
            ...p,
            times: p.times - 1,
            lastClicked: now.toISOString(),
          }
          : p
      );

      const totalDailyEarnings = userInfo?.plans
      .filter((p: Plan) => p.id === plan.id)
      .reduce((sum: number, p: Plan) => sum + (p.times > 0 ? p.daily : 0), 0);


      const newBalance = userInfo?.balance + totalDailyEarnings;

      // Update Firestore with new plans data and balance
      await updateDoc(userDocRef, {
        plans: updatedPlans,
        balance: newBalance,
        earned: totalDailyEarnings
      });

      const transactionsCollectionRef = collection(userDocRef, "transactions");
      const newTransaction = {
        description: `Gain ${plan.times - 70} de tout vos plans ${plan.name}`,
        transactionId: plan.name,
        type: "Taches",
        amount: totalDailyEarnings,
        charge: 0,
        status: "success",
        method: "system",
        date: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        icon: "icon-money-change",
      };

      await addDoc(transactionsCollectionRef, newTransaction);

      // Update local state
      setUserInfo({
        ...userInfo,
        plans: updatedPlans,
        balance: newBalance,
      });
      // Update transactions by appending the new transaction
      setTransactions((prevTransactions: any) => [...prevTransactions, newTransaction]);

      toast({
        variant: "success",
        title: "Taches éffectué avec succès.",
        description: "Vous avez éffectué votre taches. Vos gains ont été crédités.",
      });
    } catch (error) {
      console.error("Error completing task:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ads-area">
      <div className="ads-step">
        <div className="ads-step-inner">
          <Link className="step-btn is-active" href="/dashboard/tasks">
            Tâche!
          </Link>
          <Link className="step-btn" href="/dashboard/earned">
            Mes gains
          </Link>
        </div>
      </div>
      <div className="row gy-30">
        <div className="col-xxl-12">
          <div className="site-card">
            <div className="site-card-header">
              <h3 className="site-card-title">Toutes les tâches</h3>
            </div>
            <div className="ads-item-inner">
              <div className="row">
                {userInfo?.plans && userInfo.plans.length > 0 ? (
                  userInfo.plans.map((plan: Plan) => (
                    <div key={plan.id} className="ads-single-item">
                      <div className="content-inner">
                        <div className="contents">
                          <h3 className="title">{plan.name}</h3>
                          <span className="rounded-pill badge">Plan</span>
                          <p className="description">Durée: 3 Secondes</p>
                          <p>Restant: {plan.times} fois</p>
                          <p>
                            Dernier clique:{" "}
                            {plan.lastClicked
                              ? new Intl.DateTimeFormat("fr-FR", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              }).format(new Date(plan.lastClicked))
                              : "Aucun clic précédent"}
                          </p>
                          <h4 className="currency">XAF{plan.daily}</h4>
                        </div>
                        <div className="btn-wrap">
                          <button
                            className="site-btn"
                            onClick={() => handleTaskClick(plan)}
                            // disabled={
                            //   loading ||
                            //   plan.times <= 0 ||
                            //   (plan.lastClicked &&
                            //     (new Date().getTime() - new Date(plan.lastClicked).getTime()) < 24 * 60 * 60 * 1000) ||
                            //   plan.lastClicked === ""
                            // }
                          >
                            <i className="icon-eye"></i> {loading ? <Loader2 className="animate-spin" /> : "Effectuez la tâche"}
                          </button>
                        </div>
                      </div>
                      <div className="bg-pattern">
                        <img
                          src="https://paytimecash.9r3.site/assets/frontend/default/images/shapes/ads-pattern.png"
                          alt={plan.name}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Vous devez payer un plan pour voir vos plans</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
