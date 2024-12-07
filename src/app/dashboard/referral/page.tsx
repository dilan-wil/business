'use client'
import { ReferralBanner } from "@/components/referral-banner";
import { ReferralTree } from "@/components/referral-tree";
import { ReferralHeader } from "@/components/referralHeader";
import { ReferredFriends } from "@/components/referred-friends";
import { useAuth } from "@/components/context/auth-context";

export default function Page(){
    const { user } = useAuth()

    return(
        <>
            <ReferralHeader userId={user ? user?.uid : ""}/>
            <div className="referral-area">
                <div className="row gy-30">
                    <ReferralBanner />
                    <div className="col-xxl-12">
                        <ReferredFriends userId={user ? user?.uid : ""}/>
                    </div>
                </div>
            </div>
        </>
    )
}