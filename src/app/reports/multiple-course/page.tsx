// // app/reports/courses/page.tsx
// 'use client'

// import { ArrowLeft, Download, Book, CheckCircle, Clock } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import Link from 'next/link'

// // Mock data - replace with your actual data fetching
// const courseData = {
//     totalCourses: 65,
//     published: 45,
//     unpublished: 20,
//     courses: Array.from({ length: 12 }, (_, i) => ({
//         id: i + 1,
//         name: "Figma Essentials for UI Designers",
//         totalLearners: 120,
//         yetToStart: 3,
//         inProgress: 1,
//         completed: 5
//     }))
// }

// export default function MultipleCourseReport() {
//     const handleExportCSV = () => {
//         // Implementation for CSV export
//         console.log('Exporting to CSV...')
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//             <header className="bg-white border-b border-gray-200">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <div className="flex items-center space-x-4">
//                             <div className="flex items-center space-x-2">
//                                 <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                                     <span className="text-white font-bold text-sm">T</span>
//                                 </div>
//                                 <span className="text-xl font-semibold text-gray-900">Tafurilm</span>
//                             </div>
//                         </div>

//                         <nav className="hidden md:flex space-x-8">
//                             <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
//                             <Link href="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
//                             <Link href="/question-bank" className="text-gray-600 hover:text-gray-900">Question Bank</Link>
//                             <Link href="/article" className="text-gray-600 hover:text-gray-900">Article</Link>
//                             <Link href="/reports" className="text-gray-900 font-medium">Reports</Link>
//                         </nav>

//                         <div className="flex items-center space-x-4">
//                             <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//                             <span className="text-sm text-gray-700">Welcome, Hafiz</span>
//                             <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Page Header */}
//                 <div className="flex items-center justify-between mb-8">
//                     <div className="flex items-center space-x-4">
//                         <Button variant="ghost" size="sm" asChild>
//                             <Link href="/reports">
//                                 <ArrowLeft className="w-4 h-4" />
//                             </Link>
//                         </Button>
//                         <h1 className="text-2xl font-bold text-gray-900">Multiple Course Report</h1>
//                     </div>

//                     <Button onClick={handleExportCSV} className="bg-blue-600 hover:bg-blue-700">
//                         <Download className="w-4 h-4 mr-2" />
//                         Export as CSV
//                     </Button>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     <Card className="p-6">
//                         <div className="flex items-center space-x-4">
//                             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                 <Book className="w-6 h-6 text-blue-600" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Total Courses</p>
//                                 <p className="text-3xl font-bold text-gray-900">{courseData.totalCourses}</p>
//                             </div>
//                         </div>
//                     </Card>

//                     <Card className="p-6">
//                         <div className="flex items-center space-x-4">
//                             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                                 <CheckCircle className="w-6 h-6 text-green-600" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Published</p>
//                                 <p className="text-3xl font-bold text-gray-900">{courseData.published}</p>
//                             </div>
//                         </div>
//                     </Card>

//                     <Card className="p-6">
//                         <div className="flex items-center space-x-4">
//                             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                                 <Clock className="w-6 h-6 text-purple-600" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Unpublished</p>
//                                 <p className="text-3xl font-bold text-gray-900">{courseData.unpublished}</p>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>

//                 {/* Course Table */}
//                 <Card className="overflow-hidden">
//                     <div className="overflow-x-auto">
//                         <table className="w-full">
//                             <thead className="bg-gray-50 border-b border-gray-200">
//                                 <tr>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         SL
//                                     </th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Course
//                                     </th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Total Learner
//                                     </th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Yet to start
//                                     </th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         In Progress
//                                     </th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Completed
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody className="bg-white divide-y divide-gray-200">
//                                 {courseData.courses.map((course) => (
//                                     <tr key={course.id} className="hover:bg-gray-50">
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                             {course.id}
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm font-medium text-gray-900">
//                                                 {course.name}
//                                             </div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                             {course.totalLearners}
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                             {course.yetToStart}
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                             {course.inProgress}
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                             {course.completed}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </Card>
//             </main>
//         </div>
//     )
// }


'use client'

import { Book, CheckCircle, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { PageHeader } from '@/components/layout/page-header'
import { StatsCard } from '@/components/stats-card'
import type { Course, ReportStats } from '@/types'

// Mock data - replace with your actual data fetching
const mockData: { stats: ReportStats; courses: Course[] } = {
    stats: {
        total: 65,
        published: 45,
        unpublished: 20,
    },
    courses: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: "Figma Essentials for UI Designers",
        totalLearners: 120,
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    }))
}

export default function MultipleCourseReport() {
    const handleExportCSV = () => {
        // Implementation for CSV export
        const csvContent = [
            ['SL', 'Course', 'Total Learner', 'Yet to start', 'In Progress', 'Completed'],
            ...mockData.courses.map(course => [
                course.id,
                course.name,
                course.totalLearners,
                course.yetToStart,
                course.inProgress,
                course.completed
            ])
        ]

        const csvString = csvContent.map(row => row.join(',')).join('\n')
        const blob = new Blob([csvString], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'course-report.csv'
        a.click()
        window.URL.revokeObjectURL(url)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <PageHeader
                    title="Multiple Course Report"
                    onExport={handleExportCSV}
                />

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatsCard
                        title="Total Courses"
                        value={mockData.stats.total}
                        icon={Book}
                        iconColor="text-blue-600"
                        iconBgColor="bg-blue-100"
                    />
                    <StatsCard
                        title="Published"
                        value={mockData.stats.published}
                        icon={CheckCircle}
                        iconColor="text-green-600"
                        iconBgColor="bg-green-100"
                    />
                    <StatsCard
                        title="Unpublished"
                        value={mockData.stats.unpublished}
                        icon={Clock}
                        iconColor="text-purple-600"
                        iconBgColor="bg-purple-100"
                    />
                </div>

                {/* Course Table */}
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {['SL', 'Course', 'Total Learner', 'Yet to start', 'In Progress', 'Completed'].map((header) => (
                                        <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockData.courses.map((course) => (
                                    <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {course.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {course.totalLearners}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {course.yetToStart}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {course.inProgress}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {course.completed}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </main>
        </div>
    )
}