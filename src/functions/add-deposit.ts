import { db } from "./firebase"; // Adjust the import to match your Firebase setup
import { doc, getDoc, collection, addDoc, updateDoc, increment } from "firebase/firestore";

interface AddDepositInput {
  userUid: string;
  amount: string;
  transactionId: string;
  gateway: string;
  userINFO: any;
  setUserINFO: any;
  setTransac: any;
}

export async function addDeposit({ userUid, amount, transactionId, gateway, userINFO, setUserINFO, setTransac }: AddDepositInput): Promise<boolean> {
  try {
    // Reference to the deposit document in the "deposits" collection
    const depositDocRef = doc(db, "deposits", transactionId);
    const depositDocSnap = await getDoc(depositDocRef);
    const newAmount = parseInt(amount)

    if (!depositDocSnap.exists()) {
      console.error("Transaction ID not found in deposits.");
      throw new Error("Transaction ID does not exist.");
    }

    const depositData = depositDocSnap.data();
    if (depositData?.status === "redeemed") {
      console.error("This transaction has already been redeemed.");
      throw new Error("Transaction already redeemed.");
    }

    if (depositData?.amount !== amount) {
      console.error("Transaction amount does not match.");
      throw new Error("Invalid transaction amount.");
    }

    // Proceed with redemption
    const userDocRef = doc(db, "users", userUid);

    // Increment user balance
    await updateDoc(userDocRef, {
      balance: increment(newAmount),
      deposits: increment(newAmount)
    });
    const incrementBalance = userINFO.balance + newAmount
    const incrementDeposits = userINFO.deposits + newAmount
    setUserINFO({...userINFO, balance: incrementBalance, deposits: incrementDeposits})

    // Mark the deposit as redeemed
    await updateDoc(depositDocRef, {
      status: "redeemed",
    });

    // Add a new transaction record to the user's "transactions" sub-collection
    const transactionsCollectionRef = collection(userDocRef, "transactions");
    const newTransaction = {
      description: `Deposit via ${gateway}`,
      transactionId,
      type: "Deposit",
      amount: newAmount,
      charge: 0,
      status: "success",
      method: gateway,
      date: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
      icon: "icon-money-change",
    }

    await addDoc(transactionsCollectionRef, newTransaction);
    setTransac((prevTransactions: any) => [...prevTransactions, newTransaction]);

    console.log("Deposit redeemed successfully and transaction recorded.");
    return true;
  } catch (error) {
    console.error("Error processing deposit:", error);
    throw error;
  }
}
