import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Download } from 'lucide-react';
import { projectLinks } from '../../data/projectLinks';

const PowerBIDashboard = () => {
  const powerBiLink = projectLinks.dashboard.powerBi;

  return (
    <section id="dashboard" className="py-24 bg-section relative border-y border-border/50">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none dark:opacity-20 opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 text-blue-500 rounded-full mb-4">
            <LayoutDashboard className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Power BI Dashboard</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The final interactive BI solution developed for stakeholders, combining all data insights into a single unified view.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border rounded-2xl p-2 shadow-2xl max-w-6xl mx-auto overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {powerBiLink ? (
              <a
                href={powerBiLink}
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg flex items-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
              >
                Download Dashboard (.pbix) <Download className="w-4 h-4 ml-2" />
              </a>
            ) : (
              <button
                className="px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg flex items-center cursor-not-allowed transform translate-y-4 group-hover:translate-y-0 duration-300 border border-border"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>

          <div className="bg-muted rounded-xl overflow-hidden aspect-video flex items-center justify-center border border-border relative">
            <img
              src="/files/Dashboard.jpeg"
              alt="Power BI Sales Performance Dashboard Preview"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">Important:</strong> Power BI requires the desktop app to open .pbix files — the download above is the source dashboard file, kept distinct from the web-based interactive analysis above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PowerBIDashboard;
