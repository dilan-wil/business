

export function ContactForm(){
    return(
        <>
            <section className="contact-form-area section-space-top">
                <div className="container">
                    <div className="row align-items-center gy-50 justify-content-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="contact-form-content" data-aos="fade-up" data-aos-duration="1500">
                                <div className="section-title-wrapper">
                                    <h2 className="section-title mb-30">Contactez Nous !</h2>
                                    <p className="description">
                                        Vous avez des questions, préoccupations, vous voulez devenir partenaire ? N'hésitez pas à nous contacter
                                    </p>
                                </div>
                                <div className="contact-info">
                                    <div className="item">
                                        <div className="icon">
                                            <span><i className="fa-regular fa-envelope"></i></span>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Adresse mail</h3>
                                            <span className="info"><a href="info@bitcoin-works.sit">info@bitcoin-works.site</a></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <span><i className="fa-regular fa-phone"></i></span>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">Envoyer</h3>
                                            <span className="info"><a href="%2b4488847272.html">+33 7 53 60 18 46</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="contact-form include-bg" data-background="assets/global/images/t7IuYIcCYMJHtqx0JZ3U.jpg">
                                <form action="" method="POST">
                                    <input type="hidden" name="_token" value="uEqEqttfMpe80lQy5fGcPsxJnWHkTkcmrhsJ4zF3" />                            <div className="contact-input-wrapper">
                                        <div className="row">
                                            <div className="col-xxl-6">
                                                <div className="contact-input-box">
                                                    <div className="contact-input">
                                                        <input name="name" id="name" type="text" placeholder="Nom" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6">
                                                <div className="contact-input-box">
                                                    <div className="contact-input">
                                                        <input name="email" id="email" type="email" placeholder=" email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="contact-input-box">
                                                    <div className="contact-input">
                                                        <input name="subject" id="subject" type="text" placeholder="sujet" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="contact-input-box">
                                                    <div className="contact-input">
                                                        <textarea name="msg" placeholder="Ecrivez un message..."></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-btn">
                                        <button className="site-btn warning-btn btn-xs" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}