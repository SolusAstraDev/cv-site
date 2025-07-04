import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { SoundProvider } from './context/SoundContext';

// Lazy load the StarryBackground to improve initial page load
const StarryBackground = lazy(() => import('./components/StarryBackground'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      // Slight delay to ensure smooth transition
      const timer = setTimeout(() => setShowStars(true), 300);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.remove('dark-mode');
      setShowStars(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);

    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      // Slight delay to ensure smooth transition
      setTimeout(() => setShowStars(true), 300);
    } else {
      document.body.classList.remove('dark-mode');
      setShowStars(false);
    }
  };

  return (
    <SoundProvider>
      <Router basename="/cv-site">
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          {darkMode && showStars && (
            <Suspense fallback={null}>
              <StarryBackground />
            </Suspense>
          )}
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <div className="bg-element" style={{ left: '10%', top: '20%' }} />
          <div className="bg-element" style={{ left: '60%', top: '40%' }} />
          <div className="bg-element" style={{ left: '80%', top: '60%' }} />
        </div>
      </Router>
    </SoundProvider>
  );
}

export default App;
