import { People } from "@mui/icons-material";
import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamPlatform() {
    return <div className="flex flex-col gap-6 items-center">
        <div className="text-5xl text-center">
            A platform built for everyone on the team
        </div>

        <div className="text-center">
            With tailored features for every role, Birch ensures smooth collaboration, efficient operations, <br/>
            and simplified project management across the board.
        </div>

        <div className="">
            <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
        </div>

        <div className="flex flex-col lg:flex-row gap-2 select-none">
            <TeamMemberCard
                image="/photos/team1.webp"
                icon={<People />}
                title="Owners"
                description="Run your business and manage your team in one place."
            />

            <TeamMemberCard
                image="/photos/team2.webp"
                icon={<People />}
                title="Operations"
                description="Streamline business operations and boost productivity."
            />

            <TeamMemberCard
                image="/photos/team3.webp"
                icon={<People />}
                title="Project Managers"
                description="Everything you need to lead and deliver projects efficiently."
            />

            <TeamMemberCard
                image="/photos/team4.webp"
                icon={<People />}
                title="Consultants"
                description="Get clarity on your work and track your hours."
            />

        </div>
    </div>
}
