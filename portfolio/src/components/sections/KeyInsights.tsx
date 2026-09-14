import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { keyInsights } from '../../data/projectData';

const KeyInsights = () => {
  return (
    <section id="insights" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Key Insights</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">The most critical findings derived from the exploratory analysis and dashboard.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyInsights.map((insight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/60 border border-border rounded-2xl p-6 hover:bg-muted/80 hover:border-primary/30 transition-all group shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Lightbulb className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Insight {index + 1}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {insight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
