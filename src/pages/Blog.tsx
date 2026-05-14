import React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { cn } from '../lib/utils';

const BLOG_POSTS = [
  { id: 1, title: 'The Ultimate Resource Vault: Worksheets, Notes & Recorded Sessions', excerpt: 'How we provide a complete 360-degree toolkit for IGCSE and A-Level success, from proprietary worksheets to recorded live modules.', date: 'June 5, 2026', author: 'Team AceExams', tag: 'Resources', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'A-Level Physics: 5 Revision Tips for A* Results', excerpt: 'Mastering mechanics and fields requires a structured approach. Here are the top techniques from Oxford examiners.', date: 'May 12, 2026', author: 'Dr. Sarah Ahmed', tag: 'A-Level Tips', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'IGCSE Mathematics: Breaking Down the Hardest Topics', excerpt: 'Trigonometry and Calculus can be daunting. We simplify the most complex IGCSE concepts for you.', date: 'May 10, 2026', author: 'Prof. Muhammad Ali', tag: 'IGCSE Revision', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Cambridge vs Edexcel: Exam Prep Strategy Comparison', excerpt: 'Learn the subtle differences in marking schemes and how to tailor your prep for each board.', date: 'May 8, 2026', author: 'Zafar Iqbal', tag: 'Exam Prep', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Top 10 Productivity Hacks for Final Exam Week', excerpt: 'Science-backed methods to stay focused during your IGCSE and A-Level revision cycles.', date: 'May 5, 2026', author: 'Sarah Siddiqui', tag: 'Productivity', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=600' },
];

export default function Blog() {
  return (
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <span className="inline-block bg-brand-purple/10 text-brand-purple text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full border border-brand-purple/20 italic">
               Expert Insights
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Mastering the <span className="text-brand-danger underline decoration-brand-danger/30 decoration-8 underline-offset-8">Curriculum</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              Revision strategies, examiner secrets, and the latest updates for IGCSE & A-Level students.
            </p>
          </motion.div>
        </header>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3.5rem] overflow-hidden bg-brand-primary h-[500px] mb-20 group cursor-pointer border border-brand-purple/10 shadow-2xl hover-float"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 lg:p-20 text-white space-y-6 max-w-3xl">
            <span className="px-5 py-2 bg-brand-danger text-white rounded-full text-[10px] font-black uppercase tracking-widest">Editor's Pick</span>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">How to Perfect Your IGCSE Revision Schedule</h2>
            <div className="flex items-center space-x-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-brand-purple" /> June 1, 2026</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-2 text-brand-purple" /> Prof. Malik Raza</span>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer bento-card p-0 overflow-hidden flex flex-col md:flex-row hover-float"
            >
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-brand-accent text-brand-primary rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-3/5 space-y-4">
                <div className="flex items-center space-x-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight group-hover:text-brand-accent transition-colors tracking-tight">{post.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-bold line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <button className="flex items-center text-brand-accent font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all">
                    Read Post <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 p-12 lg:px-24 lg:py-20 bg-brand-primary/40 backdrop-blur-xl border border-brand-purple/10 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl transition-colors section-float">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight uppercase tracking-widest text-xs">Stay ahead of the <span className="text-brand-danger">exams</span>.</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-bold">
              Join 5,000+ students receiving weekly examiner tips and revision blueprints.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="future_scholar@email.com" 
              className="px-8 py-5 rounded-[2rem] bg-brand-primary/40 border border-white/5 outline-none focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple min-w-[300px] text-lg font-black text-white placeholder:text-slate-600"
            />
            <button className="px-10 py-5 bg-brand-danger text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-brand-danger/20 active:scale-95 transition-all button-glow-danger">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

