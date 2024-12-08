// pages/withdrawal.tsx
'use client'
import { useState, useEffect } from 'react';
import { db } from '@/functions/firebase'; // Import your Firebase instance
import { updateDoc, doc, collection, getDocs } from 'firebase/firestore';

const WithdrawalPage = () => {
  const [withdrawals, setWithdrawals] = useState<{ id: string, userId?: string, gateway?: string, amount?: number, charge?: number, status?: string, date?: string }[]>([]);

  useEffect(() => {
    // Fetch withdrawals from Firestore
    const fetchWithdrawals = async () => {
      const withdrawalsCollectionRef = collection(db, 'withdrawals');
      const snapshot = await getDocs(withdrawalsCollectionRef);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWithdrawals(data);
    };

    fetchWithdrawals();
  }, []);

  const handleUpdateStatus = async (w: any) => {
    // Update withdrawal status to 'success' in Firestore
    const withdrawalRef = doc(db, 'withdrawals', w.id);
    await updateDoc(withdrawalRef, { status: 'success' });

    // Update the corresponding transaction status in the user's subcollection
    const transactionsCollectionRef = doc(db, 'users', w.userId, 'transactions', w.id);
    await updateDoc(transactionsCollectionRef, { status: 'success' });

    // Update the local state to reflect the change
    setWithdrawals(withdrawals.map(item => item.id === w.id ? { ...item, status: 'success' } : item));
  };

  return (
    <div>
      <h1>Withdrawal</h1>
      <ul>
        {withdrawals.map((w: any) => (
          <li key={w.id}>
            <p>{`UserId: ${w.userId}, Gateway: ${w.gateway}, Amount: ${w.amount}, Charge: ${w.charge}, Status: ${w.status}, Date: ${w.date}`}</p>
            {w.status === 'pending' && (
              <button onClick={() => handleUpdateStatus(w)}>Mark as Success</button>
            )}
          </li>
          {(index < (withdrawals.length - 1)) && <hr />}
        ))}
      </ul>
    </div>
  );
};

export default WithdrawalPage;
