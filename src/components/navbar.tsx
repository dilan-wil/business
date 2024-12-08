

export function Navbar({ opened, setOpened, userInfo }: { opened: boolean, setOpened: (value: boolean) => void, userInfo: any }) {
    return (
        <>
            <div className={`page-header ${opened ? '' : 'close_icon'}`}>
                <div className="dashboard-header">
                    <button onClick={() => setOpened(!opened)} className="toggle-sidebar"> <span className="bar-icon">
                        <span></span> <span></span><span></span> </span>
                    </button>
                    <div className="header-right-content">
                        <div className="user-action">
                        </div>
                        <div className="user-profile">
                            <div className="user-profile-drop">
                                <div className="dropdown">
                                    <button className="user-head-drop-btn dropdown-toggle" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://paytimecash.9r3.site/assets/frontend/images/user.jpg" alt="Nuadje Dilan" />
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="user-profile-info">
                                            <div className="thumb">
                                                <img src="https://paytimecash.9r3.site/assets/frontend/images/user.jpg" alt="Nuadje Dilan" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{userInfo.first_name} {userInfo.last_name}</h4>
                                            </div>
                                        </div>
                                        <div className="info-list">
                                            <ul>
                                                <li>
                                                    <div className="content">
                                                        <div className="icon"> <i className="icon-profile-circle"></i> </div>
                                                        <div className="info"> <a href="https://paytimecash.9r3.site/user/settings">Profile Settings</a> </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="content">
                                                        <div className="icon"> <i className="icon-lock"></i> </div>
                                                        <div className="info"> <a href="https://paytimecash.9r3.site/user/change-password">Change Password</a> </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="user-logout">
                                            <button type="submit" className="dropdown-item" form="logout-form"><i className="fas fa-arrow-right mt-1"></i><span>Logout</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}