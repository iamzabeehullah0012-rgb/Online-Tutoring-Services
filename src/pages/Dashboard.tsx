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
          <div className="md:col-span-12 lg:col-span-7 bg-linear-to-br from-blue-600 via-indigo-600 to-brand-purple rounded-3xl p-8 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-center">
             <div className="relative z-10">
                <span className="bg-white/20 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                  Welcome back, {profile?.displayName?.split(' ')[0]}!
                </span>
                <h1 className="text-3xl lg:text-5xl font-extrabold mt-4 leading-tight mb-4">
                  Master Your Exams with <br/>Expert Guidance.
                </h1>
                <p className="text-blue-100 mb-6 max-w-md text-sm lg:text-base leading-relaxed">
                  Continue your Physics journey where you left off. 85% of students improve by 2 grades in 4 weeks.
                </p>
                <div className="flex gap-3">
                  <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-2xl hover:bg-blue-50 transition-all text-sm">Resume Learning</button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all text-sm">Book Trial</button>
                </div>
             </div>
             <div className="absolute top-0 right-0 p-8 hidden sm:block">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center">
                   <span className="text-3xl font-black text-white">98%</span>
                   <span className="text-[10px] uppercase font-bold text-blue-200">Success</span>
                </div>
             </div>
          </div>

          {/* Quick Subjects Selection (Vertical Bento) */}
          <div className="md:col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">My Subjects</h2>
              <button className="text-sm font-semibold text-blue-600 hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {[
                { id: 'math', name: 'Mathematics', level: 'FSc Part II', color: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-100 dark:border-blue-800', icon: 'M', tColor: 'bg-blue-500' },
                { id: 'physics', name: 'Physics', level: 'Cambridge O Level', color: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-100 dark:border-indigo-800', icon: 'P', tColor: 'bg-indigo-500' },
                { id: 'chemistry', name: 'Chemistry', level: 'Edexcel IAL', color: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-100 dark:border-purple-800', icon: 'C', tColor: 'bg-purple-500' },
                { id: 'biology', name: 'Biology', level: 'Cambridge A Level', color: 'bg-teal-50 dark:bg-teal-900/20', border: 'border-teal-100 dark:border-teal-800', icon: 'B', tColor: 'bg-teal-500' },
              ].map((sub) => (
                <div key={sub.id} className={cn("p-5 rounded-2xl border flex flex-col items-start hover:shadow-md transition-all cursor-pointer", sub.color, sub.border)}>
                  <div className={cn("w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white font-bold", sub.tColor)}>{sub.icon}</div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{sub.name}</span>
                  <span className="text-[11px] text-slate-500">{sub.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracking Card */}
          <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[250px]">
             <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Learning Progress</h2>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-xs font-bold mb-3">
                      <span className="text-slate-500 uppercase tracking-wide">Course Completion</span>
                      <span className="text-blue-600">72%</span>
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
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
          <div className="md:col-span-6 lg:col-span-3 bg-slate-950 rounded-3xl p-8 text-white border border-slate-800 relative overflow-hidden flex flex-col">
             <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                   <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">EduBot AI</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">Ask any question about Physics laws or Math formulas instantly.</p>
                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold text-sm transition-all active:scale-95">Open Assistant</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Performance Chart (Wide Card) */}
          <div className="md:col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[300px]">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Study Score</h3>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Accuracy %</span>
                </div>
             </div>
             <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PROGRESS_DATA}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Upcoming Session Banner (Footer in grid) */}
          <div className="md:col-span-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4">
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/30 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <p className="font-bold text-slate-800 dark:text-slate-100">Live Session: Thermodynamics Mastery</p>
                   <p className="text-xs text-slate-500 font-medium">With Dr. Sarah J. • Today at 4:30 PM (Starts in 45m)</p>
                </div>
             </div>
             <button className="w-full md:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">Join Class</button>
          </div>

        </main>
      </div>
    </div>
  );
}
