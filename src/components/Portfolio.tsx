import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import employeeSalaryImg from '@/assets/employee-salary-prediction.png';
import edrsImg from '@/assets/edrs.png';
import aiVisionImg from '@/assets/ai-vision-toolkit.png';

const Portfolio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const projects = [
    {
      title: "Error Detection and Resolution System",
      description: "Built this during my OCAC internship to help teams track and fix bugs faster. It made testing way smoother and helped everyone stay on the same page.",
      technologies: ["Java", "NetBeans IDE 8.2", "Oracle Database"],
      role: "Project Leader",
      company: "OCAC Internship",
      image: edrsImg,
      featured: false,
      year: "2024",
      viewDetailsLink: "https://github.com/satyajit-25/EDRS/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/EDRS/tree/main/src/ocacjava2_6pm"
    },
    {
      title: "AI Computer Vision Toolkit",
      description: "Created a virtual mouse and hand gesture detection system. You can control your computer without touching anything - just use hand gestures.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      role: "AI Intern",
      company: "OCAC Internship",
      image: aiVisionImg,
      featured: false,
      year: "2025",
      viewDetailsLink: "https://github.com/satyajit-25/VisionMouse/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/VisionMouse/blob/main/ai_virtual_mouse.py"
    },
    {
      title: "Employee Salary Prediction",
      description: "A machine learning project that predicts salaries based on different factors. Built with Python and deployed as a web app using Streamlit.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      role: "ML Intern",
      company: "Edunet Foundation with IBM",
      image: employeeSalaryImg,
      featured: false,
      year: "2025",
      viewDetailsLink: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/README.md",
      codeLink: "https://github.com/satyajit-25/Employee-salary-prediction/blob/main/app.py"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Portfolio</p>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Some things I've built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real projects from internships and personal work. Each one taught me something new.
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${gridVisible ? 'scroll-visible' : 'scroll-hidden'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">{project.role}</span>
                  <span>at {project.company}</span>
                  <span className="ml-auto">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.viewDetailsLink && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.viewDetailsLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  )}
                  
                  {project.codeLink && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(project.codeLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
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
