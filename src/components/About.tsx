
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">
              Working with the <span className="text-primary italic">best</span>
              <br />
              <span className="text-primary italic">talent</span> across the globe
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate B.Tech Computer Science student at Government College of Engineering Kalahandi, 
              currently in my 4th year. With a strong foundation in programming and a drive for excellence, 
              I specialize in creating innovative solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              My commitment to quality, teamwork skills, and eagerness to grow have helped me lead successful 
              projects and deliver impactful results. I believe in the power of technology to solve real-world 
              problems and am constantly exploring new frontiers in AI, Machine Learning, and Cybersecurity.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">4th Year</h3>
                <p className="text-muted-foreground">B.Tech Computer Science</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">GCEK</h3>
                <p className="text-muted-foreground">Government College of Engineering Kalahandi</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Led project teams during internship at OCAC, demonstrating strong leadership and communication skills.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Developed innovative solutions like the Error Detection and Resolution System to streamline workflows.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Strong teamwork skills with experience working in diverse, cross-functional teams.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Growth</h4>
              <p className="text-sm text-muted-foreground">
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
