import React, { useState } from "react";
import Link from "next/link";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { auth } from "@/functions/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface SidebarProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
  referralNumber: number;
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
  { href: '/contact', icon: 'icon-support', label: 'Support' },
  { href: '/dashboard/settings', icon: 'icon-setting-2', label: 'Paramètres' }
];

export function Sidebar({ opened, setOpened, referralNumber }: SidebarProps) {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const router = useRouter()

  const handleLogout = async () => {
    console.log("User logged out");
    await signOut(auth)
    router.push('/login')
    // Add your logout logic here (e.g., Firebase logout, redirect, etc.)
  };

  const handleLinkClick = () => {
    const isMobile = window.innerWidth < 768;
    setOpened(!isMobile);
  };

  return (
    <div className={`sidebar-wrapper ${opened ? '' : 'close_icon'} ${!opened ? 'sm:close_icon' : ''}`}>
      <div className="sidebar-inner">
        <div className="user-sidebar">
          <div className="site-logo">
            <Link href="/dashboard" className="logo">
              <img
                src="assets/logo.png"
                alt="PayTime Cash"
              />
            </Link>
            <div onClick={() => setOpened(!opened)} className="back-btn">
              <i className="fa fa-angle-left"></i>
            </div>
          </div>

          <div className="sidebar-nav">
            <nav className="user-nav">
              <ul>
                {sidebarLinks.map(({ href, icon, label, count }) => (
                  <li key={href} className={window.location.href.includes(href) ? 'active' : ''}>
                    <Link href={href} onClick={handleLinkClick}>
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
          <AlertDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
            <AlertDialogTrigger asChild>
              <button type="button" className="submit">
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
                Déconnexion
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <h2>Confirmer la déconnexion</h2>
                <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>Se déconnecter</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
