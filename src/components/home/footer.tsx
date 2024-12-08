import Link from "next/link";

export function Footer() {
    return(
        <footer>
    <div className="footer-area footer-primary fix position-relative z-index-1">

        <div className="container">
            <div className="footer-main">
                <div className="row gy-50">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-widget-1-1">
                            <div className="footer-logo">
                                <Link href="/">
                                    <img src="assets/logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="footer-content">
                                <p className="description">Gagnez des commissions en invitant vos amis et en accomplisant des taches.</p>
                            </div>
                        </div>
                    </div>

                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-widget-title">
                                <h5>Pages Importantes</h5>
                            </div>
                            <div className="footer-link">
                                <ul>
                                    <li><Link href="/plans">Nos Plans</Link></li>
                                    <li><Link href="/">Accueil</Link></li>
                                    <li><Link href="/login">Se connecter</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-widget-title">
                                <h5>Liens important</h5>
                            </div>
                            <div className="footer-link">
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-widget justify-content-lg-end">
                            <div className="footer-widget-title">
                                <h5>Besoin d'aide?</h5>
                            </div>
                            <div className="footer-contact">
                                <div className="footer-info">
                                    <div className="footer-info-item">
                                        <div className="footer-info-icon">
                                            <span><i className="fa-solid fa-envelope"></i></span>
                                        </div>
                                        <div className="footer-info-text">
                                            <span><a href="mailto:info@bitcoin-works.site">info@bitcoin-works.site</a></span>
                                        </div>
                                    </div>
                                    <div className="footer-info-item">
                                        <div className="footer-info-icon">
                                            <span><i className="fa-solid fa-phone"></i></span>
                                        </div>
                                        <div className="footer-info-text">
                                            <span><a href="tel:+33753601846">+33 7 53 60 18 46</a></span>
                                        </div>
                                    </div>
                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                        <a href="https://discord.com/"><i className="fa-brands fa-discord"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="footer-bottom">
                        <div className="footer-copyright text-center">
                            <p className="p1">BitcoinWorks © 2024. Tout droits reservés.<Link href="/"> </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-shapes">
            <div className="shape-one">
                <img src="assets/frontend/default/images/shapes/footer/footer-shapes-01.svg" alt="footer-shape" />
            </div>
            <div className="shape-two">
                <img src="assets/frontend/default/images/shapes/footer/footer-shapes-02.svg" alt="footer-shape" />
            </div>
            <div className="shape-three">
                <img src="assets/frontend/default/images/shapes/footer/footer-shapes-03.svg" alt="footer-shape" />
            </div>
            <div className="shape-four">
                <img src="assets/frontend/default/images/shapes/footer/footer-shapes-04.svg" alt="footer-shape" />
            </div>
        </div>
    </div>
</footer>
    )
}