import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-lg shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Wrench className="text-white" size={28} />
            </div>
            <span className="text-white font-bold text-xl font-display">MECHANIC</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => navigate('/')}>Home</NavLink>
            <NavLink onClick={() => navigate('/features')}>Features</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => scrollToSection('cities')}>Cities</NavLink>
            <NavLink onClick={() => navigate('/agent')}>Become Agent</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-glow"
            >
              Sign Up
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/explore')}
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-glow"
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            <div className="flex flex-col gap-4">
              <MobileNavLink onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}>
                Home
              </MobileNavLink>
              <MobileNavLink onClick={() => { navigate('/features'); setIsMobileMenuOpen(false); }}>
                Features
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('how-it-works')}>
                How It Works
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('cities')}>
                Cities
              </MobileNavLink>
              <MobileNavLink onClick={() => { navigate('/agent'); setIsMobileMenuOpen(false); }}>
                Become Agent
              </MobileNavLink>
              <MobileNavLink onClick={() => { navigate('/login'); setIsMobileMenuOpen(false); }}>
                Login
              </MobileNavLink>
              <MobileNavLink onClick={() => { navigate('/signup'); setIsMobileMenuOpen(false); }}>
                Sign Up
              </MobileNavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate('/explore'); setIsMobileMenuOpen(false); }}
                className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-glow"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

function NavLink({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      {children}
    </motion.button>
  );
}

function MobileNavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors font-medium text-left"
    >
      {children}
    </button>
  );
}

export default Header;
