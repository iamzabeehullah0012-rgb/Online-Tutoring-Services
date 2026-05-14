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
    <div className="bg-brand-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block bg-brand-danger/10 text-brand-danger text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-danger/20 italic">
             Curated Curriculum
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight tracking-tight">Available Courses</h1>
          <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            Choose specialized courses designed for your specific exam board and level.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex flex-wrap gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 w-full mb-1">Board</span>
            <button 
              onClick={() => setSelectedBoard(null)}
              className={cn("px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all", !selectedBoard ? "bg-brand-accent text-brand-primary border-brand-accent shadow-lg shadow-brand-accent/20 button-glow" : "bg-brand-primary/40 text-slate-400 border-white/5 hover:border-brand-accent/30")}
            >
              All Boards
            </button>
            {BOARDS.map(board => (
              <button 
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={cn("px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all", selectedBoard === board ? "bg-brand-purple text-brand-primary border-brand-purple shadow-lg shadow-brand-purple/20 button-glow-purple" : "bg-brand-primary/40 text-slate-400 border-white/5 hover:border-brand-purple/30")}
              >
                {board}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 w-full mb-1">Level</span>
            <button 
              onClick={() => setSelectedLevel(null)}
              className={cn("px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all", !selectedLevel ? "bg-brand-accent text-brand-primary border-brand-accent shadow-lg shadow-brand-accent/20 button-glow" : "bg-brand-primary/40 text-slate-400 border-white/5 hover:border-brand-accent/30")}
            >
              All Levels
            </button>
            {LEVELS.map(level => (
              <button 
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={cn("px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all", selectedLevel === level ? "bg-brand-danger text-white border-brand-danger shadow-lg shadow-brand-danger/20 button-glow-danger" : "bg-brand-primary/40 text-slate-400 border-white/5 hover:border-brand-danger/30")}
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
              className="bento-card group p-0 overflow-hidden hover-float border border-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-4 py-1.5 bg-brand-danger/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                  <span>{course.subject}</span>
                  <span>•</span>
                  <span>{course.board}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-6 group-hover:text-brand-accent transition-colors leading-tight tracking-tight">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2 text-brand-accent">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-black">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <span className="text-2xl font-black text-white tracking-tighter">${course.price}</span>
                    <span className="text-[10px] text-slate-500 font-black ml-2 uppercase tracking-widest">USD</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-primary shadow-lg shadow-brand-accent/20 button-glow">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-40 border border-dashed border-white/10 rounded-[3rem] bg-brand-primary/40 backdrop-blur-xl">
            <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600 border border-white/5 shadow-xl">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">No courses found</h3>
            <p className="text-slate-400 font-bold">Try adjusting your filters for better results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
