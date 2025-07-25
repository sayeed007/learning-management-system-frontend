// app/reports/individual-course/page.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Download, Users, BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data - replace with your actual data fetching
const courseData = {
    totalLearners: 120,
    yetToStart: 0,
    inProgress: 45,
    completed: 24
};

const usersData = [
    {
        id: 1,
        name: "Annette Black",
        userId: "200065",
        avatar: "AB",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 2,
        name: "Devon Lane",
        userId: "200065",
        avatar: "DL",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 3,
        name: "Floyd Miles",
        userId: "200065",
        avatar: "FM",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 4,
        name: "Guy Hawkins",
        userId: "200065",
        avatar: "GH",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 5,
        name: "Leslie Alexander",
        userId: "200065",
        avatar: "LA",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 6,
        name: "Jenny Wilson",
        userId: "200065",
        avatar: "JW",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 7,
        name: "Savannah Nguyen",
        userId: "200065",
        avatar: "SN",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 8,
        name: "Theresa Webb",
        userId: "200065",
        avatar: "TW",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 9,
        name: "Eleanor Pena",
        userId: "200065",
        avatar: "EP",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 10,
        name: "Darlene Robertson",
        userId: "200065",
        avatar: "DR",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    },
    {
        id: 11,
        name: "Esther Howard",
        userId: "200065",
        avatar: "EH",
        enrollDate: "Jan 20, 2025",
        completedDate: "--",
        timeSpent: "2 days 13 hour",
        completionPercentage: 50,
        status: "In Progress"
    }
];

const lessonsData = [
    {
        id: 1,
        lesson: "Figma Essentials for UI Designers",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 2,
        lesson: "Prototyping with Adobe XD",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 3,
        lesson: "UI Design with Sketch: A Complete Guide",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 4,
        lesson: "Figma Essentials for UI Designers",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 5,
        lesson: "UX Workflow with Notion, Miro, and Figma",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 6,
        lesson: "UI Design with Sketch: A Complete Guide",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 7,
        lesson: "Prototyping with Adobe XD",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 8,
        lesson: "Figma Essentials for UI Designers",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 9,
        lesson: "Prototyping with Adobe XD",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 10,
        lesson: "UX Workflow with Notion, Miro, and Figma",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    },
    {
        id: 11,
        lesson: "Figma Essentials for UI Designers",
        yetToStart: 3,
        inProgress: 1,
        completed: 5
    }
];

export default function IndividualCourseReportPage() {
    const [activeTab, setActiveTab] = useState<'lessons' | 'users'>('lessons');

    const StatCard = ({
        icon: Icon,
        title,
        value,
        iconColor,
        bgColor
    }: {
        icon: any;
        title: string;
        value: number;
        iconColor: string;
        bgColor: string;
    }) => (
        <Card className="p-6">
            <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${bgColor}`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-semibold">{value}</p>
                </div>
            </div>
        </Card>
    );

    const UserAvatar = ({ name, avatar }: { name: string; avatar: string }) => (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
            {avatar}
        </div>
    );

    return (
        <Layout title="Reports">
            <div className="p-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="p-2">
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Foundation of UI/UX</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-semibold">Individual Course Report</h1>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Export as CSV
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={Users}
                        title="Total Learner"
                        value={courseData.totalLearners}
                        iconColor="text-blue-600"
                        bgColor="bg-blue-50"
                    />
                    <StatCard
                        icon={Clock}
                        title="Yet to start"
                        value={courseData.yetToStart}
                        iconColor="text-orange-600"
                        bgColor="bg-orange-50"
                    />
                    <StatCard
                        icon={BookOpen}
                        title="In Progress"
                        value={courseData.inProgress}
                        iconColor="text-purple-600"
                        bgColor="bg-purple-50"
                    />
                    <StatCard
                        icon={CheckCircle}
                        title="Completed"
                        value={courseData.completed}
                        iconColor="text-green-600"
                        bgColor="bg-green-50"
                    />
                </div>

                {/* Tabs */}
                <div className="">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('lessons')}
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'lessons'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            By Lesson
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'users'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            by Users
                        </button>
                    </div>
                </div>

                {/* Content */}
                {activeTab === 'users' ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        SL
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Learner
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Enroll Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Completed Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Time Spent
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Completion Percentage
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {usersData.map((user, index) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <UserAvatar name={user.name} avatar={user.avatar} />
                                                <div>
                                                    <div className="text-sm font-medium text-blue-600">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.userId}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.enrollDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.completedDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.timeSpent}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.completionPercentage}%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Badge
                                                variant="secondary"
                                                className="bg-orange-50 text-orange-600 hover:bg-orange-50"
                                            >
                                                {user.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Button variant="ghost" size="sm">
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        SL
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Lesson
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Yet to start
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        In Progress
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Completed
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {lessonsData.map((lesson, index) => (
                                    <tr key={lesson.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lesson.lesson}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lesson.yetToStart}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lesson.inProgress}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lesson.completed}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Layout>
    );
}