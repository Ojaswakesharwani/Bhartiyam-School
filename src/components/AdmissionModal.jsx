import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { X, ChevronDown, Check, MessageCircle } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

const classOptions = {
  en: ['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
  hi: ['नर्सरी', 'LKG', 'UKG', 'कक्षा 1', 'कक्षा 2', 'कक्षा 3', 'कक्षा 4', 'कक्षा 5', 'कक्षा 6', 'कक्षा 7', 'कक्षा 8', 'कक्षा 9', 'कक्षा 10', 'कक्षा 11', 'कक्षा 12'],
};

const areaOptions = {
  en: ['Jai Stambh Area', 'Station Road', 'Bansagar Colony', 'Main Market', 'Nearby Village (< 5 km)', 'Nearby Village (5–15 km)', 'Other Area'],
  hi: ['जय स्तंभ क्षेत्र', 'स्टेशन रोड', 'बांसागर कॉलोनी', 'मुख्य बाजार', 'पास का गांव (< 5 किमी)', 'पास का गांव (5–15 किमी)', 'अन्य क्षेत्र'],
};

function generateId() {
  return 'BHS-2026-' + Math.floor(100 + Math.random() * 900);
}

export default function AdmissionModal({ onClose }) {
  const { lang, t } = useLang();
  const [form, setForm] = useState({ name: '', classVal: '', mobile: '', area: '' });
  const [submitted, setSubmitted] = useState(false);
  const [appId] = useState(generateId);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.classVal || !form.mobile || !form.area) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Bhartiyam School! I just submitted an admission application.\n\nApplication ID: ${appId}\nChild's Name: ${form.name}\nClass: ${form.classVal}\nMobile: ${form.mobile}\nArea: ${form.area}\n\nPlease confirm my application. Thank you!`
  );

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-sheet"
        initial={{ scale: 0.88, opacity: 0, y: 32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 32 }}
        transition={spring}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: 440 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20,
            width: 32, height: 32, borderRadius: '50%',
            border: '1px solid #E5E7EB', background: '#F5F5F7',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X size={15} />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
              {/* Header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, #D95D1E20, #D95D1E10)',
                  border: '1.5px solid rgba(217,93,30,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <span style={{ fontSize: 22 }}>📋</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#13294B', marginBottom: 4 }}>{t.admTitle}</h2>
                <p style={{ fontSize: 13.5, color: '#6B7280' }}>{t.admSub}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t.childName}</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={lang === 'en' ? "e.g. Anjali Sharma" : "जैसे अंजलि शर्मा"}
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.classLabel}</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="form-select"
                      value={form.classVal}
                      onChange={e => setForm(f => ({ ...f, classVal: e.target.value }))}
                      required
                    >
                      <option value="">{lang === 'en' ? 'Select class…' : 'कक्षा चुनें…'}</option>
                      {classOptions[lang].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.parentMobile}</label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label className="form-label">{t.area}</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="form-select"
                      value={form.area}
                      onChange={e => setForm(f => ({ ...f, area: e.target.value }))}
                      required
                    >
                      <option value="">{lang === 'en' ? 'Select your area…' : 'क्षेत्र चुनें…'}</option>
                      {areaOptions[lang].map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px 20px' }}
                >
                  {loading ? (
                    <div style={{
                      width: 18, height: 18, border: '2.5px solid rgba(255,255,255,0.4)',
                      borderTopColor: 'white', borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                  ) : (
                    <>{t.submit} ✓</>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring}
            >
              <div className="success-card" style={{ marginBottom: 20 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#D1FAE5', border: '2px solid #6EE7B7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 14px',
                }}>
                  <Check size={28} color="#059669" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#065F46', marginBottom: 6 }}>
                  {t.successTitle}
                </h3>
                <p style={{ fontSize: 13, color: '#047857', marginBottom: 14 }}>
                  {t.successSub}:
                </p>
                <div style={{
                  background: 'white', borderRadius: 12, padding: '10px 20px',
                  display: 'inline-block', border: '1.5px solid #6EE7B7',
                }}>
                  <span style={{ fontWeight: 800, fontSize: 20, color: '#065F46', letterSpacing: '1px' }}>
                    {appId}
                  </span>
                </div>
                <p style={{ fontSize: 11.5, color: '#6B7280', marginTop: 10 }}>
                  Save this ID. School will call {form.mobile} within 24 hours.
                </p>
              </div>

              <motion.a
                href={`https://wa.me/919425090591?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white', padding: '14px 20px', borderRadius: 14,
                  fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.3)', marginBottom: 10,
                }}
              >
                <MessageCircle size={20} />
                {t.whatsapp} (+91 94250 90591)
              </motion.a>

              <button
                onClick={onClose}
                style={{
                  width: '100%', padding: '12px', borderRadius: 12,
                  border: '1.5px solid #E5E7EB', background: 'transparent',
                  fontSize: 14, fontWeight: 600, color: '#6B7280',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </motion.div>
  );
}
