import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Activity, Server } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />
      
      {/* Card */}
      <div className="relative h-full p-8 rounded-2xl border border-cyan-500/20 bg-gray-900/40 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-md" />
          <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-cyan-400" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Enterprise-grade infrastructure with redundant systems ensuring maximum availability and reliability for your critical workloads."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Deploy your VPS in under 60 seconds with automated provisioning. Zero configuration hassle, instant access to your server."
    },
    {
      icon: Activity,
      title: "Advanced DDoS Shield",
      description: "Multi-layered DDoS protection safeguards your infrastructure from attacks of any scale with real-time threat mitigation."
    },
    {
      icon: Server,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical assistance from certified engineers. Get help whenever you need it, day or night."
    }
  ];

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Astronix
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology meets unparalleled reliability
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
