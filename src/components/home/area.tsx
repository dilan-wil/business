import Link from "next/link";

export function Area() {
    return(
        <>
        <div className="fix">
        <div className="offcanvas-area">
            <div className="offcanva-wrapper">
                <div className="offcanvas-content">
                    <div className="offcanvas-top d-flex justify-content-between align-items-center">
                        <div className="offcanvas-logo">
                            <a href="index.html">
                                <img src="assets/global/images/Yo4YjHser8wVk1yKs5Ds.png" alt="logo not found" />
                            </a>
                        </div>
                        <div className="offcanvas-close">
                            <button className="offcanvas-close-icon animation--flip">
                                <span className="offcanvas-m-lines">
                                    <span className="offcanvas-m-line line--1"></span><span
                                        className="offcanvas-m-line line--2"></span><span
                                        className="offcanvas-m-line line--3"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-menu fix"></div>
                    <div className="offcanvas-btn mb-3">
                                                    <Link className="gradient-btn" href="login">
                                <span><i data-lucide="circle-user-round"></i></span>
                                Log In
                            </Link>
                            <Link className="td-primary-btn" href="register">
                                <span><i data-lucide="user-round-plus"></i></span>
                                Sign Up
                            </Link>
                                            </div>
                </div>
            </div>
        </div>
    </div>
    <div className="offcanvas-overlay"></div>
    <div className="offcanvas-overlay-white"></div>
        </>
    )
}