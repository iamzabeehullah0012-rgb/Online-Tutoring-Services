import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, BookOpen, Clock, CheckCircle2, PlayCircle, ChevronRight, Shield, Quote } from 'lucide-react';
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
      <section className="pt-10 pb-20 overflow-hidden px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-accent rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-primary rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Hero Tile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-linear-to-br from-brand-primary via-brand-purple to-slate-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl group"
            >
              <div className="relative z-10 max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-white/10 text-brand-accent text-[10px] uppercase tracking-widest font-extrabold px-4 py-2 rounded-full mb-8 border border-brand-accent/20"
                >
                   Pakistan's Leading Learning Platform
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-8"
                >
                  Master Your Exams with <br/>Expert Guidance.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed font-medium"
                >
                  Personalized 1-on-1 tutoring and premium resources for O/A Level and FSc students.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button 
                    onClick={signInWithGoogle}
                    className="px-10 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-lg hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-brand-accent/10"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link 
                    to="/booking"
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Book Trial</span>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-white opacity-[0.05] rounded-full blur-[100px] pointer-events-none"
              />
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-10 right-10 hidden xl:flex w-32 h-32 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 flex-col items-center justify-center shadow-2xl"
              >
                    <span className="text-4xl font-black">98%</span>
                    <span className="text-xs uppercase font-bold text-blue-200">Success</span>
              </motion.div>
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

              {/* Parent Portal Tile */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-brand-primary dark:bg-black rounded-[2.5rem] p-10 text-white border border-brand-purple/30 shadow-sm relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-accent/30">
                    <Shield className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 tracking-tight">Parent Portal</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Track your child's progress, session attendance, and exam readiness in real-time.</p>
                  <Link to="/booking" className="inline-flex items-center text-sm font-black text-brand-accent hover:text-brand-accent/80 transition-colors uppercase tracking-widest">
                    Request Demo <ArrowRight className="ml-2 w-4 h-4" />
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

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SUBJECTS.map((subject, idx) => (
              <motion.div 
                key={subject.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={cn(
                  "p-10 rounded-[2.5rem] border transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/5 cursor-pointer group overflow-hidden relative",
                  idx % 2 === 0 ? "bg-white dark:bg-brand-primary border-slate-200 dark:border-brand-purple/20" : "bg-slate-50 dark:bg-brand-primary/40 border-slate-100 dark:border-brand-purple/10"
                )}
              >
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-16 h-16 rounded-[1.5rem] bg-brand-slate-50 dark:bg-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500 shadow-sm border border-transparent dark:border-brand-purple/20"
                  >
                     <BookOpen className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{subject.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">{subject.description}</p>
                  <Link 
                    to={`/subjects/${subject.id}`}
                    className="flex items-center text-sm font-black text-brand-primary dark:text-brand-accent uppercase tracking-widest transition-transform group-hover:translate-x-2"
                  >
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                {/* Subtle animated background shape for cards */}
                <motion.div 
                  className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Success Stories Section */}
      <section className="py-32 px-4 bg-brand-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden border border-brand-purple/30 shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto">
              <Quote className="w-16 h-16 mx-auto mb-10 text-brand-accent opacity-50" />
              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight tracking-tight">
                From Dubai to London, <span className="text-brand-accent">A* Results</span> that speak for themselves.
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {['Dubai', 'London', 'Lahore', 'Riyadh', 'Singapore'].map(city => (
                  <span key={city} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-black uppercase tracking-widest">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-xl text-slate-300 mb-12 font-medium leading-relaxed italic">
                "AceExams provided the recorded modules I needed to survive my FSc and A-Level transition. The worksheets were my secret weapon for the final exams."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/success-stories" className="px-12 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-accent/20">
                  Read Success Stories
                </Link>
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary overflow-hidden shadow-xl">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Student" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-brand-accent border-4 border-brand-primary flex items-center justify-center text-brand-primary font-black text-xs shadow-xl">
                    +1k
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 3-Step Booking Guide */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block bg-brand-accent/10 text-brand-primary dark:text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-accent/20">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Book a Trial in <span className="text-brand-primary dark:text-brand-accent">3 Simple Steps</span></h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Zero risk. High reward. Start your journey towards academic excellence today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick Your Subject', desc: 'Browse our curriculum and choose the topic or subject you want to master.', icon: BookOpen },
              { step: '02', title: 'Schedule a Slot', desc: 'Select a date and time that fits your schedule. Our tutors are here 24/7.', icon: Clock },
              { step: '03', title: 'Connect Live', desc: 'Join your virtual classroom and experience personalized 1-on-1 learning.', icon: PlayCircle }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bento-card p-10 relative overflow-hidden group"
              >
                <div className="text-6xl font-black text-slate-100 dark:text-brand-primary/20 absolute top-4 right-8 select-none group-hover:text-brand-accent/20 transition-colors">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 border border-brand-accent/20">
                  <item.icon className="w-8 h-8 text-brand-primary dark:text-brand-accent" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guidance Section */}
      <section className="py-32 px-4 bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                x: { duration: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" alt="Learning together" className="w-full h-[500px] object-cover" />
            </motion.div>
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"></motion.div>
          </div>
          
          <div className="lg:w-1/2 text-white">
            <span className="inline-block bg-white/10 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-8 border border-white/10 italic">
              Guidance for Parents
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">Why Choose <span className="text-brand-accent">AceExams</span> for your child?</h2>
            <div className="space-y-8">
              {[
                { title: 'Screened Expert Faculty', desc: 'Every tutor undergoes a rigorous 5-step vetting process including academic verification and pedagogical testing.' },
                { title: 'Personalized Learning Path', desc: 'We don\'t use a "one size fits all" approach. Lessons are tailored to your child\'s unique pace and exam requirements.' },
                { title: 'Progress Transparency', desc: 'Detailed monthly reports and access to session recordings keep you in the loop at every stage.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 border border-brand-accent/30 text-brand-accent">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-accent/10">
              Schedule a Parent-Tutor Call
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

    </div>
  );
}
