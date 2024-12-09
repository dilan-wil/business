'use client'
import { useRouter } from "next/navigation";
import { doc, updateDoc, arrayUnion, addDoc, collection } from "firebase/firestore";
import { db } from "@/functions/firebase";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useAuth } from "./context/auth-context";
import { Loader2 } from "lucide-react";
import addReferralBonus from "@/functions/add-referral-bonus";
import Loader from "./loader";
import { useToast } from "@/hooks/use-toast";

type Plan = {
  id: string;
  name: string;
  price: number;
  daily: number;
  total: number;
};

export const BuyPlan = ({ id, name, price, daily, total }: Plan) => {
  const router = useRouter();
  const { toast } = useToast()
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const { userInfo, setUserInfo, setTransactions } = useAuth();
  const [loading, setLoading] = useState(false)
  const now = new Date();

  const handleBuyClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setDialogOpen(true);
  };

  const confirmPurchase = async () => {
    setLoading(true)
    if (!userInfo?.uid || !selectedPlan) return;

    if (userInfo.balance < selectedPlan.price) {
      toast({
        variant: "destructive",
        title: "Solde Insuffisant.",
        description: "VRechargez votre compte pour payer ce plan.",
      })
      router.push("/dashboard/deposit");
      return;
    }

    try {
      const userDocRef = doc(db, "users", userInfo.uid);
      const newBalance = userInfo.balance - selectedPlan.price;

      const newPlan = {
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.price,
        daily: selectedPlan.daily,
        purchaseDate: new Date().toISOString(),
        times: 70,
        lastClicked: now.toISOString(),
      };

      await updateDoc(userDocRef, {
        balance: newBalance,
        plans: arrayUnion(newPlan),
      });

      const transactionsCollectionRef = collection(userDocRef, "transactions");
      const newTransaction = {
        description: `Achat du plan ${selectedPlan.name}`,
        transactionId: selectedPlan.name,
        type: "Achat",
        amount: -selectedPlan.price,
        charge: 0,
        status: "success",
        method: "system",
        date: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        icon: "icon-money-change",
      }

      await addDoc(transactionsCollectionRef, newTransaction);

      setUserInfo({ ...userInfo, balance: newBalance,plans: [...(userInfo?.plans || []), newPlan], });
      // Update transactions by appending the new transaction
      setTransactions((prevTransactions: any) => [...prevTransactions, newTransaction]);
      await addReferralBonus(userInfo.referredBy, selectedPlan.price)

      toast({
        variant: "success",
        title: "Achat Réussi.",
        description: "Votre plan a été ajouté. Rendez-vous dans la section taches pour éfféctuer vos taches.",
      })
    } catch (error) {
      console.error("Error purchasing plan: ", error);
      alert("Recommencer s'ils vous plait.");
    } finally {
        setLoading(false)
      setDialogOpen(false);
    }
  };

  return (
    <>
    {loading && <Loader />}
      <button onClick={() => handleBuyClick({ id, name, price, daily, total })} className="site-btn w-100">
        Acheter
      </button>

      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <h2>Confirmer l'achat</h2>
          </AlertDialogHeader>
          <p>
            Etes vous sûr de vouloir payer le plan {selectedPlan?.name} pour le prix de XAF {selectedPlan?.price}?
          </p>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Annuler</AlertDialogCancel>
            <AlertDialogAction disabled={loading} onClick={confirmPurchase}>{loading && <Loader2 className="animate-spin"/>}Oui, Acheter</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
