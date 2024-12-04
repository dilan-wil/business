import Image from "next/image";
import { Header } from "@/components/home/header";
import { Reviews } from "@/components/home/review";
import { Area } from "@/components/home/area";
import { About } from "@/components/home/about";
import { Footer } from "@/components/home/footer";
import { Plans } from "@/components/home/plans";
import { Socials } from "@/components/home/socials";
import { Banner } from "@/components/home/banner"
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* notification and preloader Section */}

    <div className="preloader">
        <div className='loader'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    </div>
    {/* Area start Section */}
    <Area />
    
    {/* header component */}
    <Header />

    {/*Body*/}
    <main className="fix">
    {/*banner*/}
    <Banner />
    

  {/*about*/}
    <About />


    {/*subscription*/}
    <Plans />


    {/*invite*/}
    <section className="invite-section">
    <div className="container">
        <div className="row gy-30 align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="invite-thumb-wrap">
                    <div className="thumb-inner">
                        <div className="thumb">
                            <img src="assets/global/images/bE6qc7ztO9uCPSzKfJsn.jpg" alt="invite thumb" />
                        </div>
                        <div className="thumb">
                            <img src="assets/global/images/v1FwCAbMKNdhjddO2XOz.jpg" alt="invite thumb" />
                        </div>
                    </div>
                    <div className="earn-card">
                        <p>Jusqu'à 30%</p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="invite-content">
                    <h2 className="section-title mb-30">Invitez des amis et gagnez</h2>
                    <p className="b2">Recevez jusqu'à 30% des gains que font votre fileuil
                    </p>
                    <div className="btn-inner">
                        <Link className="site-btn primary-btn btn-xs" href="register" target="_blank">Créez un compte<i className="icon-arrow-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>


    {/*review*/}
    <Reviews />

    <Socials />
        
    </main>

    {/* Footer  */}
    <Footer />
    </>
  );
}
