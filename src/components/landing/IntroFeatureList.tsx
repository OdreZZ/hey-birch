import { AccessAlarm, AccountTree, Article, AttachMoney, Book, Carpenter, Chat, Description, Feed, LocalAtm, Payment, People, PunchClock, Receipt, Task, UploadFile, ViewTimeline } from "@mui/icons-material";
import IntroFeatureCard from "./IntroFeatureCard";
import { useEffect, useState } from "react";

export const ALL_FEATURES = [{
    icon: <People fontSize="small" />,
    title: "CRM",
}, {
    icon: <Carpenter fontSize="small" />,
    title: "Pipeline",
}, {
    icon: <Chat fontSize="small" />,
    title: "Client Portal",
}, {
    icon: <ViewTimeline fontSize="small" />,
    title: "Estimates",
}, {
    icon: <Article fontSize="small" />,
    title: "Proposals",
}, {
    icon: <Feed fontSize="small" />,
    title: "Agreements",
}, {
    icon: <Description fontSize="small" />,
    title: "Forms",
}, {
    icon: <AccountTree fontSize="small" />,
    title: "Projects",
}, {
    icon: <Task fontSize="small" />,
    title: "Tasks",
}, {
    icon: <AccessAlarm fontSize="small" />,
    title: "Time tracking",
}, {
    icon: <PunchClock fontSize="small" />,
    title: "Timesheets",
}, {
    icon: <UploadFile fontSize="small" />,
    title: "Resourcing",
}, {
    icon: <Receipt fontSize="small" />,
    title: "Invoicing",
}, {
    icon: <Payment fontSize="small" />,
    title: "Payments",
}, {
    icon: <AttachMoney fontSize="small" />,
    title: "Expenses",
}, {
    icon: <LocalAtm fontSize="small" />,
    title: "Rate cards",
}, {
    icon: <Book fontSize="small" />,
    title: "Bookkeeping",
}]

export default function IntroFeatureList() {
    const [transformX, setTransformX] = useState(0.0)

    const featureHeaderList = ALL_FEATURES.map(feature => (
        <div className="flex text-nowrap px-2 gap-1 text-sm"
            key={`feature-header-${feature.title}`}
        >
            {feature.icon} {feature.title}
        </div>
    ))

    const featureHeaderList2 = ALL_FEATURES.map(feature => (
        <div className="flex text-nowrap px-2 gap-1 text-sm"
            key={`feature-header-${feature.title}-2`}
        >
            {feature.icon} {feature.title}
        </div>
    ))

    useEffect(() => {
        setInterval(() => {
            setTransformX(prev => prev >= 100 ? 0 : prev + 0.025)
        }, 10)
    }, [])

    return <div className="flex flex-col items-center">
        <div className="flex bg-white w-full py-3 px-6 overflow-hidden select-none rounded-t-md">
            <div className="flex"
                style={{
                    transform: `translate(-${transformX}%)`
                }}
            >
                {featureHeaderList}
            </div>
            <div className="flex"
                style={{
                    transform: `translate(-${transformX}%)`
                }}
            >
                {featureHeaderList2}
            </div>
        </div>

        <div className="w-full">
            <img src="/dashboard.jpg" />
        </div>

        <div className="flex flex-col lg:flex-row gap-2 bg-gray-100 pt-6">
            <IntroFeatureCard
                title="Client Management"
                description="Everything you need to estimate projects, collaborate with clients, and provide a top-notch client experience."
                image="/screenshots/screenshot1.png"
                backgroundImage="/misc/backdrop1.jpg"
            />

            <IntroFeatureCard
                title="Project Management"
                description="Organize and monitor your project delivery with a set of integrated tools that your team will love using."
                image="/screenshots/screenshot2.png"
                backgroundImage="/misc/backdrop1.jpg"
            />

            <IntroFeatureCard
                title="Finance Management"
                description="Monitor revenue with detailed finance reports. Put billing on autopilot with recurring payments and retainers."
                image="/screenshots/screenshot3.png"
                backgroundImage="/misc/backdrop1.jpg"
            />
        </div>
    </div>
}
