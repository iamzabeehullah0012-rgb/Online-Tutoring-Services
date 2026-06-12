import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/AI/Chatbot';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import Courses from './pages/Courses';
import Notes from './pages/Notes';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import SuccessStories from './pages/SuccessStories';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <>{children}</> : <Navigate to="/" />;
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-brand-slate-50">
      {/* Premium Glassmorphism Ambient Mesh Glows */}
      <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-accent/8 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[35%] right-[-20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-[12000ms]" />
      <div className="absolute bottom-[10%] left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] bg-brand-danger/6 rounded-full blur-[170px] pointer-events-none animate-pulse duration-[10000ms]" />

      <Navbar className="relative z-50" />
      <main className="flex-grow pt-16 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:id" element={<Subjects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
