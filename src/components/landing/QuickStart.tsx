import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";

export default function QuickStart() {
    return <div className="flex flex-col gap-4 items-center">
        <div className="text-5xl text-center">
            Get started in 30 seconds.
        </div>

        <div className="text-center">
            Simplify your business operations and consolidate your projects, clients and team <br/>
            into one integrated, easy-to-use platform.
        </div>

        <div className="flex gap-2">
            <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
            <HeaderLink title="Book a demo" type={HeaderLinkType.WHITE_BUTTON} />
        </div>
    </div>
}
