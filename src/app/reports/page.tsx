import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { BarChart3, BookOpen, Users, Lightbulb, FileText, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function ReportsPage() {
    const reportTypes = [
        {
            icon: <FileText className="h-6 w-6 text-green-600" />,
            title: "My Reports",
            name: 'my-report',
            description: "View and manage all your submitted reports, including progress summaries, feedback, and performance insights."
        },
        {
            icon: <BookOpen className="h-6 w-6 text-purple-600" />,
            title: "Individual Course Report",
            name: 'individual-course',
            description: "In-depth analytics for a specific course, including learner progress, completion rates, and assessment performance."
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-cyan-600" />,
            title: "Individual Learner Report",
            name: 'individual-learner',
            description: "Detailed insights into a learner's progress, performance, and completion status across courses and assessments."
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
            title: "Multiple Course Report",
            name: 'multiple-course',
            description: "Summarized performance and engagement data across multiple courses, helping track overall learning trends and course effectiveness."
        },
        {
            icon: <Users className="h-6 w-6 text-cyan-600" />,
            title: "Multiple Learner Report",
            name: 'multiple-learner',
            description: "A comprehensive overview of progress and performance metrics for multiple learners outcomes."
        },
        {
            icon: <Lightbulb className="h-6 w-6 text-orange-600" />,
            title: "Article Overview",
            name: 'articles',
            description: "A summarized view of the article's viewer count & review."
        }
    ]

    return (
        <Layout title="Reports" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                {
                    reportTypes.map((report, index) => (
                        <Link href={`/reports/${report.name}`} key={index}>
                            <Card className="cursor-pointer hover:shadow-md transition-shadow h-[135px]">
                                <CardHeader>
                                    <div className="flex items-start space-x-4" >
                                        <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg" >
                                            {report.icon}
                                        </div>
                                        <div className="flex-1" >
                                            <CardTitle className="text-lg font-semibold text-gray-900" >
                                                {report.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2 text-sm text-gray-600 leading-relaxed" >
                                                {report.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}