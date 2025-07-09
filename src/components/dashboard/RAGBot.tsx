import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Database, Cloud, HardDrive, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const RAGBot: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'online' | 'offline'>('online');
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState('');

  const knowledgeBases = [
    { id: '1', name: 'Company Policies', documents: 45, size: '12.5 MB' },
    { id: '2', name: 'Technical Documentation', documents: 128, size: '89.2 MB' },
    { id: '3', name: 'Product Manuals', documents: 67, size: '34.8 MB' },
    { id: '4', name: 'HR Guidelines', documents: 23, size: '8.1 MB' },
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
            RAG Bot
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Retrieval-Augmented Generation with your enterprise knowledge base
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Processing Mode
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMode('online')}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedMode === 'online'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${selectedMode === 'online' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                      <Cloud className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Online Mode</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Azure OpenAI integration</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMode('offline')}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedMode === 'offline'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${selectedMode === 'offline' ? 'bg-green-500' : 'bg-gray-400'}`}>
                      <HardDrive className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Offline Mode</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Local Llama2 processing</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Knowledge Bases
              </h3>
              <div className="space-y-4">
                {knowledgeBases.map((kb) => (
                  <motion.div
                    key={kb.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedKnowledgeBase(kb.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedKnowledgeBase === kb.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                          <Database className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{kb.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {kb.documents} documents • {kb.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Upload Documents
              </h3>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drop files here or click to browse
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Supported formats: PDF, DOCX, TXT, MD
                </p>
                <Button variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Chunk Size
                  </label>
                  <input
                    type="number"
                    defaultValue="512"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Overlap
                  </label>
                  <input
                    type="number"
                    defaultValue="50"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Top K Results
                  </label>
                  <input
                    type="number"
                    defaultValue="5"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Mode</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    selectedMode === 'online' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {selectedMode}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Vector Store</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs font-medium">
                    Ready
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Embeddings</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs font-medium">
                    Updated
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};