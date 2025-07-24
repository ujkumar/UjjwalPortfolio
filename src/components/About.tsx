import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code size={28} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences with modern design principles',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap size={28} />,
      title: 'Performance',
      description: 'Optimizing applications for lightning-fast speed and seamless user experience',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { icon: <Award size={24} />, number: '50+', label: 'Projects Completed' },
    { icon: <Users size={24} />, number: '30+', label: 'Happy Clients' },
    { icon: <Coffee size={24} />, number: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <div className="pl-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity for 
                  how things work, which led me to dive deep into the world of web development.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  I specialize in modern JavaScript frameworks, responsive design, and creating 
                  seamless user experiences. My approach combines technical expertise with creative 
                  problem-solving to deliver solutions that not only work flawlessly but also 
                  delight users.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, mentoring aspiring developers, or sharing knowledge with 
                  the developer community through blogs and talks.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                     style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;