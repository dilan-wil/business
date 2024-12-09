'use client'
import { TransactionHistory } from "@/components/transactions-history"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/context/auth-context"
import { useEffect } from "react"

export default function Page(){
    const router = useRouter()
    const { user, userInfo, transactions, referrals } = useAuth()

    useEffect(() => {
        if(userInfo && transactions && referrals){
            console.log(userInfo)
            console.log(transactions)
        }
    }, [userInfo, transactions])


    return(
        <>
            <div className="row gy-30">
                <div className="col-xxl-12">
                    <div className="dashboard-card">
                                    <div className="user-profile">
                                        <span className="info-title">Solde</span>
                                        <h3 className="number">XAF {userInfo?.balance ?? 0}</h3>
                                        <div className="plan-badge-inner">
                                            <div className="plan-badge">
                                                <span>
                                                    <svg width="14" height="14"
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g
                                                            clipPath="url(#clip0_41_1631)">
                                                            <path
                                                                d="M5.07855 6.41783L3.8985 5.73716C2.37866 5.05499 1.902 3.57277 1.75648 2.5894C1.74841 2.53496 1.77329 2.4966 1.78888 2.47858C1.80474 2.46018 1.83982 2.42936 1.89639 2.42936H2.48754L2.79341 2.18327L2.67339 1.82867L2.3902 1.58258H1.89639C1.60866 1.58258 1.33579 1.70751 1.1478 1.92539C0.960336 2.14264 0.876883 2.42985 0.918828 2.71341C1.02364 3.42156 1.29743 4.44946 2.00664 5.32485C2.7537 6.24696 3.79512 6.78071 5.10874 6.91669L5.38332 6.78864L5.07855 6.41783Z"
                                                                fill="#FFE27A"></path>
                                                            <path
                                                                d="M2.39062 1.58258C2.40482 1.78823 2.43284 2.083 2.48797 2.42936H3.03993L3.21668 2.00597L2.91992 1.58258H2.39062Z"
                                                                fill="#F9CF58"></path>
                                                            <path
                                                                d="M5.02514 6.05259C4.59699 5.99263 4.22391 5.88304 3.89844 5.73694C4.32186 6.18808 4.7663 6.45118 5.10859 6.9163C5.33125 6.93935 5.56148 6.95136 5.79968 6.95152L5.88272 6.47667L5.02514 6.05259Z"
                                                                fill="#F9CF58"></path>
                                                            <path
                                                                d="M8.92196 6.41777L10.102 5.7371C11.6219 5.05493 12.0985 3.57271 12.244 2.58934C12.2521 2.5349 12.2272 2.49654 12.2117 2.47852C12.1958 2.46012 12.1607 2.4293 12.1041 2.4293H11.513L11.2071 2.18321L11.3271 1.82861L11.6103 1.58252H12.1041C12.3919 1.58252 12.6647 1.70745 12.8527 1.92533C13.0402 2.14257 13.1236 2.42979 13.0817 2.71335C12.9769 3.4215 12.7031 4.4494 11.9939 5.32478C11.2468 6.2469 10.2054 6.78065 8.89177 6.91663L8.61719 6.78858L8.92196 6.41777Z"
                                                                fill="#FFE27A"></path>
                                                            <path
                                                                d="M11.6093 1.58252C11.5951 1.78817 11.567 2.08294 11.5119 2.4293H10.96L10.7832 2.00591L11.0799 1.58252H11.6093Z"
                                                                fill="#F9CF58"></path>
                                                            <path
                                                                d="M8.97477 6.05253C9.40292 5.99257 9.776 5.88298 10.1015 5.73688C9.67805 6.18802 9.2336 6.45112 8.89132 6.91624C8.66866 6.93929 8.43842 6.9513 8.20023 6.95146L8.11719 6.47661L8.97477 6.05253Z"
                                                                fill="#F9CF58"></path>
                                                            <path
                                                                d="M10.8709 1.26221L11.0867 1.52419C11.0093 2.37275 10.7346 4.10235 9.76151 5.29202C8.91976 6.3211 7.92404 6.36504 7.79941 8.66758L7.5403 8.92956H6.46049L6.20138 8.66758C6.07675 6.36504 5.08105 6.3211 4.23928 5.29202C3.26617 4.10235 2.99147 2.37275 2.91406 1.52419L3.12989 1.26221H10.8709Z"
                                                                fill="#FFBA57"></path>
                                                            <path
                                                                d="M11.0857 1.52418C11.1144 1.20976 11.116 1.01611 11.116 1.01611L6.99941 0.692688L2.88281 1.01611C2.88281 1.01611 2.88445 1.20976 2.91314 1.52418H11.0857Z"
                                                                fill="#FFAC3E"></path>
                                                            <path
                                                                d="M6.20117 8.6676C6.20976 8.82598 6.21427 8.99485 6.21427 9.17568L7.00027 9.66786L7.78626 9.17568C7.78626 8.99485 7.7908 8.82598 7.79936 8.6676H6.20117Z"
                                                                fill="#FFAC3E"></path>
                                                            <path
                                                                d="M11.3347 0.770027H2.66455C2.38395 0.770027 2.18128 0.328562 2.22459 0.253777C2.31247 0.102074 2.47659 0 2.66455 0H11.3347C11.5227 0 11.6868 0.102074 11.7747 0.253777C11.818 0.328562 11.6153 0.770027 11.3347 0.770027Z"
                                                                fill="#FFE27A"></path>
                                                            <path
                                                                d="M11.3345 0.508174H2.66432C2.47636 0.508174 2.31266 0.405854 2.22477 0.25415C2.18146 0.328936 2.15625 0.415533 2.15625 0.508174C2.15625 0.788775 2.38372 1.01625 2.66432 1.01625H11.3345C11.6151 1.01625 11.8426 0.788775 11.8426 0.508174C11.8426 0.415533 11.8173 0.328936 11.774 0.25415C11.6861 0.405854 11.5224 0.508174 11.3345 0.508174Z"
                                                                fill="#F9CF58"></path>
                                                            <path
                                                                d="M8.92377 9.17572H5.07688C4.64677 9.17572 4.28285 9.49365 4.2251 9.91985L3.88672 12.4172L4.06396 12.6791H9.93666L10.1139 12.4172L9.77553 9.91985C9.7178 9.49362 9.35388 9.17572 8.92377 9.17572Z"
                                                                fill="#E0E0E0"></path>
                                                            <path
                                                                d="M3.88721 12.4171L3.81836 12.9252L7.00082 13.291L10.1833 12.9252L10.1144 12.4171H3.88721Z"
                                                                fill="#CECECE"></path>
                                                            <path
                                                                d="M10.5722 13.7539H3.42773L3.18164 13.4919V13.4897C3.18164 13.1779 3.43438 12.9252 3.74615 12.9252H10.2537C10.5655 12.9252 10.8183 13.1779 10.8183 13.4897V13.4919L10.5722 13.7539Z"
                                                                fill="#5A5A5A"></path>
                                                            <path
                                                                d="M3.32276 14H10.6771C10.7551 14 10.8183 13.9368 10.8183 13.8589V13.4919H3.18164V13.8589C3.18164 13.9368 3.24483 14 3.32276 14Z"
                                                                fill="#4C4C4C"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath
                                                                id="clip0_41_1631">
                                                                <rect width="14"
                                                                    height="14"
                                                                    fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                {/* {userInfo} */}
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <svg width="30" height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.8398 17.9123C10.8398 19.5248 12.0773 20.8248 13.6148 20.8248H16.7523C18.0898 20.8248 19.1773 19.6873 19.1773 18.2873C19.1773 16.7623 18.5148 16.2248 17.5273 15.8748L12.4898 14.1248C11.5023 13.7748 10.8398 13.2373 10.8398 11.7123C10.8398 10.3123 11.9273 9.1748 13.2648 9.1748H16.4023C17.9398 9.1748 19.1773 10.4748 19.1773 12.0873"
                                                        stroke="white"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M15 7.5V22.5"
                                                        stroke="white"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                                                        stroke="white"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="title">Partagez votre lien d'affiliation</h3>
                                    <p className="description">
                                        Vous pouvez copiez votre lien et l'envoyer à vos amis<br/>ou directement envoyer via le bouton "partager"
                                    </p>
                                    <div>

                                        <div className="bottom-content">
                                            <div className="btn-wrap">
                                                <button
                                                    className="site-btn primary-btn disable"
                                                    id="copyLinkButton"
                                                    onClick={() => router.push("/dashboard/referral")}><i
                                                        className="icon-copy"></i>Copiez le lien</button>
                                                <button
                                                    className="site-btn primary-btn disable"
                                                    id="shareLinkButton"
                                                    onClick={() => router.push("/dashboard/referral")}>
                                                    <span>
                                                        <svg width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15 6.66663C16.3807 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 16.3807 1.66663 15 1.66663C13.6193 1.66663 12.5 2.78591 12.5 4.16663C12.5 5.54734 13.6193 6.66663 15 6.66663Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"></path>
                                                            <path
                                                                d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"></path>
                                                            <path
                                                                d="M15 18.3334C16.3807 18.3334 17.5 17.2141 17.5 15.8334C17.5 14.4527 16.3807 13.3334 15 13.3334C13.6193 13.3334 12.5 14.4527 12.5 15.8334C12.5 17.2141 13.6193 18.3334 15 18.3334Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"></path>
                                                            <path
                                                                d="M7.16016 11.2583L12.8518 14.575"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"></path>
                                                            <path
                                                                d="M12.8435 5.42505L7.16016 8.74172"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </button></div>

                                        </div>

                                    </div>
                                    <div className="single-card">
                                        <span className="info-title">Tâches effectués</span>
                                        <h3 className="number">{userInfo?.tasksDone ? userInfo?.tasksDone : 0}</h3>
                                        <p className="description">Nombre de Tâches que vous avez effectués</p>
                                        <div className="btn-inner">
                                            <Link className="round-btn"
                                                href="https://paytimecash.9r3.site/user/earnings"><span><i
                                                        className="fa-sharp fa-regular fa-arrow-up-long"></i></span></Link>
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <svg width="30" height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M22.5 23.575H21.55C20.55 23.575 19.6 23.9625 18.9 24.6625L16.7625 26.775C15.7875 27.7375 14.2 27.7375 13.225 26.775L11.0875 24.6625C10.3875 23.9625 9.425 23.575 8.4375 23.575H7.5C5.425 23.575 3.75 21.9125 3.75 19.8625V6.2125C3.75 4.1625 5.425 2.5 7.5 2.5H22.5C24.575 2.5 26.25 4.1625 26.25 6.2125V19.85C26.25 21.9 24.575 23.575 22.5 23.575Z"
                                                        stroke="#02BAD8"
                                                        strokeWidth="2.25"
                                                        strokeMiterlimit="10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M15.0883 11.1875C15.0383 11.1875 14.9633 11.1875 14.9008 11.1875C13.5883 11.1375 12.5508 10.075 12.5508 8.75C12.5508 7.4 13.6383 6.3125 14.9883 6.3125C16.3383 6.3125 17.4258 7.4125 17.4258 8.75C17.4383 10.075 16.4008 11.15 15.0883 11.1875Z"
                                                        stroke="#02BAD8"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M11.5633 14.95C9.90078 16.0625 9.90078 17.875 11.5633 18.9875C13.4508 20.25 16.5508 20.25 18.4383 18.9875C20.1008 17.875 20.1008 16.0625 18.4383 14.95C16.5508 13.7 13.4633 13.7 11.5633 14.95Z"
                                                        stroke="#02BAD8"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-card">
                                        <span className="info-title">Dépot</span>
                                        <h3 className="number">XAF {userInfo?.deposits ? userInfo?.deposits : 0}</h3>
                                        <p className="description">Montant total déposé</p>
                                        <div className="btn-inner">
                                            <Link className="round-btn"
                                                href="/dashboard/transactions"><span><i
                                                        className="fa-sharp fa-regular fa-arrow-up-long"></i></span></Link>
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <svg width="30" height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.875 17.1875C11.875 18.4 12.8125 19.375 13.9625 19.375H16.3125C17.3125 19.375 18.125 18.525 18.125 17.4625C18.125 16.325 17.625 15.9125 16.8875 15.65L13.125 14.3375C12.3875 14.075 11.8875 13.675 11.8875 12.525C11.8875 11.475 12.7 10.6125 13.7 10.6125H16.05C17.2 10.6125 18.1375 11.5875 18.1375 12.8"
                                                        stroke="#F23450"
                                                        strokeWidth="1.875"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M15 9.375V20.625"
                                                        stroke="#F23450"
                                                        strokeWidth="1.875"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M27.5 15C27.5 21.9 21.9 27.5 15 27.5C8.1 27.5 2.5 21.9 2.5 15C2.5 8.1 8.1 2.5 15 2.5"
                                                        stroke="#F23450"
                                                        strokeWidth="1.875"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M21.25 3.75V8.75H26.25"
                                                        stroke="#F23450"
                                                        strokeWidth="1.875"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M27.5 2.5L21.25 8.75"
                                                        stroke="#F23450"
                                                        strokeWidth="1.875"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-card">
                                        <span className="info-title">Gains</span>
                                        <h3 className="number">XAF {userInfo?.earned ? userInfo?.earned : 0}</h3>
                                        <p className="description">Montant total gagné</p>

                                        <div className="icon">
                                            <span>
                                                <svg width="28" height="28"
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.83984 16.9123C9.83984 18.5248 11.0773 19.8248 12.6148 19.8248H15.7523C17.0898 19.8248 18.1773 18.6873 18.1773 17.2873C18.1773 15.7623 17.5148 15.2248 16.5273 14.8748L11.4898 13.1248C10.5023 12.7748 9.83984 12.2373 9.83984 10.7123C9.83984 9.3123 10.9273 8.1748 12.2648 8.1748H15.4023C16.9398 8.1748 18.1773 9.4748 18.1773 11.0873"
                                                        stroke="#6596F4"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M14 6.5V21.5"
                                                        stroke="#6596F4"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M17.75 26.5H10.25C4 26.5 1.5 24 1.5 17.75V10.25C1.5 4 4 1.5 10.25 1.5H17.75C24 1.5 26.5 4 26.5 10.25V17.75C26.5 24 24 26.5 17.75 26.5Z"
                                                        stroke="#6596F4"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-card">
                                        <span className="info-title">Referral</span>
                                        <h3 className="number">{referrals ? referrals.length : 0}</h3>
                                        <p className="description">Nombre de personnes parrainés</p>
                                        <div className="btn-inner">
                                            <Link className="round-btn"
                                                href="/dashboard/referral"><span><i
                                                        className="fa-sharp fa-regular fa-arrow-up-long"></i></span></Link>
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <svg width="30" height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.4512 13.5875C11.3262 13.575 11.1762 13.575 11.0387 13.5875C8.06367 13.4875 5.70117 11.05 5.70117 8.05C5.70117 4.9875 8.17617 2.5 11.2512 2.5C14.3137 2.5 16.8012 4.9875 16.8012 8.05C16.7887 11.05 14.4262 13.4875 11.4512 13.5875Z"
                                                        stroke="#800AF6"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M20.5121 5C22.9371 5 24.8871 6.9625 24.8871 9.375C24.8871 11.7375 23.0121 13.6625 20.6746 13.75C20.5746 13.7375 20.4621 13.7375 20.3496 13.75"
                                                        stroke="#800AF6"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M5.20039 18.2C2.17539 20.225 2.17539 23.525 5.20039 25.5375C8.63789 27.8375 14.2754 27.8375 17.7129 25.5375C20.7379 23.5125 20.7379 20.2125 17.7129 18.2C14.2879 15.9125 8.65039 15.9125 5.20039 18.2Z"
                                                        stroke="#800AF6"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M22.9258 25C23.8258 24.8125 24.6758 24.45 25.3758 23.9125C27.3258 22.45 27.3258 20.0375 25.3758 18.575C24.6883 18.05 23.8508 17.7 22.9633 17.5"
                                                        stroke="#800AF6"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-card">
                                        <span className="info-title">Withdraw</span>
                                        <h3 className="number">XAF {userInfo?.withdrawals ? userInfo?.withdrawals : 0}</h3>
                                        <p className="description">Montant totale de retrait</p>
                                        <div className="btn-inner">
                                            <Link className="round-btn"
                                                href="/dashboard/transactions"><span><i
                                                        className="fa-sharp fa-regular fa-arrow-up-long"></i></span></Link>
                                        </div>
                                        <div className="icon">
                                            <span>
                                                <svg width="30" height="30"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.875 17.1875C11.875 18.4 12.8125 19.375 13.9625 19.375H16.3125C17.3125 19.375 18.125 18.525 18.125 17.4625C18.125 16.325 17.625 15.9125 16.8875 15.65L13.125 14.3375C12.3875 14.075 11.8875 13.675 11.8875 12.525C11.8875 11.475 12.7 10.6125 13.7 10.6125H16.05C17.2 10.6125 18.1375 11.5875 18.1375 12.8"
                                                        stroke="#FFAC3E"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M15 9.375V20.625"
                                                        stroke="#FFAC3E"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M27.5 15C27.5 21.9 21.9 27.5 15 27.5C8.1 27.5 2.5 21.9 2.5 15C2.5 8.1 8.1 2.5 15 2.5"
                                                        stroke="#FFAC3E"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path d="M27.5 7.5V2.5H22.5"
                                                        stroke="#FFAC3E"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                    <path
                                                        d="M21.25 8.75L27.5 2.5"
                                                        stroke="#FFAC3E"
                                                        strokeWidth="2.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <TransactionHistory datas={transactions} number={5}/>
                <div className="whatsapp-widget right-0" onClick={() => window.open('https://wa.me/+33753601846', '_blank')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Telegram" />
                    Groupe Whatsapp
                </div>
                <div className="whatsapp-widget" onClick={() => window.open('https://chat.whatsapp.com/LnVFtbUjGx6EcKa4kAda1o', '_blank')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
                    Service client
                </div>
                </div>
            </div>
        </>
    )
}