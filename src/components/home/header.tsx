'use client'
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "../context/auth-context"

export function Header() {
    const [opened, setOpened] = useState(false)
    const { user } = useAuth()
    return (
        <>
            <div className="fix">
                <div className={`offcanvas-area ${opened ? 'info-open' : ''}`}>
                    <div className="offcanva-wrapper">
                        <div className="offcanvas-content">
                            <div className="offcanvas-top d-flex justify-content-between align-items-center">
                                <div className="offcanvas-logo">
                                    <Link href="/">
                                        <img src="assets/logo.png" alt="logo" />
                                    </Link>
                                </div>
                                <div onClick={() => setOpened(false)} className="offcanvas-close">
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
                            {user
                            ? <Link className="gradient-btn" href="/dashboard">
                                <span><i data-lucide="circle-user-round"></i></span>
                                Aller au pannel
                            </Link>
                            :   <>
                                    <Link className="gradient-btn" href="/login">
                                        <span><i data-lucide="circle-user-round"></i></span>
                                        Se connecter
                                    </Link>
                                    <Link className="td-primary-btn" href="/register">
                                        <span><i data-lucide="user-round-plus"></i></span>
                                        S'enregistrer
                                    </Link>
                                </>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-overlay"></div>
            <div className="offcanvas-overlay-white"></div>
            <header>
                <div className="header-area header-transparent header-style-one" id="header-sticky">
                    <div className="container">
                        <div className="header-inner">
                            <div className="header-logo">
                                <Link className="logo-white" href="index.html"><img src="assets/logo.png" alt="Logo" /></Link>
                                <Link className="logo-black" href="index.html"><img src="assets/logo.png" alt="Logo" /></Link>
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
                                            <Link className="site-btn warning-btn btn-xs" href="/login"><i className="icon-user-add"></i>Connexion</Link>
                                        </div>
                                    </div>
                                    <div className="header-hamburger ml-20 d-xl-none">
                                        <div className="sidebar-toggle">
                                            <a onClick={() => setOpened(!opened)} className="toggle-bar-icon" href="javascript:void(0)">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}