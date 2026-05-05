import React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BLOG_POSTS = [
  { id: 1, title: 'How to Master A-Level Physics in 3 Months', excerpt: 'Struggling with mechanics? Here are the top strategies used by straight A* students.', date: 'May 10, 2026', author: 'Dr. Sarah Ahmed', tag: 'Study Tips', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Cambridge vs Edexcel: Which Board is Right for You?', excerpt: 'A detailed comparison of both boards to help you make an informed decision for your O Levels.', date: 'May 8, 2026', author: 'Prof. Muhammad Ali', tag: 'Curriculum', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: '10 Productivity Hacks for Final Exam Week', excerpt: 'Maximize your revision efficiency with these science-backed study techniques.', date: 'May 5, 2026', author: 'Zafar Iqbal', tag: 'Productivity', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600' },
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Expert <span className="gradient-text">Insights</span></h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your daily dose of study strategies, exam updates, and academic motivation.
            </p>
          </motion.div>
        </header>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 h-[500px] mb-20 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 lg:p-20 text-white space-y-6 max-w-3xl">
            <span className="px-4 py-2 bg-brand-electric rounded-full text-xs font-bold uppercase tracking-widest">Featured Article</span>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">The Ultimate Guide to Securing a Scholarship Abroad</h2>
            <div className="flex items-center space-x-6 text-sm font-bold text-slate-300">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> May 12, 2026</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-2" /> Dr. Sarah Ahmed</span>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-electric shadow-sm">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center space-x-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-brand-electric transition-colors">{post.title}</h3>
                <p className="text-slate-600 leading-relaxed italic line-clamp-3">
                  "{post.excerpt}"
                </p>
                <div className="pt-4">
                  <button className="flex items-center text-brand-electric font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 p-12 lg:p-24 bg-slate-50 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Stay Ahead of the Curve</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Subscribe to our newsletter to get the latest study resources and exam tips delivered directly to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="px-8 py-5 rounded-3xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-brand-electric min-w-[300px] text-lg font-medium"
            />
            <button className="px-10 py-5 gradient-bg text-white rounded-3xl font-bold text-lg shadow-xl shadow-brand-electric/20 hover:scale-105 active:scale-95 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
