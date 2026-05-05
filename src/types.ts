export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'tutor' | 'admin';
  photoURL?: string;
  enrolledCourses?: string[];
  savedNotes?: string[];
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  board: 'Cambridge' | 'Edexcel' | 'FBISE';
  level: 'O Level' | 'A Level' | 'FSc';
  price: number;
  duration: string;
  tutorId: string;
  thumbnail?: string;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
}

export interface Note {
  id: string;
  title: string;
  subjectId: string;
  topic: string;
  type: 'note' | 'past-paper' | 'quiz';
  content?: string;
  fileUrl?: string;
  authorId: string;
}

export interface Tutor {
  id: string;
  name: string;
  bio: string;
  qualifications: string[];
  experience: string;
  rating: number;
  subjects: string[];
  image?: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
}
