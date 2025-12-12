import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import ServiceBooking from './pages/ServiceBooking';
import AgentPage from './pages/AgentPage';
import FeaturesPage from './pages/FeaturesPage';
import AgentTracking from './pages/AgentTracking';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/service/:vehicleType" element={<ServiceBooking />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/tracking" element={<AgentTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
