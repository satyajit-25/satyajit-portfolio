import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: "Error Detection and Resolution System",
      description: "A comprehensive software error tracking system developed to streamline bug reporting and resolution among teams, significantly improving testing efficiency and team collaboration.",
      technologies: ["Java", "NetBeans IDE 8.2", "Oracle Database"],
      role: "Project Leader",
      company: "OCAC Internship",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true,
      year: "2024",
      viewDetailsLink: "https://github.com/satyajit-25/EDRS/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/EDRS/tree/main/src/ocacjava2_6pm"
    },
    {
      title: "AI Computer Vision Toolkit (Virtual Mouse & Hand Gesture Detection)",
      description: "Advanced computer vision project implementing virtual mouse control and hand gesture recognition using AI and machine learning techniques for touchless interaction.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      role: "AI Intern",
      company: "OCAC Internship",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      featured: false,
      year: "2025",
      viewDetailsLink: "https://github.com/satyajit-25/VisionMouse/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/VisionMouse/blob/main/ai_virtual_mouse.py"
    },
    {
      title: "Employee Salary Prediction Project",
      description: "Machine learning model for predicting employee salaries based on various features using regression algorithms and data analysis techniques.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      role: "ML Intern",
      company: "Edunet Foundation in collaboration with IBM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      featured: false,
      year: "2025",
      viewDetailsLink: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/app.py"
    },
    {
      title: "Web Application Dashboard",
      description: "Modern responsive dashboard application with real-time data visualization and user management features.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      role: "Full Stack Developer",
      company: "Personal Project",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      featured: false,
      year: "2024"
    },
    {
      title: "Database Management System",
      description: "Efficient database solution with optimized queries and data structure design for improved performance.",
      technologies: ["SQL", "Oracle", "Python"],
      role: "Database Developer",
      company: "Academic Project",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false,
      year: "2023"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-accent/5 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
            Portfolio
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's have a look at
            <br />
            my <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black italic">portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my notable projects that showcase my skills in software development, 
            web technologies, and problem-solving.
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              } ${gridVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-primary">{project.role}</span>
                  <span className="text-sm text-muted-foreground">• {project.company}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.viewDetailsLink ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group/btn hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.viewDetailsLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      View Details
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="group/btn hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      View Details
                    </Button>
                  )}
                  
                  {project.codeLink ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn"
                      onClick={() => window.open(project.codeLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
