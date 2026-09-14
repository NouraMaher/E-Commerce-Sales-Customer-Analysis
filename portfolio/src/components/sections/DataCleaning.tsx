import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { datasets } from '../../data/projectData';

const DataCleaning = () => {
  const operations = [
    "Removing duplicate rows",
    "Removing records with missing Description",
    "Trimming product descriptions",
    "Keeping missing CustomerID values for main transaction analysis",
    "Creating Revenue column (Quantity * UnitPrice)",
    "Creating IsCancelled indicator (InvoiceNo starts with 'C')",
    "Creating IsReturn indicator",
    "Creating Month column for time-series analysis"
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">From Raw Data to Analysis-Ready Data</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Ensuring data quality and integrity before conducting any analytical procedures.</p>
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Raw Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border rounded-2xl p-6 w-full text-center shadow-sm"
          >
            <div className="inline-flex items-center justify-center p-3 bg-red-500/10 text-red-500 rounded-full mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">RAW DATA</h3>
            <div className="flex justify-center space-x-6 text-muted-foreground">
              <span><strong className="text-foreground">{datasets.raw.rows}</strong> rows</span>
              <span><strong className="text-foreground">{datasets.raw.columns}</strong> columns</span>
            </div>
          </motion.div>

          <ArrowDown className="w-8 h-8 text-muted-foreground my-6" />

          {/* Cleaning Operations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 w-full shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-500 mb-6 text-center uppercase tracking-wider">Cleaning Pipeline</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {operations.map((op, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{op}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <ArrowDown className="w-8 h-8 text-blue-500/50 my-6 animate-bounce" />

          {/* Clean Data */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-muted to-card border border-border rounded-2xl p-6 w-full text-center shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-500 rounded-full mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">CLEAN DATA</h3>
              <div className="flex justify-center space-x-6 text-emerald-600 dark:text-emerald-100">
                <span><strong className="text-foreground text-lg">{datasets.cleaned.rows}</strong> rows</span>
                <span><strong className="text-foreground text-lg">{datasets.cleaned.columns}</strong> columns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataCleaning;
