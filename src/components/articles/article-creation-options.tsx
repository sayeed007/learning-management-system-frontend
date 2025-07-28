// components/articles/article-creation-options.tsx
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, FileText, Download, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ArticleCreationOptions() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const articleName = searchParams.get('name') || 'Untitled Article'

    const handleStartFromScratch = () => {
        router.push(`/articles/edit?name=${encodeURIComponent(articleName)}&mode=scratch`)
    }

    const handleReadyTemplate = () => {
        router.push(`/articles/edit?name=${encodeURIComponent(articleName)}&mode=template`)
    }

    const handleImportFile = () => {
        router.push(`/articles/edit?name=${encodeURIComponent(articleName)}&mode=import`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.back()}
                            className="p-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                            <input
                                value={articleName}
                                onChange={(e) => {
                                    // Update URL with new name
                                    router.replace(`/articles/create?name=${encodeURIComponent(e.target.value)}`)
                                }}
                                className="text-lg font-medium bg-transparent border-none outline-none focus:bg-white focus:px-2 focus:py-1 focus:rounded focus:border focus:border-gray-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline">Preview</Button>
                        <Button>Publish</Button>
                        <Button variant="outline">More</Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Start creating your article
                    </h1>
                    <p className="text-gray-600">
                        Create by your own or from ready template
                    </p>
                </div>

                <div className="flex gap-6">
                    <Button
                        variant="outline"
                        className="flex flex-col items-center gap-3 h-auto p-6 min-w-[160px]"
                        onClick={handleStartFromScratch}
                    >
                        <FileText className="w-6 h-6 text-blue-600" />
                        <span>Start from scratch</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="flex flex-col items-center gap-3 h-auto p-6 min-w-[160px]"
                        onClick={handleReadyTemplate}
                    >
                        <Layout className="w-6 h-6 text-blue-600" />
                        <span>Ready Template</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="flex flex-col items-center gap-3 h-auto p-6 min-w-[160px]"
                        onClick={handleImportFile}
                    >
                        <Download className="w-6 h-6 text-blue-600" />
                        <span>Import File</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}