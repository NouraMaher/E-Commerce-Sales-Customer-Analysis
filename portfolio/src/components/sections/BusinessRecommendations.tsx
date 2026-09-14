import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';
import { recommendations } from '../../data/projectData';

const BusinessRecommendations = () => {
  return (
    <section id="recommendations" className="py-24 bg-section relative border-y border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 rounded-full mb-4">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Business Recommendations</h2>
          <p className="mt-4 text-muted-foreground">Actionable strategies derived directly from the data insights to drive business growth.</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <ul className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5 mr-4" />
                <span className="text-lg text-muted-foreground">{rec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessRecommendations;
