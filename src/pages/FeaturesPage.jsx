import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wrench, Users, Shield, Clock, MapPin, Phone, MessageCircle, Star, Award } from 'lucide-react';

function FeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Wrench size={40} />,
      title: 'Professional Mechanics',
      description: 'Verified and trained mechanics with years of experience in vehicle repair and maintenance.',
      color: 'from-primary to-accent'
    },
    {
      icon: <Clock size={40} />,
      title: '24/7 Service',
      description: 'Round-the-clock availability for emergency repairs and scheduled maintenance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin size={40} />,
      title: 'Doorstep Service',
      description: 'Mechanics come to your location - home, office, or roadside - for convenience.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Guarantee',
      description: 'All services come with warranty and quality assurance for your peace of mind.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: 'Book Service',
      description: 'Schedule a service through our website or mobile app at your convenience.'
    },
    {
      step: 2,
      title: 'Mechanic Assignment',
      description: 'We assign the nearest qualified mechanic based on your location and service needs.'
    },
    {
      step: 3,
      title: 'Service Delivery',
      description: 'Mechanic arrives with all necessary tools and genuine spare parts.'
    },
    {
      step: 4,
      title: 'Quality Check',
      description: 'Post-service inspection to ensure all issues are resolved to your satisfaction.'
    },
    {
      step: 5,
      title: 'Payment & Feedback',
      description: 'Secure online payment with option to rate and review the service.'
    }
  ];

  const benefits = [
    {
      icon: <Phone size={32} />,
      title: 'Direct Communication',
      description: 'Chat directly with your assigned mechanic for real-time updates.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Customer Support',
      description: '24/7 customer service team to assist with any queries or issues.'
    },
    {
      icon: <Star size={32} />,
      title: 'Rating System',
      description: 'Rate mechanics based on service quality to maintain high standards.'
    },
    {
      icon: <Award size={32} />,
      title: 'Service Warranty',
      description: 'All services come with warranty for guaranteed satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white mb-8 hover:text-primary transition-colors font-semibold"
        >
          <ArrowLeft size={24} />
          <span>Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto font-medium">
            Comprehensive doorstep vehicle maintenance and repair services connecting customers with professional mechanics
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center font-display"
          >
            Why Choose Our Service?
          </motion.h2>
          
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
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-display tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-200 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center font-display"
          >
            How Our Service Works
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 h-full text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* User-Agent Connection */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center font-display"
          >
            Connecting Users & Mechanics
          </motion.h2>
          
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 font-display">
                  Seamless Experience for Customers
                </h3>
                <p className="text-gray-200 mb-6 font-medium">
                  Our platform bridges the gap between vehicle owners and professional mechanics, 
                  providing a hassle-free experience from booking to completion.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full"></div>
                    <span>Easy booking through website or mobile app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-time tracking of mechanic location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full"></div>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-primary rounded-full"></div>
                    <span>Post-service rating and feedback system</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">Customer Portal</h4>
                    <p className="text-gray-300">Manage bookings and communicate with mechanics</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Service History</span>
                    <span className="text-primary font-bold">View All</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Saved Vehicles</span>
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Favorite Mechanics</span>
                    <span className="text-primary font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 border border-white/20 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <Wrench className="text-white" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">Mechanic Dashboard</h4>
                    <p className="text-gray-300">Manage jobs and grow your business</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Today's Jobs</span>
                    <span className="text-blue-400 font-bold">4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Monthly Earnings</span>
                    <span className="text-blue-400 font-bold">₹24,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-200">Customer Rating</span>
                    <span className="text-blue-400 font-bold">4.8 ★</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-white mb-4 font-display">
                  Empowering Mechanics
                </h3>
                <p className="text-gray-200 mb-6 font-medium">
                  We provide mechanics with tools and opportunities to grow their business 
                  while delivering exceptional service to customers.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Steady stream of service requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Fair commission structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Training and skill development programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Performance-based incentives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center font-display"
          >
            Additional Benefits
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-display tracking-tight">{benefit.title}</h3>
                <p className="text-gray-200 text-sm font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-lg rounded-3xl p-12 border border-white/30"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-display">
            Ready to Experience Our Service?
          </h2>
          <p className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers who trust us for their vehicle maintenance needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/explore')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg shadow-glow"
          >
            Book a Service Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturesPage;