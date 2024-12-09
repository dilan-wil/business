'use client'
import { getACollection } from "@/functions/get-a-collection";
import { useEffect, useState } from "react";
import Link from "next/link";

type User = {
  id: string;
  name: string;
  balance: number;
  plans: { id: string; name: string; price: number; daily: boolean; purchaseDate: string; times: number; lastClicked: string; }[];
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getACollection("users");
        const formattedUsers = allUsers.map((user: any) => ({
          id: user.id,
          name: user.first_name,
          balance: user.balance,
          plans: user.plans,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  if (users.length === 0) {
    return <p>Loading users...</p>;
  }

  return (
    <section className="admin-section section-space">
      <div className="container">
        <div className="header">
          <Link href="/admin/deposits" className="nav-link">Deposits</Link>
          <Link href="/admin/withdrawals" className="nav-link">Withdrawals</Link>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="section-title-wrapper text-center section-title-space">
              <h2 className="section-title mb-20">Admin - Manage Users</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-30">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Balance</th>
                  <th>Plans</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.balance}</td>
                    {/* <td>
                      {user.plans.map((plan, i) => (
                        <div key={i}>
                          <strong>Plan Name:</strong> {plan.name}<br />
                          <strong>Price:</strong> {plan.price}<br />
                          <strong>Purchase Date:</strong> {new Date(plan.purchaseDate).toLocaleDateString()}<br />
                          <strong>Times:</strong> {plan.times}<br />
                          <strong>Last Clicked:</strong> {new Date(plan.lastClicked).toLocaleString()}
                        </div>
                      ))}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
