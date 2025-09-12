import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation that shaped my analytical thinking and technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass p-8 rounded-lg card-hover group">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Institution Logo/Icon */}
                  <div className="md:col-span-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      {/* University Crest Placeholder */}
                      <div className="w-24 h-24 mx-auto md:mx-0 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-2xl transition-all duration-300">
                        <GraduationCap className="h-12 w-12 text-white" />
                      </div>
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 rounded-lg"
                        animate={{
                          x: [-100, 100],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </motion.div>
                    
                  </div>

                  {/* Education Details */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Degree & Institution */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gradient group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.institution}
                      </h4>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Relevant Courses */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h5 className="font-semibold text-foreground">Relevant Coursework</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <motion.div
                            key={courseIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + courseIndex * 0.05 }}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground hover:text-foreground transition-colors">
                              {course}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-primary origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};