import Image from "next/image";

interface TeamMemberCardProps {
    image: string,
    icon: React.ReactNode,
    title: string,
    description: string,
}

export default function TeamMemberCard({
    image,
    icon,
    title,
    description,
}: TeamMemberCardProps) {
    return <div className="bg-black rounded-lg">
        <Image src={image} alt="Team member photo"
            className="rounded-t-lg" width={150} height={200}
        />

        <div className="flex p-4 gap-4 py-6">
            <div className="text-white">
                {icon}
            </div>

            <div className="flex flex-col gap-2">
                <div className="text-white">
                    {title}
                </div>

                <div className="text-gray-400">
                    {description}
                </div>
            </div>
        </div>
    </div>
}
