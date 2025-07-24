import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400/30 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo with 3D Effect */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-3">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Profile"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-lg animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Alex Johnson
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-300 mb-8">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span>San Francisco, CA</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A passionate{' '}
              <span className="text-blue-400 font-semibold">Full Stack Developer</span>{' '}
              crafting beautiful and functional web experiences with cutting-edge technologies.
              I transform ideas into digital reality with clean code and stunning design.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="group relative border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-2xl hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg backdrop-blur-sm"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mb-16">
            {[
              { icon: Github, href: 'https://github.com', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:alex@example.com', color: 'hover:text-purple-400' }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
              >
                <Icon size={28} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-all duration-300 animate-bounce group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">Scroll Down</span>
            <ChevronDown size={32} className="group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;