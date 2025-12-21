import React from 'react';
import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor, Computer Science",
    organization: "University Department",
    quote: "Satyajit demonstrates exceptional problem-solving abilities and a genuine passion for technology. His work on AI projects showed remarkable initiative and technical depth.",
    image: null
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    organization: "Tech Company",
    quote: "Working with Satyajit was a pleasure. He quickly grasps complex concepts and delivers clean, maintainable code. A true team player with excellent communication skills.",
    image: null
  },
  {
    name: "Amit Patel",
    role: "Project Mentor",
    organization: "Internship Program",
    quote: "Satyajit's dedication to learning and improving is commendable. He consistently exceeded expectations and brought innovative solutions to challenging problems.",
    image: null
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'scroll-visible' : 'scroll-hidden'
          }`}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What People Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recommendations from professors, mentors, and colleagues who have witnessed my work and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    organization: string;
    quote: string;
    image: string | null;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-xl hover:border-primary/20 ${
        isVisible ? 'scroll-visible' : 'scroll-hidden'
      } stagger-${index + 1}`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
          <Quote className="w-5 h-5" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-muted-foreground leading-relaxed mt-4 mb-8 italic">
        "{testimonial.quote}"
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border">
          <span className="text-primary font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}
          </p>
          <p className="text-xs text-primary/70">
            {testimonial.organization}
          </p>
        </div>
      </div>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default Testimonials;
