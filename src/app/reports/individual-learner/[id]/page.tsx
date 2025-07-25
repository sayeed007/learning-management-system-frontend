// app/reports/individual-learner/[id]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Download, ChevronRight, BookOpen, Clock, Play, CheckCircle, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import Layout from '@/components/Layout';

// Mock data for learners
const mockLearners = {
    '': { name: 'Select A Learner', id: '' },
    '200065': { name: 'MD. Fahim Reza', id: '200065' },
    '200066': { name: 'Wade Warren', id: '200066' },
    '200067': { name: 'Jerome Bell', id: '200067' },
    // Add more learners as needed
};

// Mock course data
const mockCourses = [
    {
        id: 1,
        name: 'UI/UX Basic Learning',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 50,
        status: 'In Progress'
    },
    {
        id: 2,
        name: 'Foundations of UI/UX Design',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 50,
        status: 'In Progress'
    },
    {
        id: 3,
        name: 'UI/UX Mastery: From Wireframes to Prototypes',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 50,
        status: 'In Progress'
    },
    {
        id: 4,
        name: 'Design Systems and Scalable Interfaces',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 5,
        name: 'UI Design with Sketch: A Complete Guide',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 6,
        name: 'User Journey Mapping & Persona Building',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 7,
        name: 'UX Workflow with Notion, Miro, and Figma',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 8,
        name: 'UI/UX Mastery: From Wireframes to Prototypes',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 9,
        name: 'UI Design with Sketch: A Complete Guide',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 10,
        name: 'Designing for Accessibility',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    },
    {
        id: 11,
        name: 'UI/UX Mastery: From Wireframes to Prototypes',
        enrollDate: 'Jan 20, 2025',
        completedDate: 'Jan 23, 2025',
        timeSpent: '2 days 13 hour',
        completionPercentage: 100,
        status: 'Complete'
    }
];

const learnerStats = {
    courseEnrolled: 11,
    yetToStart: 0,
    inProgress: 3,
    completed: 8
};

export default function IndividualLearnerReport() {
    const router = useRouter();
    const params = useParams();
    const learnerId = params.id as string;
    const [selectedLearner, setSelectedLearner] = useState(learnerId);

    const currentLearner = mockLearners[learnerId as keyof typeof mockLearners] || mockLearners[''];

    const handleCourseClick = (courseId: number) => {
        router.push(`/reports/individual-learner/${learnerId}/course/${courseId}`);
    };

    const handleLearnerChange = (newLearnerId: string) => {
        setSelectedLearner(newLearnerId);
        router.push(`/reports/individual-learner/${newLearnerId}`);
    };

    const handleExportCSV = () => {
        console.log('Exporting CSV...');
    };

    const getStatusBadge = (status: string, percentage: number) => {
        if (status === 'Complete') {
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge>;
        }
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">In Progress</Badge>;
    };

    return (
        <Layout title="">
            <div className="min-h-screen bg-gray-50/50">
                {/* Header */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => router.back()}
                                    className="p-2"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                                <h1 className="text-xl font-semibold text-gray-900">Individual Learner Report</h1>
                            </div>
                            <Button onClick={handleExportCSV} className="bg-blue-600 hover:bg-blue-700">
                                <Download className="h-4 w-4 mr-2" />
                                Export as CSV
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Learner Selector */}
                    <div className="mb-8">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-80 justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-white text-xs font-medium">
                                                {currentLearner.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span>{currentLearner.name} | {currentLearner.id}</span>
                                    </div>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-0">
                                {Object.values(mockLearners).map((learner) => (
                                    <button
                                        key={learner.id}
                                        onClick={() => handleLearnerChange(learner.id)}
                                        className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-white text-xs font-medium">
                                                {learner.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-sm">{learner.name} | {learner.id}</span>
                                    </button>
                                ))}
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card className="p-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Course Enrolled</p>
                                    <p className="text-2xl font-bold text-gray-900">{learnerStats.courseEnrolled}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-yellow-100 rounded-lg">
                                    <Clock className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Yet to Start</p>
                                    <p className="text-2xl font-bold text-gray-900">{learnerStats.yetToStart}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <Play className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">In Progress</p>
                                    <p className="text-2xl font-bold text-gray-900">{learnerStats.inProgress}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Completed</p>
                                    <p className="text-2xl font-bold text-gray-900">{learnerStats.completed}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Courses Table */}
                    <Card className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enroll Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Spent</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Percentage</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {mockCourses.map((course, index) => (
                                        <tr
                                            key={course.id}
                                            onClick={() => handleCourseClick(course.id)}
                                            className="hover:bg-gray-50 cursor-pointer transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                                                <div className="truncate">{course.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.enrollDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.completedDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.timeSpent}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.completionPercentage}%</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {getStatusBadge(course.status, course.completionPercentage)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <ChevronRight className="h-5 w-5 text-gray-400" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

            </div>
        </Layout>
    );
}