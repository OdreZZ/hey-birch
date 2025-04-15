import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";
import IntroFeatureCard from "./IntroFeatureCard";

export default function IntegrationFeatures() {
    return <div className="flex flex-col gap-6">
        <div className="text-5xl text-center font-bold">
            Work smarter by keeping <br />
            everything in one place
        </div>

        <div className="flex justify-center gap-2">
            <IntroFeatureCard
                title="Automations"
                description="Save time with automated workflows."
                image="/screenshots/screenshot1.png"
                backgroundImage="backdrop1.png"
                reverseOrder={true}
            />

            <IntroFeatureCard
                title="Reports"
                description="Dive into key KPIs and get clarity on financials."
                image="/screenshots/screenshot2.png"
                backgroundImage="backdrop1.png"
                reverseOrder={true}
            />
        </div>

        <div className="flex flex-col gap-5 p-5">
            <div className="">
                Seamless integrations
            </div>

            <div className="text-5xl">
                Works with the tools you already use
            </div>

            <div className="">
                Connect Birch to your other tools.
            </div>

            <div className="pt-4">
                <HeaderLink title="See more" type={HeaderLinkType.BLACK_BUTTON} />
            </div>
        </div>
    </div>
}
