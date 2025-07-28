// components/articles/empty-state.tsx
"use client"

import { useState } from "react"
import { Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CreateArticleModal } from "./create-article-modal"

export function ArticleEmptyState() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    No article to show
                </h2>
                <p className="text-gray-500 mb-8">
                    {"Article you've created will show up here."}
                </p>
                <Button onClick={() => setIsModalOpen(true)}>
                    Create Now
                </Button>
            </div>

            <CreateArticleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}