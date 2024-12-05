

export default function Page(){
    return(
        <div className="add-found-area">
    <form action="https://paytimecash.9r3.site/user/deposit/now" method="post">
        <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />        <div className="row gy-30">
            <div className="col-xxl-6 col-xl-6">
                <div className="add-fund-box">
                    <div className="site-card">
                        <div className="site-card-header">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                <h3 className="site-card-title mb-0">Faire un Dépot</h3>
                                <a className="site-btn primary-btn" href="https://paytimecash.9r3.site/user/deposit/log">
                                    <i className="icon-receipt-item"></i>Historique
                                </a>
                            </div>
                        </div>
                        
                        <div className="add-found-wrapper">
                            <div className="add-gateway">
                                <div className="select-gateway">
                                    <div id="gatewayContent" className="select-gateway-item">
                                        <h4 className="title">Choisissez un mode</h4>
                                        <div className="add-gateway-grid">
                                                                                        <label className="add-gateway-item active">
                                                <input type="radio" name="gateway_code" id="bank" value="bank" />
                                                <div className="add-gateway-thumb">
                                                    <img src="https://paytimecash.9r3.site/assets/global/images/41jxkxge4Jb6YaNbj3uh.jpg" alt="Bank Deposit" />
                                                </div>
                                            </label>
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add-found-field">
                                <div className="single-input">
                                    <label className="input-label" >Montant</label>
                                    <div className="input-field">
                                        <input type="text" className="box-input" name="amount" id="amount" />
                                        <span className="icon">
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 10.7177C1 12.2227 2.155 13.436 3.59 13.436H6.51833C7.76667 13.436 8.78167 12.3743 8.78167 11.0677C8.78167 9.64435 8.16333 9.14268 7.24167 8.81602L2.54 7.18268C1.61833 6.85602 1 6.35435 1 4.93102C1 3.62435 2.015 2.56268 3.26333 2.56268H6.19167C7.62667 2.56268 8.78167 3.77602 8.78167 5.28102" stroke="#5C5958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M4.88281 1V15" stroke="#5C5958" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="manual-row"><div className="col-xl-12 col-md-12">
    <div className="frontend-editor-data">
        <p><b><span>BANK NAME:&nbsp;</span><span>PALMPAY&nbsp;</span></b></p>

<p><b>ACCOUNT NAME: MWUESE MAGRET ALUMUNGA</b></p>

<p><b>ACCOUNT NUMBER: 9134303005</b></p>
    </div>
</div>

<div className="single-input">
    <label className="input-label" >Entrez le code de transaction unique<span className="text text-danger">*</span> </label>
        <input type="text" name="proof" id="proof" />
    <button type="button" className="upload-thumb-close" >
        <i className="icon-close-circle"></i>
    </button>
</div>
 
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                        <span className="amount">50000 XAF</span>
                                    </li>
                                    <li>
                                        <span className="info">Commissions:</span>
                                        <span className="info charge2">0 XAF</span>
                                    </li>
                                    <li>
                                        <span className="info">Méthode de dépot:</span>
                                        <span className="info method"><span className="type site-badge badge-primary">Bank Deposit</span></span>
                                    </li>
                                    <li>
                                        <span className="info">Logo:</span>
                                        <span className="balance-thumb" id="logo"><img className="table-icon" src="https://paytimecash.9r3.site/assets/global/images/41jxkxge4Jb6YaNbj3uh.jpg" /></span>
                                    </li>
                                    <li>
                                        <span className="info">Total:</span>
                                        <span className="info total">50000 XAF</span>
                                    </li>
                                    <li>
                                        <span className="info">Montant à payer :</span>
                                        <span className="info pay-amount">50000 XAF</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-12">
            <div className="input-btn-wrap">
                <button className="input-btn btn-primary mt-3" type="submit"><i className="icon-arrow-right-2"></i>Proceed to payment </button>
            </div>
        </div>
    </form>
</div>
    )
}