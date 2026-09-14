import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { businessQuestions } from '../../data/projectData';

const BusinessQuestions = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(businessQuestions[0].category);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="py-24 bg-section border-t border-border/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Business Questions</h2>
          <p className="mt-4 text-muted-foreground">Guiding the analytical process to extract targeted value from the data.</p>
        </div>

        <div className="space-y-4">
          {businessQuestions.map((group, index) => (
              <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleCategory(group.category)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/50 transition-colors focus:outline-none"
              >
                <span className="text-lg font-semibold text-foreground flex items-center">
                  <span className="text-blue-500 mr-4 text-sm font-bold tracking-wider uppercase">Category {index + 1}</span>
                  {group.category}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openCategory === group.category ? 'rotate-180 text-blue-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openCategory === group.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 md:p-6 pt-0 border-t border-border/50 bg-card/50">
                      <ul className="space-y-3">
                        {group.questions.map((q, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <span className="text-blue-500 font-medium mr-3">{i + 1}.</span>
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessQuestions;
