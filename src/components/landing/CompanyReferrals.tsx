import { useEffect, useState } from "react"

const ALL_LOGOS = [
    "logo1.svg",
    "logo2.svg",
    "logo3.svg",
    "logo4.svg",
    "logo5.svg",
    "logo6.svg",
    "logo7.svg",
]

export default function CompanyReferrals() {
    const [transformX, setTransformX] = useState(0.0)

    const logosRender = ALL_LOGOS.map(logo => (
        <div className="flex" key={`company-${logo}`}>
            <img src={`/logos/${logo}`}
                className="h-10 grayscale min-w-3xs"
            />
        </div>
    ))

    const logosRender2 = ALL_LOGOS.map(logo => (
        <div className="flex" key={`company-${logo}-2`}>
            <img src={`/logos/${logo}`}                
                className="h-10 grayscale min-w-3xs"
            />
        </div>
    ))

    useEffect(() => {
        setInterval(() => {
            setTransformX(prev => prev >= 100 ? 0 : prev + 0.025)
        }, 10)
    }, [])

    return <div className="flex flex-col gap-12">
        <div className="text-center text-md md:text-lg">
            Join 10,000+ companies using Birch to streamline their operations.
        </div>

        <div className="flex py-3 px-6 overflow-hidden select-none">
            <div className="flex gap-20"
                style={{
                    transform: `translate(-${transformX}%)`
                }}
            >
                {logosRender}
            </div>
            <div className="flex gap-20"
                style={{
                    transform: `translate(-${transformX}%)`
                }}
            >
                {logosRender2}
            </div>
        </div>
    </div>
}
