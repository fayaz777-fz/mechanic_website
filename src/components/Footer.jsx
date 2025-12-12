import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-alternate text-white pt-16 pb-8 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient font-display tracking-tight">
              Mechanic Service
            </h3>
            <p className="text-gray-300 mb-4 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              Professional doorstep vehicle repair and maintenance service available 24/7 across major cities.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Services</h4>
            <ul className="space-y-2">
              <FooterLink text="Bike Service" />
              <FooterLink text="Scooty Service" />
              <FooterLink text="Car Service" />
              <FooterLink text="Auto Service" />
              <FooterLink text="Emergency Repair" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="How It Works" />
              <FooterLink text="Become a Mechanic" />
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms & Conditions" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-4 font-display tracking-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Contact Us</h4>
            <div className="space-y-3">
              <ContactInfo icon={<Phone size={18} />} text="+91 98765 43210" />
              <ContactInfo icon={<Mail size={18} />} text="support@mechanicservice.com" />
              <ContactInfo icon={<MapPin size={18} />} text="Hyderabad, India" />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            © 2024 Mechanic Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center cursor-pointer shadow-lg"
    >
      {icon}
    </motion.div>
  );
}

function FooterLink({ text }) {
  return (
    <li>
      <motion.a
        whileHover={{ x: 5, color: '#FF6B35' }}
        href="#"
        className="text-gray-300 hover:text-primary transition-colors font-medium"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
      >
        {text}
      </motion.a>
    </li>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <div className="text-primary">{icon}</div>
      <span className="font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>{text}</span>
    </div>
  );
}

export default Footer;
