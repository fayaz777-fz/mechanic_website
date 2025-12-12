import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/booking/BackButton';
import VehicleServiceCard from '../components/booking/VehicleServiceCard';
import AdditionalServices from '../components/booking/AdditionalServices';
import BookingForm from '../components/booking/BookingForm';
import { services } from '../data/services';

function ServiceBooking() {
  const { vehicleType } = useParams();
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [repairDescription, setRepairDescription] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const toggleService = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to agent tracking page with booking data
    navigate('/tracking', { 
      state: { 
        bookingData: { 
          ...formData, 
          repairDescription,
          selectedServices,
          vehicleType
        } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display capitalize">
              {vehicleType} <span className="text-gradient">Service</span>
            </h1>

            <VehicleServiceCard
              vehicleType={vehicleType}
              services={services}
              selectedServices={selectedServices}
              onToggleService={toggleService}
              repairDescription={repairDescription}
              onRepairDescriptionChange={setRepairDescription}
            />

            <AdditionalServices />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BookingForm
              formData={formData}
              onFormChange={setFormData}
              selectedServices={selectedServices}
              services={services}
              repairDescription={repairDescription}
              onSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBooking;
