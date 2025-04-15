import GetStartedFeature from "./GetStartedFeature";
import { ALL_FEATURES } from "./IntroFeatureList";

export default function GetStartedFeautureList() {
    return <div className="flex flex-col gap-30">
        <GetStartedFeature
            title="Deliver projects on time and budget"
            subtitle="Project Management"
            description="Organize and monitor your project delivery with integrated tools that your team will love using."
            icons={ALL_FEATURES.slice(0, 6)}
            image="/screenshots/screenshot1.png"
            backdrop="/misc/backdrop1.jpg"
        />

        <GetStartedFeature
            title="Streamline your client workflow"
            subtitle="Client Management"
            description="Manage leads and automate your client workflow while delivering a top-notch experience."
            icons={ALL_FEATURES.slice(5, 11)}
            image="/screenshots/screenshot2.png"
            backdrop="/misc/backdrop1.jpg"
        />

        <GetStartedFeature
            title="Track revenue & simplify billing"
            subtitle="Financial Management"
            description="Get financial clarity with detailed reports, recurring payments and streamlined retainer management"
            icons={ALL_FEATURES.slice(12, 18)}
            image="/screenshots/screenshot3.png"
            backdrop="/misc/backdrop1.jpg"
        />
    </div>
}
