import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import { Phone, Globe, MapPin, Share2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: '#13294B', marginBottom: 10 }}>
            {t.contactTitle}
          </h2>
          <p style={{ fontSize: 15.5, color: '#4B5563' }}>{t.contactSub}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 24 }} className="contact-grid">
          {/* Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                icon: <MapPin size={20} color="#D95D1E" />,
                label: 'Address',
                value: t.addr,
                bg: 'rgba(217,93,30,0.08)',
                action: null,
              },
              {
                icon: <Phone size={20} color="#059669" />,
                label: 'Phone / WhatsApp',
                value: t.phone,
                bg: 'rgba(5,150,105,0.08)',
                action: { label: 'Call Now', href: 'tel:+919425090591' },
              },
              {
                icon: <Globe size={20} color="#13294B" />,
                label: 'Website',
                value: 'bhartiyambeohari.in',
                bg: 'rgba(19,41,75,0.06)',
                action: { label: 'Visit', href: 'https://bhartiyambeohari.in' },
              },
              {
                icon: <Share2 size={20} color="#1877F2" />,
                label: 'Share2',
                value: 'Bhartiyam School Beohari',
                bg: 'rgba(24,119,242,0.07)',
                action: { label: 'Follow Us', href: 'https://www.Share2.com/bhartiyamschooltrust/' },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: item.bg, borderRadius: 16,
                  padding: '16px 20px', border: '1px solid rgba(229,231,235,0.7)',
                  display: 'flex', alignItems: 'center', gap: 14,
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>
                    {item.value}
                  </div>
                </div>
                {item.action && (
                  <a
                    href={item.action.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '7px 14px', borderRadius: 10,
                      background: 'white', border: '1px solid #E5E7EB',
                      fontSize: 12.5, fontWeight: 700, color: '#13294B',
                      textDecoration: 'none', flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.action.label}
                  </a>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919425090591?text=Hello%2C%20I%20want%20to%20enquire%20about%20admission%20at%20Bhartiyam%20School%2C%20Beohari."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: 'white', padding: '14px 20px', borderRadius: 16,
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
              }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              minHeight: 320,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5!2d81.3804!3d23.6403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3983cf3ea9d80361%3A0x9f7e4f73c5ef4e1a!2sBeohari%2C%20Shahdol%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhartiyam School Location"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
