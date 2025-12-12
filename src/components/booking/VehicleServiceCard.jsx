import React from 'react';
import { motion } from 'framer-motion';

const vehicleImages = {
  bike: 'https://thumbs.dreamstime.com/b/assembling-motorcycle-isolated-cartoon-vector-illustrations-hipster-man-fixing-bike-garage-assembly-process-hobby-hands-341151871.jpg',
  scooty: 'https://alfmotors.in/wp-content/uploads/2025/04/Quick-BookingReal-Time-Tracking-ALF-Motors.png',
  car: 'https://ik.imagekit.io/driveu/Service/Group_1987_zP7xP-W53.png',
  auto: 'https://www.tvsmotor.com/three-wheelers/-/media/Feature/tvs-three-wheeler/ev-max-our-product-images/ev-passenger-auto-mob-4x.webp?la=en&h=1269&w=1440&hash=7A6AD9340E797FD8BBAA5BBF1FCFCAE6'
};

function VehicleServiceCard({ vehicleType, services, selectedServices, onToggleService, repairDescription, onRepairDescriptionChange }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8">
      <img
        src={vehicleImages[vehicleType]}
        alt={`${vehicleType} service`}
        className="w-full h-64 object-contain rounded-2xl mb-6"
      />
      
      <h2 className="text-2xl font-bold text-white mb-4 font-display">
        Select Services
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onToggleService(service.id)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedServices.includes(service.id)
                ? 'border-primary bg-primary/20'
                : 'border-white/10 bg-white/5 hover:border-primary/50'
            }`}
          >
            <h3 className="text-white font-bold mb-1">{service.name}</h3>
            <p className="text-primary font-semibold">{service.price}</p>
            <p className="text-gray-400 text-sm">{service.duration}</p>
          </motion.div>
        ))}
      </div>

      {/* Repair Problem Description Section */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-3 font-display">Describe Your Repair Problem</h3>
        <p className="text-gray-300 text-sm mb-4">Tell us more details about the issue you're experiencing. You can book with just this description if you're unsure about specific services.</p>
        <div className="relative">
          <textarea
            value={repairDescription || ''}
            onChange={(e) => onRepairDescriptionChange(e.target.value)}
            placeholder="Please describe the problem with your vehicle in detail..."
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all resize-none"
          />
        </div>
        <p className="text-gray-400 text-xs mt-2">Be as specific as possible about the symptoms, sounds, or issues you've noticed</p>
      </div>
    </div>
  );
}

export default VehicleServiceCard;
