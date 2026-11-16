import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { FileText, Download, Eye, X, Shield } from 'lucide-react';

export default function Disclosures() {
  const { t } = useLang();
  const [previewDoc, setPreviewDoc] = useState(null);

  return (
    <section id="disclosures" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Shield size={18} color="#13294B" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#13294B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Transparency First
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: '#13294B', marginBottom: 10 }}>
            {t.discTitle}
          </h2>
          <p style={{ fontSize: 15.5, color: '#4B5563', maxWidth: 420, margin: '0 auto' }}>{t.discSub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: '#F5F5F7', borderRadius: 24,
            border: '1px solid #E5E7EB',
            overflow: 'hidden', maxWidth: 720, margin: '0 auto',
          }}
        >
          {t.docs.map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ background: 'rgba(19,41,75,0.03)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 24px',
                borderBottom: i < t.docs.length - 1 ? '1px solid #E5E7EB' : 'none',
                cursor: 'pointer', transition: 'background 0.2s ease',
              }}
              onClick={() => setPreviewDoc(doc)}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'rgba(217,93,30,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <FileText size={18} color="#D95D1E" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#111827', marginBottom: 2 }}>
                  {doc.name}
                </div>
                <div style={{ fontSize: 12, color: '#9CA3AF', display: 'flex', gap: 10 }}>
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  style={{
                    width: 34, height: 34, borderRadius: 9,
                    border: '1px solid #E5E7EB', background: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => { e.stopPropagation(); setPreviewDoc(doc); }}
                >
                  <Eye size={15} color="#6B7280" />
                </button>
                <button
                  style={{
                    width: 34, height: 34, borderRadius: 9,
                    border: '1px solid #E5E7EB', background: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => { e.stopPropagation(); alert('Download functionality — connect your document storage here.'); }}
                >
                  <Download size={15} color="#6B7280" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewDoc && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewDoc(null)}
          >
            <motion.div
              className="modal-sheet"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 540 }}
            >
              {/* Close */}
              <button
                onClick={() => setPreviewDoc(null)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  width: 32, height: 32, borderRadius: '50%',
                  border: '1px solid #E5E7EB', background: '#F5F5F7',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={15} />
              </button>

              {/* Doc Preview */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'linear-gradient(135deg, #D95D1E20, #D95D1E10)',
                  border: '1.5px solid rgba(217,93,30,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FileText size={24} color="#D95D1E" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 2 }}>
                    {previewDoc.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#9CA3AF' }}>
                    {previewDoc.type} • {previewDoc.size} • Bhartiyam School, Beohari
                  </div>
                </div>
              </div>

              {/* Simulated PDF Preview */}
              <div style={{
                background: '#F5F5F7', borderRadius: 16,
                height: 280, border: '1px solid #E5E7EB',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, gap: 12,
              }}>
                <FileText size={48} color="#D1D5DB" />
                <div style={{ fontSize: 15, fontWeight: 600, color: '#9CA3AF' }}>
                  {previewDoc.name}
                </div>
                <div style={{ fontSize: 12, color: '#D1D5DB' }}>
                  Bhartiyam School, Beohari — Official Document
                </div>
                <div style={{
                  background: 'rgba(19,41,75,0.07)', borderRadius: 8,
                  padding: '4px 12px', fontSize: 11, color: '#13294B', fontWeight: 600,
                }}>
                  UDISE: 23160200703
                </div>
              </div>

              <motion.button
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert('Connect your document storage to enable PDF downloads.')}
              >
                <Download size={16} />
                Download PDF
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
