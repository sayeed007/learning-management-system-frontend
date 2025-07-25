// app/reports/multiple-learner/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, Download, ChevronRight, Users, BookOpen, Clock, Play, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data
const mockLearners = [
    {
        id: '200065',
        name: 'Annette Black',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/annette.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200066',
        name: 'Wade Warren',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/wade.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200067',
        name: 'Jerome Bell',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/jerome.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200068',
        name: 'Theresa Webb',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/theresa.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200069',
        name: 'Esther Howard',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/esther.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200070',
        name: 'Courtney Henry',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/courtney.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200071',
        name: 'Floyd Miles',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/floyd.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200072',
        name: 'Ralph Edwards',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/ralph.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200073',
        name: 'Eleanor Pena',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/eleanor.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200074',
        name: 'Jacob Jones',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/jacob.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    },
    {
        id: '200075',
        name: 'Marvin McKinney',
        email: 'anneteblack@gmail.com',
        avatar: '/avatars/marvin.jpg',
        coursesEnrolled: 12,
        yetToStart: 3,
        inProgress: 1,
        completed: 5,
        completionPercentage: 75
    }
];

const summaryStats = {
    totalLearner: 120,
    courseEnrolled: 145,
    yetToStart: 35,
    inProgress: 45,
    completed: 24
};

export default function MultipleLearnerReport() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLearners = mockLearners.filter(learner =>
        learner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        learner.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLearnerClick = (learnerId: string) => {
        router.push(`/reports/individual-learner/${learnerId}`);
    };

    const handleExportCSV = () => {
        // Implement CSV export functionality
        console.log('Exporting CSV...');
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
                            <h1 className="text-xl font-semibold text-gray-900">Multiple Learner Report</h1>
                        </div>
                        <Button onClick={handleExportCSV} className="bg-blue-600 hover:bg-blue-700">
                            <Download className="h-4 w-4 mr-2" />
                            Export as CSV
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Learner</p>
                                <p className="text-2xl font-bold text-gray-900">{summaryStats.totalLearner}</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <BookOpen className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Course Enrolled</p>
                                <p className="text-2xl font-bold text-gray-900">{summaryStats.courseEnrolled}</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Clock className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Yet to start</p>
                                <p className="text-2xl font-bold text-gray-900">{summaryStats.yetToStart}</p>
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
                                <p className="text-2xl font-bold text-gray-900">{summaryStats.inProgress}</p>
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
                                <p className="text-2xl font-bold text-gray-900">{summaryStats.completed}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Learners Table */}
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learner</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses Enrolled</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yet to start</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Progress</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Percentage</th>
                                    <th className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredLearners.map((learner, index) => (
                                    <tr
                                        key={learner.id}
                                        onClick={() => handleLearnerClick(learner.id)}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-3">
                                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">
                                                        {learner.name.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-blue-600">{learner.name}</p>
                                                    <p className="text-xs text-gray-500">| {learner.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.coursesEnrolled}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.yetToStart}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.inProgress}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.completed}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{learner.completionPercentage}%</td>
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
    );
}