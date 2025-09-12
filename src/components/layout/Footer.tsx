import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    // { icon: Github, url: portfolioData.personal.github, label: 'GitHub' },
    { icon: Linkedin, url: portfolioData.personal.linkedIn, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${portfolioData.personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">SAMBASIVARAO</h3>
            <p className="text-muted-foreground">Data Analytics Excellence</p>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <div className="flex justify-center md:justify-end items-center">
            <Button
              onClick={scrollToTop}
              size="sm"
              className="btn-hero p-3"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© {new Date().getFullYear()} {portfolioData.personal.name}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Three.js</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};