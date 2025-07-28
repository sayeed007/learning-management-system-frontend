"use client";

import { CourseCard } from "@/components/CourseCard";
import { CreateCourseModal } from "@/components/CreateCourseModal";
import { CourseDetails } from "@/types";
import { useState } from "react";
import { EmptyState } from "@/components/NoContent";

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
    image: "/public/globe.svg",
  },
];

// Example course data
const allCourses = [
  {
    id: "1",
    name: "UI/UX Roadmap",
    category: "Design & Development",
    description:
      "Equip learners with foundational to intermediate knowledge of UI/UX principles, visual design standards, usability heuristics...",
    difficulty: "Beginner",
    chapters: 4,
    lessons: 15,
    quizzes: 2,
    image: "/globe.svg",
    owner: "me",
  },
  {
    id: "2",
    name: "SQL & Testing",
    category: "Database",
    description:
      "Learn SQL for manual & automated testing with best practices to ensure software quality...",
    difficulty: "Intermediate",
    chapters: 4,
    lessons: 15,
    quizzes: 3,
    image: "/globe.svg",
    owner: "assigned",
  },
  {
    id: "3",
    name: "System Design",
    category: "Backend",
    description: "Understand the core principles of scalable system design...",
    difficulty: "Advanced",
    chapters: 5,
    lessons: 20,
    quizzes: 2,
    image: "/globe.svg",
    owner: "all",
  },
  {
    id: "3",
    name: "System Design",
    category: "Backend",
    description: "Understand the core principles of scalable system design...",
    difficulty: "Advanced",
    chapters: 5,
    lessons: 20,
    quizzes: 2,
    image: "/globe.svg",
    owner: "all",
  },
  {
    id: "3",
    name: "System Design",
    category: "Backend",
    description: "Understand the core principles of scalable system design...",
    difficulty: "Advanced",
    chapters: 5,
    lessons: 20,
    quizzes: 2,
    image: "/globe.svg",
    owner: "all",
  },
];

const tabs = [
  { key: "my", label: "My Authoring" },
  { key: "assigned", label: "Assigned Courses" },
  { key: "all", label: "All Course" },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState(allCourses);
  const [showCreate, setShowCreate] = useState(false);
  const [activeTab, setActiveTab] = useState("my");

  const handleCreateCourse = (course: CourseDetails) => {
    setCourses((prev) => [
      ...prev,
      { ...course, id: Date.now().toString(), owner: "me" },
    ]);
    setShowCreate(false);
  };

  // Filter courses based on tab

  return (
    <div className="px-[20px] px-4 min-h-screen pt-[10px] bg-[#F5F5FA]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6 border-b-2 border-gray-200 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`text-sm ${activeTab === tab.key
              ? "font-bold"
              : "text-grey-2 hover:text-dark"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Course Cards */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={`${course.id}-${index}`} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState
          message="No course to show"
          description="Courses you’ve created will show up here."
          buttonText="Create Now"
          onClick={() => setShowCreate(true)}
        />
      )}

      {/* Create Course Modal */}
      <CreateCourseModal
        open={showCreate}
        onOpenChange={setShowCreate}
        onCreate={handleCreateCourse}
      />
    </div>
  );
}
