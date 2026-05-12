import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Menu, X, User, LogOut, Moon, Sun, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Subjects', path: '/subjects' },
    { name: 'Notes', path: '/notes' },
    { name: 'Results', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center",
      scrolled || location.pathname !== '/'
        ? "bg-white/80 dark:bg-brand-primary/80 backdrop-blur-lg border-b border-slate-200 dark:border-brand-purple/20"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center text-white dark:text-brand-primary font-bold transform group-hover:rotate-6 transition-transform">
                E
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                AceExams
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs uppercase tracking-widest font-black transition-all duration-200",
                    location.pathname === link.path 
                      ? "text-brand-primary dark:text-brand-accent" 
                      : "text-slate-400 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search notes, topics..." 
                className="w-48 xl:w-64 bg-slate-100 dark:bg-brand-primary/40 border border-transparent dark:border-brand-purple/20 rounded-full py-2 pl-10 pr-4 text-[10px] uppercase font-black tracking-widest focus:ring-1 focus:ring-brand-accent transition-all text-slate-900 dark:text-white"
              />
            </div>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-brand-primary/60 transition-all border border-transparent dark:border-brand-purple/10"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard" className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-brand-accent shadow-sm">
                  <img src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} alt="Profile" />
                </Link>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="px-6 py-2 bg-brand-accent text-brand-primary rounded-full text-[10px] uppercase tracking-widest font-black transition-all active:scale-95 shadow-lg shadow-brand-accent/20 hover:brightness-110"
              >
                Join Now
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-brand-primary border-b border-slate-200 dark:border-brand-purple/20 lg:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {!user && (
                <button
                  onClick={() => {
                    signInWithGoogle();
                    setIsOpen(false);
                  }}
                  className="w-full py-4 bg-brand-accent text-brand-primary rounded-2xl font-black uppercase tracking-widest"
                >
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
