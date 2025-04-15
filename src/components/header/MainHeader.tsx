import HeaderLink, { HeaderLinkType } from "./HeaderLink";
import Image from "next/image";

export default function MainHeader() {
    return <header className="fixed w-full z-100 opacity-95 select-none hidden lg:flex">
        <div className="flex justify-between bg-white w-full shadow-md px-6 py-4">
            <div className="flex gap-4 items-center">
                <Image src="/logos/logo2.svg" className="h-8 cursor-pointer" alt="Birch Logo" width={140} height={30} />
                <HeaderLink title="Products" />
                <HeaderLink title="Solutions" />
                <HeaderLink title="Resources" />
                <HeaderLink title="Customer stories" />
                <HeaderLink title="Pricing" />
            </div>

            <div className="flex gap-4">
                <HeaderLink title="Login" />
                <HeaderLink title="Book a demo" type={HeaderLinkType.WHITE_BUTTON} />
                <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
            </div>
        </div>
    </header>
}