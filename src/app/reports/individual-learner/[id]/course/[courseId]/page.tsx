// app/reports/individual-learner/[id]/course/[courseId]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Clock, CheckCircle, Play, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

// Mock course lessons data
const mockLessons = [
    {
        id: 1,
        lesson: 'UI/UX Basic',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 100,
        status: 'complete'
    },
    {
        id: 2,
        lesson: 'UI/UX for E-Commerce',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 100,
        status: 'complete'
    },
    {
        id: 3,
        lesson: 'Masterclass in Human-Centered Design and Innovation',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 100,
        status: 'complete'
    },
    {
        id: 4,
        lesson: 'Design Systems: From Components to Consistency',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 100,
        status: 'complete'
    },
    {
        id: 5,
        lesson: 'Quiz Test',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 100,
        status: 'complete'
    },
    {
        id: 6,
        lesson: 'Creating Conversational Interfaces',
        startDate: 'Jul 20, 2025',
        timeSpent: '40 Min',
        completionPercentage: 50,
        status: 'In Progress'
    },
    {
        id: 7,
        lesson: 'Data-Driven UX Design',
        startDate: '--',
        timeSpent: '--',
        completionPercentage: 0,
        status: 'Yet to Start'
    },
    {
        id: 8,
        lesson: 'Quiz Test',
        startDate: '--',
        timeSpent: '--',
        completionPercentage: 0,
        status: 'Yet to Start'
    }
];

// Mock course data
const courseData = {
    title: 'Masterclass in Human-Centered Design and Innovation',
    completed: 70,
    timeSpent: 20
};

// Mock learner data
const mockLearners = {
    '200065': { name: 'MD. Fahim Reza', id: '200065' },
    '200066': { name: 'Wade Warren', id: '200066' },
    '200067': { name: 'Jerome Bell', id: '200067' },
};

export default function IndividualCourseReport() {
    const router = useRouter();
    const params = useParams();
    const learnerId = params.id as string;
    const courseId = params.courseId as string;

    const currentLearner = mockLearners[learnerId as keyof typeof mockLearners] || mockLearners['200065'];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'complete':
                return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">complete</Badge>;
            case 'In Progress':
                return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">In Progress</Badge>;
            case 'Yet to Start':
                return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Yet to Start</Badge>;
            default:
                return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'complete':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'In Progress':
                return <Play className="h-4 w-4 text-orange-600" />;
            case 'Yet to Start':
                return <AlertCircle className="h-4 w-4 text-red-600" />;
            default:
                return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    return (
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
                            <div>
                                <h1 className="text-xl font-semibold text-gray-900">{courseData.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Course Progress Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Completed</p>
                                <p className="text-3xl font-bold text-gray-900">{courseData.completed}%</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Clock className="h-8 w-8 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Time Spent</p>
                                <p className="text-3xl font-bold text-gray-900">{courseData.timeSpent} hours</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Lessons Table */}
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lesson</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Spent</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Percentage</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {mockLessons.map((lesson, index) => (
                                    <tr key={lesson.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                                            <div className="flex items-center space-x-2">
                                                {getStatusIcon(lesson.status)}
                                                <span className="truncate">{lesson.lesson}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lesson.startDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lesson.timeSpent}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {lesson.completionPercentage > 0 ? `${lesson.completionPercentage}%` : '--'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(lesson.status)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
}