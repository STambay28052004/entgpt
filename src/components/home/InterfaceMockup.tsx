import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Database, Settings, Users, Zap, Brain, Shield, Cloud, HardDrive } from 'lucide-react';

export const InterfaceMockup: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Interface Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: isHovered ? [-2, 2, -2] : [0, -5, 0],
          rotateY: isHovered ? [-1, 1, -1] : 0,
        }}
        transition={{ 
          duration: isHovered ? 2 : 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5 
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-96 h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Wavy Background Effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={isHovered ? {
            background: [
              'radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 30%, #8B5CF6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #10B981 0%, transparent 50%)',
              'radial-gradient(circle at 60% 20%, #F59E0B 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)',
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            x: isHovered ? [-1, 1, -1] : 0,
          }}
          transition={{ 
            duration: isHovered ? 1.5 : 0.8, 
            repeat: isHovered ? Infinity : 0,
            delay: 1 
          }}
          className="flex items-center justify-between p-4 border-b border-gray-700"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ 
                rotate: isHovered ? [0, 360, 720] : 360,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{ 
                duration: isHovered ? 2 : 2, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            >
              <Bot className="h-5 w-5 text-white" />
            </motion.div>
            <motion.span 
              animate={isHovered ? {
                color: ['#ffffff', '#3B82F6', '#8B5CF6', '#10B981', '#ffffff']
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-semibold text-sm"
            >
              Enterprise GPT
            </motion.span>
          </div>
          <div className="flex space-x-1">
            {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, index) => (
              <motion.div
                key={index}
                animate={isHovered ? {
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                } : {}}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
                className={`w-3 h-3 ${color} rounded-full`}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="p-4 space-y-3">
          {/* Classic NLP Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              y: isHovered ? [-1, 1, -1] : 0,
              rotateX: isHovered ? [-0.5, 0.5, -0.5] : 0,
            }}
            transition={{ 
              duration: isHovered ? 2.5 : 0.8, 
              repeat: isHovered ? Infinity : 0,
              delay: 1.2 
            }}
            whileHover={{ 
              scale: 1.02, 
              x: 5,
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
            }}
            className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-lg p-3 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  animate={isHovered ? {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-blue-500/20 rounded-lg"
                >
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="text-white text-sm font-medium">Classic NLP</h4>
                  <p className="text-gray-400 text-xs">Advanced processing</p>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: isHovered ? [1, 0.5, 1] : [1, 0.7, 1],
                }}
                transition={{ 
                  delay: 1.5,
                  duration: isHovered ? 1 : 2,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* RAG Bot Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              y: isHovered ? [1, -1, 1] : 0,
              rotateX: isHovered ? [0.5, -0.5, 0.5] : 0,
            }}
            transition={{ 
              duration: isHovered ? 3 : 0.8, 
              repeat: isHovered ? Infinity : 0,
              delay: 1.4 
            }}
            whileHover={{ 
              scale: 1.02, 
              x: 5,
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
            }}
            className="bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-lg p-3 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: -15 }}
                  animate={isHovered ? {
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="p-2 bg-green-500/20 rounded-lg"
                >
                  <Database className="h-4 w-4 text-green-400" />
                </motion.div>
                <div>
                  <h4 className="text-white text-sm font-medium">RAG Bot</h4>
                  <p className="text-gray-400 text-xs">Document retrieval</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <motion.div
                  animate={{ 
                    scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                    y: isHovered ? [-2, 2, -2] : 0,
                  }}
                  transition={{ 
                    duration: isHovered ? 1.5 : 2, 
                    repeat: Infinity 
                  }}
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                    y: isHovered ? [2, -2, 2] : 0,
                  }}
                  transition={{ 
                    duration: isHovered ? 1.5 : 2, 
                    repeat: Infinity, 
                    delay: 0.3 
                  }}
                  className="w-1.5 h-1.5 bg-green-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Agent Creation Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              y: isHovered ? [-0.5, 0.5, -0.5] : 0,
              rotateY: isHovered ? [-0.5, 0.5, -0.5] : 0,
            }}
            transition={{ 
              duration: isHovered ? 2.8 : 0.8, 
              repeat: isHovered ? Infinity : 0,
              delay: 1.6 
            }}
            whileHover={{ 
              scale: 1.02, 
              x: 5,
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
            }}
            className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 rounded-lg p-3 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  animate={isHovered ? {
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{ 
                    duration: isHovered ? 2 : 0.5,
                    repeat: isHovered ? Infinity : 0,
                  }}
                  className="p-2 bg-purple-500/20 rounded-lg"
                >
                  <Bot className="h-4 w-4 text-purple-400" />
                </motion.div>
                <div>
                  <h4 className="text-white text-sm font-medium">Agent Creation</h4>
                  <p className="text-gray-400 text-xs">15+ tool integrations</p>
                </div>
              </div>
              <motion.div
                animate={{ 
                  rotate: isHovered ? [0, 360, 720] : 360,
                  scale: isHovered ? [1, 1.3, 1] : 1,
                }}
                transition={{ 
                  duration: isHovered ? 2 : 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"
              />
            </div>
          </motion.div>

          {/* Model Selection */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              x: isHovered ? [-0.5, 0.5, -0.5] : 0,
            }}
            transition={{ 
              duration: isHovered ? 3.5 : 0.8, 
              repeat: isHovered ? Infinity : 0,
              delay: 1.8 
            }}
            className="bg-gray-800/50 border border-gray-600 rounded-lg p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-xs font-medium">Model Selection</span>
              <motion.div
                animate={isHovered ? {
                  rotate: [0, 90, 180, 270, 360],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Settings className="h-3 w-3 text-gray-400" />
              </motion.div>
            </div>
            <div className="flex space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={isHovered ? {
                  y: [-1, 1, -1],
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center space-x-1 bg-blue-500/20 px-2 py-1 rounded text-xs text-blue-400 cursor-pointer"
              >
                <Cloud className="h-3 w-3" />
                <span>Azure</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={isHovered ? {
                  y: [1, -1, 1],
                  boxShadow: [
                    '0 0 10px rgba(16, 185, 129, 0.3)',
                    '0 0 20px rgba(16, 185, 129, 0.5)',
                    '0 0 10px rgba(16, 185, 129, 0.3)',
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="flex items-center space-x-1 bg-green-500/20 px-2 py-1 rounded text-xs text-green-400 cursor-pointer"
              >
                <HardDrive className="h-3 w-3" />
                <span>Llama2</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Security Status */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotateZ: isHovered ? [-0.5, 0.5, -0.5] : 0,
            }}
            transition={{ 
              duration: isHovered ? 2.2 : 0.8, 
              repeat: isHovered ? Infinity : 0,
              delay: 2 
            }}
            className="bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 border border-emerald-500/30 rounded-lg p-3"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                }}
                transition={{ 
                  duration: isHovered ? 1.8 : 2, 
                  repeat: Infinity 
                }}
                className="p-2 bg-emerald-500/20 rounded-lg"
              >
                <Shield className="h-4 w-4 text-emerald-400" />
              </motion.div>
              <div>
                <h4 className="text-white text-sm font-medium">Enterprise Security</h4>
                <motion.p 
                  animate={isHovered ? {
                    color: ['#10B981', '#3B82F6', '#8B5CF6', '#10B981']
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-emerald-400 text-xs"
                >
                  ✓ Bank-level encryption
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            x: isHovered ? [-1, 1, -1] : 0,
          }}
          transition={{ 
            duration: isHovered ? 2.5 : 0.8, 
            repeat: isHovered ? Infinity : 0,
            delay: 2.2 
          }}
          className="absolute bottom-4 left-4 right-4 bg-gray-800/80 rounded-lg p-3 border border-gray-600"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <motion.div
                animate={{ 
                  scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                  y: isHovered ? [-2, 2, -2] : 0,
                }}
                transition={{ 
                  duration: isHovered ? 1.5 : 2, 
                  repeat: Infinity, 
                  delay: 0 
                }}
                className="text-blue-400 text-lg font-bold"
              >
                99.9%
              </motion.div>
              <div className="text-gray-400 text-xs">Uptime</div>
            </div>
            <div>
              <motion.div
                animate={{ 
                  scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                  y: isHovered ? [2, -2, 2] : 0,
                }}
                transition={{ 
                  duration: isHovered ? 1.5 : 2, 
                  repeat: Infinity, 
                  delay: 0.5 
                }}
                className="text-purple-400 text-lg font-bold"
              >
                15+
              </motion.div>
              <div className="text-gray-400 text-xs">Tools</div>
            </div>
            <div>
              <motion.div
                animate={{ 
                  scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                  y: isHovered ? [-1, 1, -1] : 0,
                }}
                transition={{ 
                  duration: isHovered ? 1.5 : 2, 
                  repeat: Infinity, 
                  delay: 1 
                }}
                className="text-green-400 text-lg font-bold"
              >
                24/7
              </motion.div>
              <div className="text-gray-400 text-xs">Support</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements with Enhanced Wavy Motion */}
      <motion.div
        animate={{
          y: isHovered ? [-15, 15, -15] : [-10, 10, -10],
          rotate: isHovered ? [0, 10, -10, 0] : [0, 5, 0, -5, 0],
          x: isHovered ? [-5, 5, -5] : 0,
        }}
        transition={{
          duration: isHovered ? 2 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-8 -right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
      >
        <Brain className="h-6 w-6 text-white" />
      </motion.div>

      <motion.div
        animate={{
          y: isHovered ? [15, -15, 15] : [10, -10, 10],
          rotate: isHovered ? [0, -10, 10, 0] : [0, -5, 0, 5, 0],
          x: isHovered ? [5, -5, 5] : 0,
        }}
        transition={{
          duration: isHovered ? 2.5 : 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-6 -left-6 p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
      >
        <Zap className="h-5 w-5 text-white" />
      </motion.div>

      <motion.div
        animate={{
          y: isHovered ? [-8, 20, -8] : [-5, 15, -5],
          x: isHovered ? [-8, 8, -8] : [-5, 5, -5],
          rotate: isHovered ? [0, 15, -15, 0] : 0,
        }}
        transition={{
          duration: isHovered ? 3 : 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 -right-12 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
      >
        <Users className="h-4 w-4 text-white" />
      </motion.div>

      {/* Enhanced Connecting Lines with Wavy Animation */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <motion.path
          d="M 50 100 Q 200 50 350 150"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: isHovered ? [0, -20] : [0, -10],
            d: isHovered ? [
              "M 50 100 Q 200 50 350 150",
              "M 50 110 Q 200 40 350 160",
              "M 50 90 Q 200 60 350 140",
              "M 50 100 Q 200 50 350 150"
            ] : "M 50 100 Q 200 50 350 150"
          }}
          transition={{
            strokeDashoffset: {
              duration: isHovered ? 0.5 : 1,
              repeat: Infinity,
              ease: "linear"
            },
            d: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};