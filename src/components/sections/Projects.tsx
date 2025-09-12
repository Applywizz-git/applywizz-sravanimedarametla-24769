import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import projectExecutiveDashboard from '@/assets/project-executive-dashboard.jpg';
import projectFleetTracking from '@/assets/project-fleet-tracking.jpg';
import projectServiceAnalytics from '@/assets/project-service-analytics.jpg';
import projectEnterpriseModeling from '@/assets/project-enterprise-modeling.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
const projectImages = [
  projectExecutiveDashboard,
  projectFleetTracking,
  projectServiceAnalytics,
  projectEnterpriseModeling,
];

export const Projects: React.FC = () => {
  const swiperRef = useRef(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data analytics solutions that delivered measurable business impact
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {portfolioData.projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-auto max-w-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-lg overflow-hidden card-hover group h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-card">
                    <img
                      src={projectImages[index]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4"
                    >
                      <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gradient mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center space-x-2 p-3 bg-success/10 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-sm font-semibold text-success">
                        {project.metrics.improvement}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.metrics.metric}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="tech-badge text-xs py-1"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tech-badge text-xs py-1 opacity-70">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />
    </section>
  );
};