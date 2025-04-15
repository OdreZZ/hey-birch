/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

interface IntroFeatureCardProps {
    title: string,
    description: string,
    image: string,
    backgroundImage: string,
    reverseOrder?: boolean,
}

export default function IntroFeatureCard({
    title,
    description,
    image,
    backgroundImage,
    reverseOrder,
}: IntroFeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return <div className={`flex bg-white w-xs xl:w-md
            ${reverseOrder ? "flex-col-reverse" : "flex-col"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className="px-12 py-6 grow">
            <div className="text-xl">
                {title}
            </div>

            <div className="py-4">
                {description}
            </div>
        </div>

        <div className="bg-gray-200 w-full flex justify-center overflow-hidden select-none grow relative">
            <img src={image} alt="Feature screenshot"
                className="w-75 mt-20 rounded-t-md transition delay-50 duration-300 ease-in-out hover:scale-115 scale-105 z-10"
            />

            <img src={backgroundImage} alt="Backdrop"
                className="absolute z-0 h-full transition-opacity duration-600"
                style={{
                    opacity: isHovered ? 1 : 0,
                }}
            />
        </div>
    </div>
}
