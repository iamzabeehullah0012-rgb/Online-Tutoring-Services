import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-brand-primary pt-20 pb-10 border-t border-slate-200 dark:border-brand-purple/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <BookOpen className="text-white dark:text-brand-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-brand-primary to-brand-purple dark:from-brand-accent dark:to-white uppercase tracking-tighter">
                AceExams
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Empowering students to achieve academic excellence through expert-led tutoring and comprehensive study resources.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-brand-purple/20 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest">Learning</h4>
            <ul className="space-y-4">
              {['Subjects', 'Courses', 'Pricing', 'Revision Notes', 'Blog', 'Past Papers'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 dark:text-slate-400 hover:text-brand-accent transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Expert Tutors', 'Blog', 'Success Stories', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-slate-500 dark:text-slate-400 hover:text-brand-accent transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 font-medium">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>123 Educator's Row, Knowledge City, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 font-medium">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 font-medium">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>hello@aceexams.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-brand-purple/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} AceExams Tutoring. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500 font-medium">
            <Link to="#" className="hover:text-brand-accent">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-accent">Terms of Service</Link>
            <Link to="#" className="hover:text-brand-accent">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
