import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";
import CustomerStory from "./CustomerStory";

export default function CustomerStories() {
    return <div className="flex flex-col gap-6 items-center">
        <div className="text-5xl text-center font-bold">
            See why customers love <br />
            using Birch
        </div>

        <div className="pt-4">
            <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
            <CustomerStory 
                rating={5}
                comment="With Birch's project insights, I get a real-time view on our budget and business financials. It costs me a click, instead of a full-time job. I calculated saving $150,000 a year."
                avatar=""
                name="John Doe"
            />

            <CustomerStory 
                rating={5}
                comment="Project management is so much easier. Now everyone is on the same page. Information stays organized from the moment a lead becomes a client and throughout the project."
                avatar=""
                name="Jane Doe"
            />

            <CustomerStory 
                rating={5}
                comment="Birch has been a great tool for our business. We wanted to find an all in one solution that was seamless for clients to use and the team has been a great resource when we have questions!"
                avatar=""
                name="Mack Zelle"
            />

            <CustomerStory 
                rating={5}
                comment="In our project board, we have full visibility of steps from client onboarding all the way through to billing. We can track every client project without missing any steps."
                avatar=""
                name="Richard Stone"
            />

            <CustomerStory 
                rating={5}
                comment="Time is our most precious asset. Instead of taking 1 hour to dig up a report, it now takes us 5 minutes. That is one of our most important gains in productivity with Birch."
                avatar=""
                name="Marie Munster"
            />

            <CustomerStory 
                rating={5}
                comment="We went from 4 hours to 15 minutes to send beautiful proposals. It takes us 0 minutes to send nicely designed invoices with auto-invoicing."
                avatar=""
                name="Christian Schumer"
            />

        </div>

        <div className="pt-4">
            <HeaderLink title="See customer stories" type={HeaderLinkType.WHITE_BUTTON} />
        </div>
    </div>
}
