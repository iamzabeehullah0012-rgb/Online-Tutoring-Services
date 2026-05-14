import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MapPin, Award, CheckCircle2, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

const STORIES = [
  {
    id: 1,
    name: 'Amina Mansoor',
    location: 'Dubai, UAE',
    curriculum: 'A Levels',
    grades: '4 A*',
    subjects: 'Physics, Math, Further Math, CS',
    testimonial: 'The recorded sessions were a lifesaver. Being able to re-watch complex mechanics derivations at my own pace made all the difference in my A-Level Physics prep.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    university: 'Imperial College London',
  },
  {
    id: 2,
    name: 'Zaid Siddiqui',
    location: 'London, UK',
    curriculum: 'IGCSE',
    grades: '9 Grade 9s',
    subjects: 'Pure Math, Add Math, Bio, Chem, Phys',
    testimonial: 'AceExams worksheets are better than any textbook. They are perfectly aligned with the latest marking schemes, which helped me understand exactly what examiners look for.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zaid',
    university: 'Winchester College',
  },
  {
    id: 3,
    name: 'Rida Fatima',
    location: 'Lahore, Pakistan',
    curriculum: 'A Levels',
    grades: '3 A*',
    subjects: 'Chemistry, Biology, Physics',
    testimonial: 'I was struggling with Chemistry organic reactions. The structured notes from AceExams helped me visualize the mechanisms clearly. Went from a B to an A*!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    university: 'King Edward Medical University',
  },
  {
    id: 4,
    name: 'Omar Khalil',
    location: 'Riyadh, Saudi Arabia',
    curriculum: 'IGCSE',
    grades: '8 A*',
    subjects: 'ICT, Economics, Business, Math',
    testimonial: 'The live recorded modules allowed me to balance my school work and tuition effectively. The worksheets provided after every session were instrumental in my practice.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=omar',
    university: 'Education City, Qatar',
  },
];

export default function SuccessStories() {
  return (
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-40 transition-colors relative overflow-hidden">
      {/* Background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-danger rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <span className="inline-block bg-brand-danger/10 text-brand-danger text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full border border-brand-danger/20 italic">
               Wall of Excellence
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Global <span className="text-brand-purple">Success</span> Stories
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Meet the students from around the world who used our resources, notes, and recorded sessions to achieve academic mastery.
            </p>
          </motion.div>
        </header>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: 'A* Grades', value: '450+', icon: Trophy, color: 'text-brand-accent', bg: 'bg-brand-accent/10', border: 'border-brand-accent/20' },
            { label: 'Countries', value: '12+', icon: MapPin, color: 'text-brand-purple', bg: 'bg-brand-purple/10', border: 'border-brand-purple/20' },
            { label: 'Success Rate', value: '98%', icon: CheckCircle2, color: 'text-brand-danger', bg: 'bg-brand-danger/10', border: 'border-brand-danger/20' },
            { label: 'Top Universities', value: '85+', icon: Award, color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-8 text-center flex flex-col items-center justify-center space-y-4 hover-float"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border", stat.bg, stat.border, stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {STORIES.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-10 lg:p-12 group transition-all duration-500 flex flex-col lg:flex-row gap-10 items-center lg:items-start relative overflow-hidden hover-float"
            >
              <div className="w-40 h-40 shrink-0 relative">
                <motion.div 
                  animate={{ rotate: [6, 12, 6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-purple rounded-[2.5rem] opacity-20"
                ></motion.div>
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover rounded-[2.5rem] relative z-10 border-4 border-brand-primary shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <motion.div 
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center z-20 shadow-lg border-2 border-brand-purple text-brand-purple"
                >
                   <Quote className="w-6 h-6 fill-current" />
                </motion.div>
              </div>

              <div className="space-y-6 flex-grow relative z-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-brand-purple/20">
                      {story.curriculum}
                    </span>
                    <span className="px-3 py-1 bg-brand-danger/20 text-brand-danger rounded-lg text-[10px] font-black uppercase tracking-[0.2em]">
                      {story.grades}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{story.name}</h3>
                  <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-danger" />
                    {story.location}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed font-medium italic">
                  "{story.testimonial}"
                </p>

                <div className="pt-6 border-t border-white/10 space-y-4">
                   <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                     <Award className="w-4 h-4 mr-2 text-brand-danger" />
                     Acceptance: {story.university}
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-purple bg-brand-purple/5 px-4 py-2 rounded-xl inline-block border border-brand-purple/10">
                     Focus: {story.subjects}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 lg:p-24 rounded-[4rem] bg-brand-primary text-center text-white border border-brand-danger/10 relative overflow-hidden shadow-2xl section-float">
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">Become our next <span className="text-brand-danger">A* Story</span></h2>
              <p className="text-lg text-slate-400 mb-12 font-medium">Join thousands of students who have transformed their grades using our verified revision notes and recorded masterclasses.</p>
              <button className="px-12 py-5 bg-brand-danger text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-brand-danger/30 button-glow-danger">
                 Explore Revision Resources
              </button>
           </div>
           <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-danger/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
