import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, BookOpen, Clock, CheckCircle2, PlayCircle, ChevronRight } from 'lucide-react';
import { SUBJECTS } from '../constants';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="overflow-hidden bg-brand-slate-50 dark:bg-slate-950">
      {/* Hero Section - Bento Style */}
      <section className="pt-10 pb-20 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Hero Tile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-linear-to-br from-brand-primary via-brand-purple to-slate-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block bg-white/10 text-brand-accent text-[10px] uppercase tracking-widest font-extrabold px-4 py-2 rounded-full mb-8 border border-brand-accent/20">
                   Pakistan's Leading Learning Platform
                </span>
                <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
                  Master Your Exams with <br/>Expert Guidance.
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                  Personalized 1-on-1 tutoring and premium resources for O/A Level and FSc students.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={signInWithGoogle}
                    className="px-10 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-brand-accent/10"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link 
                    to="/booking"
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Book Trial</span>
                  </Link>
                </div>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-white opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="absolute top-10 right-10 hidden xl:block">
                 <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">98%</span>
                    <span className="text-xs uppercase font-bold text-blue-200">Success</span>
                 </div>
              </div>
            </motion.div>

            {/* Sidebar Tiles */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Stat Tile 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-brand-primary rounded-[2.5rem] p-10 border border-slate-200 dark:border-brand-purple/20 shadow-sm flex flex-col items-center text-center justify-center"
              >
                <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-3xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">10K+</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Global Students</p>
              </motion.div>

              {/* Tutor Preview Tile */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-brand-primary dark:bg-black rounded-[2.5rem] p-10 text-white border border-brand-purple/30 shadow-sm relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex -space-x-4 mb-6">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-2xl border-4 border-brand-primary overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=tutor${i}`} alt="Tutor" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-2">Expert Tutors</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Join 150+ Ivy League and top-vetted mentors globally.</p>
                  <Link to="/tutors" className="inline-flex items-center text-sm font-black text-brand-accent hover:text-brand-accent/80 transition-colors uppercase tracking-widest">
                    Meet the Team <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 bg-brand-accent/10 rounded-full blur-[40px] pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Subjects Bento */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Elite Subjects</h2>
              <p className="text-slate-500 font-medium">Focused curriculum for Cambridge, Edexcel & FBISE boards.</p>
            </div>
            <Link to="/subjects" className="hidden sm:flex items-center text-brand-primary dark:text-brand-accent font-bold hover:underline">
              Browse All Subjects <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBJECTS.map((subject, idx) => (
              <motion.div 
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "p-10 rounded-[2.5rem] border transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/5 cursor-pointer group",
                  idx % 2 === 0 ? "bg-white dark:bg-brand-primary border-slate-200 dark:border-brand-purple/20" : "bg-slate-50 dark:bg-brand-primary/40 border-slate-100 dark:border-brand-purple/10"
                )}
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-slate-50 dark:bg-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500 shadow-sm border border-transparent dark:border-brand-purple/20">
                   <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{subject.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">{subject.description}</p>
                <Link 
                  to={`/subjects/${subject.id}`}
                  className="flex items-center text-sm font-black text-brand-primary dark:text-brand-accent uppercase tracking-widest transition-transform group-hover:translate-x-2"
                >
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote Tile */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden border border-brand-purple/30 shadow-2xl">
             <div className="relative z-10">
                <Star className="w-12 h-12 text-brand-accent mx-auto mb-8 animate-pulse" />
                <h2 className="text-3xl lg:text-5xl font-extrabold max-w-4xl mx-auto leading-tight mb-12">
                  "AceExams transformed my O-Level Chemistry prep. The notes are precise, and sessions are incredibly interactive."
                </h2>
                <div className="flex items-center justify-center space-x-4">
                   <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-accent">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=student_sarah" alt="Student" />
                   </div>
                   <div className="text-left">
                      <p className="font-bold text-white leading-none mb-1">Ahmed Hassan</p>
                      <p className="text-brand-accent text-xs font-bold uppercase tracking-widest underline underline-offset-4 decoration-white/20">A* Student, Cambridge 2025</p>
                   </div>
                </div>
             </div>
             <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
