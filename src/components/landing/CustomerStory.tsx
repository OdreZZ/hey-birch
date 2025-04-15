import { Star } from "@mui/icons-material"

interface CustomerStoryProps {
    rating: number,
    comment: string,
    avatar: string,
    name: string,
}

export default function CustomerStory({
    rating,
    comment,
    name,
}: CustomerStoryProps) {
    const ratingRender = []
    for (let i = 0; i < rating; i++) {
        ratingRender.push(<Star key={`star-story-${i}`} fontSize="small" />)
    }
    
    return <div className="flex flex-col bg-white rounded-md shadow-md w-xs p-5 justify-between">
        <div className="">
            {ratingRender}
        </div>

        <div className="text-lg py-4">
            {comment}
        </div>

        <div className="text-md">
            {name}
        </div>
    </div>
}
