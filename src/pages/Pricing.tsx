import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, Star, Shield, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter Revision',
    price: 10,
    interval: 'month',
    description: 'Perfect for quick topic reviews and exam week refreshers.',
    features: [
      'Access to 50+ Revision Notes',
      'Topic-wise MCQ Practice',
      'Downloadable PDF Resources',
      'Community Chat Access',
    ],
    notIncluded: [
      '1-on-1 Personalized Tutoring',
      'Past Paper Grading',
      'AI-Powered Exam Predictor',
    ],
    highlight: false,
    icon: Shield,
    color: 'bg-slate-50 dark:bg-brand-primary/40',
  },
  {
    id: 'pro',
    name: 'Pro Learner',
    price: 15,
    interval: 'month',
    description: 'The most popular choice for consistent academic growth.',
    features: [
      'All Starter Features',
      'Unlimited Past Papers',
      '2 Group sessions / month',
      'Marking schemes & solutions',
      'AI Study Plan Generator',
    ],
    notIncluded: [
      'Personal Mentor Support',
      'Priority Booking',
    ],
    highlight: true,
    icon: Zap,
    color: 'bg-brand-primary dark:bg-brand-primary',
  },
  {
    id: 'elite',
    name: 'Elite Scholar',
    price: 20,
    interval: 'month',
    description: 'Dedicated support for students aiming for straight A*s.',
    features: [
      'Everything in Pro',
      'Weekly 1-on-1 Session',
      'Direct WhatsApp Support',
      'University Guidance',
      'Verified A* Success Path',
    ],
    notIncluded: [],
    highlight: false,
    icon: Star,
    color: 'bg-white dark:bg-brand-primary/60',
  },
];

export default function Pricing() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <span className="inline-block bg-brand-accent/10 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full border border-brand-accent/20 italic">
               Flexible Plans
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Invest in your <span className="text-brand-danger">Future</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Choose the perfect plan to accelerate your learning. From quick revisions to full academic transformation.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-8 lg:p-12 rounded-[3.5rem] border transition-all duration-500 overflow-hidden group flex flex-col hover-float",
                plan.highlight 
                  ? "bg-brand-primary text-white border-white/20 shadow-2xl shadow-brand-accent/10 scale-105 z-10" 
                  : "bg-brand-primary/40 border-white/10 text-white"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-6 right-8 px-4 py-1 bg-brand-accent text-brand-primary text-[10px] uppercase font-black tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-10 flex items-center justify-between">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center",
                  plan.highlight ? "bg-white/10" : "bg-brand-accent/10"
                )}>
                  <plan.icon className="text-brand-accent w-7 h-7" />
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={cn("text-sm font-bold uppercase tracking-widest", plan.highlight ? "text-slate-400" : "text-slate-500")}>
                    / {plan.interval}
                  </span>
                </div>
                <p className={cn("mt-4 text-sm font-medium leading-relaxed", plan.highlight ? "text-slate-400" : "text-slate-400")}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-5 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3 text-sm font-bold">
                    <div className="p-0.5 rounded-full bg-brand-accent/20 text-brand-accent">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3 text-sm font-bold opacity-30">
                    <X className="w-3.5 h-3.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={signInWithGoogle}
                className={cn(
                  "w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center space-x-2",
                  plan.id === 'pro' 
                    ? "bg-brand-accent text-brand-primary button-glow" 
                    : plan.id === 'elite' 
                      ? "bg-brand-danger text-white button-glow-danger" 
                      : "bg-brand-purple text-brand-primary button-glow-purple",
                  "shadow-xl"
                )}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className={cn(
                "absolute top-[-10%] right-[-10%] w-40 h-40 rounded-full blur-[80px] pointer-events-none",
                plan.highlight ? "bg-white/5" : "bg-brand-accent/5"
              )}></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 lg:p-16 rounded-[4rem] bg-brand-primary text-center text-white border border-brand-danger/20 relative overflow-hidden shadow-2xl section-float">
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tight uppercase"><span className="text-brand-purple">Custom Plan</span> for schools?</h2>
              <p className="text-lg text-slate-400 mb-12 font-medium">We offer special bulk pricing and dedicated support for educational institutions and study groups.</p>
              <button className="px-12 py-5 bg-brand-danger text-white rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-brand-danger/20 button-glow-danger">
                 Contact Sales Team
              </button>
           </div>
           <div className="absolute top-0 left-0 w-64 h-64 bg-brand-danger/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Payment Methods */}
        <div className="mt-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 italic">Secure Payment Methods Accepted</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Google Pay', 'Stripe', 'Apple Pay', 'Bitcoin / Crypto'].map((method) => (
              <span key={method} className="text-sm font-black uppercase tracking-widest text-white border border-white/10 px-6 py-3 rounded-xl">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
