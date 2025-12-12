import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Mail, MapPin, Briefcase, Award, Upload } from 'lucide-react';

function AgentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    experience: '',
    specialization: '',
    documents: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark">
      <div className="container mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="font-semibold">Back to Home</span>
        </motion.button>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              Become an <span className="text-gradient">Agent</span>
            </h1>
            <p className="text-gray-300 text-xl">
              Join our network of professional mechanics and earn more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <BenefitCard
              icon="💰"
              title="High Earnings"
              description="Earn up to ₹50,000 per month"
            />
            <BenefitCard
              icon="📱"
              title="Flexible Hours"
              description="Work on your own schedule"
            />
            <BenefitCard
              icon="🎯"
              title="Guaranteed Work"
              description="Regular service requests"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-display">
              Agent Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<User size={20} />}
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <InputField
                  icon={<Phone size={20} />}
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <InputField
                icon={<Mail size={20} />}
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <InputField
                icon={<MapPin size={20} />}
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<Briefcase size={20} />}
                  type="number"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                />

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    <Award size={20} />
                  </div>
                  <select
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all appearance-none"
                  >
                    <option value="" className="bg-dark">Select Specialization</option>
                    <option value="bike" className="bg-dark">Bike Mechanic</option>
                    <option value="car" className="bg-dark">Car Mechanic</option>
                    <option value="auto" className="bg-dark">Auto Mechanic</option>
                    <option value="all" className="bg-dark">All Vehicles</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                  <Upload size={20} />
                </div>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setFormData({ ...formData, documents: e.target.files[0] })}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary file:text-white file:cursor-pointer focus:border-primary focus:outline-none transition-all"
                />
                <p className="text-gray-400 text-sm mt-2 ml-12">
                  Upload your certificates and ID proof
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg shadow-glow"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-display">
              Requirements
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Minimum 2 years of experience in vehicle repair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Valid mechanic certification or diploma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Own tools and equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Smartphone with internet connection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Valid government ID proof</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, type, placeholder, value, onChange, required }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all"
      />
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 font-display">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default AgentPage;
