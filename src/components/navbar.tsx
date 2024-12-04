

export function Navbar({opened, setOpened} : {opened: boolean, setOpened: (value: boolean) => void }) {
    return(
        <>
            <div className={`page-header ${opened ? '' : 'close_icon'}`}>
    <div className="dashboard-header">
        <button onClick={() => setOpened(!opened)}  className="toggle-sidebar"> <span className="bar-icon">
            <span></span> <span></span><span></span> </span>
        </button>
        <div className="header-right-content">
                                    <div className="user-action">
                <ul>
                    
                    <li>
                        <button className="notification-box" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false"> <span className="icon"><i className="icon-notification"></i></span> <span className="number-badge">1</span> </button>
                        <div className="dropdown-menu dropdown-menu-end notification-popup">
                            <div className="header-notifications">
                                <h3 className="title">Notifications (1)</h3>
                                <div className="notifications-item-wrapper">
                                                                        <a href="https://paytimecash.9r3.site/user/notification-read/78491" className="notifications-item">
                                        <div className="notification-list">
                                            <div className="icon"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="wallet" className="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Withdraw request is
Rejected.</h4>
                                                <div className="meta"> <span>1 day ago</span> </div>
                                            </div>
                                        </div>
                                                                                <div className="notifications-right-content">
                                            <div className="notifications-status"> <span className="status-icon"></span> </div>
                                        </div>
                                                                            </a>
                                                                        <a href="https://paytimecash.9r3.site/user/notification-read/38746" className="notifications-item">
                                        <div className="notification-list">
                                            <div className="icon"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="wallet" className="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Withdraw request is
Rejected.</h4>
                                                <div className="meta"> <span>4 days ago</span> </div>
                                            </div>
                                        </div>
                                                                            </a>
                                                                    </div>
                                <div className="btn-wrap"> 
                                    <a className="site-btn primary-btn btn-xxs border-radius-6" href="https://paytimecash.9r3.site/user/notification/all">
                                        <i className="icon-arrow-right-2"></i> See All
                                    </a>
                                    <a className="site-btn danger-btn disable btn-xxs border-radius-6" href="https://paytimecash.9r3.site/user/notification-read/0">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="#F34141" fillOpacity="0.1"></circle>
                                                    <path d="M14 7L8.5 12.5L6 10" stroke="#F34141" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span> 
                                        Mark as All Read
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                                        <li>
                        <div className="notification-box">
                            <div className="color-switcher"> 
                                <span className="light-icon">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.5C8.00544 2.49456 7.4467 3.84348 7.4467 5.25C7.4467 6.65652 8.00544 8.00544 9 9C9.99457 9.99456 11.3435 10.5533 12.75 10.5533C14.1565 10.5533 15.5054 9.99456 16.5 9C16.5 10.4834 16.0601 11.9334 15.236 13.1668C14.4119 14.4001 13.2406 15.3614 11.8701 15.9291C10.4997 16.4968 8.99168 16.6453 7.53683 16.3559C6.08197 16.0665 4.7456 15.3522 3.6967 14.3033C2.64781 13.2544 1.9335 11.918 1.64411 10.4632C1.35472 9.00832 1.50325 7.50032 2.07091 6.12987C2.63856 4.75943 3.59986 3.58809 4.83323 2.76398C6.0666 1.93987 7.51664 1.5 9 1.5Z" stroke="#5C5958" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span> 
                                <span className="dark-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0007 15.4168C12.9922 15.4168 15.4173 12.9917 15.4173 10.0002C15.4173 7.00862 12.9922 4.5835 10.0007 4.5835C7.00911 4.5835 4.58398 7.00862 4.58398 10.0002C4.58398 12.9917 7.00911 15.4168 10.0007 15.4168Z" stroke="#B4B5BA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M15.9493 15.9498L15.841 15.8415M15.841 4.15817L15.9493 4.04984L15.841 4.15817ZM4.04935 15.9498L4.15768 15.8415L4.04935 15.9498ZM9.99935 1.73317V1.6665V1.73317ZM9.99935 18.3332V18.2665V18.3332ZM1.73268 9.99984H1.66602H1.73268ZM18.3327 9.99984H18.266H18.3327ZM4.15768 4.15817L4.04935 4.04984L4.15768 4.15817Z" stroke="#B4B5BA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                </span> 
                            </div>
                        </div>
                    </li>
                </ul>
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
                                    <h4 className="title">Nuadje Dilan</h4>
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

                            <form method="POST" action="https://paytimecash.9r3.site/logout" id="logout-form">
                                <input type="hidden" name="_token" value="uNu0j5OHHIg22lextDEWkkVyD559vm4ZbJw0BF0B" />                            </form>
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