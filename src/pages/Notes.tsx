import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Download, Lock, SearchIcon, Filter, Layers, CheckCircle, Award } from 'lucide-react';
import { SUBJECTS } from '../constants';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

const MOCK_RESOURCES = [
  { id: '1', title: 'Calculus: Differentiation Rules', subject: 'Mathematics', topic: 'Calculus', type: 'note', free: true },
  { id: '2', title: 'Mechanics: Kinematics Solved Papers', subject: 'Physics', topic: 'Mechanics', type: 'past-paper', free: false },
  { id: '3', title: 'Organic Chemistry MCQ Quiz', subject: 'Chemistry', topic: 'Organic', type: 'quiz', free: true },
  { id: '4', title: 'Photosynthesis Deep Dive', subject: 'Biology', topic: 'Botany', type: 'note', free: false },
  { id: '5', title: '2023 A Level Math Past Paper', subject: 'Mathematics', topic: 'Full Syllabus', type: 'past-paper', free: false },
];

export default function Notes() {
  const { user, signInWithGoogle } = useAuth();
  const [activeSubject, setActiveSubject] = useState('Mathematics');
  const [activeType, setActiveType] = useState('all');

  const filteredResources = MOCK_RESOURCES.filter(r => 
    r.subject === activeSubject && 
    (activeType === 'all' || r.type === activeType)
  );

  return (
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="inline-block bg-brand-danger/10 text-brand-danger text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-danger/20 italic">
             Premium Resources
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">Revision <span className="text-brand-purple">Notes</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need for your exams. Expert-crafted notes, topic-wise questions, and previous year papers.
          </p>
        </header>

        {/* Toolbar */}
        <div className="bg-brand-primary/40 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-white/5 mb-12 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-grow flex items-center space-x-3 px-6 w-full">
            <Search className="w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search topics (e.g. Differentiation)..." 
              className="w-full bg-transparent border-none py-3 focus:ring-0 text-sm font-bold text-white placeholder:text-slate-600" 
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full lg:w-auto p-1">
            {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map(s => (
              <button 
                key={s}
                onClick={() => setActiveSubject(s)}
                className={cn(
                  "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all",
                  activeSubject === s 
                    ? "bg-brand-purple text-brand-primary shadow-lg shadow-brand-purple/20 button-glow-purple" 
                    : "bg-brand-primary/40 text-slate-400 hover:bg-brand-primary/60 border border-white/5"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-primary/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <h3 className="text-sm font-black text-white mb-8 flex items-center uppercase tracking-widest">
                <Filter className="w-4 h-4 mr-3 text-brand-accent" />
                Filter by Type
              </h3>
              <div className="space-y-4">
                {[
                  { id: 'all', label: 'All Resources', icon: Layers },
                  { id: 'note', label: 'Revision Notes', icon: FileText },
                  { id: 'past-paper', label: 'Past Papers', icon: CheckCircle },
                  { id: 'quiz', label: 'Solved MCQs', icon: CheckCircle },
                ].map(type => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                      activeType === type.id 
                        ? "bg-brand-danger text-white shadow-lg shadow-brand-danger/10 button-glow-danger" 
                        : "text-slate-400 hover:bg-brand-primary/60"
                    )}
                  >
                    <div className="flex items-center">
                      <type.icon className="w-4 h-4 mr-4" />
                      {type.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-brand-primary p-10 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl border border-white/10 hover-float">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <Award className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight uppercase tracking-widest text-xs">Get Premium Access</h3>
                <p className="text-sm text-slate-400 mb-10 font-medium leading-relaxed">Unlock all past papers and detailed marking schemes.</p>
                <button className="w-full py-5 bg-brand-danger text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-colors shadow-xl shadow-brand-danger/20 button-glow-danger">Upgrade Now</button>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>

          {/* Resources Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.map((res) => (
                <motion.div 
                  key={res.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bento-card p-10 group hover-float"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg",
                      res.type === 'note' ? "bg-brand-accent/10 text-brand-accent" : res.type === 'past-paper' ? "bg-purple-900/40 text-purple-400" : "bg-emerald-900/40 text-emerald-400"
                    )}>
                      <FileText className="w-8 h-8" />
                    </div>
                    {res.free ? (
                      <span className="px-4 py-2 bg-brand-accent/20 text-brand-accent text-[10px] font-black rounded-full uppercase tracking-widest border border-brand-accent/20">Free</span>
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-2 bg-brand-primary/60 rounded-full text-slate-500 border border-white/5">
                        <Lock className="w-3 h-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-brand-accent transition-colors leading-tight">{res.title}</h4>
                  <p className="text-[10px] font-black text-slate-500 mb-10 uppercase tracking-widest">Topic: {res.topic}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{res.type}</span>
                    <button 
                      onClick={() => !user ? signInWithGoogle() : null}
                      className="px-8 py-3 bg-brand-purple text-brand-primary rounded-2xl font-black text-[10px] transition-all flex items-center space-x-2 uppercase tracking-widest shadow-xl shadow-brand-purple/20 button-glow-purple"
                    >
                      <Download className="w-4 h-4" />
                      <span>{user ? 'Download' : 'Login'}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
              {filteredResources.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-slate-500 font-black uppercase tracking-widest">No resources found for this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


