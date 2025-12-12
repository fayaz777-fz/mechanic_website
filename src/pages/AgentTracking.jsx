import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, User, Phone, Copy } from 'lucide-react';

function AgentTracking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingData } = location.state || {};
  
  // Mock agent data
  const [agents, setAgents] = useState([
    { id: 1, name: 'Raj Kumar', distance: '2.5 km', rating: 4.8, eta: '15 mins', etaSeconds: 900, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', status: 'scanning' },
    { id: 2, name: 'Amit Sharma', distance: '3.2 km', rating: 4.6, eta: '20 mins', etaSeconds: 1200, avatar: 'https://randomuser.me/api/portraits/men/44.jpg', status: 'scanning' },
    { id: 3, name: 'Vikash Singh', distance: '1.8 km', rating: 4.9, eta: '12 mins', etaSeconds: 720, avatar: 'https://randomuser.me/api/portraits/men/67.jpg', status: 'scanning' }
  ]);
  
  const [acceptedAgent, setAcceptedAgent] = useState(null);
  const [countdown, setCountdown] = useState(30); // 30 seconds to simulate scanning
  const [arrivalCountdown, setArrivalCountdown] = useState(null); // Countdown for agent arrival
  const [otp, setOtp] = useState(null); // One-time password for verification

  // Simulate agent acceptance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!acceptedAgent && agents.length > 0) {
        // Randomly select an agent to accept the request
        const randomAgent = agents[Math.floor(Math.random() * agents.length)];
        const updatedAgent = { ...randomAgent, status: 'accepted' };
        setAcceptedAgent(updatedAgent);
        
        // Start arrival countdown
        setArrivalCountdown(randomAgent.etaSeconds);
        
        // Generate OTP only once
        if (!otp) {
          const numberPart = Math.floor(Math.random() * 90 + 10); // 2-digit number (10-99)
          const letterPart = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
                            String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
                            String.fromCharCode(65 + Math.floor(Math.random() * 26)); // 3 letters
          setOtp({ number: numberPart, letters: letterPart });
        }
        
        // Update the agent in the list
        setAgents(prevAgents => 
          prevAgents.map(agent => 
            agent.id === randomAgent.id ? updatedAgent : agent
          )
        );
      }
    }, 5000); // Simulate 5 seconds for agent to accept

    return () => clearTimeout(timer);
  }, [acceptedAgent, agents]);

  // Countdown timer for scanning
  useEffect(() => {
    if (countdown > 0 && !acceptedAgent) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, acceptedAgent]);

  // Countdown timer for agent arrival
  useEffect(() => {
    if (arrivalCountdown !== null && arrivalCountdown > 0) {
      const timer = setTimeout(() => setArrivalCountdown(arrivalCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [arrivalCountdown]);

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
            Finding Nearby Agents
          </h1>
          

          
          <p className="text-gray-300 mt-4">
            {acceptedAgent 
              ? `${acceptedAgent.name} has accepted your request` 
              : countdown > 0 
                ? `Scanning agents nearby... ${countdown}s` 
                : 'Searching for available agents'}
          </p>
        </div>

        {!acceptedAgent ? (
          // Scanning agents view
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" size={32} />
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Scanning your area</h2>
                <p className="text-gray-300 mb-6">
                  We're looking for the best mechanics near you
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {agents.map((agent) => (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: agent.id * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <img 
                        src={agent.avatar} 
                        alt={agent.name}
                        className="w-12 h-12 rounded-full mx-auto mb-2"
                      />
                      <p className="text-white text-sm font-medium truncate">{agent.name}</p>
                      <p className="text-gray-400 text-xs">{agent.distance}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Agent accepted view
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">Request Accepted!</h2>
              <p className="text-gray-300 mb-6">
                {acceptedAgent.name} is on the way to your location
              </p>
              

              
              <div className="bg-white/5 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={acceptedAgent.avatar} 
                    alt={acceptedAgent.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{acceptedAgent.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-white">{acceptedAgent.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <Clock className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-gray-300 text-sm">Arrival Time</p>
                    <p className="text-white font-bold">
                      {arrivalCountdown !== null ? (
                        <>{Math.floor(arrivalCountdown / 60)}:{(arrivalCountdown % 60).toString().padStart(2, '0')}</>
                      ) : (
                        acceptedAgent.eta
                      )}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <MapPin className="text-primary mx-auto mb-2" size={24} />
                    <p className="text-gray-300 text-sm">Distance</p>
                    <p className="text-white font-bold">{acceptedAgent.distance}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl border border-white/10 text-white"
                >
                  <Phone size={20} />
                  Call Agent
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-xl text-white"
                >
                  <MapPin size={20} />
                  Track on Map
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
        
        <div className="text-center">
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cancel Request
          </button>
        </div>
        
        {/* Personalized greeting with OTP below cancel button */}
        {bookingData && bookingData.name && acceptedAgent && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-white/10 max-w-md mx-auto"
          >
            <div className="text-center">
              <p className="text-white font-bold text-lg mb-4">
                Hey {bookingData.name.split(' ')[0]}! 👋
              </p>
              <p className="text-gray-300 mb-4">
                Agent Mr. {acceptedAgent.name} is arriving to help you.
              </p>
              
              <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3">
                <span className="text-gray-300">OTP:</span>
                <div className="flex gap-2 items-center">
                  <span className="px-3 py-1 bg-primary/20 text-primary font-bold rounded-lg text-lg">{otp.number}</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent font-bold rounded-lg text-lg">{otp.letters}</span>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`${otp.number}${otp.letters}`);
                  }}
                  className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  title="Copy OTP"
                >
                  <Copy size={16} className="text-gray-300" />
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                Share this OTP with your agent for verification
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default AgentTracking;