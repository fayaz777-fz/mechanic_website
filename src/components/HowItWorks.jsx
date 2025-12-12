import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone size={48} />,
    title: 'Book Online',
    description: 'Select your vehicle type and describe the issue through our easy-to-use app',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <MapPin size={48} />,
    title: 'Track Mechanic',
    description: 'Get real-time updates on mechanic location and estimated arrival time',
    color: 'from-primary to-accent'
  },
  {
    icon: <Wrench size={48} />,
    title: 'Get Service',
    description: 'Professional mechanic arrives with tools and spare parts to fix your vehicle',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <CheckCircle size={48} />,
    title: 'Pay Securely',
    description: 'Complete payment online with warranty on all repairs and services',
    color: 'from-purple-500 to-pink-500'
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative bg-gradient-alternate">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Simple <span className="text-gradient">Process</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            Get your vehicle serviced in 4 easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`bg-gradient-to-r ${step.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                >
                  <div className="text-white">{step.icon}</div>
                </motion.div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                    {step.title}
                  </h3>

                  <p className="text-gray-200 text-sm leading-relaxed font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
