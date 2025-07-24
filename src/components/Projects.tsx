import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, real-time inventory management, and advanced analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 124, views: '2.1k' }
    },
    {
      title: 'AI Task Management',
      description: 'An intelligent task management application with AI-powered prioritization, real-time collaboration, drag-and-drop functionality, and smart deadline predictions.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'OpenAI', 'Firebase', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 89, views: '1.8k' }
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather dashboard with predictive analytics, beautiful data visualizations, location-based forecasts, and climate trend analysis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 67, views: '1.2k' }
    },
    {
      title: 'Social Media Analytics',
      description: 'Advanced analytics platform for social media managers with engagement tracking, audience insights, competitor analysis, and automated reporting.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 156, views: '3.4k' }
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology with smart contracts, real-time results, and comprehensive audit trails.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 203, views: '4.7k' }
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat application with end-to-end encryption, file sharing, video calls, group management, and cross-platform synchronization.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Socket.io', 'Node.js', 'WebRTC', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 91, views: '2.3k' }
    }
  ];

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

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A selection of projects that showcase my skills and passion for creating meaningful digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 overflow-hidden border border-gray-100 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Hover Overlay with Links */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={project.liveUrl}
                    className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Stats */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star size={14} />
                    {project.stats.stars}
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Eye size={14} />
                    {project.stats.views}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-all duration-300 font-medium group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 font-medium group/link"
                  >
                    <Github size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-blue-600/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;