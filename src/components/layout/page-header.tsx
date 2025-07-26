// components/layout/page-header.tsx
import { ArrowLeft, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PageHeaderProps {
    title: string
    backHref?: string
    onExport?: () => void
}

export function PageHeader({ title, backHref = '/reports', onExport }: PageHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link href={backHref}>
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>

            {onExport && (
                <Button onClick={onExport} className="bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Export as CSV
                </Button>
            )}
        </div>
    )
}