import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, FileSpreadsheet, FileBox, LayoutDashboard, Download, ExternalLink } from 'lucide-react';
import { projectLinks } from '../../data/projectLinks';

const ProjectResources = () => {
  const resources = [
    { 
      title: 'Python Analysis', 
      description: 'Complete exploratory data analysis and business questions.',
      icon: FileCode, 
      color: 'text-yellow-500', 
      bg: 'bg-yellow-500/10', 
      url: projectLinks.files.pythonAnalysis,
      isDownload: true,
      fileType: '.ipynb'
    },
    { 
      title: 'Cleaned Dataset', 
      description: 'Analysis-ready cleaned retail dataset.',
      icon: FileSpreadsheet, 
      color: 'text-emerald-500', 
      bg: 'bg-emerald-500/10', 
      url: projectLinks.files.cleanedDataset,
      isDownload: true,
      fileType: '.xlsx'
    },
    { 
      title: 'Original Dataset', 
      description: 'Original UCI Online Retail dataset.',
      icon: FileBox, 
      color: 'text-muted-foreground', 
      bg: 'bg-muted', 
      url: projectLinks.files.originalDataset,
      isDownload: true,
      fileType: '.xlsx'
    },
    { 
      title: 'Power BI Dashboard', 
      description: 'Interactive sales performance dashboard.',
      icon: LayoutDashboard, 
      color: 'text-amber-500', 
      bg: 'bg-amber-500/10', 
      url: projectLinks.dashboard.powerBi,
      isDownload: true,
      actionLabel: 'Download .pbix File',
      fileType: '.pbix'
    },
  ];

  return (
    <section id="resources" className="py-24 bg-section relative border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Project Resources</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Access the source files, datasets, and complete analytical workspace used to generate these insights.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <motion.div 
              key={res.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors group shadow-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${res.bg}`}>
                    <res.icon className={`w-6 h-6 ${res.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                    {res.fileType}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{res.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{res.description}</p>
              </div>
              
              {res.url ? (
                <a 
                  href={res.url}
                  download={res.isDownload ? true : undefined}
                  target={!res.isDownload ? "_blank" : undefined}
                  rel={!res.isDownload ? "noopener noreferrer" : undefined}
                  className="w-full py-2.5 rounded-lg flex items-center justify-center font-medium transition-colors bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {res.isDownload ? <Download className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                  {res.actionLabel ?? (res.isDownload ? 'Download Dataset' : 'View Dashboard')}
                </a>
              ) : (
                <button 
                  className="w-full py-2.5 rounded-lg flex items-center justify-center font-medium transition-colors bg-muted text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  {res.isDownload ? 'Download coming soon' : 'Coming Soon'}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectResources;
