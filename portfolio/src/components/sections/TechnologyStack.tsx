import React from 'react';
import { motion } from 'framer-motion';

const TechnologyStack = () => {
  const analysisTools = ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Power BI', 'Excel'];
  const webTech = ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16">Technology Stack</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-bold text-blue-500 mb-6">Analysis Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {analysisTools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-muted border border-border text-muted-foreground rounded-lg shadow-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-bold text-cyan-500 mb-6">Website Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {webTech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-muted border border-border text-muted-foreground rounded-lg shadow-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
