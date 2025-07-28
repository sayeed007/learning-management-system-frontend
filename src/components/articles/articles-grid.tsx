// components/articles/articles-grid.tsx
"use client"

import { useState } from "react"
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
        // thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=200&q=80",
        thumbnail: `https://picsum.photos/300/200?random=${1}`,
        myArticle: true,
        isPublished: true,
    },
    {
        id: "2",
        title: "Article on basic guideline of Human Centered Design",
        author: "Sufain Huzail",
        date: "Apr 24, 2024",
        views: 125,
        thumbnail: `https://picsum.photos/300/200?random=${2}`,
        myArticle: true,
        isPublished: false,
    },
    // Add more sample articles with different valid Unsplash images
    ...Array.from({ length: 8 }, (_, i) => ({
        id: (i + 3).toString(),
        title: "Article on basic guideline of Human Centered Design",
        author: "Sufain Huzail",
        date: "Apr 24, 2024",
        views: 125,
        thumbnail: `https://picsum.photos/300/200?random=${(i + 3)}`,
        myArticle: false,
        isPublished: true,
    })),
];

// Define the props interface
interface ArticlesGridProps {
    activeTab: "my" | "all";
    searchQuery: string;
}

// Define the component with typed props
const ArticlesGrid: React.FC<ArticlesGridProps> = ({
    activeTab,
    searchQuery,
}) => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const filteredArticles = sampleArticles.filter((article) => {
        // Check if article matches the activeTab condition
        const matchesTab = activeTab === "my" ? article.myArticle : true;

        // Check if article matches the searchQuery (case-insensitive)
        const matchesSearch = searchQuery
            ? article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        // Return true only if both conditions are met
        return matchesTab && matchesSearch;
    });



    return (
        <div className="py-6">
            {/* Header */}


            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {filteredArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        {...article}
                        author={activeTab === "my" ? "" : article?.author}
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

export default ArticlesGrid;