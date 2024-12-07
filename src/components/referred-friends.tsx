'use client'
import { useEffect, useState } from 'react';
import { db } from '@/functions/firebase'; // Import your Firebase config
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getADocument } from '@/functions/get-a-document';
import { getASubCollection } from '@/functions/get-a-sub-collection';

type Friend = {
    id: string;
    name: string;
    status: 'Active' | 'Inactive'; // Adjust this based on the possible statuses
  };

export function ReferredFriends({ userId } : {userId: string}) {
    const [referredFriends, setReferredFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchReferredFriends = async () => {
            try {
                const friendsData = await getASubCollection("users", userId, "referrals");
    
                // Map through each returned friend data and add the necessary fields
                const friends = friendsData.map((friend: any) => ({
                    id: friend.id,
                    name: friend.name || '', // Assuming 'name' is a field returned from the database
                    status: friend.status || 'Active', // Assuming 'status' is a field returned from the database, defaulting to 'Active'
                }));
    
                setReferredFriends(friends);
            } catch (error) {
                console.error("Error fetching referred friends: ", error);
            }
        };

        fetchReferredFriends();
    }, [userId]);

    return (
        <div className="site-card">
            <div className="site-card-header">
                <h3 className="site-card-title mb-0">Vos parainnage</h3>
            </div>
            <div className="referral-table-wraper">
                <div className="site-table referral-table table-responsive">
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Utilisateur</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {referredFriends.length > 0 ? (
                                referredFriends.map(friend => (
                                    <tr key={friend.id}>
                                        <td>
                                            <div className="referral-user">
                                                <div className="thumb">
                                                    <img
                                                        src={"https://paytimecash.9r3.site/assets/frontend/images/user.jpg"}
                                                        alt={friend.name}
                                                    />
                                                </div>
                                                <div className="content">
                                                    <p className="description">{friend.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{/* Plan details can go here */}</td>
                                        <td>
                                            <div className="type site-badge badge-primary">
                                                {friend.status}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="no-data-found">
                                        <img
                                            src="https://paytimecash.9r3.site/assets/frontend/images/not-found.png"
                                            alt="not found" /> <br />
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
