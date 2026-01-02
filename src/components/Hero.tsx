import React from 'react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center" aria-labelledby="hero-heading">
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">Hey, I'm</p>
              <h1 id="hero-heading" className="text-5xl lg:text-6xl font-bold leading-tight">
                Satyajit Patra
              </h1>
              <p className="text-2xl text-primary font-medium" role="doc-subtitle">
                Software Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Tech Computer Science student who enjoys building things with code. 
              I work with Java, Python, and web technologies. Currently exploring AI and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" role="group" aria-label="Call to action buttons">
              <Button 
                onClick={scrollToPortfolio}
                className="px-8 py-4 text-lg font-medium rounded-lg"
                aria-label="View my portfolio work"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="px-8 py-4 text-lg font-medium rounded-lg"
                aria-label="Go to contact section"
              >
                Let's Connect
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border">
              <img 
                src={profilePhoto}
                alt="Satyajit Patra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left" role="list" aria-label="Key statistics">
          <div role="listitem">
            <div className="text-3xl font-bold text-primary" aria-label="10 plus projects">10+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div role="listitem">
            <div className="text-3xl font-bold text-primary" aria-label="5 plus technologies">5+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div role="listitem">
            <div className="text-3xl font-bold text-primary" aria-label="6 plus certifications">6+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
