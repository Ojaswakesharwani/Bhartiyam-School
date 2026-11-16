import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import { Monitor, FlaskConical, Clock, Music, Users, Heart } from 'lucide-react';

const FACILITY_IMGS = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  'https://images.unsplash.com/photo-1532094349884-543559244e3c?w=600&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
  'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80',
  'https://images.unsplash.com/photo-1546961342-ea5f60a194cb?w=600&q=80',
  'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80',
];

const ICONS = [Monitor, FlaskConical, Clock, Music, Users, Heart];

export default function Facilities() {
  const { t } = useLang();

  return (
    <section style={{ background: '#F5F5F7', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: '#13294B', marginBottom: 10 }}>
            {t.facilTitle}
          </h2>
          <p style={{ fontSize: 15.5, color: '#4B5563', maxWidth: 420, margin: '0 auto' }}>
            {t.facilSub}
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="fac-grid">
          {t.fac.map((fac, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                style={{
                  borderRadius: 20, overflow: 'hidden', background: 'white',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  cursor: 'default',
                }}
              >
                <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                  <motion.img
                    src={FACILITY_IMGS[i]}
                    alt={fac.title}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(12px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#13294B" />
                  </div>
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#13294B', marginBottom: 5 }}>
                    {fac.title}
                  </div>
                  <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.5 }}>
                    {fac.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .fac-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .fac-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
