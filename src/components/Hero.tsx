
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Solving </span>
              <span className="text-primary italic">modern</span>
              <br />
              <span className="text-primary italic">problems</span>
              <span className="text-foreground"> through</span>
              <br />
              <span className="text-foreground">code</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Hi, I'm <strong>Satyajit Patra</strong>, a driven B.Tech Computer Science student specializing in Java, Python, and web development with a passion for AI and problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToPortfolio}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="px-8 py-3 text-lg"
              >
                Let's Connect
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full p-2">
                <img 
                  src="/lovable-uploads/54747841-ad67-432e-bd2f-9b944f9bde7b.png"
                  alt="Satyajit Patra"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-4">My recent work</p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Projects completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Technologies mastered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">98.7%</div>
              <div className="text-sm text-muted-foreground">Client satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
