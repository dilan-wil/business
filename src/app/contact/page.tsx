import { ContactForm } from "@/components/home/contact-form";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";



export default function Page(){
    return(
        <>

            <Header />
            <main className="fix">
                <section className="breadcrumb-area fix breadcrumb-overlay style-one position-relative"
                        data-background="https://paytimecash.9r3.site/assets//frontend/default/images/breadcrumb/breadcrumb-01.jpg ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-8">
                                <div className="breadcrumb-content-wrapper">
                                    <div className="breadcrumb-content">
                                        <h1 className="title">    Contact Us
            </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-round">
                        <div className="round-one"></div>
                        <div className="round-two"></div>
                        <div className="round-three"></div>
                    </div>
                    <div className="breadcrumb-shapes">
                        <div className="shape-one">
                            <img src="assets/frontend/default/images/shapes/breadcrumb/1.svg" alt="shape not found" />
                        </div>
                        <div className="shape-two">
                            <img src="assets/frontend/default/images/shapes/breadcrumb/2.svg" alt="shape not found" />
                        </div>
                        <div className="shape-three">
                            <img src="assets/frontend/default/images/shapes/breadcrumb/3.svg" alt="shape not found" />
                        </div>
                        <div className="shape-four">
                            <img src="assets/frontend/default/images/shapes/breadcrumb/4.svg" alt="shape not found" />
                        </div>
                    </div>
                </section>

                <ContactForm />
                </main>
                <Footer />
        </>
    )
}