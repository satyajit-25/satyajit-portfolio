
import React from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Error Detection and Resolution System",
      description: "A comprehensive software error tracking system developed to streamline bug reporting and resolution among teams, significantly improving testing efficiency and team collaboration.",
      technologies: ["Java", "NetBeans IDE 8.2", "Oracle Database"],
      role: "Project Leader",
      company: "OCAC Internship",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      title: "Web Application Dashboard",
      description: "Modern responsive dashboard application with real-time data visualization and user management features.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      role: "Full Stack Developer",
      company: "Personal Project",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      featured: false
    },
    {
      title: "Database Management System",
      description: "Efficient database solution with optimized queries and data structure design for improved performance.",
      technologies: ["SQL", "Oracle", "Python"],
      role: "Database Developer",
      company: "Academic Project",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's have a look at
            <br />
            my <span className="text-primary italic">portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in software development, 
            web technologies, and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-card border border-border rounded-lg overflow-hidden animate-fade-in hover:shadow-lg transition-all hover:scale-105 ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{project.role}</span>
                  <span className="text-sm text-muted-foreground">• {project.company}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-muted text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
