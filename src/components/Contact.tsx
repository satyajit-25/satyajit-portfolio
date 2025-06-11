
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "satyajit.patra@example.com",
      href: "mailto:satyajit.patra@example.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/satyajit-patra",
      href: "https://linkedin.com/in/satyajit-patra",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black italic">talk</span> for something special
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Get in touch</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a 
                    key={index}
                    href={method.href}
                    target={method.title === "LinkedIn" ? "_blank" : "_self"}
                    rel={method.title === "LinkedIn" ? "noopener noreferrer" : ""}
                    className="flex items-center space-x-4 p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{method.title}</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold rounded-xl group">
                  <Send className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
