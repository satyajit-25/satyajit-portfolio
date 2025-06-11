
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, user-friendly websites and web applications using modern technologies and best practices.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      title: "Software Development",
      description: "Building robust software solutions with Java and Python, focusing on scalability and maintainability.",
      features: ["Object-Oriented Programming", "Algorithm Design", "Code Optimization", "Testing & Debugging"]
    },
    {
      title: "Database Solutions",
      description: "Designing and implementing efficient database systems with SQL and Oracle for optimal data management.",
      features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"]
    },
    {
      title: "AI & Machine Learning",
      description: "Exploring AI concepts and implementing machine learning solutions for intelligent automation.",
      features: ["AI Algorithm Implementation", "Data Analysis", "Predictive Modeling", "Automation Solutions"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary italic">Services</span> I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I deliver impactful, user-friendly, and efficient solutions across various domains, 
            ensuring quality and innovation in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 animate-fade-in hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
