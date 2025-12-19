
import React from 'react';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.02'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
              <span>Available for opportunities</span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Solving</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent font-black italic">
                  modern problems
                </span>
                <span className="block text-foreground">through</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-primary font-black">
                  code
                </span>
              </h1>
            </div>
            
            {/* Enhanced description */}
            <div className="space-y-4 animate-fade-in delay-200">
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Hi, I'm <span className="text-primary font-bold">Satyajit Patra</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A driven B.Tech Computer Science student specializing in Java, Python, and web development with a passion for AI and problem-solving. Creating innovative solutions that make a difference.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <Button 
                onClick={scrollToPortfolio}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Enhanced profile section */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-500">
            <div className="relative group">
              {/* Main profile container with enhanced styling */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50 group-hover:opacity-90 group-hover:blur-2xl group-hover:scale-110 transition-all duration-500"></div>
                
                {/* Pulsing ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/50 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rotating border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full p-1 animate-spin group-hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] transition-shadow duration-500" style={{ animationDuration: '10s' }}>
                  <div className="w-full h-full bg-background rounded-full"></div>
                </div>
                
                {/* Profile image */}
                <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full p-1 backdrop-blur-sm border-2 border-primary/30 group-hover:border-primary/60 shadow-[0_0_40px_rgba(var(--primary),0.3)] group-hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] transition-all duration-500">
                  <img 
                    src={profilePhoto}
                    alt="Satyajit Patra"
                    className="w-full h-full object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-background/50"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-pulse">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-accent/20 rounded-xl backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-pulse delay-1000">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced stats section */}
        <div className="text-center mt-20 animate-fade-in delay-700">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Latest achievements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects completed</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Technologies mastered</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground font-medium">Certifications earned</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="text-muted-foreground/50 mt-2 mx-auto" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
