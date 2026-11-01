'use client';

import React, { useState, useRef } from 'react';
import {
  Briefcase,
  Users,
  CheckCircle2,
  FileText,
  UploadCloud,
  ArrowRight,
  Sparkles,
  Clock,
  AlertCircle,
  Loader2,
  Send,
  TrendingUp,
  HeartHandshake,
  Check,
  ChevronDown,
  Sparkle,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const POSITIONS = [
  {
    id: 'sales-executive',
    title: 'Sales & Business Development Executive',
    department: 'Sales & Growth',
    experience: 'Freshers & Experienced Candidates',
    summary:
      'Drive growth by connecting with bridal makeup artists, salons, and beauty studios to demonstrate how VARNAM transforms their operations.',
    responsibilities: [
      'Identify and connect with potential bridal studio and salon clients.',
      'Generate business leads through outreach, referrals, and networking.',
      'Explain VARNAM products and services with clarity and domain focus.',
      'Conduct product demonstrations and follow-ups with studio owners.',
      'Maintain strong, long-term client relationships.',
      'Support sales targets and active business growth.',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Executive',
    department: 'Marketing & Brand Strategy',
    experience: 'Freshers & Experienced Candidates',
    summary:
      'Lead digital presence and engagement across bridal communities, content channels, and organic search campaigns.',
    responsibilities: [
      'Manage and grow social media accounts across key platforms.',
      'Plan, curate, and create engaging marketing content.',
      'Support SEO activities to drive inbound organic bridal studio leads.',
      'Execute high-impact digital marketing campaigns.',
      'Generate qualified studio leads through targeted digital channels.',
      'Monitor campaign metrics and optimize growth performance.',
    ],
  },
];

export default function CareersPage() {
  const formRef = useRef(null);

  // Form State
  const [selectedPosition, setSelectedPosition] = useState(POSITIONS[0].title);
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Fresher');
  const [totalExperience, setTotalExperience] = useState('');
  const [location, setLocation] = useState('');
  const [education, setEducation] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  // Status States
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [applicationId, setApplicationId] = useState('');

  const scrollToForm = (positionTitle) => {
    if (positionTitle) {
      setSelectedPosition(positionTitle);
    }
    if (formRef.current) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      setError('Please upload your resume in PDF format only (.pdf).');
      setResumeFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Resume file size must be less than 5MB.');
      setResumeFile(null);
      return;
    }

    setError('');
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!applicantName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!positionValid(selectedPosition)) {
      setError('Please select a position to apply for.');
      return;
    }
    if (experienceLevel === 'Experienced' && !totalExperience.trim()) {
      setError('Please enter your total experience (e.g., 2 years).');
      return;
    }
    if (!location.trim()) {
      setError('Please enter your current location.');
      return;
    }
    if (!education.trim()) {
      setError('Please enter your highest educational qualification.');
      return;
    }
    if (!resumeFile) {
      setError('Please upload your resume (PDF only).');
      return;
    }
    if (!consent) {
      setError('You must confirm the consent checkbox before submitting.');
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append('applicantName', applicantName.trim());
      data.append('email', email.trim());
      data.append('phone', phone.trim());
      data.append('position', selectedPosition);
      data.append('experienceLevel', experienceLevel);
      if (experienceLevel === 'Experienced') {
        data.append('totalExperience', totalExperience.trim());
      }
      data.append('location', location.trim());
      data.append('education', education.trim());
      data.append('linkedinUrl', linkedinUrl.trim());
      data.append('message', message.trim());
      data.append('consent', consent ? 'true' : 'false');
      data.append('resume', resumeFile);

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit application.');
      }

      setApplicationId(result.applicationId || '');
      setSuccess(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please check your connection and retry.');
    } finally {
      setLoading(false);
    }
  };

  const positionValid = (title) => {
    return POSITIONS.some((p) => p.title === title);
  };

  const resetForm = () => {
    setSuccess(false);
    setApplicantName('');
    setEmail('');
    setPhone('');
    setTotalExperience('');
    setLocation('');
    setEducation('');
    setLinkedinUrl('');
    setMessage('');
    setResumeFile(null);
    setConsent(false);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 md:pt-14 pb-4 md:pb-8 overflow-hidden">
        {/* Ambient Decorative Accents */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[300px] sm:h-[400px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>We Are Hiring • Join Our Growing Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] tracking-tight leading-[1.15]"
          >
            Build Your Career With{' '}
            <span className="text-[#FF6B00] relative inline-block whitespace-nowrap">
              VARNAM.
              <span className="absolute left-0 bottom-1 sm:bottom-1.5 w-full h-2 sm:h-2.5 bg-[#FF6B00]/15 -z-10 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Be part of a team building innovative digital products and transforming bridal studios through technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-2.5 sm:mt-3 text-xs sm:text-base text-[#6B7280] max-w-xl mx-auto"
          >
            We welcome passionate freshers and experienced professionals who want to learn, contribute and grow with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToForm()}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#positions"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-[#1F2937] text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Open Positions</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. CULTURE / VALUES SNAPSHOT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00]/15 to-[#FF8533]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-4 sm:mb-5 group-hover:scale-105 transition-transform shadow-xs">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F2937] mb-2">
              Accelerated Career Growth
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Work directly with high-impact software like VARNAM, with complete mentorship, ownership, and swift recognition.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00]/15 to-[#FF8533]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-4 sm:mb-5 group-hover:scale-105 transition-transform shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F2937] mb-2">
              Collaborative Culture
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              We empower every voice. Freshers and seasoned specialists work hand-in-hand to solve genuine domain problems.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00]/15 to-[#FF8533]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-4 sm:mb-5 group-hover:scale-105 transition-transform shadow-xs">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F2937] mb-2">
              Real Customer Impact
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Transform traditional bridal studios and salons into modern, tech-enabled digital businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AVAILABLE JOB POSITIONS - ULTRA MODERN CARDS */}
      <section id="positions" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/20 inline-block mb-3">
            Open Vacancies
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1F2937]">
            Available Job Positions
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-[#6B7280]">
            Explore our open roles below and apply today to join our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {POSITIONS.map((pos) => (
            <div
              key={pos.id}
              className="group relative bg-white rounded-3xl border border-[#F0E5DA] hover:border-[#FF6B00]/50 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#FF6B00]/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 shadow-xs">
                    <Sparkle className="w-3 h-3 text-[#FF6B00]" />
                    <span>{pos.department}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-stone-600 bg-stone-50 border border-stone-200">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{pos.experience}</span>
                  </div>
                </div>

                {/* Job Title & Summary */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] group-hover:text-[#FF6B00] transition-colors leading-snug mb-3">
                  {pos.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                  {pos.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="pt-4 border-t border-stone-100 mb-8">
                  <div className="flex items-center gap-2 mb-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                    <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-stone-700">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4B5563]">
                    {pos.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 group/item">
                        <div className="w-5 h-5 rounded-full bg-[#FFF8F0] border border-[#FF6B00]/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-[#FF6B00] transition-colors">
                          <Check className="w-3 h-3 text-[#FF6B00] stroke-[2.5]" />
                        </div>
                        <span className="leading-snug text-stone-600 group-hover/item:text-[#1F2937] transition-colors">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => scrollToForm(pos.title)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#FF6B00]/20 hover:shadow-lg hover:shadow-[#FF6B00]/30 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Apply for this Position</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APPLICATION FORM SECTION - SHORT, MODERN & STREAMLINED */}
      <section
        ref={formRef}
        id="apply-form"
        className="max-w-3xl mx-auto px-4 sm:px-6 scroll-mt-24"
      >
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-9 border border-[#F0E5DA] shadow-xl relative overflow-hidden">
          {/* Top orange gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00]" />

          {success ? (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 sm:py-10 text-center space-y-4 sm:space-y-5"
            >
              <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1.5 max-w-lg mx-auto">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
                  Thank you for your interest in VARNAM!
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Your application has been submitted successfully. Our recruitment team will review your profile and contact you if your application is shortlisted.
                </p>
                {applicationId && (
                  <p className="text-xs font-mono text-[#6B7280] pt-1">
                    Application ID: <span className="font-bold text-[#1F2937]">{applicationId}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl bg-[#FFF8F0] hover:bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </motion.div>
          ) : (
            /* COMPACT & MODERN STREAMLINED FORM */
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00]">
                    Recruitment Application
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] mt-0.5">
                    Submit Your Job Application
                  </h2>
                </div>
                <p className="text-[11px] text-[#6B7280]">
                  Fields with <span className="text-[#FF6B00] font-bold">*</span> are required
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                  <div className="flex-1 font-medium">{error}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Position Applying For */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                    Position Applying For <span className="text-[#FF6B00]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      required
                      className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm font-semibold text-[#1F2937] focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all cursor-pointer"
                    >
                      {POSITIONS.map((pos) => (
                        <option key={pos.id} value={pos.title}>
                          {pos.title} ({pos.department})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Arun Kumar"
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. arun.kumar@gmail.com"
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* 3. Mobile & Experience Level Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Mobile Number <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Experience Level <span className="text-[#FF6B00]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setExperienceLevel('Fresher')}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          experienceLevel === 'Fresher'
                            ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {experienceLevel === 'Fresher' && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        <span>Fresher</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setExperienceLevel('Experienced')}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          experienceLevel === 'Experienced'
                            ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {experienceLevel === 'Experienced' && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        <span>Experienced</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Conditional Total Experience */}
                <AnimatePresence>
                  {experienceLevel === 'Experienced' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                        Total Experience <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        required={experienceLevel === 'Experienced'}
                        value={totalExperience}
                        onChange={(e) => setTotalExperience(e.target.value)}
                        placeholder="e.g. 2 years in B2B SaaS Sales / Digital Marketing"
                        suppressHydrationWarning
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. Current Location & Highest Qualification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Current Location <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Madurai, Tamil Nadu"
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Highest Qualification <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      placeholder="e.g. B.Com, B.E., B.Tech, MBA, MCA, etc."
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* 5. Compact Resume Upload Component */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937]">
                      Resume Upload (PDF Only, Max 5MB) <span className="text-[#FF6B00]">*</span>
                    </label>
                    {resumeFile && (
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                        <span>Remove file</span>
                      </button>
                    )}
                  </div>

                  <div className="relative border-2 border-dashed border-stone-300 hover:border-[#FF6B00] rounded-xl px-4 py-3.5 bg-stone-50/60 hover:bg-[#FFF8F0]/30 transition-all">
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      required={!resumeFile}
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    {resumeFile ? (
                      <div className="flex items-center justify-between gap-3 pointer-events-none">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 text-left">
                            <p className="text-xs font-bold text-emerald-800 truncate">
                              {resumeFile.name}
                            </p>
                            <p className="text-[10px] text-emerald-600">
                              {(resumeFile.size / 1024).toFixed(1)} KB • PDF verified
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 px-2.5 py-1 rounded-md bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1">
                          <Check className="w-3 h-3" /> Ready
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3 pointer-events-none py-1">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                          <UploadCloud className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-semibold text-[#1F2937]">
                            <span className="text-[#FF6B00] underline font-bold">Choose a PDF file</span> or drag & drop
                          </p>
                          <p className="text-[10px] text-[#6B7280]">
                            Only .pdf format • Max 5MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 6. LinkedIn & Statement (Compact 2-col on desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      LinkedIn Profile <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-xs text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937] mb-1">
                      Why VARNAM? <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Brief note about your ambitions..."
                      suppressHydrationWarning
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-xs text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    />
                  </div>
                </div>

                {/* 7. Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-0.5 w-4 h-4 rounded text-[#FF6B00] focus:ring-[#FF6B00] border-stone-300 accent-[#FF6B00] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#6B7280] leading-snug">
                      I confirm that the information provided is accurate and agree to the processing of my application details for recruitment purposes.
                    </span>
                  </label>
                </div>

                {/* 8. Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] text-white text-sm font-bold shadow-md shadow-[#FF6B00]/25 hover:shadow-lg hover:shadow-[#FF6B00]/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-[#6B7280] mt-2">
                    Delivered directly to recruitment at <span className="font-semibold text-[#1F2937]">vexatech.connect@gmail.com</span>.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* 5. HIRING PROCESS OVERVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
            Our Recruitment Process
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
            Simple, transparent, and candidate-first evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E5DA]">
            <span className="w-8 h-8 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-bold text-xs sm:text-sm flex items-center justify-center mx-auto mb-3">
              1
            </span>
            <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1">
              Application Review
            </h4>
            <p className="text-xs text-[#6B7280]">
              Our hiring managers review your resume and experience within 48 hours.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E5DA]">
            <span className="w-8 h-8 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-bold text-xs sm:text-sm flex items-center justify-center mx-auto mb-3">
              2
            </span>
            <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1">
              Initial Discussion
            </h4>
            <p className="text-xs text-[#6B7280]">
              A friendly conversation to understand your career aspirations and fit.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E5DA]">
            <span className="w-8 h-8 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-bold text-xs sm:text-sm flex items-center justify-center mx-auto mb-3">
              3
            </span>
            <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1">
              Offer & Onboarding
            </h4>
            <p className="text-xs text-[#6B7280]">
              Clear offer letter and structured onboarding to set you up for success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
