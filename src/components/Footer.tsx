import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-blue-600">
                AceExams
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Empowering students to achieve academic excellence through expert-led tutoring and comprehensive study resources.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-brand-electric hover:text-white hover:border-brand-electric transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Learning</h4>
            <ul className="space-y-4">
              {['Subjects', 'Courses', 'Revision Notes', 'Past Papers', 'MCQ Quizzes'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-slate-600 hover:text-brand-electric transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Expert Tutors', 'Blog', 'Success Stories', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-slate-600 hover:text-brand-electric transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-600">
                <MapPin className="w-5 h-5 text-brand-electric shrink-0" />
                <span>123 Educator's Row, Knowledge City, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Phone className="w-5 h-5 text-brand-electric shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Mail className="w-5 h-5 text-brand-electric shrink-0" />
                <span>hello@aceexams.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">
            © {currentYear} AceExams Tutoring. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-brand-electric">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-electric">Terms of Service</Link>
            <Link to="#" className="hover:text-brand-electric">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
