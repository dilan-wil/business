import Link from "next/link";



export default function Page(){
    return(
        <>
            <section className="sign-up-area">
        <div className="auth-wrapper">
            <div className="contents-inner">
                <div className="content">
                    
                    <div className="top-content">
                        <h3 className="title">💪 Se connecter</h3>
                    </div>
                    <div className="auth-form-wrapper">
                        
                        <form action="https://paytimecash.9r3.site/register" method="POST">
                            <div className="single-input has-left-icon">
                                <label className="input-label" >Email Address<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="email" className="box-input email-input" name="email" value="" required />
                                    <span className="icon">
                                    <i className="icon-sms"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="single-input has-right-icon has-left-icon">
                                <label className="input-label">Password<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="password" className="box-input password-input" name="password" required />
                                    <div className="password">
                                        <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                    </div>
                                    <span className="icon">
                                        <i className="icon-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="inputs">
                                <button type="submit" className="site-btn primary-btn w-100">Se connecter</button>
                            </div>
                        </form>
                    </div>
                    <div className="bottom-content">
                        <div className="have-acount">
                            <p>Pas encore de compte ? <Link href="register">S'Inscrire</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <footer>
            <div className="dashboard-footer-area">
                <div className="need-content">
                    <p className="description"><a href="contact.html">Need Help?</a></p>
                </div>
            </div>
        </footer>
        </>
    )
}