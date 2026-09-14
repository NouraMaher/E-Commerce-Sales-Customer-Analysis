import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProjectOverview from './components/sections/ProjectOverview';
import DataCleaning from './components/sections/DataCleaning';
import AnalysisWorkflow from './components/sections/AnalysisWorkflow';
import BusinessQuestions from './components/sections/BusinessQuestions';
import InteractiveAnalysis from './components/sections/InteractiveAnalysis';
import PowerBIDashboard from './components/sections/PowerBIDashboard';
import KeyInsights from './components/sections/KeyInsights';
import BusinessRecommendations from './components/sections/BusinessRecommendations';
import TechnologyStack from './components/sections/TechnologyStack';
import ProjectResources from './components/sections/ProjectResources';
import FinalCTA from './components/sections/FinalCTA';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <ProjectOverview />
          <DataCleaning />
          <AnalysisWorkflow />
          <BusinessQuestions />
          <InteractiveAnalysis />
          <PowerBIDashboard />
          <KeyInsights />
          <BusinessRecommendations />
          <TechnologyStack />
          <ProjectResources />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
