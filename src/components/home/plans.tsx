export function Plans() {
    const plans = [
        {
            name: "Minage-A",
            price: 2100,
            daily: 350,
            total: 1050,
            validity: "30 Days",
        },
        {
            name: "Minage-B",
            price: 6000,
            daily: 1000,
            total: 30000,
            validity: "30 Days",
        },
        {
            name: "Minage-C",
            price: 12000,
            daily: 2000,
            total: 60000,
            validity: "30 Days",
        },
        // Add other plans here...
    ];

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
                                <p className="description">Crypto Mining Plan</p>
                                <div className="price-value">
                                    <strong>₦{plan.price}</strong>
                                    <sub>/ {plan.validity}</sub>
                                </div>
                                <div className="price-btn">
                                    <a className="site-btn w-100" href="login.html">
                                        Subscribe Now
                                    </a>
                                </div>
                                <div className="price-list">
                                    <ul className="icon-list">
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                            </span>
                                            <p className="list-item-text">
                                                Revenue Quotidien: ₦{plan.daily}
                                            </p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                            </span>
                                            <p className="list-item-text">
                                                Revenue Total: ₦{plan.total}
                                            </p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                            </span>
                                            <p className="list-item-text">Validity: {plan.validity}</p>
                                        </li>
                                        <li>
                                            <span className="list-item-icon">
                                                {/* SVG or Icon */}
                                            </span>
                                            <p className="list-item-text">Referral Bonus: Upto 3 Levels</p>
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
