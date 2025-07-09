import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: [0, 360] }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"
            >
              <Rocket className="h-12 w-12 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
            >
              About Enterprise GPT
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We're revolutionizing how enterprises interact with AI. Our platform combines the power of 
            advanced language models with enterprise-grade security and customization capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To democratize AI for enterprises, making advanced capabilities accessible to every organization.',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Users,
              title: 'Our Vision',
              description: 'Every company using AI-powered solutions internally to boost productivity and innovation.',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Shield,
              title: 'Our Values',
              description: 'Security, privacy, and ethical AI development are at the core of everything we do.',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Rocket,
              title: 'Our Goal',
              description: 'To become the leading AI platform trusted by enterprises worldwide.',
              color: 'from-orange-500 to-orange-600'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:shadow-lg transition-shadow`}
              >
                <item.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};