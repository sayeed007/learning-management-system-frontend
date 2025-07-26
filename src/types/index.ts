// Type definitions for the data structures
export interface Learner {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    coursesEnrolled: number;
    yetToStart: number;
    inProgress: number;
    completed: number;
    completionPercentage: number;
}

export interface Course {
    id: number;
    name: string;
    enrollDate: string;
    completedDate: string;
    timeSpent: string;
    completionPercentage: number;
    status: 'In Progress' | 'Complete' | 'Yet to Start';
}

export interface Lesson {
    id: number;
    lesson: string;
    startDate: string;
    timeSpent: string;
    completionPercentage: number;
    status: 'complete' | 'In Progress' | 'Yet to Start';
}

export interface SummaryStats {
    totalLearner: number;
    courseEnrolled: number;
    yetToStart: number;
    inProgress: number;
    completed: number;
}

export interface LearnerStats {
    courseEnrolled: number;
    yetToStart: number;
    inProgress: number;
    completed: number;
}


export interface Course {
  id: number
  name: string
  totalLearners: number
  yetToStart: number
  inProgress: number
  completed: number
}

export interface Article {
  id: number
  name: string
  totalViewer: number
  comments: number
  rating: number
  yesRating: number
  noRating: number
}

export interface ReportStats {
  total: number
  published: number
  unpublished: number
}