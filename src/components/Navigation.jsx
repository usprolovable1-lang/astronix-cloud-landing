import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/10 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">A</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                ASTRONIX
              </h1>
              <p className="text-xs text-cyan-400 font-mono tracking-wider">CLOUD</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://t.me/offx_sahil"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group hidden sm:block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <div className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white">
              Contact Us
            </div>
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
