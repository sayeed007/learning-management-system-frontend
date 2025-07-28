import { BackToReport } from '@/components/reports/BackToReport'
import { StatCard } from '@/components/reports/StatCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, Download } from 'lucide-react'
import Image from 'next/image'

export default function MyReportPage() {
    const courses = [
        {
            id: 1,
            name: "UI/UX Basic Learning",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 50,
            status: "In Progress"
        },
        {
            id: 2,
            name: "Foundations of UI/UX Design",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 50,
            status: "In Progress"
        },
        {
            id: 3,
            name: "UI/UX Mastery: From Wireframes to Prototypes",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 50,
            status: "In Progress"
        },
        {
            id: 4,
            name: "Design Systems and Scalable Interfaces",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 5,
            name: "UI Design with Sketch: A Complete Guide",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 6,
            name: "User Journey Mapping & Persona Building",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 7,
            name: "UX Workflow with Notion, Miro, and Figma",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 8,
            name: "UI/UX Mastery: From Wireframes to Prototypes",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 9,
            name: "UI Design with Sketch: A Complete Guide",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 10,
            name: "Designing for Accessibility",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        },
        {
            id: 11,
            name: "UI/UX Mastery: From Wireframes to Prototypes",
            enrollDate: "Jan 20, 2025",
            completedDate: "Jan 23, 2025",
            timeSpent: "2 days 13 hour",
            completion: 100,
            status: "Complete"
        }
    ]

    const getStatusBadge = (status: string) => {
        if (status === "Complete") {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"> Complete </Badge>
        }
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100"> In Progress </Badge>
    }

    return (
        <div className="space-y-6 bg-white p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <BackToReport />
                </div>
                <h1 className="text-2xl font-bold text-gray-900"> My Report </h1>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    <Download className="h-4 w-4 mr-2" />
                    Export as CSV
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    iconName={'/icons/CourseEnrolled.png'}
                    iconAlt="CourseEnrolled"
                    title="Course Enrolled"
                    value={11}
                />

                <StatCard
                    iconName={'/icons/YetToStart.png'}
                    iconAlt="YetToStart"
                    title="Yet To Start"
                    value={0}
                />

                <StatCard
                    iconName={'/icons/InProgress.png'}
                    iconAlt="InProgress"
                    title="In Progress"
                    value={3}
                />

                <StatCard
                    iconName={'/icons/Completed.png'}
                    iconAlt="Completed"
                    title="Completed"
                    value={8}
                />
            </div>

            {/* Course Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-off-white-2 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> SL </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Course Name </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Enroll Date </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Completed Date </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Time Spent </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Completion Percentage </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                courses.map((course, index) => (
                                    <tr key={course.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {index + 1} </td>
                                        <td className="px-6 py-4 text-sm text-gray-900"> {course.name} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {course.enrollDate} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {course.completedDate} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {course.timeSpent} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {course.completion} % </td>
                                        <td className="px-6 py-4 whitespace-nowrap"> {getStatusBadge(course.status)} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Button variant="ghost" size="icon">
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}