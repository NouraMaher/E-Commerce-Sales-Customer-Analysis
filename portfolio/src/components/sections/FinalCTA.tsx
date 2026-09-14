import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, LayoutDashboard } from 'lucide-react';
import { projectLinks } from '../../data/projectLinks';

const FinalCTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6"
        >
          From Raw Transactions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            to Business Decisions.
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Explore the complete analysis and discover the insights behind the numbers. Data is only as valuable as the decisions it enables.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a href="#dashboard" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center">
            View Dashboard
            <LayoutDashboard className="w-4 h-4 ml-2" />
          </a>
          <a
            href={projectLinks.social.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-card text-foreground font-bold hover:bg-muted transition-colors border border-border hover:border-primary/50 flex items-center justify-center"
          >
            View Project on GitHub
            <ArrowUpRight className="w-4 h-4 ml-2 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
