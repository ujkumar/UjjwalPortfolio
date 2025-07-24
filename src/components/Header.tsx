import React, { useState, useEffect } from 'react';
import { Menu, X, Download, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? scrolled
                      ? 'text-blue-700 bg-blue-50 shadow-lg'
                      : 'text-white bg-white/20 backdrop-blur-sm shadow-lg'
                    : scrolled
                      ? 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl animate-pulse"></div>
                )}
              </button>
            ))}
            <button 
              onClick={handleResumeDownload}
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                scrolled 
                  ? 'text-gray-600 hover:text-blue-700 hover:bg-gray-50' 
                  : 'text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-b-2xl mx-4">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-blue-700 bg-blue-50 shadow-lg'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleResumeDownload}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;