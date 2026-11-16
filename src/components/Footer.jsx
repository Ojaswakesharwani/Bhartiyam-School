import React from 'react';
import { useLang } from '../LangContext';
import { Phone, Globe, MapPin, Share2, Heart } from 'lucide-react';

export default function Footer({ onApply }) {
  const { t } = useLang();

  return (
    <footer style={{ background: '#13294B', color: 'white', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40, marginBottom: 48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.1)" />
                <path d="M20 6L10 12V24C10 29.5 14.5 34 20 34C25.5 34 30 29.5 30 24V12L20 6Z" fill="#D95D1E" opacity="0.9" />
                <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="system-ui">BS</text>
              </svg>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{t.schoolName}</div>
                <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)' }}>{t.schoolSub}</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 240, marginBottom: 16 }}>
              {t.footerSub}
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <Share2 size={16} />, href: 'https://www.Share2.com/bhartiyamschooltrust/' },
                { icon: <Phone size={16} />, href: 'tel:+919425090591' },
                { icon: <Globe size={16} />, href: 'https://bhartiyambeohari.in' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 14 }}>
              Quick Links
            </div>
            {Object.values(t.nav).map((link, i) => (
              <a
                key={i}
                href={`#${Object.keys(t.nav)[i]}`}
                style={{
                  display: 'block', fontSize: 13.5, color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none', marginBottom: 8, fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 14 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <MapPin size={14} style={{ color: '#D95D1E', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{t.addr}</span>
              </div>
              <a href="tel:+919425090591" style={{ display: 'flex', gap: 8, alignItems: 'center', textDecoration: 'none' }}>
                <Phone size={14} style={{ color: '#D95D1E' }} />
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)' }}>{t.phone}</span>
              </a>
              <a href="https://bhartiyambeohari.in" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 8, alignItems: 'center', textDecoration: 'none' }}>
                <Globe size={14} style={{ color: '#D95D1E' }} />
                <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)' }}>{t.website}</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 14 }}>
              Admissions
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 16 }}>
              Admissions open for 2026–27. Limited seats — apply today!
            </p>
            <button
              onClick={onApply}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t.apply}
            </button>
            <div style={{
              marginTop: 12, background: 'rgba(255,255,255,0.08)',
              borderRadius: 10, padding: '8px 12px',
              fontSize: 11.5, color: 'rgba(255,255,255,0.5)', textAlign: 'center',
            }}>
              UDISE: 23160200703<br />MPBSE Affiliated
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © 2025 Bhartiyam School, Beohari. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
            Made with <Heart size={12} color="#D95D1E" fill="#D95D1E" /> for Beohari students
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
