import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { Menu, X, Globe, Briefcase } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

export default function Navbar({ onApply, onOffice }) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'academics', label: t.nav.academics, href: '#academics' },
    { id: 'gallery', label: t.nav.gallery, href: '#gallery' },
    { id: 'disclosures', label: t.nav.disclosures, href: '#disclosures' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  const scrollTo = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Notice Ticker */}
      <div className="notice-banner">
        <div className="container" style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ background:'#D95D1E', color:'white', padding:'2px 10px', borderRadius:50, fontSize:11, fontWeight:700, flexShrink:0 }}>NOTICE</span>
          <div style={{ overflow:'hidden', flex:1 }}>
            <div className="notice-scroll">
              {['📢 Admissions Open for 2026–27 — Nursery to Class XII | 🏆 Bhartiyam Annual Function 2025 — Grand Success! | 📋 Fee Structure 2026–27 Available Now | 🌿 Haryali Teej Celebration — Beautiful Memories | 📚 Smart Classroom Upgrades Complete | 🤝 Ekadashi Fruit Seva — Community Service',
                '📢 Admissions Open for 2026–27 — Nursery to Class XII | 🏆 Bhartiyam Annual Function 2025 — Grand Success! | 📋 Fee Structure 2026–27 Available Now | 🌿 Haryali Teej Celebration — Beautiful Memories | 📚 Smart Classroom Upgrades Complete | 🤝 Ekadashi Fruit Seva — Community Service',
              ].map((txt, i) => (
                <span key={i}>{txt}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        style={{
          position: 'sticky', top: 0, zIndex: 100, height: 64,
          borderBottom: scrolled ? '1px solid rgba(229,231,235,0.7)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
        initial={{ y: -80 }} animate={{ y: 0 }} transition={spring}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }} onClick={() => scrollTo('home')}>
            <SchoolCrest size={36} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: '#13294B', lineHeight: 1.1 }}>{t.schoolName}</div>
              <div style={{ fontSize: 10.5, color: '#6B7280', fontWeight: 500 }}>{t.schoolSub}</div>
            </div>
          </div>

          {/* Center Nav */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {links.map(link => (
              <div key={link.id} style={{ position: 'relative' }}>
                <button
                  onClick={() => scrollTo(link.id)}
                  style={{
                    padding: '7px 14px', borderRadius: 10, border: 'none',
                    background: 'transparent', cursor: 'pointer',
                    fontSize: 14, fontWeight: 600,
                    color: activeLink === link.id ? '#13294B' : '#4B5563',
                    fontFamily: 'inherit', transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </button>
                {activeLink === link.id && (
                  <motion.div
                    layoutId="navPill"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(19,41,75,0.07)',
                      borderRadius: 10, zIndex: -1,
                    }}
                    transition={spring}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* Language Toggle */}
            <div className="seg-control hide-mobile">
              {['en', 'hi'].map(l => (
                <button
                  key={l}
                  className={`seg-btn ${lang === l ? 'active' : ''}`}
                  onClick={() => setLang(l)}
                  style={{ padding: '5px 12px', fontSize: 13 }}
                >
                  {l === 'en' ? 'EN' : 'हिंदी'}
                </button>
              ))}
            </div>

            {/* Office */}
            <motion.button
              className="hide-mobile"
              whileTap={{ scale: 0.95 }}
              onClick={onOffice}
              style={{
                width: 36, height: 36, borderRadius: 10,
                border: '1.5px solid #E5E7EB',
                background: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              title="Office Admin"
            >
              <Briefcase size={16} color="#4B5563" />
            </motion.button>

            {/* Apply CTA */}
            <motion.button
              className="btn-primary"
              whileTap={{ scale: 0.97 }}
              onClick={onApply}
              style={{ padding: '9px 18px', fontSize: 13 }}
            >
              {t.apply}
            </motion.button>

            {/* Mobile Menu */}
            <button
              className="show-mobile"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none', // shown via CSS on mobile
                width: 36, height: 36, borderRadius: 10,
                border: '1.5px solid #E5E7EB', background: 'white',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: 100, left: 16, right: 16, zIndex: 99,
              background: 'white', borderRadius: 20,
              border: '1px solid #E5E7EB',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              padding: 16,
            }}
          >
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 16px', borderRadius: 12, border: 'none',
                  background: 'transparent', cursor: 'pointer',
                  fontSize: 16, fontWeight: 600, color: '#13294B', fontFamily: 'inherit',
                  marginBottom: 4,
                }}
              >
                {link.label}
              </button>
            ))}
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              {['en', 'hi'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    flex: 1, padding: '10px 0', borderRadius: 10,
                    border: lang === l ? '1.5px solid #13294B' : '1.5px solid #E5E7EB',
                    background: lang === l ? '#13294B' : 'white',
                    color: lang === l ? 'white' : '#4B5563',
                    fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  {l === 'en' ? 'EN' : 'हिंदी'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SchoolCrest({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#13294B" />
      <path d="M20 6L10 12V24C10 29.5 14.5 34 20 34C25.5 34 30 29.5 30 24V12L20 6Z" fill="#D95D1E" opacity="0.9" />
      <path d="M20 10L13 15V24C13 27.9 16.1 31 20 31C23.9 31 27 27.9 27 24V15L20 10Z" fill="white" opacity="0.15" />
      <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="system-ui">BS</text>
    </svg>
  );
}
