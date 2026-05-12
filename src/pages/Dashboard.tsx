import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { BookOpen, Clock, Award, Target, ChevronRight, Play, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const PROGRESS_DATA = [
  { day: 'Mon', score: 65 },
  { day: 'Tue', score: 70 },
  { day: 'Wed', score: 68 },
  { day: 'Thu', score: 85 },
  { day: 'Fri', score: 92 },
  { day: 'Sat', score: 88 },
  { day: 'Sun', score: 95 },
];

export default function Dashboard() {
  const { user, profile } = useAuth();

  return (
    <div className="bg-brand-slate-50 dark:bg-slate-950 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <main className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          
          {/* Welcome Card (Hero in Bento) */}
          <div className="md:col-span-12 lg:col-span-7 bg-linear-to-br from-brand-primary via-brand-purple to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-center border border-brand-purple/30">
             <div className="relative z-10">
                <span className="bg-white/10 text-brand-accent text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-brand-accent/20">
                   Welcome back, {profile?.displayName?.split(' ')[0]}!
                </span>
                <h1 className="text-3xl lg:text-5xl font-extrabold mt-4 leading-tight mb-4">
                  Master Your Exams with <br/>Expert Guidance.
                </h1>
                <p className="text-slate-300 mb-6 max-w-md text-sm lg:text-base leading-relaxed">
                  Continue your Physics journey where you left off. 85% of students improve by 2 grades in 4 weeks.
                </p>
                <div className="flex gap-3">
                  <button className="bg-brand-accent text-brand-primary font-bold px-6 py-3 rounded-2xl hover:brightness-110 transition-all text-sm">Resume Learning</button>
                  <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold px-6 py-3 rounded-2xl hover:bg-white/10 transition-all text-sm">Book Trial</button>
                </div>
             </div>
             <div className="absolute top-0 right-0 p-8 hidden sm:block">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center">
                   <span className="text-3xl font-black text-brand-accent">98%</span>
                   <span className="text-[10px] uppercase font-bold text-slate-300">Success</span>
                </div>
             </div>
          </div>

          {/* Quick Subjects Selection (Vertical Bento) */}
          <div className="md:col-span-12 lg:col-span-5 bg-white dark:bg-brand-primary/50  backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-brand-purple/20 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">My Subjects</h2>
              <button className="text-sm font-semibold text-brand-primary dark:text-brand-accent hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {[
                { id: 'math', name: 'Mathematics', level: 'FSc Part II', color: 'bg-brand-accent/5 dark:bg-brand-accent/5', border: 'border-brand-accent/20 dark:border-brand-accent/10', icon: 'M', tColor: 'bg-brand-primary text-brand-accent' },
                { id: 'physics', name: 'Physics', level: 'Cambridge O Level', color: 'bg-violet-50 dark:bg-violet-900/20', border: 'border-violet-100 dark:border-violet-800', icon: 'P', tColor: 'bg-brand-purple text-white' },
                { id: 'chemistry', name: 'Chemistry', level: 'Edexcel IAL', color: 'bg-slate-50 dark:bg-slate-800/50', border: 'border-slate-100 dark:border-slate-700', icon: 'C', tColor: 'bg-slate-900 text-white' },
                { id: 'biology', name: 'Biology', level: 'Cambridge A Level', color: 'bg-lime-50 dark:bg-lime-900/20', border: 'border-lime-100 dark:border-lime-800', icon: 'B', tColor: 'bg-lime-600 text-white' },
              ].map((sub) => (
                <div key={sub.id} className={cn("p-5 rounded-2xl border flex flex-col items-start hover:shadow-md transition-all cursor-pointer", sub.color, sub.border)}>
                  <div className={cn("w-10 h-10 rounded-xl mb-3 flex items-center justify-center font-bold text-sm", sub.tColor)}>{sub.icon}</div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{sub.name}</span>
                  <span className="text-[11px] text-slate-500">{sub.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracking Card */}
          <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-brand-primary/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-brand-purple/20 shadow-sm min-h-[250px]">
             <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Learning Progress</h2>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-xs font-bold mb-3">
                      <span className="text-slate-500 uppercase tracking-wide">Course Completion</span>
                      <span className="text-brand-primary dark:text-brand-accent">72%</span>
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-brand-accent h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(190,242,100,0.5)]" style={{ width: '72%' }}></div>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                   {[
                     { val: '12', label: 'Streak' },
                     { val: '48', label: 'Hours' },
                     { val: '156', label: 'Badges' },
                   ].map((stat) => (
                     <div key={stat.label} className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                        <p className="text-xl lg:text-2xl font-black text-slate-800 dark:text-white">{stat.val}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{stat.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* AI Tutor Assistant Card */}
          <div className="md:col-span-6 lg:col-span-3 bg-brand-primary rounded-3xl p-8 text-white border border-brand-purple/30 relative overflow-hidden flex flex-col shadow-xl shadow-brand-primary/20">
             <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20">
                   <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">EduBot AI</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">Ask any question about Physics laws or Math formulas instantly.</p>
                <button className="w-full py-4 bg-brand-purple hover:bg-brand-purple/80 rounded-2xl font-bold text-sm transition-all active:scale-95 border border-white/10 uppercase tracking-widest text-[10px]">Open Assistant</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl"></div>
          </div>

          {/* Performance Chart (Wide Card) */}
          <div className="md:col-span-12 lg:col-span-5 bg-white dark:bg-brand-primary/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-brand-purple/20 shadow-sm min-h-[300px]">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Study Score</h3>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                   <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                   <span>Accuracy %</span>
                </div>
             </div>
             <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PROGRESS_DATA}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#bef264" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#bef264" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" opacity={0.1} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#2e1065', borderRadius: '12px', border: '1px solid rgba(190, 242, 100, 0.2)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', color: '#fff' }} itemStyle={{ color: '#bef264' }} />
                    <Area type="monotone" dataKey="score" stroke="#bef264" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Upcoming Session Banner (Footer in grid) */}
          <div className="md:col-span-12 bg-white dark:bg-brand-primary/50 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-brand-purple/20 p-6 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4">
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center shrink-0">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <p className="font-bold text-slate-800 dark:text-slate-100 leading-none mb-1">Live Session: Thermodynamics Mastery</p>
                   <p className="text-xs text-slate-500 font-medium">With Dr. Sarah J. • Today at 4:30 PM (Starts in 45m)</p>
                </div>
             </div>
             <button className="w-full md:w-auto px-10 py-3 bg-brand-primary text-brand-accent border border-brand-accent/20 hover:bg-brand-accent hover:text-brand-primary rounded-2xl text-xs uppercase tracking-widest font-black transition-all shadow-lg active:scale-95">Join Class Now</button>
          </div>

        </main>
      </div>
    </div>
  );
}
