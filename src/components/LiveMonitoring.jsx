import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Activity } from 'lucide-react';

const LiveMonitoring = () => {
  const [serverLoad, setServerLoad] = useState(42);
  const [networkStatus, setNetworkStatus] = useState(99.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setServerLoad(Math.floor(Math.random() * 20) + 35); // 35-55%
      setNetworkStatus(98 + Math.random() * 1.5); // 98-99.5%
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Real-Time{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Monitor global network performance live
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Server Load Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500" />
            
            <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-gray-900/60 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Server Load</h3>
                    <p className="text-sm text-gray-400 font-mono">Real-time monitoring</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                  <span className="text-green-400 text-sm font-bold font-mono">OPTIMAL</span>
                </div>
              </div>

              {/* CPU Usage Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-400 font-medium">CPU Usage</span>
                  <span className="text-cyan-400 font-mono font-bold">{serverLoad}%</span>
                </div>
                <div className="h-4 bg-gray-800/80 rounded-full overflow-hidden border border-cyan-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                    animate={{ width: `${serverLoad}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cyan-500/10">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Cores</div>
                  <div className="text-white font-bold text-xl">128</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Memory</div>
                  <div className="text-white font-bold text-xl">2TB</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Storage</div>
                  <div className="text-white font-bold text-xl">50TB</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Network Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500" />
            
            <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-gray-900/60 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Global Network Status</h3>
                    <p className="text-sm text-gray-400 font-mono">15+ locations worldwide</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-bold font-mono">ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Availability Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-400 font-medium">Global Availability</span>
                  <span className="text-purple-400 font-mono font-bold">{networkStatus.toFixed(1)}%</span>
                </div>
                <div className="h-4 bg-gray-800/80 rounded-full overflow-hidden border border-purple-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full"
                    animate={{ width: `${networkStatus}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-500/10">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Latency</div>
                  <div className="text-white font-bold text-xl">8ms</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Bandwidth</div>
                  <div className="text-white font-bold text-xl">10Gb</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Uptime</div>
                  <div className="text-white font-bold text-xl">99.9%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveMonitoring;
