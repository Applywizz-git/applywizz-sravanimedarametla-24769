import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataBackground } from '@/components/three/DataBackground';
import { portfolioData } from '@/data/portfolio';
import heroBackground from '@/assets/hero-bg.jpg';
import profile from "@/assets/profile.png";
import resumePDF from "@/assets/sambashivarao-resume.pdf";

const rotatingKeywords = [
  'ETL Pipelines',
  'Data Visualization',
  'Business Intelligence',
  'Predictive Analytics',
  'Cloud Platforms',
  'Dashboard Design'
];

export const Hero: React.FC = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isTypewriting, setIsTypewriting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTypewriting(false);
      setTimeout(() => {
        setCurrentKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
        setIsTypewriting(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* 3D Background Overlay */}
      <DataBackground className="opacity-10 z-1" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight"
            >
              {portfolioData.personal.name}
            </motion.h1>

            {/* Tagline with Rotating Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground"
            >
              <span>Delivering Enterprise-Scale </span>
              <span className="relative inline-block min-w-[280px] text-left">
                <motion.span
                  key={currentKeywordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isTypewriting ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary font-bold"
                >
                  {rotatingKeywords[currentKeywordIndex]}
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {portfolioData.about.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                className="btn-hero group"
                size="lg"
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
              <a href={resumePDF} download="sambashivarao-resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden lg:flex items-center space-x-2 text-muted-foreground cursor-pointer"
              onClick={scrollToAbout}
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-80 h-80 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};