import React from 'react';
import { Code2, Database, Globe, Brain, GitBranch } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "SQL", level: 90 },
        { name: "Oracle", level: 85 },
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "OOP", level: 92 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "AI Concepts", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
            <Code2 className="w-4 h-4" />
            <span>Technical Skills</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Solving problems by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black italic">the services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My technical expertise spans across multiple domains, from programming and web development 
            to database management and emerging technologies.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${gridVisible ? 'scroll-visible' : 'scroll-hidden'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/60 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: gridVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 100) + (skillIndex * 200)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
