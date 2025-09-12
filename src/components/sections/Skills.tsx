import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const skillCategories = [
  { id: 'languages', label: 'Programming Languages', icon: Code, data: portfolioData.skills.languages },
  { id: 'frameworks', label: 'Tools & Frameworks', icon: Database, data: portfolioData.skills.frameworks },
  { id: 'cloud', label: 'Cloud Platforms', icon: Cloud, data: portfolioData.skills.cloud },
  { id: 'tools', label: 'DevOps & Tools', icon: Settings, data: portfolioData.skills.tools },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const currentSkills = skillCategories.find(cat => cat.id === activeCategory)?.data || [];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the modern data analytics technology stack
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg text-center transition-all duration-300 focus-ring ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'glass hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-lg card-hover group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {skill.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      {skill.level}%
                    </div>
                  </div>
                </div>

                {/* Skill Progress Bar */}
                <div className="relative">
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  {/* Progress Glow Effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full opacity-50"
                    style={{
                      background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.8), transparent)`,
                      width: '20px',
                    }}
                    animate={{
                      x: [-20, `calc(${skill.level}% - 20px)`],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1 + 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Technology Expertise Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 6 years of hands-on experience, I've mastered a comprehensive suite of data analytics 
                technologies. From programming languages like Python and SQL to advanced visualization tools 
                like Power BI and Tableau, my skill set spans the entire data lifecycle - from ingestion and 
                processing to analysis and presentation.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Programming Languages', count: portfolioData.skills.languages.length },
                  { label: 'Frameworks & Tools', count: portfolioData.skills.frameworks.length },
                  { label: 'Cloud Platforms', count: portfolioData.skills.cloud.length },
                  { label: 'DevOps Tools', count: portfolioData.skills.tools.length },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{stat.count}+</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
};