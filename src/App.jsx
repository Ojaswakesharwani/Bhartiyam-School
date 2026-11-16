import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Academics from './components/Academics';
import Principal from './components/Principal';
import Disclosures from './components/Disclosures';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import OfficeModal from './components/OfficeModal';

export default function App() {
  const [showAdmission, setShowAdmission] = useState(false);
  const [showOffice, setShowOffice] = useState(false);

  return (
    <LangProvider>
      <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar
          onApply={() => setShowAdmission(true)}
          onOffice={() => setShowOffice(true)}
        />

        <main>
          <Hero onApply={() => setShowAdmission(true)} />
          <Facilities />
          <Academics onApply={() => setShowAdmission(true)} />
          <Principal />
          <Disclosures />
          <Gallery />
          <Contact />
        </main>

        <Footer onApply={() => setShowAdmission(true)} />

        {/* Modals */}
        <AnimatePresence>
          {showAdmission && (
            <AdmissionModal onClose={() => setShowAdmission(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showOffice && (
            <OfficeModal onClose={() => setShowOffice(false)} />
          )}
        </AnimatePresence>
      </div>
    </LangProvider>
  );
}
