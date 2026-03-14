import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { portfolioData } from '@/data/portfolio';

const languages = ['Python', 'SQL', 'Power BI', 'Tableau', 'Azure', 'Apache Spark', 'R', 'PySpark'];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [showName, setShowName] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animate progress
    const interval = setInterval(() => {
      setDisplayProgress(prev => {
        const target = Math.max(progress, prev + 2);
        if (target >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return target;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    // Cycle through languages
    const interval = setInterval(() => {
      setCurrentLanguage(prev => (prev + 1) % languages.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show name after 1 second
    const timer = setTimeout(() => setShowName(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Complete loading after animation
    if (isComplete) {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      >
        <div className="text-center space-y-8 max-w-md">
          {/* Name Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <motion.h1
              className="text-4xl font-bold text-gradient overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: showName ? 'auto' : 0 }}
              transition={{ duration: 2, delay: 0.2 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showName ? 1 : 0 }}
              transition={{ delay: 1.5 }}
              className="text-lg text-muted-foreground"
            >
              {portfolioData.personal.title}
            </motion.p>
          </motion.div>



          {/* Progress */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Loading Portfolio</span>
              <span className="text-primary font-mono">{Math.round(displayProgress)}%</span>
            </div>
            
            <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.p
              key={currentLanguage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-muted-foreground"
            >
              Loading • {languages[currentLanguage]} • Analytics
            </motion.p>
          </div>

          {/* Completion Animation */}
          {isComplete && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-2xl"
                >
                  ✓
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};