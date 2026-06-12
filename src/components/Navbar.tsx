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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Subjects', path: '/subjects' },
    { name: 'Notes', path: '/notes' },
    { name: 'Results', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center",
      scrolled || location.pathname !== '/'
        ? "bg-[#030a16]/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl h-16"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 bg-brand-accent/20 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-accent border border-brand-accent/30 font-black transform group-hover:rotate-6 transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                A
              </div>
              <span className="text-xl font-black text-white tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                AceExams
              </span>
            </Link>
 
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-black transition-all duration-300 relative py-2 px-1 hover:text-white",
                    location.pathname === link.path 
                      ? "text-brand-accent" 
                      : "text-slate-400"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent rounded-full shadow-[0_0_8px_#f97316]" />
                  )}
                </Link>
              ))}
            </div>
          </div>
 
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative animate-fade-in">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search notes, topics..." 
                className="w-48 xl:w-64 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full py-2.5 pl-11 pr-5 text-[10px] uppercase font-black tracking-widest focus:bg-white/[0.08] focus:border-brand-purple/40 focus:ring-4 focus:ring-brand-purple/10 transition-all text-white placeholder:text-slate-500 outline-none"
              />
            </div>

            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard" className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-accent shadow-sm">
                  <img src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} alt="Profile" />
                </Link>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="px-6 py-2 bg-brand-accent text-brand-primary rounded-full text-[10px] uppercase tracking-widest font-black transition-all active:scale-95 shadow-lg shadow-brand-accent/20 button-glow"
              >
                Join Now
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white"
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
              className="absolute top-16 left-0 right-0 bg-[#030a16]/80 backdrop-blur-3xl border-b border-white/10 lg:hidden overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-black uppercase tracking-widest text-slate-300 hover:text-brand-accent transition-all duration-300 py-2 border-b border-white/[0.03]"
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
                  className="w-full py-4 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 text-brand-accent rounded-2xl font-black uppercase tracking-widest button-glow"
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
