import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { format, addDays, startOfToday } from 'date-fns';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Booking() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dates = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));
  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM', '6:00 PM', '8:30 PM'];

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !user) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'bookings'), {
        studentId: user.uid,
        tutorId: 't1', // Assuming Dr. Sarah Ahmed for demo
        date: selectedDate.toISOString(),
        time: selectedTime,
        status: 'pending',
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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Request Sent!</h1>
        <p className="text-slate-600 mb-10">Your booking request has been sent to the tutor. You'll receive a confirmation email shortly.</p>
        <button onClick={() => window.location.href = '/dashboard'} className="px-8 py-4 gradient-bg text-white rounded-2xl font-bold">Go to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Booking Content */}
          <div className="lg:col-span-8 space-y-10">
            <header>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Book a Session</h1>
              <p className="text-slate-600">Select your preferred date and time for the 1-on-1 session.</p>
            </header>

            {/* Date Selection */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-3 text-brand-electric" />
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
                        "flex flex-col items-center justify-center min-w-[100px] h-32 rounded-3xl border-2 transition-all shrink-0",
                        isSelected ? "bg-brand-blue border-brand-blue text-white shadow-xl shadow-brand-blue/20" : "bg-white border-slate-100 text-slate-600 hover:border-brand-electric/30"
                      )}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{format(date, 'eee')}</span>
                      <span className="text-2xl font-black">{format(date, 'd')}</span>
                      <span className="text-xs font-bold mt-2">{format(date, 'MMM')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <Clock className="w-5 h-5 mr-3 text-brand-electric" />
                Select Time (PKT)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {times.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-5 px-6 rounded-2xl text-sm font-black border-2 transition-all",
                        isSelected ? "bg-brand-electric border-brand-electric text-white shadow-lg shadow-brand-electric/20" : "bg-white border-slate-100 text-slate-600 hover:border-brand-electric/30"
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
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl lg:sticky lg:top-32">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Summary</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl border border-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Tutor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tutor</p>
                    <p className="font-bold text-slate-900">Dr. Sarah Ahmed</p>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Session Type</span>
                    <span className="text-slate-900 font-bold">1-on-1 Online</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Duration</span>
                    <span className="text-slate-900 font-bold">60 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Price</span>
                    <span className="text-slate-900 font-bold">$25.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-6 mb-8 text-white">
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-400 text-xs font-bold uppercase">Total Due</span>
                  <span className="text-3xl font-black">$25.00</span>
                </div>
              </div>

              <button 
                disabled={!selectedDate || !selectedTime || isSubmitting}
                onClick={handleBooking}
                className={cn(
                  "w-full py-5 rounded-2xl font-black text-white transition-all transform active:scale-95 shadow-xl",
                  (!selectedDate || !selectedTime) ? "bg-slate-200 cursor-not-allowed" : "gradient-bg shadow-brand-electric/25 hover:shadow-brand-electric/40"
                )}
              >
                {isSubmitting ? 'Processing...' : 'Confirm & Pay'}
              </button>

              <div className="mt-6 flex items-center justify-center space-x-2 text-slate-400">
                <AlertCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secured Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from '../lib/utils';
