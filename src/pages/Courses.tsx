import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Star, Clock, User, ArrowRight } from 'lucide-react';
import { BOARDS, LEVELS, SUBJECTS } from '../constants';
import { cn } from '../lib/utils';

const MOCK_COURSES = [
  { id: 'c1', title: 'A Level Physics - Complete Mechanics', subject: 'Physics', board: 'Cambridge', level: 'A Level', price: 15.99, duration: '12 Weeks', rating: 4.8, students: 1200, tutor: 'Dr. Ahmad Khan', image: 'https://images.unsplash.com/photo-1636466484362-ecaa6d4f9b97?auto=format&fit=crop&q=80&w=600' },
  { id: 'c2', title: 'O Level Chemistry - Organic Foundations', subject: 'Chemistry', board: 'Edexcel', level: 'O Level', price: 12.50, duration: '8 Weeks', rating: 4.9, students: 850, tutor: 'Prof. Sana Mir', image: 'https://images.unsplash.com/photo-1603126732092-5936c0439cc7?auto=format&fit=crop&q=80&w=600' },
  { id: 'c3', title: 'FSc Biology - Cell & Genetics', subject: 'Biology', board: 'FBISE', level: 'FSc', price: 9.99, duration: '10 Weeks', rating: 4.7, students: 2100, tutor: 'Dr. Usman Ali', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600' },
  { id: 'c4', title: 'A Level Mathematics - Pure Maths 1', subject: 'Mathematics', board: 'Cambridge', level: 'A Level', price: 18.00, duration: '15 Weeks', rating: 5.0, students: 3400, tutor: 'Mr. Zafar Iqbal', image: 'https://images.unsplash.com/photo-1509228468518-180dd48a5791?auto=format&fit=crop&q=80&w=600' },
];

export default function Courses() {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredCourses = MOCK_COURSES.filter(c => 
    (!selectedBoard || c.board === selectedBoard) &&
    (!selectedLevel || c.level === selectedLevel)
  );

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Available Courses</h1>
          <p className="text-slate-600 max-w-2xl">
            Choose specialized courses designed for your specific exam board and level.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full mb-1">Board</span>
            <button 
              onClick={() => setSelectedBoard(null)}
              className={cn("px-4 py-2 rounded-full text-sm font-bold border transition-all", !selectedBoard ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-slate-600 border-slate-200 hover:border-brand-electric")}
            >
              All Boards
            </button>
            {BOARDS.map(board => (
              <button 
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={cn("px-4 py-2 rounded-full text-sm font-bold border transition-all", selectedBoard === board ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-slate-600 border-slate-200 hover:border-brand-electric")}
              >
                {board}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full mb-1">Level</span>
            <button 
              onClick={() => setSelectedLevel(null)}
              className={cn("px-4 py-2 rounded-full text-sm font-bold border transition-all", !selectedLevel ? "bg-brand-electric text-white border-brand-electric" : "bg-white text-slate-600 border-slate-200 hover:border-brand-electric")}
            >
              All Levels
            </button>
            {LEVELS.map(level => (
              <button 
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={cn("px-4 py-2 rounded-full text-sm font-bold border transition-all", selectedLevel === level ? "bg-brand-electric text-white border-brand-electric" : "bg-white text-slate-600 border-slate-200 hover:border-brand-electric")}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <motion.div 
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white group rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-electric/10 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider text-brand-electric shadow-sm">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <span>{course.subject}</span>
                  <span>•</span>
                  <span>{course.board}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-electric transition-colors leading-tight">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-slate-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-2xl font-black text-slate-900">${course.price}</span>
                    <span className="text-xs text-slate-400 font-bold ml-1">USD</span>
                  </div>
                  <button className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-brand-electric/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-40">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your filters for better results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
