// Language Context
import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const translations = {
  en: {
    schoolName: 'Bhartiyam School',
    schoolSub: 'Beohari • Est. 2005',
    nav: { home: 'Home', academics: 'Academics', gallery: 'Campus & Gallery', disclosures: 'Disclosures', contact: 'Contact' },
    apply: 'Apply 2026–27',
    admOpen: 'Admissions Open 2026–27 • Nursery to Class XII',
    heroTitle: 'A Caring English-Medium School in the Heart of Beohari.',
    heroSub: 'Trusted by Beohari families since 2005. MP Board recognized, smart classrooms, and personal attention for every child.',
    btn1: 'Apply in 2 Minutes',
    btn2: 'Call +91 94250 90591',
    trust1: 'MPBSE Affiliated',
    trust2: 'UDISE: 23160200703',
    trust3: 'Near Jai Stambh',
    badge20: '20+ Years of Excellence in Beohari',
    // Stats
    statYear: 'Year Founded', statYearSub: '20+ Years Trust',
    statRatio: 'Student-Teacher Ratio', statRatioSub: 'Personal Care',
    statLabs: 'Smart Classrooms & Labs', statLabsSub: 'Modern Facilities',
    statBoard: 'English Medium', statBoardSub: 'MP Board Affiliated',
    // Facilities
    facilTitle: 'Campus Life & Facilities',
    facilSub: 'Everything a child needs to grow — in one caring campus.',
    fac: [
      { title: 'Smart Digital Classrooms', desc: 'Interactive audio-visual learning for clearer concepts.' },
      { title: 'Science & Computer Labs', desc: 'Hands-on practical experiments and computer literacy.' },
      { title: '10-Min Early Pre-Classes', desc: 'Teachers arrive 10 minutes early every day for student readiness.' },
      { title: 'Annual Function & Cultural Dance', desc: 'Stage confidence, music, and traditional celebrations.' },
      { title: 'Sports & Morning Assembly', desc: 'Daily fitness, discipline, and team spirit.' },
      { title: 'Sanskar & Community Seva', desc: 'Teaching kindness, respect, and social responsibility.' },
    ],
    // Academics
    acadTitle: 'Academics & Fee Guide',
    acadSub: 'Tap a class to see timings, subjects, and fee estimate.',
    tabs: ['Pre-Primary', 'Primary (1–5)', 'Middle (6–8)', 'High / Sec (9–12)'],
    // Principal
    principalTitle: "Principal's Welcome",
    principalQuote: '"Every child in Beohari deserves patient teachers, modern classrooms, and strong moral values."',
    principalName: 'Smt. Parul Saxena',
    principalRole: 'Principal, Bhartiyam School',
    reviewsTitle: 'What Parents Say',
    // Disclosures
    discTitle: 'Public Disclosures & Documents',
    discSub: 'All documents available for transparency. Click to preview or download.',
    docs: [
      { name: 'MP Board Affiliation Certificate (2025–26)', size: '1.2 MB', type: 'PDF' },
      { name: 'Affiliation Records (2024–25 & 2022–23)', size: '890 KB', type: 'PDF' },
      { name: 'UDISE & PAN Registration (23160200703)', size: '540 KB', type: 'PDF' },
      { name: 'Fee Structure & Book List 2026–27', size: '320 KB', type: 'PDF' },
      { name: 'Academic Calendar & Exam Planner', size: '460 KB', type: 'PDF' },
    ],
    // Gallery
    galleryTitle: 'Campus Photo Gallery',
    gallerySub: 'Real moments from Bhartiyam School, Beohari.',
    galleryFilters: ['All Photos', 'Classrooms & Labs', 'Annual Function', 'Events & Seva'],
    // Contact
    contactTitle: 'Find Us in Beohari',
    contactSub: "We're easy to reach — come visit us!",
    addr: 'Near Jai Stambh, Beohari, Shahdol District, Madhya Pradesh – 484334',
    phone: '+91 94250 90591',
    website: 'bhartiyambeohari.in',
    // Footer
    footerSub: 'Nurturing young minds in Beohari since 2005.',
    // Admission form
    admTitle: 'Quick Admission Form',
    admSub: 'Takes just 2 minutes. We will call you back!',
    childName: "Child's Full Name",
    classLabel: 'Admission Class',
    parentMobile: 'Parent Mobile Number',
    area: 'Area / Village in Beohari',
    submit: 'Submit Application',
    successTitle: 'Application Received!',
    successSub: 'Your Application ID',
    whatsapp: 'Send on WhatsApp',
    // Office
    officeTitle: 'Office Admin Panel',
    officeSub: 'Principal: Smt. Parul Saxena',
    todayInq: "Today's Admission Inquiries",
    callParent: 'Call Parent',
    postNotice: 'Post Notice to Homepage',
    noticePlaceholder: 'Type notice text here…',
    postBtn: 'Post Notice',
    uploadBtn: 'Upload Photo / PDF',
    uploadSub: 'Drag & drop or click to upload',
  },
  hi: {
    schoolName: 'भारतीयम् स्कूल',
    schoolSub: 'बिओहारी • स्था. 2005',
    nav: { home: 'होम', academics: 'शिक्षा', gallery: 'कैंपस & गैलरी', disclosures: 'दस्तावेज़', contact: 'संपर्क' },
    apply: 'प्रवेश 2026–27',
    admOpen: 'प्रवेश खुले हैं 2026–27 • नर्सरी से कक्षा XII',
    heroTitle: 'बियोहारी के दिल में एक प्यारा अंग्रेजी माध्यम स्कूल।',
    heroSub: '2005 से बियोहारी परिवारों का विश्वास। MP Board मान्यता प्राप्त, स्मार्ट कक्षाएं और हर बच्चे पर व्यक्तिगत ध्यान।',
    btn1: '2 मिनट में आवेदन करें',
    btn2: 'कॉल करें +91 94250 90591',
    trust1: 'MPBSE संबद्ध',
    trust2: 'UDISE: 23160200703',
    trust3: 'जय स्तंभ के पास',
    badge20: 'बियोहारी में 20+ वर्षों की उत्कृष्टता',
    statYear: 'स्थापना वर्ष', statYearSub: '20+ वर्ष का भरोसा',
    statRatio: 'छात्र-शिक्षक अनुपात', statRatioSub: 'व्यक्तिगत देखभाल',
    statLabs: 'स्मार्ट कक्षाएं व लैब', statLabsSub: 'आधुनिक सुविधाएं',
    statBoard: 'अंग्रेजी माध्यम', statBoardSub: 'MP Board संबद्ध',
    facilTitle: 'कैंपस जीवन और सुविधाएं',
    facilSub: 'एक बच्चे को बढ़ने के लिए जो चाहिए — एक देखभाल करने वाले कैंपस में।',
    fac: [
      { title: 'स्मार्ट डिजिटल कक्षाएं', desc: 'स्पष्ट अवधारणाओं के लिए इंटरएक्टिव ऑडियो-विजुअल शिक्षा।' },
      { title: 'विज्ञान एवं कंप्यूटर लैब', desc: 'व्यावहारिक प्रयोग और कंप्यूटर साक्षरता।' },
      { title: '10 मिनट पहले प्री-क्लास', desc: 'शिक्षक प्रतिदिन 10 मिनट पहले पहुंचते हैं।' },
      { title: 'वार्षिकोत्सव और सांस्कृतिक नृत्य', desc: 'मंच आत्मविश्वास, संगीत और पारंपरिक उत्सव।' },
      { title: 'खेल और प्रातःकालीन सभा', desc: 'दैनिक फिटनेस, अनुशासन और टीम भावना।' },
      { title: 'संस्कार और सामुदायिक सेवा', desc: 'दया, सम्मान और सामाजिक जिम्मेदारी की शिक्षा।' },
    ],
    acadTitle: 'शिक्षा और शुल्क मार्गदर्शिका',
    acadSub: 'कक्षा चुनें — समय, विषय और शुल्क अनुमान देखें।',
    tabs: ['प्री-प्राइमरी', 'प्राथमिक (1–5)', 'मिडिल (6–8)', 'हाई / सेकेंडरी (9–12)'],
    principalTitle: 'प्रधानाचार्या का संदेश',
    principalQuote: '"बियोहारी के हर बच्चे को धैर्यशील शिक्षक, आधुनिक कक्षाएं और मजबूत नैतिक मूल्य मिलने चाहिए।"',
    principalName: 'श्रीमती पारुल सक्सेना',
    principalRole: 'प्रधानाचार्या, भारतीयम् स्कूल',
    reviewsTitle: 'अभिभावकों की राय',
    discTitle: 'सार्वजनिक दस्तावेज़',
    discSub: 'पारदर्शिता के लिए सभी दस्तावेज़। क्लिक करके देखें या डाउनलोड करें।',
    docs: [
      { name: 'MP Board संबद्धता प्रमाण पत्र (2025–26)', size: '1.2 MB', type: 'PDF' },
      { name: 'संबद्धता रिकॉर्ड (2024–25 और 2022–23)', size: '890 KB', type: 'PDF' },
      { name: 'UDISE और PAN पंजीकरण (23160200703)', size: '540 KB', type: 'PDF' },
      { name: 'शुल्क संरचना और पुस्तक सूची 2026–27', size: '320 KB', type: 'PDF' },
      { name: 'शैक्षणिक कैलेंडर और परीक्षा योजनाकार', size: '460 KB', type: 'PDF' },
    ],
    galleryTitle: 'कैंपस फोटो गैलरी',
    gallerySub: 'भारतीयम् स्कूल, बियोहारी के असली पल।',
    galleryFilters: ['सभी फोटो', 'कक्षाएं व लैब', 'वार्षिकोत्सव', 'आयोजन व सेवा'],
    contactTitle: 'बियोहारी में हमें खोजें',
    contactSub: 'आना आसान है — मिलने आइए!',
    addr: 'जय स्तंभ के पास, बियोहारी, शहडोल जिला, मध्यप्रदेश – 484334',
    phone: '+91 94250 90591',
    website: 'bhartiyambeohari.in',
    footerSub: '2005 से बियोहारी में युवा मनों को संवारते हुए।',
    admTitle: 'त्वरित प्रवेश फॉर्म',
    admSub: 'केवल 2 मिनट लगते हैं। हम आपको वापस कॉल करेंगे!',
    childName: 'बच्चे का पूरा नाम',
    classLabel: 'प्रवेश कक्षा',
    parentMobile: 'अभिभावक का मोबाइल नंबर',
    area: 'क्षेत्र / गांव (बियोहारी)',
    submit: 'आवेदन जमा करें',
    successTitle: 'आवेदन प्राप्त हो गया!',
    successSub: 'आपका आवेदन ID',
    whatsapp: 'WhatsApp पर भेजें',
    officeTitle: 'कार्यालय एडमिन पैनल',
    officeSub: 'प्रधानाचार्या: श्रीमती पारुल सक्सेना',
    todayInq: 'आज की प्रवेश जांच',
    callParent: 'अभिभावक को कॉल करें',
    postNotice: 'होमपेज पर सूचना पोस्ट करें',
    noticePlaceholder: 'सूचना यहाँ टाइप करें…',
    postBtn: 'सूचना पोस्ट करें',
    uploadBtn: 'फोटो / PDF अपलोड करें',
    uploadSub: 'खींचें और छोड़ें या क्लिक करें',
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
