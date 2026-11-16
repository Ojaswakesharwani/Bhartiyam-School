import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { X, ZoomIn } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', cat: 'Classrooms & Labs', label: 'Smart Classroom Session', catHi: 'कक्षाएं व लैब' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', cat: 'Annual Function', label: 'Annual Function 2024', catHi: 'वार्षिकोत्सव' },
  { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', cat: 'Classrooms & Labs', label: 'Students at Work', catHi: 'कक्षाएं व लैब' },
  { url: 'https://images.unsplash.com/photo-1546961342-ea5f60a194cb?w=600&q=80', cat: 'Events & Seva', label: 'Haryali Teej Celebration', catHi: 'आयोजन व सेवा' },
  { url: 'https://images.unsplash.com/photo-1532094349884-543559244e3c?w=600&q=80', cat: 'Classrooms & Labs', label: 'Science Lab Experiments', catHi: 'कक्षाएं व लैब' },
  { url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80', cat: 'Annual Function', label: 'Cultural Dance Performance', catHi: 'वार्षिकोत्सव' },
  { url: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80', cat: 'Events & Seva', label: 'Ekadashi Fruit Seva Distribution', catHi: 'आयोजन व सेवा' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', cat: 'Classrooms & Labs', label: 'Interactive Learning Session', catHi: 'कक्षाएं व लैब' },
  { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80', cat: 'Events & Seva', label: 'Morning Assembly & Yoga', catHi: 'आयोजन व सेवा' },
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80', cat: 'Annual Function', label: 'Prize Distribution Ceremony', catHi: 'वार्षिकोत्सव' },
  { url: 'https://images.unsplash.com/photo-1540553016722-983e7278f7be?w=600&q=80', cat: 'Events & Seva', label: 'Community Service Day', catHi: 'आयोजन व सेवा' },
  { url: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&q=80', cat: 'Classrooms & Labs', label: 'Computer Lab Practice', catHi: 'कक्षाएं व लैब' },
];

export default function Gallery() {
  const { lang, t } = useLang();
  const [activeFilter, setActiveFilter] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const filters = t.galleryFilters;
  const filterKeys = ['All Photos', 'Classrooms & Labs', 'Annual Function', 'Events & Seva'];

  const filtered = activeFilter === 0
    ? galleryImages
    : galleryImages.filter(img => img.cat === filterKeys[activeFilter]);

  return (
    <section id="gallery" style={{ background: '#F5F5F7', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: '#13294B', marginBottom: 10 }}>
            {t.galleryTitle}
          </h2>
          <p style={{ fontSize: 15.5, color: '#4B5563' }}>{t.gallerySub}</p>
        </motion.div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {filters.map((filter, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveFilter(i)}
              style={{
                padding: '8px 18px', borderRadius: 50,
                border: activeFilter === i ? '1.5px solid #13294B' : '1.5px solid #E5E7EB',
                background: activeFilter === i ? '#13294B' : 'white',
                color: activeFilter === i ? 'white' : '#4B5563',
                fontSize: 13.5, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
          className="gallery-grid"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightbox(img)}
                style={{
                  borderRadius: 16, overflow: 'hidden',
                  cursor: 'pointer', position: 'relative',
                  aspectRatio: '4/3',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <motion.img
                  src={img.url}
                  alt={img.label}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(19,41,75,0.5)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 6,
                  }}
                >
                  <ZoomIn size={24} color="white" />
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'white', textAlign: 'center', padding: '0 8px' }}>
                    {img.label}
                  </span>
                </motion.div>

                {/* Category label */}
                <div style={{
                  position: 'absolute', bottom: 8, left: 8,
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 6, padding: '3px 8px',
                  fontSize: 10, fontWeight: 700, color: '#13294B',
                }}>
                  {lang === 'hi' ? img.catHi : img.cat}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={spring}
              style={{
                position: 'relative', maxWidth: '90vw', maxHeight: '90vh',
                borderRadius: 20, overflow: 'hidden',
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.url.replace('w=600', 'w=1200')}
                alt={lightbox.label}
                style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 16 }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                padding: '20px 20px 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>{lightbox.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12 }}>Bhartiyam School, Beohari</div>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={18} color="white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 600px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
