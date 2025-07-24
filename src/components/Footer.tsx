import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', name: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
    { icon: Mail, href: 'mailto:alex@example.com', name: 'Email' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl">AJ</span>
              </div>
              <span className="font-bold text-2xl text-white">Alex Johnson</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Full Stack Developer passionate about creating beautiful and functional web experiences 
              that make a difference in people's lives.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <a 
                  key={name}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/10"
                  title={name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Get In Touch</h3>
            <div className="space-y-4 text-gray-300">
              <div className="group">
                <p className="font-medium text-white mb-1">Email</p>
                <a 
                  href="mailto:alex.johnson@example.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  alex.johnson@example.com
                </a>
              </div>
              <div className="group">
                <p className="font-medium text-white mb-1">Phone</p>
                <a 
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="group">
                <p className="font-medium text-white mb-1">Location</p>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 flex items-center gap-2 text-center md:text-left">
              © {currentYear} Alex Johnson. Made with{' '}
              <Heart size={16} className="text-red-400 animate-pulse" />{' '}
              and lots of coffee. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
              title="Back to top"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;