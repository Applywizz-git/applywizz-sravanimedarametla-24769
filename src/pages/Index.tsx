import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/loading/LoadingScreen';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { useAOS } from '@/hooks/useAOS';
import { initializeTheme } from '@/store/theme';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useAOS();

  useEffect(() => {
    initializeTheme();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <LoadingScreen onComplete={handleLoadingComplete} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
