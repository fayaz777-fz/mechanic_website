import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Cities from '../components/Cities';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-primary min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Cities />
      <Footer />
    </div>
  );
}

export default LandingPage;
