import { doc, updateDoc, collection, addDoc, getDoc, increment } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path to your Firebase configuration

export async function askWithdrawal(userId: string, gateway: string, amount: string) {
    try {
        // Validate input
        const newAmount = parseInt(amount)
        if (newAmount <= 500) {
            throw new Error("Amount must be greater than 500.");
        }

        // Reference to the user's document
        const userRef = doc(db, "users", userId);

        // Get the user's current balance
        const userSnapshot = await getDoc(userRef);
        if (!userSnapshot.exists()) {
            throw new Error("User does not exist.");
        }
        
        const userData = userSnapshot.data();
        const currentBalance = userData.balance || 0;

        // Ensure user has enough balance
        if (currentBalance < newAmount) {
            throw new Error("Insufficient balance.");
        }

        const charge = newAmount * 0.1;

        // Add withdrawal to the `withdrawals` collection
        const withdrawalRef = collection(db, "withdrawals");
        const withdrawalDoc = await addDoc(withdrawalRef, {
            userId,
            gateway,
            amount: newAmount,
            charge,
            status: "pending",
            date: new Date().toISOString(),
        });

        // Decrement user's balance
        await updateDoc(userRef, {
            balance: increment(-newAmount),
        });

        // Add transaction to user's `transactions` subcollection
        const transactionsRef = collection(userRef, "transactions");
        await addDoc(transactionsRef, {
            description: `Withdrawal to ${gateway}`,
            transactionId: withdrawalDoc.id,
            type: "Withdrawal",
            amount: -newAmount,
            charge, // Adjust if there's a charge
            status: "pending",
            method: gateway,
            date: new Date().toISOString(),
            icon: "icon-money-change",
        });

        console.log("Withdrawal request successfully created.");
    } catch (error) {
        console.error("Error processing withdrawal:", error);
        throw error;
    }
}
