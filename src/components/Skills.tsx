import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-500 to-green-500' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 92, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-700' }
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Docker', level: 82, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 78, color: 'from-yellow-600 to-orange-600' },
        { name: 'Figma', level: 75, color: 'from-purple-500 to-pink-500' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]));
              }, (categoryIndex * 500) + (skillIndex * 200));
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & Expertise
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`group bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 border border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-200 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-bold bg-blue-400/20 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                          style={{ 
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 500) + (skillIndex * 200)}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div 
                        className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transition-all duration-1500 ease-out"
                        style={{ 
                          left: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 500) + (skillIndex * 200) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-3xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'GraphQL', 'Redux', 'Vue.js', 'Express.js', 'Prisma', 'Jest', 
              'Cypress', 'Kubernetes', 'Jenkins', 'Redis', 'Elasticsearch', 'Socket.io'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-gray-200 rounded-2xl text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 cursor-default"
                style={{ animationDelay: `${1200 + (index * 100)}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;