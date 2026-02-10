import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-2xl">A</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  ASTRONIX
                </h3>
                <p className="text-xs text-cyan-400 font-mono tracking-wider">CLOUD</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Next-generation cloud infrastructure built for performance, reliability, and scale.
            </p>
            <motion.a
              href="https://t.me/offx_sahil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="font-mono">@offx_sahil</span>
            </motion.a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  Normal CPU VPS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Admin RDP
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-orange-400">→</span>
                  GPU VPS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400">→</span>
                  GPU RDP
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Ready to scale your infrastructure? Contact us on Telegram for custom configurations and enterprise solutions.
              </p>
              <motion.a
                href="https://t.me/offx_sahil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Contact Us</span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Astronix Cloud. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
