import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);

    // Confetti effect (placeholder)
    console.log('🎉 Confetti!');
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      link: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      link: `tel:${portfolioData.personal.phone}`
    },
    // {
    //   icon: Mail,
    //   label: 'Email',
    //   value: portfolioData.personal.email,
    //   link: `mailto:${portfolioData.personal.email}`
    // }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: portfolioData.personal.linkedIn,
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      url: `mailto:${portfolioData.personal.email}`,
      color: 'text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next data analytics project? Let's turn your data into actionable insights.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  consulting projects, or collaborations in the data analytics space. 
                  Whether you need help with ETL pipelines, dashboard development, 
                  or predictive analytics, I'd love to hear from you.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors focus-ring rounded"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Connect on Social Media
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-surface rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-ring ${social.color} hover:shadow-lg`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus-ring"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus-ring"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus-ring"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="focus-ring resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-hero group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};