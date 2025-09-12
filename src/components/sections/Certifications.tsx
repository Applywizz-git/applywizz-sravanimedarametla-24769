import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in data analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-lg overflow-hidden card-hover group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: [-300, 300],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />

              <div className="p-6 space-y-4 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {cert.platform}
                    </div>
                  </div>
                </div>

                {/* Certification Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span className="font-medium text-foreground">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="p-3 bg-muted/10 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Credential ID</div>
                    <div className="text-sm font-mono text-foreground">
                      {cert.credentialId}
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-primary opacity-10 transform rotate-45 translate-x-8 -translate-y-8" />
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Continuous Learning & Professional Development
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These certifications represent my commitment to staying current with the latest 
              data analytics technologies and best practices. Each credential has been earned 
              through rigorous training and assessment, validating my expertise in key areas 
              of data analysis, visualization, and cloud platforms.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Professional Certificates', count: '5+' },
                { label: 'Leading Platforms', count: '4' },
                { label: 'Years Experience', count: '6+' },
                { label: 'Verified Skills', count: '15+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-2xl font-bold text-primary">{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};