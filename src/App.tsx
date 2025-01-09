import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LSSEGPage from './pages/LssegPage';
import LabcoatPage from './pages/LabcoatPage';
import ApptibiogramPage from './pages/ApptibiogramPage';
import HovercraftPage from './pages/HovercraftPage';
import PortfolioPage from './pages/PortfolioPage';
import TeethPage from './pages/TeethPage';
import TenderosPage from './pages/TenderosPage';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lsseg" element={<LSSEGPage />} />
          <Route path="/labcoat" element={<LabcoatPage />} />
          <Route path="/apptibiogram" element={<ApptibiogramPage />} />
          <Route path="/hovercraft" element={<HovercraftPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/teeth" element={<TeethPage />} />
          <Route path="/tenderos" element={<TenderosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
};

export default App;