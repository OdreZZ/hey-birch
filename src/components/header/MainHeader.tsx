import { useState } from "react";
import HeaderLink, { HeaderLinkType } from "./HeaderLink";
import ProductsMenu from "./menu/ProductsMenu";
import SolutionsMenu from "./menu/SolutionsMenu";
import ResourcesMenu from "./menu/ResourcesMenu";

export default function MainHeader() {
    const [expandedMenu, setExpandedMenu] = useState<React.ReactNode | null>(null)

    const updateExpandedMenu = (isHovered: boolean, selectedMenu: React.ReactNode) => {
        if (isHovered && selectedMenu) {
            setExpandedMenu(selectedMenu)
        } else {
            setExpandedMenu(null)
        }
    }

    return <header className="fixed w-full z-100 opacity-95 select-none hidden lg:flex">
        <div className="flex justify-between bg-white w-full shadow-md px-6 py-4">
            <div className="flex gap-4 items-center">
                <img src="/logos/logo2.svg" className="h-8 cursor-pointer" />
                <HeaderLink title="Products" onHoverChange={(isHovered: boolean) => updateExpandedMenu(isHovered, <ProductsMenu />)} />
                <HeaderLink title="Solutions" onHoverChange={(isHovered: boolean) => updateExpandedMenu(isHovered, <SolutionsMenu />)} />
                <HeaderLink title="Resources" onHoverChange={(isHovered: boolean) => updateExpandedMenu(isHovered, <ResourcesMenu />)} />
                <HeaderLink title="Customer stories" />
                <HeaderLink title="Pricing" />
            </div>

            <div className="flex gap-4">
                <HeaderLink title="Login" />
                <HeaderLink title="Book a demo" type={HeaderLinkType.WHITE_BUTTON} />
                <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
            </div>
        </div>

        <div className="absolute">
            {/* {expandedMenu} */}
        </div>
    </header>
}