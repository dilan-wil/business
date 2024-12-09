import { useEffect, useState } from 'react';
import { db } from '@/functions/firebase';
import { collection, doc, getDocs, updateDoc, increment, query, where } from "firebase/firestore";

type Deposit = {
  id: string;
  amount: number;
  userUid: string;
  status: string;
};

const AdminDepositPage = () => {
  const [deposits, setDeposits] = useState<Deposit[]>([]); // Specify the type here

  // Fetch pending deposits
  const fetchDeposits = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "deposits"), where("status", "==", "pending"))
      );
      const fetchedDeposits = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Deposit[];
      setDeposits(fetchedDeposits); // Assign fetched deposits
    } catch (error) {
      console.error("Error fetching deposits:", error);
    }
  };

  // Approve deposit logic
  const approveDeposit = async (depositId: string, userUid: string, amount: number) => {
    try {
      // Update deposit status to redeemed
      const depositRef = doc(db, "deposits", depositId);
      await updateDoc(depositRef, { status: "redeemed" });
  
      // Update user's transaction status to success
      const userDocRef = doc(db, "users", userUid);
      const transactionRef = doc(collection(userDocRef, "transactions"), depositId);
  
      await updateDoc(transactionRef, { status: "success" });
  
      // Increment user balance
      await updateDoc(userDocRef, {
        balance: increment(amount),
        deposits: increment(amount),
      });
  
      console.log("Deposit approved and processed.");
      fetchDeposits(); // Refresh the list of deposits
    } catch (error) {
      console.error("Error approving deposit:", error);
    }
  };

  useEffect(() => {
    fetchDeposits();
  }, []);

  return (
    <div>
      <h1>Admin Deposit Approvals</h1>
      <ul>
        {deposits.map((deposit) => (
          <li key={deposit.id}>
            <p>ID: {deposit.id}</p>
            <p>Amount: {deposit.amount}</p>
            <p>User ID: {deposit.userUid}</p>
            <button onClick={() => approveDeposit(deposit.id, deposit.userUid, deposit.amount)}>
              Approve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDepositPage;
