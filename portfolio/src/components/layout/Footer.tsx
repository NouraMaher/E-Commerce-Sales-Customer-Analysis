import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { projectLinks } from '../../data/projectLinks';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-section border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-foreground">Noura Maher Elamin</p>
          <p className="text-sm text-muted-foreground mt-1">
            © {year} Noura Maher Elamin. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={projectLinks.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={projectLinks.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
