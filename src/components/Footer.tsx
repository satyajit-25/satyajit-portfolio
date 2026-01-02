
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Satyajit.dev</h3>
            <p className="text-muted-foreground mb-4">
              Driven B.Tech Computer Science student passionate about creating innovative 
              solutions through code.
            </p>
            <nav className="flex space-x-4" aria-label="Social media links">
              <a 
                href="mailto:satyajit.patra203@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Send email to Satyajit"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
              <a 
                href="tel:+917978272616" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Call Satyajit"
              >
                <Phone size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://linkedin.com/in/satyajit-patra-a33403323" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Satyajit's LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Education</h4>
            <address className="text-muted-foreground not-italic">
              <strong>Government College of Engineering Kalahandi</strong>
              <br />
              B.Tech Computer Science Engineering
              <br />
              Currently in 4th Year
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Satyajit Patra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
