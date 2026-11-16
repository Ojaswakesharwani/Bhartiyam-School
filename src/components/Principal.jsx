import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import { Star, Quote } from 'lucide-react';

const reviews = {
  en: [
    {
      name: 'Rahul Verma',
      role: 'Alumni, Class of 2022',
      text: 'Bhartiyam School gave me the confidence to pursue engineering. The teachers were always patient and caring. I owe my foundation to this school.',
      rating: 5,
      avatar: 'RV',
    },
    {
      name: 'Rohit Patel',
      role: 'Parent (2 children enrolled)',
      text: 'Both my children study here and I have seen remarkable improvement in their discipline and academics. The smart classrooms make learning enjoyable.',
      rating: 5,
      avatar: 'RP',
    },
    {
      name: 'Priya Sharma',
      role: 'Parent, Station Road',
      text: 'The school is very transparent with fees and updates. The annual function every year is beautiful — my daughter loves the dance practice.',
      rating: 5,
      avatar: 'PS',
    },
  ],
  hi: [
    {
      name: 'राहुल वर्मा',
      role: 'पूर्व छात्र, 2022 बैच',
      text: 'भारतीयम् स्कूल ने मुझे इंजीनियरिंग करने का आत्मविश्वास दिया। शिक्षक हमेशा धैर्यशील और देखभाल करने वाले थे। मेरी नींव इस स्कूल की देन है।',
      rating: 5,
      avatar: 'रा',
    },
    {
      name: 'रोहित पटेल',
      role: 'अभिभावक (2 बच्चे दाखिल)',
      text: 'मेरे दोनों बच्चे यहां पढ़ते हैं और मैंने उनके अनुशासन और पढ़ाई में उल्लेखनीय सुधार देखा है। स्मार्ट कक्षाएं सीखने को मजेदार बनाती हैं।',
      rating: 5,
      avatar: 'रो',
    },
    {
      name: 'प्रिया शर्मा',
      role: 'अभिभावक, स्टेशन रोड',
      text: 'स्कूल फीस और अपडेट के साथ बहुत पारदर्शी है। हर साल वार्षिकोत्सव बहुत सुंदर होता है — मेरी बेटी नृत्य अभ्यास बहुत पसंद करती है।',
      rating: 5,
      avatar: 'प्र',
    },
  ],
};

export default function Principal() {
  const { lang, t } = useLang();
  const revs = reviews[lang];

  return (
    <section style={{ background: '#F5F5F7', padding: '80px 0' }}>
      <div className="container">
        {/* Principal Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'white', borderRadius: 24,
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 32px rgba(19,41,75,0.08)',
            overflow: 'hidden', marginBottom: 48,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 0 }} className="principal-grid">
            {/* Photo Column */}
            <div style={{
              background: 'linear-gradient(135deg, #13294B 0%, #1e4080 100%)',
              padding: '40px 36px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              minWidth: 220,
            }}>
              {/* Avatar */}
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: 'linear-gradient(135deg, #D95D1E, #e8732a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 36, fontWeight: 800, color: 'white',
                border: '4px solid rgba(255,255,255,0.3)',
                marginBottom: 14,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}>
                PS
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'white', textAlign: 'center' }}>
                {t.principalName}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: 4 }}>
                {t.principalRole}
              </div>
              <div style={{
                marginTop: 20, background: 'rgba(217,93,30,0.2)',
                border: '1px solid rgba(217,93,30,0.4)',
                borderRadius: 10, padding: '6px 14px',
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#D95D1E' }}>20+ Yrs Experience</span>
              </div>
            </div>

            {/* Quote Column */}
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800, color: '#13294B', marginBottom: 6 }}>
                  {t.principalTitle}
                </h3>
              </div>
              <div style={{ position: 'relative', paddingLeft: 24 }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0,
                  width: 3, height: '100%', background: '#D95D1E', borderRadius: 2,
                }} />
                <Quote size={22} color="#D95D1E" style={{ marginBottom: 8, opacity: 0.7 }} />
                <p style={{
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#1F2937', fontWeight: 500,
                  lineHeight: 1.65, fontStyle: 'italic',
                }}>
                  {t.principalQuote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 style={{
            fontSize: 20, fontWeight: 800, color: '#13294B',
            marginBottom: 20, textAlign: 'center',
          }}>
            {t.reviewsTitle}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="reviews-grid">
            {revs.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'white', borderRadius: 18,
                  padding: 22, border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="#D95D1E" color="#D95D1E" />
                  ))}
                </div>
                <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6, marginBottom: 14 }}>
                  "{rev.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #13294B, #1a3a6c)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, color: 'white', flexShrink: 0,
                  }}>
                    {rev.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{rev.name}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>{rev.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .principal-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
