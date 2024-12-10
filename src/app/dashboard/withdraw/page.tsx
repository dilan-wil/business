'use client'
import { askWithdrawal } from "@/functions/ask-withdrawals"
import { useState } from "react"
import { useAuth } from "@/components/context/auth-context"
import Loader from "@/components/loader"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function Page() {
    const [amount, setAmount] = useState("")
    const [method, setMethod] = useState("")
    const [numero, setNumero] = useState("")
    const [nom, setNom] = useState("")
    const [loading, setLoading] = useState(false)
    const { user, userInfo, setUserInfo, setTransactions } = useAuth()
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user) {
            return false
        }
        const now = new Date();
        const currentHour = now.getUTCHours() + 1; // Adjust to GMT+1
        const currentMinutes = now.getUTCMinutes();


        if (!amount || !method || !numero || !nom) {
            toast({
                variant: "destructive",
                title: "Formulaire imcomplet",
                description: "Veuillez remplir tout les champs.",
            })
            return;
        }

        // Check if the time is outside 9 AM to 7 PM
        if (currentHour < 9 || (currentHour === 20 && currentMinutes > 0) || currentHour > 20) {
            toast({
                variant: "destructive",
                title: "Heure de Retrait.",
                description: "Les demandes de retrait se font exclusvivement entre 9h et 20h.",
            })
            return false;
        }

        try {
            setLoading(true);
            const asked = await askWithdrawal(user.uid, method, amount, numero, nom, userInfo, setUserInfo, setTransactions);
            console.log(asked);
            toast({
                variant: "success",
                title: "Demande de retrait réussi.",
                description: "Votre requete a été envoyée. Vous recevrez vos fonds dans un délai de 24h.",
            });
        } catch (error) {
            if (error instanceof Error && error.message === "Amount must be greater than 1200") {
                toast({
                    variant: "destructive",
                    title: "Erreur de retrait.",
                    description: "Le montant minimum de retrait est de 1200.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Erreur de retrait.",
                    description: "Rassurez-vous d'avoir les fonds nécessaires et d'entrer les bonnes informations.",
                });
            }
        } finally {
            setLoading(false);
            setAmount("");
            setMethod("");
            setNumero("");
        }
    }
    return (
        <div className="withdraw-area">
            {loading && <Loader />}
            <div className="site-card-header">
                <div className="site-title-inner">
                    <h3 className="site-card-title mb-0">Faire un Retrait</h3>
                    <div className="d-flex gap-2">
                        <Link className="site-btn primary-btn" href="/dashboard/transactions" ><i className="icon-receipt-item"></i>Historique</Link>
                        <Link className="site-btn primary-btn" href="/"><i className="icon-directbox-send"></i>Compte</Link>
                    </div>
                </div>
            </div>
            <div className="withdraw-content-wrap">
                <div className="site-card">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />                <div className="row gy-30">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="withdraw-form">
                                    <div className="single-input">
                                        <label className="input-label" >Méthode de Retrait</label>
                                        <div className="input-select">
                                            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setMethod(event.target.value)} name="withdraw_account" id="withdrawAccountId">
                                                <option>Choisir un compte</option>
                                                <option value="orange">Orange Money</option>
                                                <option value="mtn">MTN Mobile Money</option>
                                            </select>
                                        </div>
                                        <div className="text-danger processing-time mt-2"></div>
                                    </div>
                                    <div className="single-input has-right-icon">
                                        <label className="input-label" >Montant</label>
                                        <div className="input-field">
                                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)} type="text" name="amount" className="box-input" required />
                                            <span className="icon">
                                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 10.7177C1 12.2227 2.155 13.436 3.59 13.436H6.51833C7.76667 13.436 8.78167 12.3743 8.78167 11.0677C8.78167 9.64435 8.16333 9.14268 7.24167 8.81602L2.54 7.18268C1.61833 6.85602 1 6.35435 1 4.93102C1 3.62435 2.015 2.56268 3.26333 2.56268H6.19167C7.62667 2.56268 8.78167 3.77602 8.78167 5.28102" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                    <path d="M4.88281 1V15" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="text-danger range mt-2"></div>
                                    </div>
                                    <div className="single-input has-right-icon">
                                        <label className="input-label" >Numero</label>
                                        <div className="input-field">
                                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNumero(event.target.value)} type="text" name="amount" className="box-input" required />
                                            <span className="icon">
                                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 10.7177C1 12.2227 2.155 13.436 3.59 13.436H6.51833C7.76667 13.436 8.78167 12.3743 8.78167 11.0677C8.78167 9.64435 8.16333 9.14268 7.24167 8.81602L2.54 7.18268C1.61833 6.85602 1 6.35435 1 4.93102C1 3.62435 2.015 2.56268 3.26333 2.56268H6.19167C7.62667 2.56268 8.78167 3.77602 8.78167 5.28102" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                    <path d="M4.88281 1V15" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="text-danger range mt-2"></div>
                                    </div>
                                    <div className="single-input has-right-icon">
                                        <label className="input-label" >Nom</label>
                                        <div className="input-field">
                                            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNom(event.target.value)} type="text" name="amount" className="box-input" required />
                                            <span className="icon">
                                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 10.7177C1 12.2227 2.155 13.436 3.59 13.436H6.51833C7.76667 13.436 8.78167 12.3743 8.78167 11.0677C8.78167 9.64435 8.16333 9.14268 7.24167 8.81602L2.54 7.18268C1.61833 6.85602 1 6.35435 1 4.93102C1 3.62435 2.015 2.56268 3.26333 2.56268H6.19167C7.62667 2.56268 8.78167 3.77602 8.78167 5.28102" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                    <path d="M4.88281 1V15" stroke="#5C5958" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="text-danger range mt-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="add-found-details">
                                    <div className="list">
                                        <ul>

                                            <li>
                                                <span className="info">Montant:</span>
                                                <span className="info amount">{amount}</span>
                                            </li>
                                            <li>
                                                <span className="info">Commissions(10%):</span>
                                                <span className="info charge">{parseInt(amount) * 0.1}</span>
                                            </li>
                                            <li>
                                                <span className="info">Methode de Paiement:</span>
                                                <span className="info method" >{method}</span>
                                            </li>
                                            <li>
                                                <span className="info">Numero du compte:</span>
                                                <span className="info method">
                                                    {numero}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="info">Nom du compte:</span>
                                                <span className="info method">
                                                    {nom}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="info">Total:</span>
                                                <span className="info text-danger pay-amount">{parseInt(amount) - (parseInt(amount) * 0.1)}</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12">
                                <div className="button-inner">
                                    <div className="input-btn-wrap">
                                        <button className="input-btn btn-primary" type="submit" ><i className="icon-arrow-right-2"></i>Envoyer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}