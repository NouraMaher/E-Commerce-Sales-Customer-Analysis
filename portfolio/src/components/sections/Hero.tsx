import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, ShoppingBag, CreditCard, RotateCcw } from 'lucide-react';
import { KPIs } from '../../data/projectData';

const HeroKPIs = () => {
  const kpiData = [
    { label: 'Total Revenue', value: KPIs.totalRevenueFormatted, icon: CreditCard, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Total Orders', value: KPIs.totalOrdersFormatted, icon: ShoppingBag, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { label: 'Unique Customers', value: KPIs.uniqueCustomersFormatted, icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { label: 'Avg Order Value', value: `$${KPIs.averageOrderValue}`, icon: BarChart3, color: 'text-violet-500', bg: 'bg-violet-500/10' },
    { label: 'Return Rate', value: `${KPIs.returnRate}%`, icon: RotateCcw, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 max-w-6xl mx-auto w-full relative z-10">
      {kpiData.map((kpi, index) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 flex flex-col items-center text-center hover:border-primary/30 hover:bg-card/80 transition-all group"
        >
          <div className={`p-3 rounded-full mb-3 ${kpi.bg} group-hover:scale-110 transition-transform`}>
            <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1 tracking-tight">{kpi.value}</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{kpi.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none dark:opacity-20 opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-500/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Data Analyst Case Study</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight max-w-4xl"
        >
          E-Commerce Sales <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            & Customer Analysis
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          Turning retail transaction data into actionable business insights. Analyzing online retail transactions to understand sales performance, customer behavior, product trends, and international performance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a href="#analysis" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors">
            Explore Analysis
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a href="#dashboard" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors border border-border">
            View Power BI Dashboard
          </a>
        </motion.div>

        <HeroKPIs />
      </div>
    </section>
  );
};

export default Hero;
