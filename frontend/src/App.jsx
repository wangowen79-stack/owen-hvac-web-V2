import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MaintenancePage from './pages/MaintenancePage';
import HeatPumpPage from './pages/HeatPumpPage';
import ElectricBoilerPage from './pages/ElectricBoilerPage';
import HRVPage from './pages/HRVPage';
import ElectricalPage from './pages/ElectricalPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/maintenance" element={<MaintenancePage />} />
        <Route path="/services/heat-pump" element={<HeatPumpPage />} />
        <Route path="/services/electric-boiler" element={<ElectricBoilerPage />} />
        <Route path="/services/hrv" element={<HRVPage />} />
        <Route path="/services/electrical" element={<ElectricalPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </div>
  );
}
