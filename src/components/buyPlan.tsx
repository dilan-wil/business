'use client'
import { useRouter } from "next/router";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/functions/firebase";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useAuth } from "./context/auth-context";
import { Loader2 } from "lucide-react";
import addReferralBonus from "@/functions/add-referral-bonus";

type Plan = {
  id: string;
  name: string;
  price: number;
  daily: number;
  total: number;
};

export const BuyPlan = ({ id, name, price, daily, total }: Plan) => {
  const router = useRouter();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const { userInfo, setUserInfo } = useAuth();
  const [loading, setLoading] = useState(false)

  const handleBuyClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setDialogOpen(true);
  };

  const confirmPurchase = async () => {
    setLoading(true)
    if (!userInfo?.uid || !selectedPlan) return;

    if (userInfo.balance < selectedPlan.price) {
      router.push("/dashboard/deposit");
      return;
    }

    try {
      const userDocRef = doc(db, "users", userInfo.uid);
      const newBalance = userInfo.balance - selectedPlan.price;

      await updateDoc(userDocRef, {
        balance: newBalance,
        plans: arrayUnion({
          id: selectedPlan.id,
          name: selectedPlan.name,
          price: selectedPlan.price,
          daily: selectedPlan.daily,
          purchaseDate: new Date().toISOString(),
          times: 70,
        }),
      });

      setUserInfo({ ...userInfo, balance: newBalance });

      await addReferralBonus(userInfo.referredBy, selectedPlan.price)

      alert("Plan acheté avec succès!");
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
