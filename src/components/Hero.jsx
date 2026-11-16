import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import { Phone, ChevronRight, Award, MapPin } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = { show: { transition: { staggerChildren: 0.1 } } };

// Realistic Indian school photo references via Unsplash
const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    alt: 'Students in smart classroom',
    label: 'Smart Classrooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    alt: 'Students learning together',
    label: 'Group Learning',
  },
  {
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80',
    alt: 'Science lab experiments',
    label: 'Science Lab',
  },
];

export default function Hero({ onApply }) {
  const { t } = useLang();

  return (
    <section id="home" style={{ background: '#FFFFFF', paddingBottom: 0 }}>
      <div className="container" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 48, alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* LEFT — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <motion.div variants={fadeUp}>
              <span className="pill-badge">
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#D95D1E', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                {t.admOpen}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontSize: 'clamp(26px, 3.5vw, 46px)',
              fontWeight: 800,
              color: '#13294B',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
            }}>
              {t.heroTitle}
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 15.5, color: '#4B5563', lineHeight: 1.65, maxWidth: 440,
            }}>
              {t.heroSub}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <motion.button
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                transition={spring}
                onClick={onApply}
                style={{ fontSize: 15, padding: '14px 28px' }}
              >
                {t.btn1}
                <ChevronRight size={16} />
              </motion.button>

              <motion.a
                href="tel:+919425090591"
                className="btn-outline"
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: 15, padding: '14px 24px', textDecoration: 'none' }}
              >
                <Phone size={15} color="#13294B" />
                {t.btn2}
              </motion.a>
            </motion.div>

            {/* Trust Strip */}
            <motion.div variants={fadeUp} style={{
              display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
              paddingTop: 4,
            }}>
              {[
                { icon: <Award size={13} />, label: t.trust1 },
                { icon: <span style={{ fontSize: 11 }}>🆔</span>, label: t.trust2 },
                { icon: <MapPin size={13} />, label: t.trust3 },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  fontSize: 12.5, fontWeight: 600, color: '#6B7280',
                }}>
                  <span style={{ color: '#13294B' }}>{item.icon}</span>
                  {item.label}
                  {i < 2 && <span style={{ color: '#D1D5DB', marginLeft: 8 }}>•</span>}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo Bento */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '240px 180px',
              gap: 10,
              borderRadius: 28,
              overflow: 'hidden',
            }}>
              {/* Large photo */}
              <div style={{
                gridRow: '1 / 2', gridColumn: '1 / 2',
                borderRadius: 20, overflow: 'hidden', position: 'relative',
              }}>
                <motion.img
                  src={PHOTOS[0].url}
                  alt={PHOTOS[0].alt}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', bottom: 10, left: 10,
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 10, padding: '4px 10px',
                  fontSize: 11, fontWeight: 700, color: '#13294B',
                }}>
                  {PHOTOS[0].label}
                </div>
              </div>

              {/* Top right */}
              <div style={{ gridRow: '1 / 2', gridColumn: '2 / 3', borderRadius: 20, overflow: 'hidden' }}>
                <motion.img
                  src={PHOTOS[1].url}
                  alt={PHOTOS[1].alt}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bottom spanning */}
              <div style={{
                gridRow: '2 / 3', gridColumn: '1 / 3',
                borderRadius: 20, overflow: 'hidden', position: 'relative',
              }}>
                <motion.img
                  src={PHOTOS[2].url}
                  alt={PHOTOS[2].alt}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Floating Glass Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, ...spring }}
                  style={{
                    position: 'absolute', bottom: 14, right: 14,
                    background: 'rgba(255,255,255,0.88)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 16, padding: '10px 16px',
                    display: 'flex', alignItems: 'center', gap: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(255,255,255,0.6)',
                  }}
                >
                  <SchoolEmblemSVG size={28} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#13294B', lineHeight: 1.1 }}>
                      {t.badge20}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <StatsStrip />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

function StatsStrip() {
  const { t } = useLang();
  const stats = [
    { value: '2005', label: t.statYear, sub: t.statYearSub, color: '#13294B' },
    { value: '26:1', label: t.statRatio, sub: t.statRatioSub, color: '#D95D1E' },
    { value: '15+', label: t.statLabs, sub: t.statLabsSub, color: '#059669' },
    { value: 'N–XII', label: t.statBoard, sub: t.statBoardSub, color: '#7C3AED' },
  ];

  return (
    <div style={{ background: '#13294B', padding: '0' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }} className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                padding: '28px 24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginTop: 6 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SchoolEmblemSVG({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17" fill="#13294B" stroke="#D95D1E" strokeWidth="2" />
      <path d="M18 7L11 12V20C11 23.9 14.1 27 18 27C21.9 27 25 23.9 25 20V12L18 7Z" fill="#D95D1E" opacity="0.8" />
      <path d="M18 11L14 14V20C14 22.2 15.8 24 18 24C20.2 24 22 22.2 22 20V14L18 11Z" fill="white" opacity="0.25" />
      <text x="18" y="22" textAnchor="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="system-ui">BS</text>
    </svg>
  );
}
