import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { AnimatedBackground } from './AnimatedBackground';
import { InterfaceMockup } from './InterfaceMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <Sparkles className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Introducing Enterprise GPT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                AI-Powered Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Unlock the potential of your enterprise with our customizable GPT platform. 
              Featuring Classic NLP, RAG capabilities, and Agentic AI with 15+ professional tool integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <Link to="/login">
                <Button variant="primary" size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Tool Integrations</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <InterfaceMockup />
          </motion.div>
        </div>
        
        {/* Mobile Interface Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="lg:hidden mt-16 flex justify-center"
        >
          <div className="scale-75">
            <InterfaceMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
};