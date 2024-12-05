

export default function Page(){
    return(
        <div className="withdraw-area">
    <div className="site-card-header">
        <div className="site-title-inner">
            <h3 className="site-card-title mb-0">Faire un Retrait</h3>
            <div className="d-flex gap-2">
                <a className="site-btn primary-btn" href="https://paytimecash.9r3.site/user/withdraw/log" ><i className="icon-receipt-item"></i>Historique</a>
                <a className="site-btn primary-btn" href="https://paytimecash.9r3.site/user/withdraw/account"><i className="icon-directbox-send"></i>Compte</a>
            </div>
        </div>
    </div>
    <div className="withdraw-content-wrap">
        <div className="site-card">
            <form action="https://paytimecash.9r3.site/user/withdraw/now" method="POST">
                <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />                <div className="row gy-30">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="withdraw-form">
                            <div className="single-input">
                                <label className="input-label" >Méthode de Retrait</label>
                                <div className="input-select">
                                    <select name="withdraw_account" id="withdrawAccountId" style={{display: "none"}}>
                                        <option>Choisir un compte</option>
                                                                                <option value="15625">Bank Withdrawal-XAF&lrm;</option>
                                                                            </select><div className="nice-select"><span className="current">Select Account</span><ul className="list"><li data-value="Select Account" className="option selected disabled">Select Account</li><li data-value="15625" className="option">Bank Withdrawal-XAF&lrm;</li></ul></div>
                                </div>
                                <div className="text-danger processing-time mt-2"></div>
                            </div>
                            <div className="single-input has-right-icon">
                                <label className="input-label" >Montant</label>
                                <div className="input-field">
                                    <input type="text" name="amount" className="box-input" />
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
                                        <span className="info amount"></span>
                                    </li>
                                    <li>
                                        <span className="info">Commissions:</span>
                                        <span className="info charge"></span>
                                    </li>
                                    <li>
                                        <span className="info">Methode de Paiement:</span>
                                        <span className="info method" style={{display: "none"}}></span>
                                    </li>
                                    <li>
                                        <span className="info">Logo:</span>
                                        <span className="thumb">
                                            <img src="" className="method-logo" />
                                        </span>
                                    </li>
                                    <li>
                                        <span className="info">Total:</span>
                                        <span className="info text-danger pay-amount"></span>
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