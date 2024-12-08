import { doc, updateDoc, collection, addDoc, setDoc, getDoc, increment } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path to your Firebase configuration

export async function askWithdrawal(userId: string, gateway: string, amount: string, numero: string, userInfo: any, setUserInfo: any, setTransactions: any) {
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
            name: userInfo.first_name,
            gateway,
            amount: newAmount,
            charge,
            numero,
            a_envoyer: newAmount-charge,
            status: "pending",
            date: new Date().toISOString(),
        });

        // Decrement user's balance
        await updateDoc(userRef, {
            balance: increment(-newAmount),
            withdrawals: increment(newAmount)
        });

        const incrementBalance = userInfo.balance - newAmount
        const incrementWithdrawals = (userInfo.withdrawals || 0) + newAmount
        setUserInfo({...userInfo, balance: incrementBalance, withdrawals: incrementWithdrawals})

        // Add transaction to user's `transactions` subcollection
        const transactionsCollectionRef = doc(db, "users", userId,"transactions", withdrawalDoc.id);
        const newTransaction = {
        description: `Withdrew via ${gateway}`,
        transactionId: withdrawalDoc.id,
        type: "Withdrawal",
        amount: -newAmount,
        charge: 0,
        status: "pending",
        method: gateway,
        date: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        icon: "icon-money-change",
        }

        await setDoc(transactionsCollectionRef, newTransaction);
        setTransactions((prevTransactions: any) => [...prevTransactions, newTransaction]);

        console.log("Withdrawal request successfully created.");
    } catch (error) {
        console.error("Error processing withdrawal:", error);
        throw error;
    }
}
