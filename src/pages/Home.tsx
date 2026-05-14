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
    <div className="overflow-hidden bg-brand-slate-50 flex flex-col min-h-screen">
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
              className="lg:col-span-8 bg-linear-to-br from-brand-primary via-brand-purple/30 to-brand-primary rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl group border border-white/10"
            >
              <div className="relative z-10 max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-white/10 text-brand-accent text-[10px] uppercase tracking-widest font-extrabold px-4 py-2 rounded-full mb-8 border border-brand-accent/20"
                >
                   World's Leading Learning Platform
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
                    className="px-10 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-brand-accent/20 button-glow"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link 
                    to="/booking"
                    className="px-10 py-5 bg-brand-danger border border-white/20 text-white rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-brand-danger/20 button-glow-danger"
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
                    <span className="text-xs uppercase font-bold text-brand-purple">Success</span>
              </motion.div>
            </motion.div>

            {/* Sidebar Tiles */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Stat Tile 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-brand-primary/40 rounded-[2.5rem] p-10 border border-white/10 shadow-sm flex flex-col items-center text-center justify-center hover-float"
              >
                <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-3xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">10K+</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Global Students</p>
              </motion.div>

              {/* Parent Portal Tile */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-brand-primary rounded-[2.5rem] p-10 text-white border border-brand-purple/20 shadow-sm relative overflow-hidden hover-float"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-purple/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-purple/30">
                    <Shield className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 tracking-tight">Parent Portal</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Track your child's progress, session attendance, and exam readiness in real-time.</p>
                  <Link to="/booking" className="inline-flex items-center text-sm font-black text-brand-accent hover:text-brand-accent/80 transition-colors uppercase tracking-widest">
                    Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 bg-brand-purple/10 rounded-full blur-[40px] pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Boards & Qualifications Section */}
      <section className="py-24 bg-brand-slate-50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-6 block italic">Global Standards</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Aligned with <span className="text-brand-danger">Top Exam Boards</span>.</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                Our curriculum and resources are meticulously mapped to the latest specifications of the world's most prestigious exam boards. We ensure your preparation is board-specific and result-oriented.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'AQA', url: 'https://www.aqa.org.uk/' },
                  { name: 'Pearson Edexcel', url: 'https://qualifications.pearson.com/' },
                  { name: 'OCR', url: 'https://www.ocr.org.uk/' },
                  { name: 'Cambridge CIE', url: 'https://www.cambridgeinternational.org/' }
                ].map((board) => (
                  <a 
                    key={board.name} 
                    href={board.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-brand-primary/40 border border-white/10 hover:border-brand-purple transition-all group hover-float"
                  >
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-brand-purple mb-2 transition-colors">Official Board</div>
                    <div className="text-xl font-black text-white tracking-tight flex items-center justify-between">
                      {board.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card p-10 lg:p-12 bg-brand-primary text-white border-brand-purple/10 shadow-2xl relative overflow-hidden hover-float"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-xs italic text-brand-purple">Qualifications Covered</h3>
                <div className="space-y-6">
                  {[
                    { title: 'IGCSE & GCSE', level: 'Compulsory', desc: 'Comprehensive coverage of core Sciences and Mathematics.' },
                    { title: 'O LEVELS', level: 'Intl Stream', desc: 'Rigorous prep for international academic excellence.' },
                    { title: 'A LEVELS', level: 'University Prep', desc: 'Advanced modules for top-tier university admissions.' }
                  ].map((qual) => (
                    <div key={qual.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-2xl font-black tracking-tight">{qual.title}</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-brand-danger text-white px-3 py-1 rounded-full">{qual.level}</span>
                      </div>
                      <p className="text-slate-400 text-sm font-medium">{qual.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-10 border-t border-white/10">
                   <h3 className="text-2xl font-black mb-6 tracking-tight">Science Focus</h3>
                   <div className="flex flex-wrap gap-3">
                      {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map(sub => (
                        <span key={sub} className="px-4 py-2 bg-brand-purple/20 text-brand-purple border border-brand-purple/30 rounded-xl text-[10px] font-black uppercase tracking-widest">
                          {sub}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Subjects Bento */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Elite Subjects</h2>
              <p className="text-slate-400 font-medium">Focused curriculum for Cambridge, Edexcel & FBISE boards.</p>
            </div>
            <Link to="/subjects" className="hidden sm:flex items-center text-brand-accent font-bold hover:underline">
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
                  "p-10 rounded-[2.5rem] border transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/5 cursor-pointer group overflow-hidden relative border-white/10 bg-brand-primary/40"
                )}
              >
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-16 h-16 rounded-[1.5rem] bg-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500 shadow-sm border border-white/10"
                  >
                     <BookOpen className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{subject.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">{subject.description}</p>
                  <Link 
                    to={`/subjects/${subject.id}`}
                    className="flex items-center text-sm font-black text-brand-accent uppercase tracking-widest transition-transform group-hover:translate-x-2"
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
      <section className="py-32 px-4 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden border border-brand-purple/20 shadow-2xl section-float">
            <div className="relative z-10 max-w-4xl mx-auto">
              <Quote className="w-16 h-16 mx-auto mb-10 text-brand-purple opacity-50" />
              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight tracking-tight">
                From Dubai to London, <span className="text-brand-accent">A* Results</span> that speak for themselves.
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {['Dubai', 'London', 'Lahore', 'Riyadh', 'Singapore'].map(city => (
                  <span key={city} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-black uppercase tracking-widest text-slate-300">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed italic">
                "AceExams provided the recorded modules I needed to survive my FSc and A-Level transition. The worksheets were my secret weapon for the final exams."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/success-stories" className="px-12 py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-brand-accent/30 button-glow">
                  Read Success Stories
                </Link>
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary overflow-hidden shadow-xl">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Student" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-brand-purple border-4 border-brand-primary flex items-center justify-center text-brand-primary font-black text-xs shadow-xl">
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
            <span className="inline-block bg-brand-accent/10 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-accent/20">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">Book a Trial in <span className="text-brand-accent">3 Simple Steps</span></h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">Zero risk. High reward. Start your journey towards academic excellence today.</p>
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
                className="bento-card p-10 relative overflow-hidden group hover-float"
              >
                <div className="text-6xl font-black text-brand-primary/20 absolute top-4 right-8 select-none group-hover:text-brand-accent/20 transition-colors">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 border border-brand-accent/20">
                  <item.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
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
                  <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 border border-brand-purple/30 text-brand-purple">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-5 bg-brand-danger text-white rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-brand-danger/10 button-glow-danger">
              Schedule a Parent-Tutor Call
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

    </div>
  );
}
