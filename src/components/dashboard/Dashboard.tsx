import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Bot, Users, Activity, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      title: 'Classic NLP',
      description: 'Natural language processing with custom prompts',
      icon: MessageSquare,
      href: '/dashboard/nlp',
      color: 'from-blue-500 to-blue-600',
      count: '12 Active Sessions'
    },
    {
      title: 'RAG Bot',
      description: 'Document-based question answering',
      icon: Database,
      href: '/dashboard/rag',
      color: 'from-green-500 to-green-600',
      count: '8 Knowledge Bases'
    },
    {
      title: 'Agent Creation',
      description: 'Build custom AI agents with tools',
      icon: Bot,
      href: '/dashboard/agents',
      color: 'from-purple-500 to-purple-600',
      count: '5 Active Agents'
    },
  ];

  const stats = [
    { label: 'Total Queries', value: '2,456', icon: Activity },
    { label: 'Active Users', value: '23', icon: Users },
    { label: 'Success Rate', value: '98.5%', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your AI-powered enterprise tools and monitor performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            >
              <Card hover className="p-6 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {feature.count}
                </p>
                
                <Link to={feature.href} className="block">
                  <Button variant="outline" className="w-full">
                    Open {feature.title}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Need Help Getting Started?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out our documentation and tutorials to maximize your AI potential
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  View Docs
                </Button>
                <Button variant="primary">
                  Contact Support
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};