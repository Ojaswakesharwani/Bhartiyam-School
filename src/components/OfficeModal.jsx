import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { X, Phone, Bell, Upload, CheckCircle, ChevronRight, Users } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

const mockInquiries = [
  { id: 'BHS-2026-101', name: 'Ravi Gupta', class: 'Class 6', mobile: '9876543210', area: 'Station Road', time: '10:32 AM', status: 'new' },
  { id: 'BHS-2026-102', name: 'Meera Patel', class: 'Class 1', mobile: '9812345670', area: 'Jai Stambh', time: '11:15 AM', status: 'called' },
  { id: 'BHS-2026-103', name: 'Suresh Verma', class: 'Class 9', mobile: '9765432180', area: 'Bansagar Colony', time: '12:08 PM', status: 'new' },
];

export default function OfficeModal({ onClose }) {
  const { t } = useLang();
  const [notice, setNotice] = useState('');
  const [noticePosted, setNoticePosted] = useState(false);
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [uploadDone, setUploadDone] = useState(false);
  const [postedNotices, setPostedNotices] = useState([
    'Admissions Open for 2026–27 — Apply Now!',
    'Fee Structure 2026–27 Available — Contact Office',
  ]);

  const postNotice = () => {
    if (!notice.trim()) return;
    setPostedNotices(prev => [notice.trim(), ...prev]);
    setNoticePosted(true);
    setNotice('');
    setTimeout(() => setNoticePosted(false), 3000);
  };

  const markCalled = (id) => {
    setInquiries(inqs => inqs.map(inq => inq.id === id ? { ...inq, status: 'called' } : inq));
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ alignItems: 'flex-start', paddingTop: 20 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={spring}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white', borderRadius: 28,
          width: '100%', maxWidth: 640,
          maxHeight: '92vh', overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #13294B, #1a3a6c)',
          padding: '24px 28px', position: 'sticky', top: 0, zIndex: 10,
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={15} color="white" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'linear-gradient(135deg, #D95D1E, #e8732a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 800, color: 'white',
            }}>PS</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: 'white' }}>{t.officeTitle}</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)' }}>{t.officeSub}</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Section 1: Admission Inquiries */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Users size={16} color="#13294B" />
              <span style={{ fontSize: 14, fontWeight: 700, color: '#13294B' }}>{t.todayInq}</span>
              <span style={{
                background: '#D95D1E', color: 'white',
                borderRadius: 50, padding: '1px 8px',
                fontSize: 11, fontWeight: 700, marginLeft: 'auto',
              }}>
                {inquiries.filter(i => i.status === 'new').length} New
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {inquiries.map((inq) => (
                <motion.div
                  key={inq.id}
                  layout
                  style={{
                    background: inq.status === 'called' ? '#F5F5F7' : 'white',
                    border: `1.5px solid ${inq.status === 'new' ? '#FEE2E2' : '#E5E7EB'}`,
                    borderRadius: 14, padding: '14px 16px',
                    display: 'flex', alignItems: 'center', gap: 12,
                    opacity: inq.status === 'called' ? 0.7 : 1,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: inq.status === 'new' ? 'linear-gradient(135deg, #D95D1E, #e8732a)' : '#E5E7EB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, color: inq.status === 'new' ? 'white' : '#9CA3AF',
                    flexShrink: 0,
                  }}>
                    {inq.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{inq.name}</div>
                    <div style={{ fontSize: 12, color: '#6B7280' }}>
                      {inq.class} • {inq.area} • {inq.time}
                    </div>
                    <div style={{ fontSize: 11, color: '#9CA3AF', fontFamily: 'monospace', marginTop: 1 }}>ID: {inq.id}</div>
                  </div>
                  {inq.status === 'new' ? (
                    <motion.a
                      href={`tel:${inq.mobile}`}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => markCalled(inq.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        background: '#059669', color: 'white',
                        padding: '8px 12px', borderRadius: 10,
                        fontSize: 12.5, fontWeight: 700, textDecoration: 'none',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={13} />
                      {t.callParent}
                    </motion.a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#059669', fontSize: 12.5, fontWeight: 600 }}>
                      <CheckCircle size={15} />
                      Called
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: '#F3F4F6' }} />

          {/* Section 2: Post Notice */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Bell size={16} color="#D95D1E" />
              <span style={{ fontSize: 14, fontWeight: 700, color: '#13294B' }}>{t.postNotice}</span>
            </div>

            {/* Current Notices */}
            <div style={{ marginBottom: 12 }}>
              {postedNotices.slice(0, 3).map((n, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '7px 10px', marginBottom: 6,
                  background: '#F5F5F7', borderRadius: 8,
                  fontSize: 12.5, color: '#374151',
                }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#D95D1E', flexShrink: 0 }} />
                  {n}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <input
                className="form-input"
                type="text"
                placeholder={t.noticePlaceholder}
                value={notice}
                onChange={e => setNotice(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && postNotice()}
                style={{ flex: 1, fontSize: 14, padding: '12px 14px' }}
              />
              <motion.button
                className="btn-primary"
                whileTap={{ scale: 0.95 }}
                onClick={postNotice}
                style={{ padding: '12px 20px', borderRadius: 12 }}
              >
                {t.postBtn}
              </motion.button>
            </div>

            <AnimatePresence>
              {noticePosted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    marginTop: 8, fontSize: 12.5, color: '#059669', fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} />
                  Notice posted to homepage ticker!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: '#F3F4F6' }} />

          {/* Section 3: Upload */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Upload size={16} color="#7C3AED" />
              <span style={{ fontSize: 14, fontWeight: 700, color: '#13294B' }}>{t.uploadBtn}</span>
            </div>

            <motion.div
              whileHover={{ borderColor: '#13294B', background: 'rgba(19,41,75,0.03)' }}
              onClick={() => { setUploadDone(true); setTimeout(() => setUploadDone(false), 3000); }}
              style={{
                border: '2px dashed #D1D5DB', borderRadius: 16,
                padding: '28px 20px', textAlign: 'center',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}
            >
              <Upload size={28} color="#9CA3AF" style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 4 }}>
                {t.uploadBtn}
              </div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>{t.uploadSub}</div>
              <div style={{ fontSize: 11, color: '#D1D5DB', marginTop: 6 }}>
                JPG, PNG, PDF — up to 20 MB
              </div>
            </motion.div>

            <AnimatePresence>
              {uploadDone && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    marginTop: 10, fontSize: 12.5, color: '#7C3AED', fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} />
                  Demo upload triggered! Connect storage to enable real uploads.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
