// components/articles/articles-grid.tsx
"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ArticleCard } from "./article-card"
import { CreateArticleModal } from "./create-article-modal"

// Sample data - replace with your actual data source
const sampleArticles = [
    {
        id: "1",
        title: "Article on basic guideline of Human Centered Design",
        author: "Sufain Huzail",
        date: "Apr 24, 2024",
        views: 125,
        thumbnail: "/api/placeholder/300/200"
    },
    // Add more sample articles as needed
    ...Array.from({ length: 9 }, (_, i) => ({
        id: (i + 2).toString(),
        title: "Article on basic guideline of Human Centered Design",
        author: "Sufain Huzail",
        date: "Apr 24, 2024",
        views: 125,
        thumbnail: "/api/placeholder/300/200"
    }))
]

export function ArticlesGrid() {
    const [searchQuery, setSearchQuery] = useState("")
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<"my" | "all">("all")

    const filteredArticles = sampleArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-semibold">Article</h1>
                    <div className="flex gap-1 border-b">
                        <button
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === "my"
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab("my")}
                        >
                            My Article
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === "all"
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab("all")}
                        >
                            All Article
                        </button>
                    </div>
                </div>

                <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {filteredArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        {...article}
                        onClick={() => {
                            // Handle article click - navigate to edit or view
                            console.log("Article clicked:", article.id)
                        }}
                    />
                ))}
            </div>

            <CreateArticleModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </div>
    )
}