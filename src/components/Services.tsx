import React from 'react';
import { Globe, Code, Database, Brain, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly websites and web applications using modern technologies and best practices.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Development",
      description: "Building robust software solutions with Java and Python, focusing on scalability and maintainability.",
      features: ["Object-Oriented Programming", "Algorithm Design", "Code Optimization", "Testing & Debugging"],
      icon: Code,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Database Solutions",
      description: "Designing and implementing efficient database systems with SQL and Oracle for optimal data management.",
      features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"],
      icon: Database,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Exploring AI concepts and implementing machine learning solutions for intelligent automation.",
      features: ["AI Algorithm Implementation", "Data Analysis", "Predictive Modeling", "Automation Solutions"],
      icon: Brain,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
            <Code className="w-4 h-4" />
            <span>Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black italic">Services</span> I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I deliver impactful, user-friendly, and efficient solutions across various domains, 
            ensuring quality and innovation in every project.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${gridVisible ? 'scroll-visible' : 'scroll-hidden'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm group-hover:text-foreground transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
