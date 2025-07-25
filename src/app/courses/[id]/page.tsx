"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddChapterModal } from "@/components/AddChapterModal";

// Dummy course data for now
const course = {
    id: "1",
    name: "UI/UX Roadmap",
    category: "Design & Development",
    description: "Equip learners with foundational to intermediate knowledge of UI/UX principles, visual design standards, usability heuristics...",
    difficulty: "Beginner",
};

const initialChapters = [
    { id: "c1", name: "Chapter 1" },
    { id: "c2", name: "Chapter 2" },
];

export default function CourseDetailPage() {
    const [chapters, setChapters] = useState(initialChapters);
    const [showAdd, setShowAdd] = useState(false);
    const router = useRouter();

    const handleAddChapter = (chapter: { name: string }) => {
        setChapters((prev) => [...prev, { ...chapter, id: Date.now().toString() }]);
        setShowAdd(false);
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <button className="mb-4 text-info hover:underline" onClick={() => router.back()}>&larr; Back to Courses</button>
            <div className="bg-white rounded-2xl shadow p-8 mb-8">
                <div className="text-2xl font-bold text-dark mb-2">{course.name}</div>
                <div className="text-info text-sm font-semibold mb-2">{course.category}</div>
                <div className="text-grey-2 text-base mb-2">{course.description}</div>
                <div className="flex items-center gap-2 text-xs">
                    <span className="bg-off-white-4 text-dark px-2 py-1 rounded">{course.difficulty}</span>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-bold text-dark">Chapters</div>
                <button
                    className="bg-info text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-info/90 transition"
                    onClick={() => setShowAdd(true)}
                >
                    Add Chapter
                </button>
            </div>
            <div className="flex flex-col gap-4">
                {chapters.map((chapter) => (
                    <div key={chapter.id} className="bg-off-white-4 rounded-lg px-6 py-4 text-dark font-medium shadow-sm">
                        {chapter.name}
                    </div>
                ))}
            </div>
            <AddChapterModal
                open={showAdd}
                onOpenChange={setShowAdd}
                onAdd={handleAddChapter}
            />
        </div>
    );
} 