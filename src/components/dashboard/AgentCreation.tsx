import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Bot, Mail, Calendar, FileText, Settings, Trash2, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { AGENT_TOOLS } from '../../utils/constants';

export const AgentCreation: React.FC = () => {
  const [agents, setAgents] = useState([
    {
      id: '1',
      name: 'Customer Support Agent',
      description: 'Handles customer inquiries and support tickets',
      tools: ['Email Management', 'CRM Integration', 'Document Processing'],
      status: 'active',
      created: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Data Analysis Agent',
      description: 'Analyzes business data and generates reports',
      tools: ['Excel Analytics', 'Data Visualization', 'Report Generation'],
      status: 'inactive',
      created: new Date('2024-01-10')
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [newAgent, setNewAgent] = useState({
    name: '',
    description: '',
    tools: [] as string[]
  });

  const handleCreateAgent = () => {
    if (newAgent.name && newAgent.description && newAgent.tools.length > 0) {
      const agent = {
        id: Date.now().toString(),
        name: newAgent.name,
        description: newAgent.description,
        tools: newAgent.tools,
        status: 'inactive' as const,
        created: new Date()
      };
      
      setAgents([...agents, agent]);
      setNewAgent({ name: '', description: '', tools: [] });
      setIsCreating(false);
    }
  };

  const toggleTool = (tool: string) => {
    setNewAgent(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool]
    }));
  };

  const deleteAgent = (id: string) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  const toggleAgentStatus = (id: string) => {
    setAgents(agents.map(agent => 
      agent.id === id 
        ? { ...agent, status: agent.status === 'active' ? 'inactive' : 'active' }
        : agent
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Agent Creation
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Build and manage custom AI agents with professional tool integrations
              </p>
            </div>
            <Button
              onClick={() => setIsCreating(true)}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Create Agent</span>
            </Button>
          </div>
        </motion.div>

        {isCreating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Create New Agent
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={newAgent.name}
                    onChange={(e) => setNewAgent(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter agent name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newAgent.description}
                    onChange={(e) => setNewAgent(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what this agent does"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Tools ({newAgent.tools.length} selected)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {AGENT_TOOLS.map((tool) => (
                      <motion.div
                        key={tool}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => toggleTool(tool)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          newAgent.tools.includes(tool)
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {tool}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button onClick={handleCreateAgent}>
                  Create Agent
                </Button>
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <Bot className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {agent.name}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        agent.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {agent.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleAgentStatus(agent.id)}
                    >
                      {agent.status === 'active' ? (
                        <Settings className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteAgent(agent.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {agent.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tools ({agent.tools.length})
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                    {agent.tools.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 rounded text-xs">
                        +{agent.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Created {agent.created.toLocaleDateString()}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};