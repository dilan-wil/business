"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/functions/firebase";
// import { IncomeType } from "@/lib/definitions";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userInfo: any;
  setUserInfo: (userInfo: any) => void;
  transactions: any;
  setTransactions: (userTransactions: any) => void;
  referrals: any;
  setReferrals: (referrals: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<any | null>(null);  // Initialize totalIncome
  const [transactions, setTransactions] = useState<any | null>([]);  // Initialize totalIncome
  const [referrals, setReferrals] = useState<any | null>(null);  // Initialize totalIncome

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, userInfo, transactions, referrals, setUserInfo, setTransactions, setReferrals }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
