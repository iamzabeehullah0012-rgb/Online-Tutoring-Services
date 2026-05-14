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
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block bg-brand-accent/10 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-accent/20 italic">
             Curated Curriculum
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">Explore Subjects</h1>
          <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            Choose a subject to start exploration. High-quality study materials and expert tutors available for each.
          </p>
          <div className="mt-10 relative max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for a subject (e.g. Physics)..." 
              className="w-full bg-brand-primary/40 border border-white/5 rounded-[2rem] py-5 pl-14 pr-8 outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all shadow-2xl text-lg text-white placeholder:text-slate-600"
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
              className="group bento-card p-10 hover-float cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-primary text-brand-purple flex items-center justify-center mb-10 shadow-lg group-hover:bg-brand-purple group-hover:text-brand-primary transition-all duration-500 border border-white/5">
                   <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-none">{subject.name}</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-sm font-medium">
                  {subject.description} Learn every concept from scratch with our specialized curriculum.
                </p>

                <div className="space-y-4 mb-10">
                  {['O Level', 'A Level', 'FSc'].map(level => (
                    <div key={level} className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mr-3 shadow-[0_0_8px_rgba(216,180,254,0.5)]" />
                      <span>{subject.name} for {level}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/courses?subject=${subject.id}`}
                  className="w-full py-5 rounded-[1.5rem] bg-brand-danger text-white border border-white/10 font-black flex items-center justify-center space-x-2 active:scale-95 transition-all uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-brand-danger/10 button-glow-danger"
                >
                  <span>Explore Subject</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-brand-accent/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-accent/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-20 bg-brand-primary/40 rounded-[40px] border border-dashed border-white/10">
            <p className="text-slate-500 font-black uppercase tracking-widest">No subjects found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}


