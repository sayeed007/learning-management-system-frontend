import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CourseDetails } from "@/types";

const categories = [
    "Design & Development",
    "Business & Management",
    "Technology & Development",
    "Personal Development & Learning",
    "Health & Wellness",
    "Data & Analytics",
    "Design & Creative Arts",
];

export function CreateCourseModal({ open, onOpenChange, onCreate }: { open: boolean; onOpenChange: (v: boolean) => void; onCreate: (course: Omit<CourseDetails, 'id'>) => void }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("Beginner");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({ name, category, description, difficulty, chapters: 0, lessons: 0, quizzes: 0, image: "/public/globe.svg" });
        setName("");
        setCategory(categories[0]);
        setDescription("");
        setDifficulty("Beginner");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md w-full p-8">
                <div className="text-2xl font-bold mb-6 text-dark">Create Course</div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        className="border rounded-lg px-4 py-2 text-dark focus:outline-info"
                        placeholder="Course Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <select
                        className="border rounded-lg px-4 py-2 text-dark focus:outline-info"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        {categories.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                    <textarea
                        className="border rounded-lg px-4 py-2 text-dark focus:outline-info"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        rows={3}
                        maxLength={500}
                        required
                    />
                    <div className="flex gap-4 items-center">
                        <span className="font-medium text-dark">Difficulty:</span>
                        {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                            <label key={level} className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value={level}
                                    checked={difficulty === level}
                                    onChange={() => setDifficulty(level)}
                                />
                                <span>{level}</span>
                            </label>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-6 justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg border text-dark hover:bg-off-white-4"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-info text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-info/90 transition"
                        >
                            Create Now
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
} 