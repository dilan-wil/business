import { TransactionHistory } from "@/components/transactions-history";
import { useAuth } from "@/components/context/auth-context";
import { useEffect } from "react";

export default function Page(){
    const { user, transactions } = useAuth()

    useEffect(() => {
        if(transactions ){
            console.log(transactions)
        }
    }, [transactions])
    return(
        <>
            <TransactionHistory datas={transactions}/>   
        </>
    )
}