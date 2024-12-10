'use client'
import { useAuth } from "@/components/context/auth-context";
import React, { useState } from "react";
import { addDeposit } from "@/functions/add-deposit";
import Link from "next/link";
import Loader from "@/components/loader";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
    const { user, userInfo, setTransactions, setUserInfo } = useAuth()
    const [selectedGateway, setSelectedGateway] = useState<"orange" | "mtn" | "">("");
    const [amount, setAmount] = useState("0");
    const [transactionID, setTransactionID] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast()

    // Gateway details
    const gatewayDetails: Record<"orange" | "mtn", { name: string; number: string }> = {
      orange: {
        name: "Teudjeu Marvin",
        number: "695028300",
      },
      mtn: {
        name: "Azemkou Tedjieu",
        number: "679261793",
      },
    };
  
    // Handle gateway selection
    const handleGatewayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as "orange" | "mtn";
      setSelectedGateway(value);
    };

    const handleAddMoney = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user) {
        return false;
      }
      try {
        setLoading(true);
        const added = await addDeposit({
          userUid: user.uid,
          amount: amount,
          transactionId: transactionID,
          gateway: selectedGateway,
          userINFO: userInfo,
          setUserINFO: setUserInfo,
          setTransac: setTransactions,
        });
        console.log(added);
        toast({
          variant: "success",
          title: "En attente d'approbation.",
          description:
            "Votre demande de dépôt est en attente d'approbation. Un administrateur se chargera de l'accepter.",
        });
      } catch (error: any) {
        if (error.message === "This deposit request has already been processed.") {
          // Specific toast for duplicate transaction error
          toast({
            variant: "destructive",
            title: "Erreur de transaction",
            description: "Cette demande de dépôt a déjà été traitée.",
          });
        } else {
          // Generic toast for other errors
          toast({
            variant: "destructive",
            title: "Erreur",
            description:
              "Rassurez-vous que vous avez entré le bon montant et la bonne clé de transaction.",
          });
        }
      } finally {
        setLoading(false);
        setTransactionID("");
        setAmount("0");
        setSelectedGateway("");
      }
    };
    

  return (
    <div className="add-found-area">
      {loading && <Loader />}
      <form onSubmit={handleAddMoney}>
        <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />
        <div className="row gy-30">
          <div className="col-xxl-6 col-xl-6"> 
            <div className="add-fund-box">
              <div className="site-card">
                <div className="site-card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <h3 className="site-card-title mb-0">Faire un Dépôt</h3>
                    <Link
                      className="site-btn primary-btn"
                      href="/dashboard/transactions"
                    >
                      <i className="icon-receipt-item"></i>Historique
                    </Link>
                  </div>
                </div>
                <div className="add-found-wrapper">
                  <div className="add-gateway">
                    <div className="select-gateway">
                      <div id="gatewayContent" className="select-gateway-item">
                        <h4 className="title">Choisissez un mode</h4>
                        <div className="add-gateway-grid">
                          {/* Orange Money */}
                          <label className={`add-gateway-item ${selectedGateway === "orange" ? "active" : ""}`}>
                            <input
                              type="radio"
                              name="gateway_code"
                              value="orange"
                              onChange={handleGatewayChange}
                            />
                            <div className="add-gateway-thumb">
                              <Image
                                src="orange-money.png"
                                alt="Orange Money"
                                width={50}
                                height={50}
                              />
                              {/* <span>Orange Money</span> */}
                            </div>
                          </label>

                          {/* MTN Mobile Money */}
                          <label className={`add-gateway-item ${selectedGateway === "mtn" ? "active" : ""}`}>
                            <input
                              type="radio"
                              name="gateway_code"
                              value="mtn"
                              onChange={handleGatewayChange}
                            />
                            <div className="add-gateway-thumb">
                              <Image
                                src="MobileMoney.jpg"
                                alt="MTN Mobile Money"
                              />
                              {/* <span>MTN Mobile Money</span> */}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                    

                  {/* Display gateway details based on selection */}
                  {selectedGateway && (
                    <div className="add-found-field">
                      <div className="manual-row">
                        <div className="col-xl-12 col-md-12">
                          <div className="frontend-editor-data">
                            <p>
                              <b>ACCOUNT NAME: {gatewayDetails[selectedGateway]?.name}</b>
                            </p>
                            <p>
                              <b>ACCOUNT NUMBER: {gatewayDetails[selectedGateway].number}</b>
                            </p>
                            <p>
                              Veuillez éffectuer un dépot à ce numero. Une fois le dépot éffectué entrez le montant et l'id de transaction
                            </p>
                          </div>
                        </div>
                      </div>

                    <div className="single-input">
                        <label className="input-label">
                            Montant <span className="text-danger">*</span>
                        </label>
                        <input
                            type="number"
                            name="montant"
                            id="montant"
                            value={amount}
                            placeholder="Entrez le montant"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)}
                            required
                        />
                        </div>
                    </div>
                  )}

                  {/* Transaction proof input */}
                  <div className="single-input">
                    <label className="input-label">
                      Entrez le code de transaction unique<span className="text text-danger">*</span>{" "}
                    </label>
                    <input type="text" value={transactionID} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTransactionID(event.target.value)} name="proof" id="proof" required/>
                    <button type="button" className="upload-thumb-close">
                      <i className="icon-close-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review details */}
          <div className="col-xxl-6 col-xl-6">
            <div className="add-fund-box">
              <div className="site-card">
                <div className="site-card-header">
                  <h3 className="site-card-title">Revisez les détails</h3>
                </div>
                <div className="add-found-details">
                  <div className="list">
                    <ul>
                      <li>
                        <span className="info">Montant:</span>
                        <span className="amount">{amount} XAF</span>
                      </li>
                      <li>
                        <span className="info">Commissions:</span>
                        <span className="info charge2">0 XAF</span>
                      </li>
                      <li>
                        <span className="info">Méthode de dépôt:</span>
                        <span className="info method">
                          <span className="type site-badge badge-primary">
                            {selectedGateway === "orange"
                              ? "Orange Money"
                              : selectedGateway === "mtn"
                              ? "MTN Mobile Money"
                              : "Non sélectionné"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="info">Montant à payer :</span>
                        <span className="info pay-amount">{amount} XAF</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="col-xxl-12">
          <div className="input-btn-wrap">
            <button className="input-btn btn-primary mt-3" type="submit">
              <i className="icon-arrow-right-2"></i>Reclamez votre dépot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
