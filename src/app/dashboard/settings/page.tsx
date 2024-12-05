

export default function Page(){
    return(
        <div className="pofile-setting-area">
        <div className="ads-step">
    <div className="ads-step-inner">
        <a className="step-btn is-active" href="https://paytimecash.9r3.site/user/settings">Paramètres</a>
        <a className="step-btn " href="https://paytimecash.9r3.site/user/change-password">Changer de mot de passe</a>
            </div>
</div>        <div className="row gy-30">
            <div className="col-xxl-12">
                <div className="site-card">
                    <div className="site-card-header">
                        <h3 className="site-card-title">Paramètres Profile</h3>
                    </div>
                    <form action="https://paytimecash.9r3.site/user/settings/profile-update" method="POST" >
                        <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />                        <div className="pofile-setting-wrapper">
                            <div className="profile-info-content">
                                <div className="thumb">
                                                                        <img id="profileImage" src="https://paytimecash.9r3.site/assets/frontend/images/user.jpg" alt="Profile Image" width="125" height="125" />
                                                                    </div>
                                <div className="content">
                                    <div className="profile-upload-img">
                                        
                                        <label  className="upload-label">Changer de photo de profile</label>
                                        
                                        <input type="file" name="avatar" id="imageInput" accept="image/*" style={{display: "none"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="profile-information">
                                <h4 className="title">Information Personelle</h4>
                                <div className="row gy-20">
                                    <div className="col-xxl-6 col-md-6">
                                        <div className="single-input">
                                            <label className="input-label" >Prénom</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="first_name" value="Nuadje" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Nom</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="last_name" value="Dilan" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Nom d'utilisateur</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="username" value="ndilanwil" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Année de naissance</label>
                                            <div className="input-field disabled">
                                                <input type="date" value="" name="date_of_birth"/>
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Zip Code</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="zip_code" value="" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Adresse</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="address" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-md-6">
                                        <div className="single-input">
                                            <label className="input-label" >Adresse mail</label>
                                            <div className="input-field disabled">
                                                <input type="email" className="box-input" name="email" value="nuadjedilan@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Numero de Téléphone</label>
                                            <div className="input-field">
                                                <input type="tel" className="box-input" name="phone" value="+237693522424" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Pays</label>
                                            <div className="input-field disabled">
                                                <input type="text" className="box-input" name="country" value="Cameroon" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Ville</label>
                                            <div className="input-field">
                                                <input type="text" className="box-input" name="city" value="" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <label className="input-label" >Date Rejoint</label>
                                            <div className="input-field disabled">
                                                <input type="text" className="box-input" placeholder="22 Nov 2024 10:54 PM" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="input-btn-wrap">
                                            <button className="input-btn btn-primary" type="submit"><span>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.2"></circle>
                                                        <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>Sauvegarder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                        <div className="col-xxl-12">
                <div className="site-card">
                    <div className="site-card-header">
                        <h3 className="site-card-title">Fermer votre compte </h3>
                    </div>
                    <div className="account-close-content">
                        <p className="description">
                            Cliquez sur "Fermer mon compte" si vous voulez supprimer votre compte</p>
                        <div className="attention">
                            <div className="icon">
                                <span><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.57465 2.21635L1.51632 13.9997C1.37079 14.2517 1.29379 14.5374 1.29298 14.8284C1.29216 15.1195 1.36756 15.4056 1.51167 15.6585C1.65579 15.9113 1.86359 16.122 2.11441 16.2696C2.36523 16.4171 2.65032 16.4965 2.94132 16.4997H17.058C17.349 16.4965 17.6341 16.4171 17.8849 16.2696C18.1357 16.122 18.3435 15.9113 18.4876 15.6585C18.6317 15.4056 18.7071 15.1195 18.7063 14.8284C18.7055 14.5374 18.6285 14.2517 18.483 13.9997L11.4247 2.21635C11.2761 1.97144 11.0669 1.76895 10.8173 1.62842C10.5677 1.48789 10.2861 1.41406 9.99965 1.41406C9.71321 1.41406 9.43159 1.48789 9.18199 1.62842C8.93238 1.76895 8.72321 1.97144 8.57465 2.21635Z" stroke="#FF8112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M10 6.5V9.83333" stroke="#FF8112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M10 13.1665H10.01" stroke="#FF8112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                            <p className="attention-text">
                                Une fois ce compte supprimé vous ne pouvez pas le recupérer sauf si vous contactez le service client
                            </p>
                        </div>
                        <button type="button" className="input-btn btn-danger disable" data-bs-toggle="modal" data-bs-target="#profileDelete"><i className="icon-close-circle"></i>
                            Fermer mon compte
                        </button>
                    </div>
                </div>

                <div className="modal fade" id="profileDelete"  aria-labelledby="profileDeleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog profile-delete-modal modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body popup-body">
                                <button type="button" className="modal-btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="icon-close-circle"></i></button>
                                <div className="profile-modal-wrapper text-center">
                                    <div className="close-content" data-background="https://paytimecash.9r3.site/assets/frontend/default/images/bg/close-bg.png" style={{backgroundImage: `url("https://paytimecash.9r3.site/assets/frontend/default/images/bg/close-bg.png")`}}>
                                        <span className="close">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2L2 18" stroke="#EE2D42" strokeWidth="3" strokeLinecap="round"></path>
                                                <path d="M18 18L2 2" stroke="#EE2D42" strokeWidth="3" strokeLinecap="round"></path>
                                            </svg>
                                        </span>
                                        <h3>Etes vous sure de vouloir supprimer votre compte</h3>
                                    </div>
                                    <div className="bottom-content">
                                        <form action="https://paytimecash.9r3.site/user/settings/close-account" method="post">
                                            <input type="hidden" name="_token" value="yiCHRJxHZDOuoWwuE6UPHG0yf2pESoyufgPZVGPr" />                                            <p className="description">Il sera supprimé pour de bon.</p>
                                            <div className="btn-wrap justify-content-center">
                                                <button type="submit" className="site-btn danger-btn">
                                                    <span>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.2"></circle>
                                                                <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>Oui, fermer
                                                </button>
                                                <button type="button" className="site-btn danger-btn disable" data-bs-dismiss="modal" aria-label="Close"><i className="icon-close-circle"></i>Annuler
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}