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
        <img src={image} 
            className="rounded-t-lg"
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
