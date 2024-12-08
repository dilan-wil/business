import Link from "next/link";

interface SidebarProps {
    opened: boolean;
    setOpened: (value: boolean) => void;
    referralNumber: number
  }
  
  const sidebarLinks = [
    { href: '/dashboard', icon: 'icon-element-3', label: 'Dashboard' },
    { href: '/dashboard/plans', icon: 'icon-empty-wallet', label: 'Plans' },
    { href: '/dashboard/deposit', icon: 'icon-dollar-square', label: 'Depot' },
    { href: '/dashboard/earned', icon: 'icon-dollar-circle', label: 'Mes gains' },
    { href: '/dashboard/tasks', icon: 'icon-tag-user', label: 'Taches!' },
    { href: '/dashboard/transactions', icon: 'icon-arrange-square', label: 'Transactions' },
    { href: '/dashboard/withdraw', icon: 'icon-money-send', label: 'Retrait' },
    { href: '/dashboard/referral', icon: 'icon-profile-2user', label: 'Parrainage', count: 14 },
    { href: '/contact', icon: 'icon-support', label: 'Support'},
    { href: '/dashboard/settings', icon: 'icon-setting-2', label: 'Paramètres' }
  ];
  
  export function Sidebar({ opened, setOpened, referralNumber }: SidebarProps) {
    return (
        <div className={`sidebar-wrapper ${opened ? '' : 'close_icon'} ${!opened ? 'sm:close_icon' : ''}`}>
          <div className="sidebar-inner">
          <div className="user-sidebar">
            <div className="site-logo">
              <a href="https://paytimecash.9r3.site/dashboard" className="logo">
                <img
                  src="https://paytimecash.9r3.site/assets/global/images/Yo4YjHser8wVk1yKs5Ds.png"
                  alt="PayTime Cash"
                />
              </a>
              <div onClick={() => setOpened(!opened)} className="back-btn">
                <i className="fa fa-angle-left"></i>
              </div>
            </div>
  
            <div className="sidebar-nav">
              <nav className="user-nav">
                <ul>
                  {sidebarLinks.map(({ href, icon, label, count }) => (
                    <li key={href} className={window.location.href.includes(href) ? 'active' : ''}>
                      <Link href={href}>
                        <i className={icon}></i>
                        <span>{label}</span>
                        {count && <b className="count-number">{referralNumber}</b>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
  
          <div className="sidebar-logout">
            <button type="submit" className="submit" form="logout-form">
              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H7"
                    stroke="#F34141"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 15L19 10L14 5"
                    stroke="#F34141"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 10H7"
                    stroke="#F34141"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Log Out
            </button>
  
            <form method="POST" action="https://paytimecash.9r3.site/logout" id="logout-form">
              <input type="hidden" name="_token" value="uNu0j5OHHIg22lextDEWkkVyD559vm4ZbJw0BF0B" />
            </form>
          </div>
        </div>
      </div>
    );
  }
  