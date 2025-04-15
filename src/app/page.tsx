"use client"

import CompanyReferrals from "@/components/landing/CompanyReferrals";
import CustomerStories from "@/components/landing/CustomerStories";
import DisclaimerPopup from "@/components/landing/DisclaimerPopup";
import GetStartedFeautureList from "@/components/landing/GetStartedFeatureList";
import IntroFeatureList from "@/components/landing/IntroFeatureList";
import QuickStart from "@/components/landing/QuickStart";
import TeamPlatform from "@/components/landing/TeamPlatform";
import WelcomeMessage from "@/components/landing/WelcomeMessage";
import { useState } from "react";

export default function Home() {
    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true)

    return (
        <div className="flex flex-col items-center justify-center gap-30 relative">
            <div className="flex flex-col gap-30 max-w-md md:max-w-3xl xl:max-w-7xl">
                <WelcomeMessage />

                <IntroFeatureList />

                <CompanyReferrals />

                <GetStartedFeautureList />

                <CustomerStories />

                <TeamPlatform />

                <QuickStart />
            </div>

            {isDisclaimerVisible && (
                <DisclaimerPopup onDismiss={() => setIsDisclaimerVisible(false)} />
            )}
        </div>
    );
}
