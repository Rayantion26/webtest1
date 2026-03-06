import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

// Language Dropdown Component
function LanguageDropdown({ i18n }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '繁體中文', flag: '🇹🇼' },
    { code: 'id', label: 'Bahasa', flag: '🇮🇩' }
  ];
  
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };
  
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white">{currentLang.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`absolute right-0 top-full mt-2 w-44 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => selectLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors duration-200 ${i18n.language === lang.code ? 'bg-primary/20 border-l-2 border-primary' : 'border-l-2 border-transparent'}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-white">{lang.label}</span>
              <span className="text-xs text-gray-400">{lang.code.toUpperCase()}</span>
            </div>
            {i18n.language === lang.code && (
              <svg className="w-4 h-4 text-primary ml-auto animate-check" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300">
              <span className="text-primary">web</span>
              <span className="text-accent">人</span>
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                <span className="relative z-10">{t('nav.features')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                <span className="relative z-10">{t('nav.contact')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            
            {/* Language Dropdown */}
            <LanguageDropdown i18n={i18n} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              {t('hero.cta1')}
            </a>
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="px-8 py-4 border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-400">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('features.items', { returnObjects: true }) || []).map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-r from-primary/20 to-accent/20 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">{t('contact.subtitle')}</p>
          <button className="px-10 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50">
            {t('contact.cta')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="inline-block text-2xl font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-primary">web</span>
            <span className="text-accent">人</span>
          </a>
          <p className="text-gray-500">{t('footer')}</p>
          <p className="text-gray-600 text-sm mt-2">© 2025 web人. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;