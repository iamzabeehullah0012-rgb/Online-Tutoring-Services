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
    <div className="bg-brand-slate-50 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <main className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          
          {/* Welcome Card (Hero in Bento) */}
          <div className="md:col-span-12 lg:col-span-7 bg-brand-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-center border border-white/10 hover-float">
             <div className="relative z-10">
                <span className="bg-white/10 text-brand-purple text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-brand-purple/20 italic">
                   Welcome back, {profile?.displayName?.split(' ')[0] || 'Student'}!
                </span>
                <h1 className="text-3xl lg:text-5xl font-black mt-4 leading-tight mb-4 tracking-tight uppercase">
                  Master Your Exams with <br/><span className="text-brand-purple">Expert Guidance.</span>
                </h1>
                <p className="text-slate-400 mb-6 max-w-md text-sm lg:text-base leading-relaxed font-medium">
                  Continue your Physics journey where you left off. 85% of students improve by 2 grades in 4 weeks.
                </p>
                <div className="flex gap-3">
                  <button className="bg-brand-accent text-brand-primary font-black px-6 py-3 rounded-2xl transition-all text-[10px] uppercase tracking-widest button-glow">Resume Learning</button>
                  <button className="bg-brand-danger text-white border border-brand-danger/10 font-black px-6 py-3 rounded-2xl transition-all text-[10px] uppercase tracking-widest button-glow-danger">Book Trial</button>
                </div>
             </div>
             <div className="absolute top-0 right-0 p-8 hidden sm:block">
                <div className="w-24 h-24 bg-brand-purple/10 backdrop-blur-md rounded-2xl border border-brand-purple/20 flex flex-col items-center justify-center text-brand-purple">
                   <span className="text-3xl font-black">98%</span>
                   <span className="text-[10px] uppercase font-black text-slate-400">Success</span>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl"></div>
          </div>

          {/* Quick Subjects Selection (Vertical Bento) */}
          <div className="md:col-span-12 lg:col-span-5 bg-brand-primary/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm flex flex-col hover-float">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-black text-white uppercase tracking-widest">My Subjects</h2>
              <button className="text-[10px] font-black text-brand-purple hover:underline uppercase tracking-widest">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {[
                { id: 'math', name: 'Mathematics', level: 'FSc Part II', color: 'bg-brand-purple/5', border: 'border-brand-purple/10', icon: 'M', tColor: 'bg-brand-primary text-brand-purple' },
                { id: 'physics', name: 'Physics', level: 'Cambridge O Level', color: 'bg-brand-danger/10', border: 'border-brand-danger/10', icon: 'P', tColor: 'bg-brand-danger text-white' },
                { id: 'chemistry', name: 'Chemistry', level: 'Edexcel IAL', color: 'bg-brand-accent/5', border: 'border-brand-accent/10', icon: 'C', tColor: 'bg-brand-accent text-brand-primary' },
                { id: 'biology', name: 'Biology', level: 'Cambridge A Level', color: 'bg-white/5', border: 'border-white/5', icon: 'B', tColor: 'bg-white text-brand-primary' },
              ].map((sub) => (
                <div key={sub.id} className={cn("p-5 rounded-2xl border flex flex-col items-start hover:shadow-md transition-all cursor-pointer group", sub.color, sub.border)}>
                  <div className={cn("w-10 h-10 rounded-xl mb-3 flex items-center justify-center font-black text-sm group-hover:scale-110 transition-transform", sub.tColor)}>{sub.icon}</div>
                  <span className="font-black text-white text-sm tracking-tight">{sub.name}</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{sub.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracking Card */}
          <div className="md:col-span-6 lg:col-span-4 bg-brand-primary/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm min-h-[250px] hover-float">
             <h2 className="text-sm font-black text-white uppercase tracking-widest mb-6 font-black">Learning Progress</h2>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-[10px] font-black mb-3">
                      <span className="text-slate-500 uppercase tracking-widest">Course Completion</span>
                      <span className="text-brand-purple">72%</span>
                   </div>
                   <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-brand-purple h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(216,180,254,0.3)]" style={{ width: '72%' }}></div>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                   {[
                     { val: '12', label: 'Streak', color: 'text-brand-accent' },
                     { val: '48', label: 'Hours', color: 'text-brand-purple' },
                     { val: '156', label: 'Badges', color: 'text-brand-danger' },
                   ].map((stat) => (
                     <div key={stat.label} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className={cn("text-xl lg:text-2xl font-black tracking-tighter", stat.color)}>{stat.val}</p>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* AI Tutor Assistant Card */}
          <div className="md:col-span-6 lg:col-span-3 bg-brand-primary rounded-3xl p-8 text-white border border-white/10 relative overflow-hidden flex flex-col shadow-xl shadow-brand-purple/5 hover-float">
             <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 bg-brand-danger text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-danger/20">
                   <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black mb-3 tracking-tight">EduBot AI</h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">Ask any question about Physics laws or Math formulas instantly.</p>
                <button className="w-full py-4 bg-brand-purple text-brand-primary rounded-2xl font-black text-sm transition-all active:scale-95 border border-brand-purple/10 uppercase tracking-widest text-[10px] button-glow-purple">Open Assistant</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-brand-danger/5 rounded-full blur-3xl"></div>
          </div>

          {/* Performance Chart (Wide Card) */}
          <div className="md:col-span-12 lg:col-span-5 bg-brand-primary/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm min-h-[300px] hover-float">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Study Score</h3>
                <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                   <span className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(216,180,254,0.5)]"></span>
                   <span>Accuracy %</span>
                </div>
             </div>
             <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={PROGRESS_DATA}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d8b4fe" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#d8b4fe" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" opacity={0.05} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10, fontWeight: 900}} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#0a192f', borderRadius: '12px', border: '1px solid rgba(216, 180, 254, 0.2)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', color: '#fff' }} itemStyle={{ color: '#d8b4fe' }} labelStyle={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase', fontWeight: 900 }} />
                    <Area type="monotone" dataKey="score" stroke="#d8b4fe" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Upcoming Session Banner (Footer in grid) */}
          <div className="md:col-span-12 bg-brand-primary/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4 section-float">
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-brand-danger/10 text-brand-danger rounded-2xl flex items-center justify-center shrink-0 border border-brand-danger/20">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <p className="font-black text-white leading-none mb-2 tracking-tight">Live Session: Thermodynamics Mastery</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">With Dr. Sarah J. • Today at 4:30 PM (Starts in 45m)</p>
                </div>
             </div>
             <button className="w-full md:w-auto px-10 py-3 bg-brand-danger text-white rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all shadow-lg active:scale-95 button-glow-danger">Join Class Now</button>
          </div>

        </main>
      </div>
    </div>
  );
}
