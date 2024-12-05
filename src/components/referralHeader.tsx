

export function ReferralHeader(){
    return(
        <div className="col-xxl-12">
                            <div className="referral-share-wrapper">
                                <div className="referral-share-item">
                                    <h3 className="title">Partagez votre lien</h3>
                                    <p className="description">
                                        Vous pouvez aussi partager votre lien en le copiant et l'envoyer à vos amis.
                                    </p>
                                    <div className="input-field">
                                        <input type="text" className="box-input"
                                            id="refLink"
                                            value="https://paytimecash.9r3.site/register?invite=2YgVgfrJYn"
                                             />
                                    </div>
                                    <div className="bottom-content">
                                        <div className="btn-wrap">
                                            <button
                                                className="site-btn primary-btn disable"
                                                id="copyLinkButton"><i
                                                    className="icon-copy"></i>Copier le Lien</button>
                                            <button
                                                className="site-btn primary-btn disable"
                                                id="shareLinkButton">
                                                <span>
                                                    <svg width="20" height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 6.66663C16.3807 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 16.3807 1.66663 15 1.66663C13.6193 1.66663 12.5 2.78591 12.5 4.16663C12.5 5.54734 13.6193 6.66663 15 6.66663Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M15 18.3334C16.3807 18.3334 17.5 17.2141 17.5 15.8334C17.5 14.4527 16.3807 13.3334 15 13.3334C13.6193 13.3334 12.5 14.4527 12.5 15.8334C12.5 17.2141 13.6193 18.3334 15 18.3334Z"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M7.16016 11.2583L12.8518 14.575"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M12.8435 5.42505L7.16016 8.74172"
                                                            stroke="white"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Partager
                                            </button>
                                        </div>
                                        <div className="client-meta">
                                            <div className="content">
                                                <p>14 personnes se sont inscrit avec votre lien
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
    )
}