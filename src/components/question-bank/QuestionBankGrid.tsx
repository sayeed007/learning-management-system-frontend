// components/articles/articles-grid.tsx
"use client"

import { dummyArticles } from "@/dummyData/articles";
import { useState } from "react";
import { ArticleCard } from "./article-card";
import { CreateArticleModal } from "./create-article-modal";
import { useRouter } from "next/navigation";
import PrimaryActionButton from "../ui/PrimaryButton";

// Sample data - replace with your actual data source
const sampleQuestionBank = [];

// Define the props interface
interface QuestionBankGridProps {
    activeTab: "my" | "all";
    searchQuery: string;
    handleCreateNewQuestion: () => void;
}

// Define the component with typed props
const QuestionBankGrid: React.FC<QuestionBankGridProps> = ({
    activeTab,
    searchQuery,
    handleCreateNewQuestion
}) => {
    const router = useRouter()
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const filteredQuestionBank = sampleQuestionBank.filter((article) => {
        // Check if article matches the activeTab condition
        const matchesTab = activeTab === "my" ? article.myArticle : true;

        // Check if article matches the searchQuery (case-insensitive)
        const matchesSearch = searchQuery
            ? article.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        // Return true only if both conditions are met
        return matchesTab && matchesSearch;
    });



    return (
        <div className="py-6">
            {/* Header */}
            {activeTab === "my" &&
                <div className="mb-6">
                    <PrimaryActionButton
                        onClick={handleCreateNewQuestion}
                    >
                        Create Now
                    </PrimaryActionButton>
                </div>
            }

            {/* QuestionBank Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {filteredQuestionBank.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        isMyArticle={activeTab === 'my'}
                        onClick={() => {
                            router.push(`/question-bank/${encodeURIComponent(article?.title)}`)
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

export default QuestionBankGrid;