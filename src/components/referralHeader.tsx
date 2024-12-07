'use client'
import { useState } from 'react';

export function ReferralHeader({ userId } : {userId: string} ) {
    const [copied, setCopied] = useState(false);

    const referralLink = `https://bitcoin-works.vercel.app/register?invite=${userId}`;

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy the referral link: ', err);
        }
    };

    const shareLink = async () => {
        try {
            await navigator.share({
                title: 'Invite to Bitcoin Works',
                url: referralLink,
            });
        } catch (err) {
            console.error('Failed to share the referral link: ', err);
        }
    };

    return (
        <div className="col-xxl-12">
            <div className="referral-share-wrapper">
                <div className="referral-share-item">
                    <h3 className="title">Partagez votre lien</h3>
                    <p className="description">
                        Vous pouvez aussi partager votre lien en le copiant et l'envoyer à vos amis.
                    </p>
                    <div className="input-field">
                        <input
                            type="text"
                            className="box-input"
                            id="refLink"
                            value={referralLink}
                            readOnly // Prevent user from editing the link
                        />
                    </div>
                    <div className="bottom-content">
                        <div className="btn-wrap">
                            <button
                                className="site-btn primary-btn"
                                id="copyLinkButton"
                                onClick={copyLink}
                            >
                                <i className="icon-copy"></i>
                                {copied ? 'Lien Copié!' : 'Copier le Lien'}
                            </button>
                            <button
                                className="site-btn primary-btn"
                                id="shareLinkButton"
                                onClick={shareLink}
                            >
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        {/* SVG path here */}
                                    </svg>
                                </span>
                                Partager
                            </button>
                        </div>
                        <div className="client-meta">
                            <div className="content">
                                {/* <p>14 personnes se sont inscrit avec votre lien</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
