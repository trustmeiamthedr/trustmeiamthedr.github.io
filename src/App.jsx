import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';

import SpineDisk from './pages/SpineDisk';

import JointPain from './pages/JointPain';

import Shoulder from './pages/Shoulder';

import MyofascialPain from './pages/MyofascialPain';
import TrafficAccident from './pages/TrafficAccident';
import Respiratory from './pages/Respiratory';
import Diet from './pages/Diet';
import EnoslimGuide from './pages/EnoslimGuide';
import ImmuneBoosting from './pages/ImmuneBoosting';
import Injections from './pages/Injections';
import PlacentaInjection from './pages/PlacentaInjection';
import PdrnInjection from './pages/PdrnInjection';
import NInjection from './pages/NInjection';
import HydrodissectionPage from './pages/HydrodissectionPage';
import ContactPage from './pages/ContactPage';
import TimetablePage from './pages/TimetablePage';
import DepartmentsPage from './pages/DepartmentsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<DoctorProfile />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/spine-disk" element={<SpineDisk />} />
          <Route path="/departments/joint-pain" element={<JointPain />} />
          <Route path="/departments/shoulder" element={<Shoulder />} />
          <Route path="/departments/myofascial-pain" element={<MyofascialPain />} />
          <Route path="/departments/traffic-accident" element={<TrafficAccident />} />
          <Route path="/departments/respiratory" element={<Respiratory />} />
          <Route path="/departments/diet" element={<Diet />} />
          <Route path="/enoslim-guide" element={<EnoslimGuide />} />
          <Route path="/departments/immune-boosting" element={<ImmuneBoosting />} />
          <Route path="/departments/injections" element={<Injections />} />
          <Route path="/departments/injections/placenta" element={<PlacentaInjection />} />
          <Route path="/departments/injections/pdrn" element={<PdrnInjection />} />
          <Route path="/departments/injections/n-injection" element={<NInjection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/departments/injections/hydrodissection" element={<HydrodissectionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
