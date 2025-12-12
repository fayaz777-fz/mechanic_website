import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wrench, Clock, MapPin } from 'lucide-react';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-display leading-tight tracking-tight"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Doorstep <span className="text-gradient">Mechanic</span> Service
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed font-medium"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
            >
              Professional vehicle repair and maintenance at your doorstep. 
              Book expert mechanics for bikes, scooters, cars, and autos in minutes.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/explore')}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg flex items-center gap-2 shadow-glow mb-8"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex flex-wrap gap-6">
              <FeatureCard icon={<Clock />} text="24/7 Service" />
              <FeatureCard icon={<MapPin />} text="Doorstep Delivery" />
              <FeatureCard icon={<Wrench />} text="Expert Mechanics" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
            <img
              src="https://garageworks.in/assets/images/step3.webp"
              alt="Mechanic Service"
              className="relative z-10 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </section>
  );
}

function FeatureCard({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-4 py-3 rounded-full border border-white/20"
    >
      <div className="text-primary">{icon}</div>
      <span className="text-white font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>{text}</span>
    </motion.div>
  );
}

export default Hero;
