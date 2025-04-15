import { Star } from "@mui/icons-material";
import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";

export default function WelcomeMessage() {
    return <div className="flex flex-col gap-3 max-w-2xl m-auto text-center">
        <div className="text-sm text-gray-600">
            Welcome to Birch
        </div>

        <div className="text-3xl md:text-6xl">
            The unified platform <br/>
            for service businesses
        </div>

        <div className="text-xs md:text-xl">
            Consolidate your projects, clients, and billing operations <br/>
            into one integrated, easy-to-use platform.
        </div>

        <div className="flex justify-center py-2 gap-2">
            <HeaderLink title="Book a demo" type={HeaderLinkType.WHITE_BUTTON} />
            <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
        </div>

        <div className="flex justify-center gap-2 text-gray-400">
            <div className="text-sm">
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
            </div>

            <div className="text-sm">
                1,020+ Reviews
            </div>
        </div>
    </div>
}
