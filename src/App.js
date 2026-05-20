import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { SoundProvider } from './context/SoundContext';

import BackgroundLayer from './components/effects/BackgroundLayer';
import ClickSparkRoot from './components/effects/ClickSparkRoot';
import GeronimoMode from './components/easter-eggs/GeronimoMode';
import CommandPalette from './components/easter-eggs/CommandPalette';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const next = !darkMode;
        setDarkMode(next);
        localStorage.setItem('darkMode', next);
        document.body.classList.toggle('dark-mode', next);
        document.documentElement.classList.toggle('dark', next);
    };

    return (
        <SoundProvider>
            <Router basename="/cv-site">
                <div className={`min-h-screen relative ${darkMode ? 'dark' : ''}`}>
                    <BackgroundLayer darkMode={darkMode} />
                    <ClickSparkRoot darkMode={darkMode} />
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <main className="relative">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                    <Footer />
                    <GeronimoMode />
                    <CommandPalette toggleDarkMode={toggleDarkMode} />
                </div>
            </Router>
        </SoundProvider>
    );
}

export default App;
