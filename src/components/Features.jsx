import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Users size={40} />,
    title: 'REQUEST',
    description: 'Book a mechanic instantly with just a few taps. Our platform connects you with verified professionals.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Wrench size={40} />,
    title: 'AGENT',
    description: 'Certified mechanics arrive at your location with all necessary tools and spare parts.',
    color: 'from-primary to-accent'
  },
  {
    icon: <Shield size={40} />,
    title: 'REPAIR',
    description: 'Quality repairs with warranty. Track your service in real-time and pay securely online.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Clock size={40} />,
    title: '24/7 SUPPORT',
    description: 'Round-the-clock customer support and emergency breakdown assistance available.',
    color: 'from-purple-500 to-pink-500'
  }
];

function Features() {
  return (
    <section id="services" className="py-20 relative bg-gradient-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            Simple, fast, and reliable mechanic service at your doorstep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-primary/50 transition-all duration-300 h-full">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                  {feature.description}
                </p>

                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
