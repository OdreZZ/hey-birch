import { useState } from "react"

export enum HeaderLinkType {
    PLAIN,
    HOVER_EXPAND,
    WHITE_BUTTON,
    BLACK_BUTTON,
}

interface HeaderLinkProps {
    title: string,
    type?: HeaderLinkType,
    onHoverChange?: Function,
    onClick?: Function,
}

export default function HeaderLink({ title, type = HeaderLinkType.PLAIN, onHoverChange, onClick = () => null }: HeaderLinkProps) {
    const [isHovered, setIsHovered] = useState(false)

    let buttonClasses = ""
    let hoverClasses = ""
    if (type === HeaderLinkType.WHITE_BUTTON) {
        buttonClasses = "border bg-white text-black rounded-3xl border-gray-300 font-medium px-5 py-2"
        hoverClasses = "bg-black text-black border-black"
    } else if (type === HeaderLinkType.BLACK_BUTTON) {
        buttonClasses = "rounded-3xl bg-black text-white font-medium px-5 py-2"
    } else {
        hoverClasses = "text-gray-400"
    }

    const onHover = (isHovered: boolean) => {
        setIsHovered(isHovered)
        
        if (onHoverChange) {
            onHoverChange(isHovered)
        }
    }

    return <div className={`flex items-center cursor-pointer w-fit select-none z-10
            transition duration-200 ease-in-out hover:scale-105 tracking-wider
            ${buttonClasses}
            ${isHovered ? hoverClasses : ""}
        `}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={() => onClick()}
    >
        {title}
    </div>
}