import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import { SUBJECTS } from '../constants';
import { Link, useParams } from 'react-router-dom';

export default function Subjects() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = SUBJECTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-brand-slate-50 dark:bg-slate-950 min-h-screen py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6">
             Curated Curriculum
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Explore Subjects</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            Choose a subject to start exploration. High-quality study materials and expert tutors available for each.
          </p>
          <div className="mt-10 relative max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for a subject (e.g. Physics)..." 
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] py-5 pl-14 pr-8 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject) => (
            <motion.div 
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bento-card p-10 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-10 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{subject.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-sm font-medium">
                  {subject.description} Learn every concept from scratch with our specialized curriculum.
                </p>

                <div className="space-y-4 mb-10">
                  {['O Level', 'A Level', 'FSc'].map(level => (
                    <div key={level} className="flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      <span>{subject.name} for {level}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/courses?subject=${subject.id}`}
                  className="w-full py-5 rounded-[1.5rem] bg-slate-900 text-white font-black flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all uppercase tracking-widest text-xs"
                >
                  <span>Explore Subject</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-slate-200">
            <p className="text-slate-500 text-lg">No subjects found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}


