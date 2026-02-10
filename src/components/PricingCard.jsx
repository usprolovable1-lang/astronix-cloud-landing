import React from 'react';
import { motion } from 'framer-motion';
import { Server, CheckCircle2, ArrowRight } from 'lucide-react';

const PricingCard = ({ cores, ram, price, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Animated glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
      
      {/* Card */}
      <div className="relative h-full p-6 rounded-2xl border border-cyan-500/20 bg-gray-900/80 backdrop-blur-xl group-hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-gray-400 font-mono tracking-wider uppercase">
                {category}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">
              {cores} Core{cores > 1 ? 's' : ''}
            </h3>
            <p className="text-lg text-cyan-400 font-semibold">{ram} RAM</p>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-black text-white">₹{price}</div>
            <div className="text-sm text-gray-500 font-medium">/month</div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>NVMe SSD Storage</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>10Gbps Network</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>DDoS Protection</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Instant Deployment</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://t.me/offx_sahil"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group/btn w-full"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-50 group-hover/btn:opacity-100 blur transition-all duration-300" />
          <div className="relative w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold text-white flex items-center justify-center gap-2">
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
