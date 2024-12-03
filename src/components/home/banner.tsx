import Link from "next/link";

export function Banner() {
    return(
        <section className="banner-area banner-style-one p-relative fix">
        <div className="container">
            <div className="row gy-30 align-items-center">
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
                    <div className="banner-content p-relative">

                        <h1 className="banner-title">Le meilleur moyen de miner des bitcoins depuis chez soi, en toute simplicité et en toute sécurité.
                        </h1>

                        <p className="description">Débloquez un potentiel minier illimité avec BitcoinWorks ! Rejoignez-nous dès aujourd'hui pour bénéficier d'un minage fiable, d'une expérience utilisateur transparente et d'une pléthore d'opportunités qui vous attendent. Commencez à maximiser vos gains dès maintenant !</p>

                        <div className="btn-wrap">
                            <Link className="site-btn warning-btn btn-xs" href="register"
                                target="_blank">Commencer <i
                                    className="icon-arrow-right-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-4">
                    <div className="banner-thumb-wrapper">
                        <span className="round-one"></span>
                        <span className="round-two"></span>
                        <span className="round-three"></span>
                        <div className="banner-thumb">
                            <img src="assets/global/images/Yo8mId9DAXgErmwPnGPI.png" alt="banner thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-shapes d-none d-md-block">
            <div className="shape-one">
                <img src="assets/frontend/default/images/shapes/banner-one/shape-01.svg" alt="banner-shape" />
            </div>
            <div className="shape-two">
                <img src="assets/frontend/default/images/shapes/banner-one/shape-02.svg" alt="banner-shape" />
            </div>
            <div className="shape-three">
                <img src="assets/frontend/default/images/shapes/banner-one/shape-03.svg" alt="banner-shape" />
            </div>
            <div className="shape-four">
                <img src="assets/frontend/default/images/shapes/banner-one/shape-04.svg" alt="banner-shape" />
            </div>
            <div className="shape-five">
                <img src="assets/frontend/default/images/shapes/banner-one/shape-05.svg" alt="banner-shape" />
            </div>
        </div>
    </section>
    )
}