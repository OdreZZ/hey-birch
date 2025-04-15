import { useState } from "react"

export enum FooterLinkType {
    PLAIN,
    HOVER_EXPAND,
    WHITE_BUTTON,
    BLACK_BUTTON,
}

interface FooterLinkProps {
    title: string,
    type?: FooterLinkType,
    onHoverChange?: Function,
}

export default function FooterLink({ title, type = FooterLinkType.PLAIN, onHoverChange }: FooterLinkProps) {
    const [isHovered, setIsHovered] = useState(false)

    let buttonClasses = ""
    let hoverClasses = ""
    if (type === FooterLinkType.WHITE_BUTTON) {
        buttonClasses = "border bg-white text-black rounded-3xl border-gray-300 font-medium"
        hoverClasses = "bg-black text-white border-black"
    } else if (type === FooterLinkType.BLACK_BUTTON) {
        buttonClasses = "rounded-3xl bg-black text-white font-medium"
    } else {
        buttonClasses = "text-gray-400"
        hoverClasses = "text-white"
    }

    const onHover = (isHovered: boolean) => {
        setIsHovered(isHovered)
        
        if (onHoverChange) {
            onHoverChange(isHovered)
        }
    }

    return <div className={`cursor-pointer
            ${buttonClasses}
            ${isHovered ? hoverClasses : ""}
        `}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
    >
        {title}
    </div>
}