"use client";
import { CourseCard } from "@/components/CourseCard";
import { CreateCourseModal } from "@/components/CreateCourseModal";
import { CourseDetails } from "@/types";
import { useState } from "react";

// Example course type
const initialCourses: CourseDetails[] = [
    // Example data, replace with real data or state
    {
        id: "1",
        name: "UI/UX Roadmap",
        category: "Design & Development",
        description: "Equip learners with foundational to intermediate knowledge of UI/UX principles, visual design standards, usability heuristics...",
        difficulty: "Beginner",
        chapters: 4,
        lessons: 15,
        quizzes: 2,
        image: "/Thumbnail.png",
    },
];

export default function CoursesPage() {
    const [courses, setCourses] = useState(initialCourses);
    const [showCreate, setShowCreate] = useState(false);

    const handleCreateCourse = (course: CourseDetails) => {
        setCourses((prev) => [...prev, { ...course, id: Date.now().toString() }]);
        setShowCreate(false);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-dark">Courses</h1>
                <button
                    className="bg-info text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-info/90 transition"
                    onClick={() => setShowCreate(true)}
                >
                    Create Now
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            <CreateCourseModal
                open={showCreate}
                onOpenChange={setShowCreate}
                onCreate={handleCreateCourse}
            />
        </div>
    );
} 