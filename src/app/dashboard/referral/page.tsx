import { ReferralBanner } from "@/components/referral-banner";
import { ReferralTree } from "@/components/referral-tree";
import { ReferralHeader } from "@/components/referralHeader";
import { ReferredFriends } from "@/components/referred-friends";


export default function Page(){
    return(
        <>
            <ReferralHeader />
            <div className="referral-area">
                <div className="row gy-30">
                    <ReferralBanner />
                    <div className="col-xxl-12">
                        <ReferredFriends />
                    </div>
                </div>
            </div>
        </>
    )
}