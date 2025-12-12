import React from 'react';
import { motion } from 'framer-motion';
import InputField from './InputField';
import { User, Phone, MapPin, Edit } from 'lucide-react';

function BookingForm({ formData, onFormChange, selectedServices, services, repairDescription, onSubmit }) {
  const calculateTotal = () => {
    return selectedServices.reduce((total, id) => {
      const service = services.find(s => s.id === id);
      return total + parseInt(service.price.replace('₹', ''));
    }, 0);
  };

  const getCurrentLocation = () => {
    // Use browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onFormChange({ ...formData, address: `Current Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}` });
        },
        (error) => {
          console.error('Error getting location:', error);
          onFormChange({ ...formData, address: 'Unable to get current location. Please enter manually.' });
        }
      );
    } else {
      onFormChange({ ...formData, address: 'Geolocation not supported. Please enter manually.' });
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 sticky top-8">
      <h2 className="text-3xl font-bold text-white mb-6 font-display">
        Book Your Service
      </h2>

      <form onSubmit={onSubmit} className="space-y-6">
        <InputField
          icon={<User size={20} />}
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
          required
        />

        <InputField
          icon={<Phone size={20} />}
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => onFormChange({ ...formData, phone: e.target.value })}
          required
        />

        <div className="space-y-3">
          <label className="text-white font-medium">Service Location</label>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-white/10 bg-white/5 hover:border-primary/50 transition-all"
              onClick={getCurrentLocation}
            >
              <MapPin size={20} className="text-primary" />
              <span className="text-white">Use Current</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-white/10 bg-white/5 hover:border-primary/50 transition-all"
              onClick={() => {
                // This would open a modal or expand an address input
                document.getElementById('address-input')?.focus();
              }}
            >
              <Edit size={20} className="text-accent" />
              <span className="text-white">Enter Address</span>
            </motion.button>
          </div>
          
          <div className="mt-2">
            <input
              id="address-input"
              type="text"
              placeholder="Enter your full address..."
              value={formData.address}
              onChange={(e) => onFormChange({ ...formData, address: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all"
            />
          </div>
          <p className="text-gray-400 text-sm">Include landmark, city, and pin code for accurate service</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Selected Services:</span>
            <span className="text-white font-bold">{selectedServices.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Estimated Total:</span>
            <span className="text-primary font-bold text-xl">
              ₹{calculateTotal()}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg shadow-glow"
          disabled={selectedServices.length === 0 && (!repairDescription || repairDescription.trim() === '')}
        >
          Confirm Booking
        </motion.button>
      </form>
    </div>
  );
}

export default BookingForm;
