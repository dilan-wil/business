import Link from "next/link";

export function About() {
    return(
        <>
        <section className="about-area section-space p-relative z-index-11">
    <div className="container">
        <div className="row gy-50 align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-thumb-wrap style-one">
                    <div className="about-thumb">
                        <img src="assets/global/images/QMtejCTk07lgmKCuwSym.png" alt="about thumb" />
                    </div>
                    <div className="card-one">
                        <p>100% sûr et sécurisé</p>
                    </div>
                    <div className="card-two">
                    </div>
                    <div className="establish-shape">
                        <h3>08 Décembre 2024</h3>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="about-content style-one">
                    <div className="section-title-wrapper mb-25">
                        <h2 className="section-title">A propos de nous</h2>
                    </div>
                    <p className="b1 description mb-20">BitcoinWorks est une agence de minage de crypto-monnaie de premier plan, spécialisée dans le minage en ligne et la maximisation du minage pour les particuliers. En mettant l'accent sur les stratégies axées sur le retour sur investissement</p>
                    <div className="about-info mb-25">
                        <div className="about-info-list">
                            <ul className="icon-list">
                                                                <li>
                                 <span className="list-item_icon">
                                    <i className="icon-tick-circle"></i>
                                 </span>
                                    <span className="list-item-text">Nous fournissons un service 100% sûr et sécurisé</span>
                                </li>
                                                                <li>
                                 <span className="list-item_icon">
                                    <i className="icon-airdrop"></i>
                                 </span>
                                    <span className="list-item-text">Clients satisfait</span>
                                </li>
                                                                <li>
                                 <span className="list-item_icon">
                                    <i className="icon-square"></i>
                                 </span>
                                    <span className="list-item-text">Données protégés</span>
                                </li>
                                                            </ul>
                        </div>
                    </div>

                    <div className="btn-inner">
                        <Link className="site-btn primary-btn btn-xs" href="register">Miner avec nous<i className="icon-send-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="about-shapes">
        <div className="shape-one d-none d-lg-block">
            <img src="assets/frontend/default/images/shapes/about-one/shapes-01.svg" alt="about shape" />
        </div>
        <div className="shape-two">
            <img src="assets/frontend/default/images/shapes/about-one/shapes-02.svg" alt="about shape" />
        </div>
    </div>
</section>

{/* About Section */}
<section className="how-it-works-area p-relative z-index-11 section-space">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="section-title-wrapper text-center section-title-space">
                    <h2 className="section-title mb-20">Comment ça marche</h2>
                    <p className="b1">Rejoignez BitcoinWorks pour gagner facilement de l'argent. Paiements fiables, interface conviviale, opportunités infinies. Commencez à gagner plus maintenant !</p>
                </div>
            </div>
        </div>
        <div className="how-it-works-grid">
            <div className="line-shapes">
                <img src="assets/frontend/default/images/shapes/dot-line.svg" alt="dot-line" />
            </div>
                        <div className="how-it-works-item">
                <div className="thumb">
                    <img src="assets/global/images/9O4OD3HilEMv2DEr1naA.png" alt="work thumb" />
                    <span className="number">01</span>
                </div>
                <div className="content">
                    <h3 className="title">Inscription</h3>
                    <p className="description">Veuillez enregistrer un compte pour commencer. La duplication de compte est strictement interdite.</p>
                </div>
            </div>
                        <div className="how-it-works-item">
                <div className="thumb">
                    <img src="assets/global/images/wsJXJrqna9dijwYRBv61.png" alt="work thumb" />
                    <span className="number">02</span>
                </div>
                <div className="content">
                    <h3 className="title">Souscivez à un plan</h3>
                    <p className="description">Achetez un plan. Vous pouvez également gagner de l'argent en invitant vos amis.</p>
                </div>
            </div>
                        <div className="how-it-works-item">
                <div className="thumb">
                    <img src="assets/global/images/d5w6nIoNSpN6P60IUovq.png" alt="work thumb" />
                    <span className="number">03</span>
                </div>
                <div className="content">
                    <h3 className="title">Effectuez les taches quotidiennes</h3>
                    <p className="description">Pour obtenir une récompense quotidiennes, il vous suffit de completer la tache.</p>
                </div>
            </div>
                        <div className="how-it-works-item">
                <div className="thumb">
                    <img src="assets/global/images/stxtlzzB72dNremDgbnd.jpg" alt="work thumb" />
                    <span className="number">04</span>
                </div>
                <div className="content">
                    <h3 className="title">Recevez votre argent</h3>
                    <p className="description">Vous pouvez demander un retrait une fois que vous avez atteint le seuil minimum de retrait de 500, et être payé instantanément.</p>
                </div>
            </div>
                    </div>
    </div>
    <div className="how-it-shapes">
        <div className="shape-one d-none d-lg-block">
            <img src="assets/frontend/default/images/shapes/how-it-work/shape-01.svg" alt="how it shape" />
        </div>
        <div className="shape-two">
            <img src="assets/frontend/default/images/shapes/how-it-work/shape-02.svg" alt="how it shape" />
        </div>
        <div className="shape-three d-none d-lg-block   ">
            <img src="assets/frontend/default/images/shapes/how-it-work/shape-03.svg" alt="how it shape" />
        </div>
    </div>
</section>
        </>
    )
}