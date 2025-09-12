import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, BarChart3, Shield } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Interactive dashboards in Power BI, Tableau, and Looker with KPIs and geospatial analytics'
  },
  {
    icon: Database,
    title: 'ETL & Analytics',
    description: 'Advanced ETL pipelines and predictive analytics using Python, PySpark, R, and SQL'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Improving data accuracy, reporting efficiency, and system reliability across enterprises'
  },
  {
    icon: Shield,
    title: 'Data Governance',
    description: 'Security frameworks including RBAC, GDPR, and CCPA compliance in Agile environments'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming complex data into actionable insights that drive business success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                {portfolioData.about.summary}
              </p>
            </div>

            <div className="space-y-4">
              {portfolioData.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="text-foreground">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {portfolioData.about.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-lg text-center card-hover"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-3xl font-bold text-gradient mb-2"
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-lg card-hover group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />
    </section>
  );
};