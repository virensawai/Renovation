import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/home" element={<Home />} />
          <Route path="/attendance" element={<ComingSoon />} />
          <Route path="/marks" element={<ComingSoon />} />
          <Route path="/assignment" element={<ComingSoon />} />
          <Route path="/announcements" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
