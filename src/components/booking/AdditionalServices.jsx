import React from 'react';

function AdditionalServices() {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4 font-display">
        Additional Services Available
      </h3>
      <ul className="space-y-2 text-gray-300">
        <li>✓ Water Service & Coolant Check</li>
        <li>✓ Air Pressure & Puncture Repair</li>
        <li>✓ Emergency Breakdown Assistance</li>
        <li>✓ Spare Parts Replacement</li>
      </ul>
    </div>
  );
}

export default AdditionalServices;
