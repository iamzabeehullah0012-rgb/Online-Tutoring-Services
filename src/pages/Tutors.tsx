import React from 'react';
import { motion } from 'motion/react';
import { Star, GraduationCap, MapPin, Calendar, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_TUTORS = [
  { id: 't1', name: 'Dr. Sarah Ahmed', subjects: ['Physics', 'Mathematics'], rating: 5.0, reviews: 450, experience: '12 Years', bio: 'Expert in A-Level Physics with a PhD from Cambridge University.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', qualifications: ['PhD Physics', 'MSc Mathematics'] },
  { id: 't2', name: 'Prof. Muhammad Ali', subjects: ['Chemistry', 'Biology'], rating: 4.9, reviews: 320, experience: '15 Years', bio: 'Senior educator specializing in FSc and O-Level sciences.', image: 'https://images.unsplash.com/photo-1544717297-fa15739a544c?auto=format&fit=crop&q=80&w=400', qualifications: ['MPhil Biology', 'BSc Chemistry'] },
  { id: 't3', name: 'Ms. Emily Watson', subjects: ['Mathematics'], rating: 4.8, reviews: 180, experience: '7 Years', bio: 'Passionate math tutor focusing on Pure Maths and Statistics.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', qualifications: ['BSc Mathematics', 'PGCE Education'] },
];

export default function Tutors() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Our Expert Tutors</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Learn from the top 1% of educators. All our tutors are vetted for subject expertise and teaching excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_TUTORS.map((tutor) => (
            <motion.div 
              key={tutor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white group rounded-[3rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-electric/10 transition-all duration-500"
            >
              <div className="relative">
                <img 
                  src={tutor.image} 
                  alt={tutor.name}
                  className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl flex items-center space-x-1 text-yellow-500 shadow-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-black text-slate-900">{tutor.rating}</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 right-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-8 pt-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.subjects.map(s => (
                    <span key={s} className="px-3 py-1 bg-brand-electric/5 text-brand-electric rounded-lg text-[10px] font-black uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{tutor.name}</h3>
                <p className="text-sm font-bold text-slate-400 mb-6 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {tutor.experience} Experience
                </p>
                <p className="text-slate-600 mb-8 line-clamp-2 leading-relaxed italic">
                  "{tutor.bio}"
                </p>
                
                <Link 
                  to="/booking"
                  className="block w-full py-5 gradient-bg text-white rounded-2xl font-black text-center shadow-lg shadow-brand-electric/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Book Session
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
