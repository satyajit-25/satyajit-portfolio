
import React from 'react';
import { ArrowDown } from 'lucide-react';
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Professional profile section */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-500">
            <div className="relative group">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Clean border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full"></div>
                </div>
                
                {/* Profile image */}
                <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-border shadow-xl">
                  <img 
                    src={profilePhoto}
                    alt="Satyajit Patra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
