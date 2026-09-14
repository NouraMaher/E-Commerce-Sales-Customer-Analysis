import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Search, Target, PieChart, LayoutDashboard, Lightbulb, TrendingUp } from 'lucide-react';

const steps = [
  { id: '01', title: 'Data Understanding', icon: Database, desc: 'Assessing the structure and quality of the raw UCI dataset.' },
  { id: '02', title: 'Data Cleaning', icon: Filter, desc: 'Handling missing values, duplicates, and transforming fields.' },
  { id: '03', title: 'Exploratory Data Analysis', icon: Search, desc: 'Discovering initial patterns and statistical summaries.' },
  { id: '04', title: 'Business Questions', icon: Target, desc: 'Defining clear objectives for the analysis.' },
  { id: '05', title: 'Data Visualization', icon: PieChart, desc: 'Creating charts to visualize trends visually.' },
  { id: '06', title: 'Power BI Dashboard', icon: LayoutDashboard, desc: 'Building an interactive dashboard for stakeholders.' },
  { id: '07', title: 'Business Insights', icon: Lightbulb, desc: 'Extracting meaningful conclusions from the analysis.' },
  { id: '08', title: 'Recommendations', icon: TrendingUp, desc: 'Proposing strategic actions based on data.' }
];

const AnalysisWorkflow = () => {
  return (
    <section className="py-24 bg-section relative border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Data Analysis Workflow</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">The structured process from raw transaction data to strategic business recommendations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 relative group hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="absolute top-6 right-6 text-6xl font-black text-border group-hover:text-primary/10 transition-colors pointer-events-none">
                {step.id}
              </div>
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-muted-foreground">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{step.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisWorkflow;
