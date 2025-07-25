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
                </div>
            </div>
        </Layout>
    );
}