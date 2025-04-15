import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";

interface GetStartedFeatureProps {
    title: string,
    subtitle: string,
    description: string,
    icons: FeatureIcon[],
    image: string,
    backdrop: string,
}

interface FeatureIcon {
    title: string,
    icon: React.ReactNode,
}

export default function GetStartedFeature({
    title,
    subtitle,
    description,
    icons,
    image,
    backdrop,
}: GetStartedFeatureProps) {
    const iconsRender = icons.map(icon => (
        <div className="flex gap-1 border px-3 py-2 rounded-md border-gray-200 bg-white"
            key={`get-started-icon-${icon.title}`}
        >
            {icon.icon} {icon.title}
        </div>
    ))

    return <div className="flex flex-col-reverse items-center lg:flex-row">
        <div className="flex flex-col gap-6 p-4">
            <div className="text-md">
                {subtitle}
            </div>

            <div className="text-5xl">
                {title}
            </div>

            <div className="flex flex-wrap gap-1 select-none">
                {iconsRender}
            </div>

            <div className="">
                <HeaderLink title="Get started" type={HeaderLinkType.BLACK_BUTTON} />
            </div>

            <div className="text-xl">
                {description}
            </div>
        </div>

        <div className="select-none z-10 relative overflow-hidden max-w-md">
            <div className="absolute z-0 top-px">
                <img src={backdrop} className="rounded-md" />
            </div>

            <img src={image} className="relative mt-12 ml-12 z-10 rounded-md" />
        </div>
    </div>
}
