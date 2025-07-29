'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { Calendar, Eye } from "lucide-react";


interface ArticleAuthorInfoProps {
    authorName: string;
    authorAvatar: string;
    publishDate: string;
    publishTime: string;
    views?: number;
}

export const ArticleAuthorInfo = ({ authorName, authorAvatar, publishDate, publishTime, views }: ArticleAuthorInfoProps) => {

    const authorInitials = getInitials(authorName);
    return (
        <div className="flex items-center gap-4 text-sm">
            <Avatar className="w-8 h-8">
                <AvatarImage src={authorAvatar} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                    {authorInitials}
                </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <div className="font-medium text-gray-900">{authorName}</div>

                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{publishDate} | {publishTime}</span>
                    </div>

                    {views !== undefined && (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-2xl">
                            <Eye className="w-4 h-4" />
                            <span>{views}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}