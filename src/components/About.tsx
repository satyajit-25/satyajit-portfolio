import React from 'react';
import { Users, Lightbulb, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={sectionRef}
            className={`${isVisible ? 'scroll-visible-left' : 'scroll-hidden-left'}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
              About Me
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Working with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black italic">best</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-black italic">talent</span> across the globe
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                I'm a passionate B.Tech Computer Science student at Government College of Engineering Kalahandi, 
                currently in my 4th year. With a strong foundation in programming and a drive for excellence, 
                I specialize in creating innovative solutions that make a difference.
              </p>
              
              <p className="leading-relaxed">
                My commitment to quality, teamwork skills, and eagerness to grow have helped me lead successful 
                projects and deliver impactful results. I believe in the power of technology to solve real-world 
                problems and am constantly exploring new frontiers in AI, Machine Learning, and Cybersecurity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="group">
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">4th Year</h3>
                <p className="text-muted-foreground font-medium">B.Tech Computer Science</p>
              </div>
              <div className="group">
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">GCEK</h3>
                <p className="text-muted-foreground font-medium">Government College of Engineering Kalahandi</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={cardsRef}
            className={`grid grid-cols-2 gap-6 ${cardsVisible ? 'scroll-visible-right' : 'scroll-hidden-right'}`}
          >
            <div className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${cardsVisible ? 'scroll-visible' : 'scroll-hidden'} stagger-1`}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Leadership</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led project teams during internship at OCAC, demonstrating strong leadership and communication skills.
              </p>
            </div>
            
            <div className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${cardsVisible ? 'scroll-visible' : 'scroll-hidden'} stagger-2`}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Innovation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developed innovative solutions like the Error Detection and Resolution System to streamline workflows.
              </p>
            </div>
            
            <div className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${cardsVisible ? 'scroll-visible' : 'scroll-hidden'} stagger-3`}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Collaboration</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong teamwork skills with experience working in diverse, cross-functional teams.
              </p>
            </div>
            
            <div className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${cardsVisible ? 'scroll-visible' : 'scroll-hidden'} stagger-4`}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-3 text-lg">Growth</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Continuously learning and adapting to new technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
