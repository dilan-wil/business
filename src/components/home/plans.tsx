import Link from "next/link";

export function Plans() {
    const plans = [
        {
            name: "Minage-A",
            price: 2100,
            daily: 350,
            total: 1050
        },
        {
            name: "Minage-B",
            price: 6000,
            daily: 1000,
            total: 30000
        },
        {
            name: "Minage-C",
            price: 12000,
            daily: 2000,
            total: 60000
        },
        {
            name: "Minage-D",
            price: 21000,
            daily: 3500,
            total: 105000
        },
        {
            name: "Minage-E",
            price: 60000,
            daily: 10000,
            total: 300000
        },
        {
            name: "Minage-F",
            price: 120000,
            daily: 20000,
            total: 600000
        },
        {
            name: "Minage-G",
            price: 240000,
            daily: 40000,
            total: 1200000
        },
        {
            name: "Minage-A",
            price: 420000,
            daily: 70000,
            total: 2100000
        },
        {
            name: "Minage-A",
            price: 780000,
            daily: 130000,
            total: 3900000
        },
    ]

    return (
        <section className="subscriptions-section section-space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper text-center section-title-space">
                            <h2 className="section-title mb-20">Choisissez votre plan</h2>
                            <p className="b1">
                                Rejoignez-nous dès aujourd'hui et découvrez par vous-même la
                                puissance du minage de crypto alimenté par l'IA !
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-30">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6"
                        >
                            <div className="pricing-item">
                                <h3 className="item-title">{plan.name}</h3>
                                <p className="description">Plan de Minage</p>
                                <div className="price-value">
                                    <strong>FCFA {plan.price}</strong>
                                    <sub>/ 30 jours</sub>
                                </div>
                                <div className="price-btn">
                                    <Link className="site-btn w-100" href="login">
                                        Commencer
                                    </Link>
                                </div>
                                <div className="price-list">
                                    <ul className="icon-list">
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 10.08V11C20.9988 13.1564 20.3005 15.2547 19.0093 16.9818C17.7182 18.709 15.9033 19.9725 13.8354 20.5839C11.7674 21.1953 9.55726 21.1219 7.53447 20.3746C5.51168 19.6273 3.78465 18.2461 2.61096 16.4371C1.43727 14.628 0.879791 12.4881 1.02168 10.3363C1.16356 8.18455 1.99721 6.13631 3.39828 4.49706C4.79935 2.85781 6.69279 1.71537 8.79619 1.24013C10.8996 0.764896 13.1003 0.982323 15.07 1.85999"
                                                        stroke="#136EF9" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M21 3L11 13.01L8 10.01" stroke="#136EF9" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <p className="list-item-text">
                                                Revenu Quotidien: XAF {plan.daily}
                                            </p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 10.08V11C20.9988 13.1564 20.3005 15.2547 19.0093 16.9818C17.7182 18.709 15.9033 19.9725 13.8354 20.5839C11.7674 21.1953 9.55726 21.1219 7.53447 20.3746C5.51168 19.6273 3.78465 18.2461 2.61096 16.4371C1.43727 14.628 0.879791 12.4881 1.02168 10.3363C1.16356 8.18455 1.99721 6.13631 3.39828 4.49706C4.79935 2.85781 6.69279 1.71537 8.79619 1.24013C10.8996 0.764896 13.1003 0.982323 15.07 1.85999"
                                                        stroke="#136EF9" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M21 3L11 13.01L8 10.01" stroke="#136EF9" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <p className="list-item-text">
                                                Revenu Total: XAF {plan.total}
                                            </p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 10.08V11C20.9988 13.1564 20.3005 15.2547 19.0093 16.9818C17.7182 18.709 15.9033 19.9725 13.8354 20.5839C11.7674 21.1953 9.55726 21.1219 7.53447 20.3746C5.51168 19.6273 3.78465 18.2461 2.61096 16.4371C1.43727 14.628 0.879791 12.4881 1.02168 10.3363C1.16356 8.18455 1.99721 6.13631 3.39828 4.49706C4.79935 2.85781 6.69279 1.71537 8.79619 1.24013C10.8996 0.764896 13.1003 0.982323 15.07 1.85999"
                                                        stroke="#136EF9" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M21 3L11 13.01L8 10.01" stroke="#136EF9" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <p className="list-item-text">Période: 30 jours</p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 10.08V11C20.9988 13.1564 20.3005 15.2547 19.0093 16.9818C17.7182 18.709 15.9033 19.9725 13.8354 20.5839C11.7674 21.1953 9.55726 21.1219 7.53447 20.3746C5.51168 19.6273 3.78465 18.2461 2.61096 16.4371C1.43727 14.628 0.879791 12.4881 1.02168 10.3363C1.16356 8.18455 1.99721 6.13631 3.39828 4.49706C4.79935 2.85781 6.69279 1.71537 8.79619 1.24013C10.8996 0.764896 13.1003 0.982323 15.07 1.85999"
                                                        stroke="#136EF9" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M21 3L11 13.01L8 10.01" stroke="#136EF9" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <p className="list-item-text">Parrainage: 3 niveaux</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
