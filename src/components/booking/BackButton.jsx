import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate('/explore')}
      className="flex items-center gap-2 text-white mb-8 hover:text-primary transition-colors"
    >
      <ArrowLeft size={24} />
      <span className="font-semibold">Back to Explore</span>
    </motion.button>
  );
}

export default BackButton;
