import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Lock, Users, Settings, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

const iconMap = {
  DollarSign,
  TrendingUp,
  Lock,
  Users,
  Settings,
  Headphones,
};

export const Benefits: React.FC = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const benefits = [
    {
      id: '1',
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 70% with automated AI assistance',
      icon: 'DollarSign',
      color: 'from-green-500 to-green-600'
    },
    {
      id: '2',
      title: 'Enhanced Productivity',
      description: 'Boost team productivity with 24/7 AI-powered assistance',
      icon: 'TrendingUp',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '3',
      title: 'Data Security',
      description: 'Keep your sensitive data secure with on-premise deployment',
      icon: 'Lock',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '4',
      title: 'Scalable Solution',
      description: 'Scale from small teams to enterprise-wide deployments',
      icon: 'Users',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: '5',
      title: 'Custom Integration',
      description: 'Integrate with your existing tools and workflows seamlessly',
      icon: 'Settings',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: '6',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      icon: 'Headphones',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Enterprise GPT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the transformative benefits that set us apart in the enterprise AI landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            const isHovered = hoveredBenefit === benefit.id;
            const isOtherHovered = hoveredBenefit && hoveredBenefit !== benefit.id;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredBenefit(benefit.id)}
                onHoverEnd={() => setHoveredBenefit(null)}
                className={`group cursor-pointer transition-all duration-300 ${
                  isOtherHovered ? 'blur-sm opacity-50' : 'blur-none opacity-100'
                }`}
              >
                <Card className="p-6 h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  {/* Glaze effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{
                      background: isHovered 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
                        : 'linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%)'
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: isHovered
                        ? 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)'
                        : 'transparent'
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} group-hover:shadow-lg transition-shadow`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isHovered ? 1 : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom gradient line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} w-full origin-left`}
                  />

                  {/* Glass reflection effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={false}
                    animate={{
                      background: isHovered
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'
                        : 'transparent'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};