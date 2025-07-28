// app/articles/page.tsx
"use client"

import { useState, useEffect } from "react"
import { ArticleEmptyState } from "@/components/articles/empty-state"
import { ArticlesGrid } from "@/components/articles/articles-grid"

export default function ArticlesPage() {
    const [hasArticles, setHasArticles] = useState(false)

    // Check if user has articles - replace with your actual logic
    useEffect(() => {
        // For demo purposes, set to true to show the grid
        // Set to false to show empty state
        setHasArticles(false)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            {hasArticles ? <ArticlesGrid /> : <ArticleEmptyState />}
        </div>
    )
}