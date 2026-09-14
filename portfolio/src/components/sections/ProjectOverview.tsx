import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Box, Calendar, User, MapPin } from 'lucide-react';
import { datasets } from '../../data/projectData';

const ProjectOverview = () => {
  return (
    <section id="overview" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">About the Project</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                This project analyzes the UCI Online Retail dataset, a transnational data set which contains all the transactions occurring between 01/12/2010 and 09/12/2011 for a UK-based and registered non-store online retail.
              </p>
              <p>
                The company mainly sells unique all-occasion gifts. Many customers of the company are wholesalers. The goal of this analysis is to transform raw transactional data into actionable business intelligence using modern data tools.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="px-4 py-2 bg-card border border-border rounded-lg">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Original Records</p>
                <p className="text-xl font-bold text-foreground">{datasets.raw.rows}</p>
              </div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-xs text-blue-600 dark:text-blue-400 uppercase font-semibold">Cleaned Records</p>
                <p className="text-xl font-bold text-blue-700 dark:text-blue-50">{datasets.cleaned.rows}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-card/80 border border-border p-6 rounded-2xl col-span-2 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground flex items-center mb-4">
                <FileSpreadsheet className="w-5 h-5 mr-2 text-blue-500" />
                Key Data Fields
              </h3>
              <div className="flex flex-wrap gap-2">
                {datasets.raw.fields.map((field) => (
                  <span key={field} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                    {field}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card/80 border border-border p-6 rounded-2xl flex flex-col justify-center shadow-sm">
              <Box className="w-8 h-8 text-cyan-500 mb-3" />
              <h4 className="text-foreground font-medium">Products</h4>
              <p className="text-sm text-muted-foreground">Unique StockCodes & Descriptions</p>
            </div>
            
            <div className="bg-card/80 border border-border p-6 rounded-2xl flex flex-col justify-center shadow-sm">
              <User className="w-8 h-8 text-indigo-500 mb-3" />
              <h4 className="text-foreground font-medium">Customers</h4>
              <p className="text-sm text-muted-foreground">Unique CustomerIDs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
