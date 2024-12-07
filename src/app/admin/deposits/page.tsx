// pages/deposit.tsx
'use client'
import { useState } from 'react';
import { db } from '@/functions/firebase';
import {setDoc, doc} from "firebase/firestore"

const DepositPage = () => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Firebase or backend logic to store the deposit information
    await setDoc(doc(db, "deposits", id), {
        id: id,
        amount: amount,
    })

    // Reset form fields
    setId('');
    setAmount('');
  };

  return (
    <div>
      <h1>Deposit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DepositPage;
