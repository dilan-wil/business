import Link from "next/link"

export function Header() {
    return(
        <header>
    <div className="header-area header-transparent header-style-one" id="header-sticky">
        <div className="container">
            <div className="header-inner">
                <div className="header-logo">
                    <Link className="logo-white" href="index.html"><img src="assets/global/images/Yo4YjHser8wVk1yKs5Ds.png" alt="Logo not found" /></Link>
                    <Link className="logo-black" href="index.html"><img src="assets/global/images/Yo4YjHser8wVk1yKs5Ds.png" alt="Logo not found" /></Link>
                </div>
                <div className="header-menu d-none d-xl-inline-flex">
                    <nav className="td-main-menu" id="mobile-menu">
                        <ul>
                                                                                                <li>
                                        <Link href="/" className="active">Accueil</Link>
                                    </li>
                                                                                                                                                                                            <li>
                                        <Link href="/plans" className="">Nos Plans</Link>
                                    </li>
                                                                                                                                                                                            <li>
                                        <Link href="contact" className="">Contact</Link>
                                    </li>
                                                                                    </ul>
                    </nav>
                </div>
                <div className="header-right style-one">
                    <div className="header-action">
                        <div className="header-btn-wrap d-none d-sm-block">
                                                                                        <div className="btn-inner d-none d-sm-block">
                                    <Link className="site-btn warning-btn btn-xs" href="/login"><i className="icon-user-add"></i>Login/Register</Link>
                                </div>
                                                    </div>
                        <div className="header-hamburger ml-20 d-xl-none">
                            <div className="sidebar-toggle">
                                <Link className="toggle-bar-icon" href="javascript:void(0)">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
    )
}