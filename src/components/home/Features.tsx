import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Bot, Layers, Shield, Plug } from 'lucide-react';
import { Card } from '../ui/Card';

const iconMap = {
  MessageSquare,
  Database,
  Bot,
  Layers,
  Shield,
  Plug,
};

export const Features: React.FC = () => {
  const features = [
    {
      id: '1',
      title: 'Classic NLP Bot',
      description: 'Advanced natural language processing with customizable prompts and responses',
      icon: 'MessageSquare',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '2',
      title: 'RAG Bot',
      description: 'Retrieval-Augmented Generation with your enterprise data, online and offline modes',
      icon: 'Database',
      color: 'from-green-500 to-green-600'
    },
    {
      id: '3',
      title: 'Agent Creation',
      description: 'Build custom AI agents with 15+ professional tool integrations',
      icon: 'Bot',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '4',
      title: 'Multi-Model Support',
      description: 'Support for OpenAI, Claude, Llama2, and Mixtral models',
      icon: 'Layers',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: '5',
      title: 'Enterprise Security',
      description: 'Bank-level security with on-premise deployment options',
      icon: 'Shield',
      color: 'from-red-500 to-red-600'
    },
    {
      id: '6',
      title: 'Easy Integration',
      description: 'Seamless integration with existing enterprise ecosystems',
      icon: 'Plug',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of AI tools designed to transform your enterprise operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:to-gray-700">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${feature.color} mt-4 rounded-full`}
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