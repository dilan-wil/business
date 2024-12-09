import { db } from "./firebase"; // Adjust the import to match your Firebase setup
import { doc, getDoc, setDoc,collection, addDoc, updateDoc, increment } from "firebase/firestore";

interface AddDepositInput {
  userUid: string;
  amount: string;
  transactionId: string;
  gateway: string;
  userINFO: any;
  setUserINFO: any;
  setTransac: any;
}

export async function addDeposit({
  userUid,
  amount,
  transactionId,
  gateway,
  userINFO,
  setUserINFO,
  setTransac,
}: AddDepositInput): Promise<boolean> {
  try {
    const newAmount = parseInt(amount);

    // Add deposit to the "deposits" collection with "pending" status
    const depositData = {
      userUid,
      transactionId,
      amount: newAmount,
      gateway,
      status: "pending", // Mark as pending for admin approval
      date: new Date().toISOString(),
    };

    await setDoc(doc(db, "deposits", transactionId), depositData);

    // Create a pending transaction in the user's "transactions" sub-collection using transactionId as document ID
    const userDocRef = doc(db, "users", userUid);
    const transactionData = {
      description: `Deposit via ${gateway}`,
      transactionId,
      type: "Deposit",
      amount: newAmount,
      charge: 0,
      status: "pending", // Initially pending
      method: gateway,
      date: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
      icon: "icon-money-change",
    };

    await setDoc(doc(collection(userDocRef, "transactions"), transactionId), transactionData);
    setTransac((prevTransactions: any) => [...prevTransactions, transactionData]);

    console.log("Deposit and pending transaction added.");
    return true;
  } catch (error) {
    console.error("Error adding deposit:", error);
    throw error;
  }
}