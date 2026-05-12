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
    <div className="bg-brand-slate-50 dark:bg-slate-950 min-h-screen py-20 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="inline-block bg-brand-accent/10 dark:bg-brand-accent/5 text-brand-primary dark:text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-accent/20">
             Premium resources
          </span>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Revision Notes</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need for your exams. Expert-crafted notes, topic-wise questions, and previous year papers.
          </p>
        </header>

        {/* Toolbar */}
        <div className="bg-white dark:bg-brand-primary/50 backdrop-blur-xl p-4 rounded-[2rem] shadow-sm border border-slate-200 dark:border-brand-purple/20 mb-12 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-grow flex items-center space-x-3 px-6 w-full">
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search topics (e.g. Differentiation)..." 
              className="w-full bg-transparent border-none py-3 focus:ring-0 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400" 
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full lg:w-auto p-1">
            {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map(s => (
              <button 
                key={s}
                onClick={() => setActiveSubject(s)}
                className={cn(
                  "px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all",
                  activeSubject === s 
                    ? "bg-brand-accent text-brand-primary shadow-lg shadow-brand-accent/20" 
                    : "bg-slate-50 dark:bg-brand-primary/40 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-primary/60 border border-transparent dark:border-brand-purple/10"
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
            <div className="bg-white dark:bg-brand-primary/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-200 dark:border-brand-purple/20 shadow-sm">
              <h3 className="text-sm font-black text-slate-900 dark:text-white mb-8 flex items-center uppercase tracking-widest">
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
                      "w-full flex items-center justify-between p-5 rounded-2xl text-sm font-bold transition-all",
                      activeType === type.id 
                        ? "bg-brand-primary dark:bg-brand-accent text-white dark:text-brand-primary shadow-lg shadow-brand-accent/10" 
                        : "text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-brand-primary/60"
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

            <div className="bg-linear-to-br from-brand-primary to-brand-purple p-10 rounded-[2.5rem] text-white overflow-hidden relative shadow-xl border border-white/10">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <Award className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">Get Premium Access</h3>
                <p className="text-sm text-slate-300 mb-10 font-medium leading-relaxed">Unlock all past papers and detailed marking schemes.</p>
                <button className="w-full py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-colors">Upgrade Now</button>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
                  className="bento-card p-10 group"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm",
                      res.type === 'note' ? "bg-brand-accent/10 text-brand-accent" : res.type === 'past-paper' ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600" : "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600"
                    )}>
                      <FileText className="w-8 h-8" />
                    </div>
                    {res.free ? (
                      <span className="px-4 py-2 bg-brand-accent/20 text-brand-primary dark:text-brand-accent text-[10px] font-black rounded-full uppercase tracking-widest">Free</span>
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-brand-primary/40 rounded-full text-slate-400">
                        <Lock className="w-3 h-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Premium</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-brand-accent transition-colors leading-tight">{res.title}</h4>
                  <p className="text-sm font-medium text-slate-400 mb-10 uppercase tracking-widest">Topic: {res.topic}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-brand-purple/20">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{res.type}</span>
                    <button 
                      onClick={() => !user ? signInWithGoogle() : null}
                      className="px-8 py-3 bg-brand-primary dark:bg-brand-accent text-white dark:text-brand-primary rounded-2xl font-black text-xs hover:brightness-110 transition-all flex items-center space-x-2 uppercase tracking-widest"
                    >
                      <Download className="w-4 h-4" />
                      <span>{user ? 'Download' : 'Login'}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
              {filteredResources.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-slate-400 font-medium">No resources found for this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


