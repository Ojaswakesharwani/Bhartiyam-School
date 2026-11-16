import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LangContext';
import { Clock, BookOpen, Bus, IndianRupee, ChevronRight } from 'lucide-react';

const spring = { type: 'spring', stiffness: 320, damping: 30 };

const academicData = {
  en: [
    {
      id: 0,
      ageElig: 'Age 3–6 years',
      timing: '8:50 AM – 1:00 PM',
      subjects: ['Play-Based Learning', 'Hindi & English Literacy', 'Basic Math & Shapes', 'Art, Craft & Music', 'Rhymes & Stories', 'Moral Values'],
      feeRange: '₹ 2,400 – ₹ 3,200 / quarter',
      busRoutes: [
        { area: 'Jai Stambh & Station Rd', fare: '₹ 350/month' },
        { area: 'Bansagar Colony', fare: '₹ 400/month' },
        { area: 'Nearby Villages', fare: '₹ 500/month' },
      ],
    },
    {
      id: 1,
      ageElig: 'Class 1–5 | Age 6–11',
      timing: '9:00 AM – 2:00 PM',
      subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'General Knowledge', 'Art & Craft', 'Computer Basics'],
      feeRange: '₹ 3,500 – ₹ 4,800 / quarter',
      busRoutes: [
        { area: 'Jai Stambh & Station Rd', fare: '₹ 350/month' },
        { area: 'Bansagar Colony', fare: '₹ 400/month' },
        { area: 'Nearby Villages', fare: '₹ 500/month' },
      ],
    },
    {
      id: 2,
      ageElig: 'Class 6–8 | Age 11–14',
      timing: '9:00 AM – 2:30 PM',
      subjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'General Knowledge'],
      feeRange: '₹ 4,800 – ₹ 6,200 / quarter',
      busRoutes: [
        { area: 'Jai Stambh & Station Rd', fare: '₹ 350/month' },
        { area: 'Bansagar Colony', fare: '₹ 400/month' },
        { area: 'Nearby Villages', fare: '₹ 500/month' },
      ],
    },
    {
      id: 3,
      ageElig: 'Class 9–12 | Age 14–18',
      timing: '9:00 AM – 3:00 PM',
      subjects: ['English', 'Hindi', 'Mathematics / Biology', 'Physics', 'Chemistry', 'Computer Science', 'Commerce / Social Studies'],
      feeRange: '₹ 6,500 – ₹ 8,800 / quarter',
      busRoutes: [
        { area: 'Jai Stambh & Station Rd', fare: '₹ 350/month' },
        { area: 'Bansagar Colony', fare: '₹ 400/month' },
        { area: 'Nearby Villages', fare: '₹ 500/month' },
      ],
    },
  ],
  hi: [
    {
      id: 0,
      ageElig: 'आयु 3–6 वर्ष',
      timing: 'सुबह 8:50 – दोपहर 1:00',
      subjects: ['खेल आधारित शिक्षा', 'हिंदी और अंग्रेजी साक्षरता', 'बुनियादी गणित', 'कला, शिल्प और संगीत', 'कविताएं और कहानियां', 'नैतिक मूल्य'],
      feeRange: '₹ 2,400 – ₹ 3,200 / तिमाही',
      busRoutes: [
        { area: 'जय स्तंभ और स्टेशन रोड', fare: '₹ 350/माह' },
        { area: 'बांसागर कॉलोनी', fare: '₹ 400/माह' },
        { area: 'आसपास के गांव', fare: '₹ 500/माह' },
      ],
    },
    {
      id: 1,
      ageElig: 'कक्षा 1–5 | आयु 6–11',
      timing: 'सुबह 9:00 – दोपहर 2:00',
      subjects: ['अंग्रेजी', 'हिंदी', 'गणित', 'पर्यावरण अध्ययन', 'सामान्य ज्ञान', 'कला और शिल्प', 'बुनियादी कंप्यूटर'],
      feeRange: '₹ 3,500 – ₹ 4,800 / तिमाही',
      busRoutes: [
        { area: 'जय स्तंभ और स्टेशन रोड', fare: '₹ 350/माह' },
        { area: 'बांसागर कॉलोनी', fare: '₹ 400/माह' },
        { area: 'आसपास के गांव', fare: '₹ 500/माह' },
      ],
    },
    {
      id: 2,
      ageElig: 'कक्षा 6–8 | आयु 11–14',
      timing: 'सुबह 9:00 – दोपहर 2:30',
      subjects: ['अंग्रेजी', 'हिंदी', 'संस्कृत', 'गणित', 'विज्ञान', 'सामाजिक विज्ञान', 'कंप्यूटर', 'सामान्य ज्ञान'],
      feeRange: '₹ 4,800 – ₹ 6,200 / तिमाही',
      busRoutes: [
        { area: 'जय स्तंभ और स्टेशन रोड', fare: '₹ 350/माह' },
        { area: 'बांसागर कॉलोनी', fare: '₹ 400/माह' },
        { area: 'आसपास के गांव', fare: '₹ 500/माह' },
      ],
    },
    {
      id: 3,
      ageElig: 'कक्षा 9–12 | आयु 14–18',
      timing: 'सुबह 9:00 – दोपहर 3:00',
      subjects: ['अंग्रेजी', 'हिंदी', 'गणित / जीव विज्ञान', 'भौतिक विज्ञान', 'रसायन विज्ञान', 'कंप्यूटर विज्ञान', 'वाणिज्य / समाजशास्त्र'],
      feeRange: '₹ 6,500 – ₹ 8,800 / तिमाही',
      busRoutes: [
        { area: 'जय स्तंभ और स्टेशन रोड', fare: '₹ 350/माह' },
        { area: 'बांसागर कॉलोनी', fare: '₹ 400/माह' },
        { area: 'आसपास के गांव', fare: '₹ 500/माह' },
      ],
    },
  ],
};

export default function Academics({ onApply }) {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const data = academicData[lang][activeTab];

  return (
    <section id="academics" style={{ background: '#FFFFFF', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: '#13294B', marginBottom: 10 }}>
            {t.acadTitle}
          </h2>
          <p style={{ fontSize: 15.5, color: '#4B5563' }}>{t.acadSub}</p>
        </motion.div>

        {/* Segmented Control */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div className="seg-control" style={{ borderRadius: 14, padding: 4 }}>
            {t.tabs.map((tab, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <button
                  className="seg-btn"
                  onClick={() => setActiveTab(i)}
                  style={{
                    position: 'relative', zIndex: 1,
                    color: activeTab === i ? '#13294B' : '#6B7280',
                    padding: '8px 16px',
                    fontSize: 13.5,
                  }}
                >
                  {tab}
                </button>
                {activeTab === i && (
                  <motion.div
                    layoutId="acadTab"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'white', borderRadius: 10,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 0,
                    }}
                    transition={spring}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }} className="acad-grid">
              {/* Info Card */}
              <div style={{
                background: '#F5F5F7', borderRadius: 20,
                padding: 28, border: '1px solid #E5E7EB',
              }}>
                {/* Age & Timing */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                  <div style={{
                    background: 'rgba(19,41,75,0.08)', borderRadius: 10,
                    padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <BookOpen size={14} color="#13294B" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#13294B' }}>{data.ageElig}</span>
                  </div>
                  <div style={{
                    background: 'rgba(217,93,30,0.1)', borderRadius: 10,
                    padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <Clock size={14} color="#D95D1E" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#D95D1E' }}>{data.timing}</span>
                  </div>
                </div>

                {/* Subjects */}
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
                    Key Subjects
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {data.subjects.map((s, i) => (
                      <span key={i} style={{
                        background: 'white', border: '1px solid #E5E7EB',
                        borderRadius: 8, padding: '5px 10px',
                        fontSize: 12.5, fontWeight: 600, color: '#374151',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fee Card */}
              <div style={{
                background: 'white', borderRadius: 20,
                padding: 28, border: '1px solid #E5E7EB',
                boxShadow: '0 4px 24px rgba(19,41,75,0.06)',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 14 }}>
                  Fee & Bus Estimator
                </div>

                {/* Fee */}
                <div style={{
                  background: 'linear-gradient(135deg, #13294B, #1a3a6c)',
                  borderRadius: 14, padding: '18px 20px', marginBottom: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Quarterly Fee Range</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: 'white', marginTop: 2 }}>{data.feeRange}</div>
                  </div>
                  <IndianRupee size={28} color="rgba(255,255,255,0.3)" />
                </div>

                {/* Bus Routes */}
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
                  <Bus size={12} style={{ display: 'inline', marginRight: 4 }} />
                  Bus Routes from Your Area
                </div>
                {data.busRoutes.map((r, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: i < data.busRoutes.length - 1 ? '1px solid #F3F4F6' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#D95D1E' }} />
                      <span style={{ fontSize: 13.5, color: '#374151', fontWeight: 500 }}>{r.area}</span>
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: '#13294B' }}>{r.fare}</span>
                  </div>
                ))}

                <motion.button
                  className="btn-primary"
                  whileTap={{ scale: 0.97 }}
                  onClick={onApply}
                  style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}
                >
                  Apply for This Class <ChevronRight size={15} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .acad-grid { grid-template-columns: 1fr !important; }
          .seg-control { flex-wrap: wrap; border-radius: 14px; }
        }
      `}</style>
    </section>
  );
}
