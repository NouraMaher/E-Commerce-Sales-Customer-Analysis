import React, { useState } from 'react';
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { projectLinks } from '../../data/projectLinks';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Analysis', href: '#analysis' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Insights', href: '#insights' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Resources', href: '#resources' },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-foreground tracking-tight shrink-0">
          Noura Elamin
        </a>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={projectLinks.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={projectLinks.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background">
          <div className="px-4 sm:px-6 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-2 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-2 pt-2 mt-2 border-t border-border/50">
              <a
                href={projectLinks.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={projectLinks.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
