import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, ChevronRight, CheckCircle2, AlertCircle, Mail, Phone, GraduationCap, BookOpen, MessageSquare, CreditCard, Wallet, Smartphone, Apple, Coins } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { format, addDays, startOfToday } from 'date-fns';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cn } from '../lib/utils';

export default function Booking() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // New form state
  const [formData, setFormData] = useState({
    email: user?.email || '',
    whatsapp: '',
    grade: '',
    subject: '',
    notes: '',
    paymentMethod: 'stripe'
  });

  const dates = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));
  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM', '6:00 PM', '8:30 PM'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !user) return;
    if (!formData.email || !formData.whatsapp || !formData.grade || !formData.subject) {
      alert('Please fill in all required contact and academic details.');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'bookings'), {
        studentId: user.uid,
        tutorId: 't1', // Assuming Dr. Sarah Ahmed for demo
        date: selectedDate.toISOString(),
        time: selectedTime,
        status: 'pending',
        contactInfo: {
          email: formData.email,
          whatsapp: formData.whatsapp,
        },
        academicInfo: {
          grade: formData.grade,
          subject: formData.subject,
        },
        additionalDetails: formData.notes,
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-slate-50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-xl w-full text-center bento-card p-12 lg:p-20 hover-float">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-900/30 text-green-400 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl border border-green-500/20">
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Request Sent!</h1>
          <p className="text-slate-400 mb-12 font-medium leading-relaxed">
            Your booking request has been sent to Dr. Sarah Ahmed. You'll receive a confirmation via WhatsApp and Email shortly.
          </p>
          <button 
            onClick={() => window.location.href = '/dashboard'} 
            className="w-full py-5 bg-brand-accent text-brand-primary rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-brand-accent/20 button-glow"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-slate-50 min-h-screen py-20 pb-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Booking Content */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <span className="inline-block bg-brand-purple/10 text-brand-purple text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full mb-6 border border-brand-purple/20 italic">
                 Secure Your Spot
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">Book a <span className="text-brand-purple">Session</span></h1>
              <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">Select your preferred slot and provide your academic details for a custom lesson plan.</p>
            </header>

            {/* Form Details */}
            <div className="bento-card p-10 space-y-8 hover-float">
              <h3 className="text-xl font-black text-white flex items-center uppercase tracking-widest text-xs">
                <User className="w-5 h-5 mr-3 text-brand-danger" />
                Contact & Academic Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@email.com"
                      className="w-full glass-input pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">WhatsApp Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="w-full glass-input pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Grade Level</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full glass-input pl-12 appearance-none"
                    >
                      <option value="" className="bg-[#030a16]">Select Grade</option>
                      <option value="IGCSE" className="bg-[#030a16]">IGCSE</option>
                      <option value="O Level" className="bg-[#030a16]">O Level</option>
                      <option value="A Level" className="bg-[#030a16]">A Level</option>
                      <option value="FSc" className="bg-[#030a16]">FSc</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Physics"
                      className="w-full glass-input pl-12"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Additional Details / Topics to Cover</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-slate-400" />
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us what you want to focus on during this session..."
                    rows={4}
                    className="w-full glass-input pl-12 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-8">
              <h3 className="text-xl font-black text-white flex items-center uppercase tracking-widest text-xs">
                <CalendarIcon className="w-5 h-5 mr-3 text-brand-purple" />
                Select Date
              </h3>
              <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                {dates.map((date) => {
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "flex flex-col items-center justify-center min-w-[110px] h-36 rounded-3xl border-2 transition-all shrink-0",
                        isSelected 
                          ? "bg-brand-purple border-brand-purple text-brand-primary shadow-2xl shadow-brand-purple/20 scale-105 button-glow-purple" 
                          : "bg-brand-primary/40 border-white/5 text-slate-400 hover:border-brand-purple/30"
                      )}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">{format(date, 'eee')}</span>
                      <span className="text-3xl font-black">{format(date, 'd')}</span>
                      <span className="text-[10px] font-black uppercase mt-2 tracking-widest">{format(date, 'MMM')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-8">
              <h3 className="text-xl font-black text-white flex items-center uppercase tracking-widest text-xs">
                <Clock className="w-5 h-5 mr-3 text-brand-danger" />
                Select Time (PKT)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {times.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-6 px-6 rounded-2xl text-xs font-black uppercase tracking-widest border-2 transition-all",
                        isSelected 
                          ? "bg-brand-danger border-brand-danger text-white shadow-xl shadow-brand-danger/20 button-glow-danger" 
                          : "bg-brand-primary/40 border-white/5 text-slate-400 hover:border-brand-danger/30"
                      )}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Checkout/Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-brand-primary/60 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl lg:sticky lg:top-32 transition-colors hover-float">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Booking Summary</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-5 bg-brand-primary/40 rounded-3xl border border-white/5">
                  <div className="w-14 h-14 rounded-2xl border-2 border-brand-accent overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Tutor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Elite Faculty</p>
                    <p className="text-lg font-black text-white tracking-tight">Dr. Sarah Ahmed</p>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-widest">Type</span>
                    <span className="text-white font-black">1-on-1 Online</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-widest">Duration</span>
                    <span className="text-white font-black">60 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-widest">Price</span>
                    <span className="text-white font-black">$25.00</span>
                  </div>
                  {selectedDate && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-bold uppercase tracking-widest">Date</span>
                      <span className="text-brand-accent font-black">{format(selectedDate, 'MMM d, yyyy')}</span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-bold uppercase tracking-widest">Time</span>
                      <span className="text-brand-accent font-black">{selectedTime}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-brand-primary rounded-[2rem] p-8 mb-8 text-white border border-white/10 shadow-xl">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Investment</span>
                  <span className="text-4xl font-black text-brand-purple tracking-tighter">$25.00</span>
                </div>
                
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-4">Payment Method</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: 'stripe', name: 'Credit/Debit Card (Stripe)', icon: CreditCard },
                    { id: 'googlepay', name: 'Google Pay', icon: Smartphone },
                    { id: 'applepay', name: 'Apple Pay', icon: Apple },
                    { id: 'crypto', name: 'Bitcoin / Crypto', icon: Coins },
                    { id: 'sadapay', name: 'SadaPay Transfer', icon: Wallet }
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method.id }))}
                      className={cn(
                        "w-full p-4 rounded-xl border flex items-center justify-between transition-all group",
                        formData.paymentMethod === method.id 
                          ? "bg-brand-purple/20 border-brand-purple text-brand-purple" 
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <method.icon className={cn("w-4 h-4", formData.paymentMethod === method.id ? "text-brand-purple" : "text-slate-400")} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{method.name}</span>
                      </div>
                      <div className={cn(
                        "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                        formData.paymentMethod === method.id ? "border-brand-purple bg-brand-purple" : "border-white/20"
                      )}>
                        {formData.paymentMethod === method.id && <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                disabled={!selectedDate || !selectedTime || isSubmitting || !formData.whatsapp || !formData.grade || !formData.subject}
                onClick={handleBooking}
                className={cn(
                  "w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-xl",
                  (!selectedDate || !selectedTime || !formData.whatsapp || !formData.grade || !formData.subject) 
                    ? "bg-slate-800 text-slate-600 cursor-not-allowed" 
                    : "bg-brand-danger text-white shadow-brand-danger/20 button-glow-danger"
                )}
              >
                {isSubmitting ? 'Processing...' : 'Confirm & Book Session'}
              </button>

              <div className="mt-8 flex items-center justify-center space-x-3 text-slate-500">
                <AlertCircle className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secured Payment Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

