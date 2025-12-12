import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const vehicles = [
  {
    type: 'bike',
    name: 'Bike Service',
    image: 'https://www.liquidink.design/wp-content/uploads/2025/04/bike-1.png',
    description: 'Professional bike repair and maintenance'
  },
  {
    type: 'scooty',
    name: 'Scooty Service',
    image: 'https://cdn-icons-png.flaticon.com/512/5811/5811834.png',
    description: 'Expert scooty servicing at your doorstep'
  },
  {
    type: 'car',
    name: 'Car Service',
    image: 'https://rapido-app-assets-staging.storage.googleapis.com/dd03f189ce375502079087fa3688f981_1738146314270.webp',
    description: 'Complete car maintenance and repair'
  },
  {
    type: 'auto',
    name: 'Auto Service',
    image: 'https://www.liquidink.design/wp-content/uploads/2025/04/header-auto.png',
    description: 'Reliable auto-rickshaw servicing'
  }
];

function ExplorePage() {
  const navigate = useNavigate();
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const advertisements = [
    {
      id: 1,
      title: "Car Services",
      description: "Expert mechanics for all your car maintenance and repair needs",
      image: "https://thumbs.dreamstime.com/b/male-mechanic-dressed-blue-uniform-cap-diligently-changing-car-tire-auto-service-garage-kneeling-403613787.jpg",
      service: "car"
    },
    {
      id: 2,
      title: "Motorcycle Maintenance",
      description: "Specialized care for all types of motorcycles and scooters",
      image: "https://thumbs.dreamstime.com/b/assembling-motorcycle-isolated-cartoon-vector-illustrations-hipster-man-fixing-bike-garage-assembly-process-hobby-hands-341151871.jpg",
      service: "bike"
    }
  ];

  // Auto-swipe every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  const goToPrevious = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentAdIndex((prevIndex) => 
      (prevIndex + 1) % advertisements.length
    );
  };

  const goToAd = (index) => {
    setCurrentAdIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
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
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
        >
          <ArrowLeft size={24} />
          <span>Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Explore <span className="text-gradient">Our Services</span>
          </h1>
          <p className="text-gray-200 text-xl font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            Choose your vehicle type to get started
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => navigate(`/service/${vehicle.type}`)}
              className="cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 mb-6 group-hover:scale-110 transition-transform">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-32 object-contain"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                  {vehicle.name}
                </h3>
                
                <p className="text-gray-200 mb-4 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                  {vehicle.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-display text-center tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <AdditionalService
              title="Water Service"
              description="Engine cooling system check and coolant refill"
              icon="💧"
            />
            <AdditionalService
              title="Air & Puncture"
              description="Tire pressure check and puncture repair"
              icon="🔧"
            />
            <AdditionalService
              title="Emergency Repair"
              description="24/7 breakdown assistance available"
              icon="🚨"
            />
          </div>
        </motion.div>

        {/* Swipeable Advertisement Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-dark to-[#0F172A] rounded-2xl overflow-hidden border border-white/20 shadow-xl"
        >
          <div className="p-4 text-center border-b border-white/10">
            <h2 className="text-xl font-bold text-white mb-1">Featured Services</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-64 rounded-xl mx-4 my-4">
            {/* Static Text Content */}
            <div className="flex flex-col justify-center p-6 z-10">
              <h3 className="text-white font-bold text-2xl mb-3">{advertisements[currentAdIndex].title}</h3>
              <p className="text-gray-300 text-base mb-6">{advertisements[currentAdIndex].description}</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/service/${advertisements[currentAdIndex].service}`)}
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-full w-fit"
              >
                <span className="text-white text-base font-bold">Book Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
            
            {/* Swipeable Image Container */}
            <div className="relative rounded-xl overflow-hidden bg-dark">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentAdIndex * 100}%)` }}
              >
                {advertisements.map((ad, index) => (
                  <div 
                    key={ad.id}
                    className="w-full flex-shrink-0 flex items-center justify-end"
                  >
                    <img 
                      src={ad.image}
                      alt={ad.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {advertisements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToAd(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentAdIndex ? 'bg-primary scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AdditionalService({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>{title}</h3>
      <p className="text-gray-200 text-sm font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>{description}</p>
    </motion.div>
  );
}

export default ExplorePage;
