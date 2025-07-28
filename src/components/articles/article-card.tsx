// components/articles/article-card.tsx
import { Calendar, Eye, User } from "lucide-react"
import Image from "next/image"

interface ArticleCardProps {
    id: string
    title: string
    author: string
    date: string
    views: number
    thumbnail: string
    onClick?: () => void
}

export function ArticleCard({
    title,
    author,
    date,
    views,
    thumbnail,
    onClick
}: ArticleCardProps) {
    return (
        <div
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <User className="w-4 h-4" />
                    <span>{author}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}