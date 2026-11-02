import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phoneOrWhatsApp: '',
    businessType: 'Business Coach',
    monthlyRevenue: '$5k - $15k / mo',
    primaryGoal: 'Turn visitors into paying clients',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleNextStep1 = (type: string) => {
    setFormData({ ...formData, businessType: type });
    setStep(2);
  };

  const handleNextStep2 = (goal: string, revenue: string) => {
    setFormData({ ...formData, primaryGoal: goal, monthlyRevenue: revenue });
    setStep(3);
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneOrWhatsApp.trim() || formData.phoneOrWhatsApp.length < 6) {
      newErrors.phoneOrWhatsApp = 'Please provide your WhatsApp or phone number for instant follow-up';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setStep(4);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-[#1E0D30] via-[#140822] to-[#0D0B10] border border-[#8B2FC9]/50 p-6 sm:p-8 shadow-[0_0_80px_rgba(139,47,201,0.8)] overflow-hidden">
        {/* Glow corner in vibrant purple */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#8B2FC9]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#D1C6B4] hover:text-[#C084FC] hover:bg-[#351052]/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step 1: Select Business Category */}
        {step === 1 && (
          <div>
            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest block mb-1">
              STEP 1 OF 3 // BUSINESS PROFILE
            </span>
            <h3 className="text-2xl font-bold font-display text-[#F2E9DC] mb-2">
              What type of business are you scaling?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C6B4] mb-6">
              This helps Gavin Studio tailor the exact sales funnel and automation architecture to your market.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { title: 'Business Coach & Executive Mentor', desc: 'Consulting, leadership, strategy' },
                { title: 'Fitness Coach & Personal Trainer', desc: 'Workouts, nutrition, transformation' },
                { title: 'Online Course Creator & Educator', desc: 'Digital courses, community, cohorts' },
                { title: 'Strategic Consultant / Advisory', desc: 'B2B services, retainers, solutions' },
                { title: 'Service Business / Agency', desc: 'Commercial services, local practice, clinics' }
              ].map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleNextStep1(item.title)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#140A22]/90 border border-[#351052]/70 hover:border-[#A855F7] hover:bg-[#230E38] transition-all text-left cursor-pointer group"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#F2E9DC] group-hover:text-[#C084FC]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#A69986]">{item.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C084FC] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Goal and Stage */}
        {step === 2 && (
          <div>
            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest block mb-1">
              STEP 2 OF 3 // GROWTH OBJECTIVE
            </span>
            <h3 className="text-2xl font-bold font-display text-[#F2E9DC] mb-2">
              What is your primary conversion goal?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C6B4] mb-6">
              Selected: <span className="text-[#C084FC] font-semibold">{formData.businessType}</span>
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D1C6B4] block mb-2">
                  Primary Objective:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Turn visitors into paying clients',
                    'Build high-converting sales funnel',
                    'Automate WhatsApp & Email follow-ups',
                    'Redesign modern authority website'
                  ].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                        formData.primaryGoal === goal
                          ? 'bg-[#8B2FC9]/40 border-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                          : 'bg-[#150D20] border-[#351052]/60 text-[#D1C6B4] hover:border-[#8B2FC9]'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#D1C6B4] block mb-2">
                  Current Monthly Revenue Tier:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Under $5k', '$5k - $20k', '$20k - $100k+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, monthlyRevenue: tier })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        formData.monthlyRevenue === tier
                          ? 'bg-[#8B2FC9]/40 border-[#A855F7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                          : 'bg-[#150D20] border-[#351052]/60 text-[#D1C6B4] hover:border-[#8B2FC9]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#351052]/60">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-[#A69986] hover:text-[#F2E9DC]"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] text-white text-xs font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer"
              >
                <span>Continue to Step 3</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest block mb-1">
              STEP 3 OF 3 // SECURE CONSULTATION
            </span>
            <h3 className="text-2xl font-bold font-display text-[#F2E9DC] mb-2">
              Where should we send your Funnel Strategy?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C6B4] mb-5">
              Gavin Studio reviews your current online presence and prepares a custom 1-on-1 growth roadmap.
            </p>

            <div className="space-y-3.5 mb-6">
              <div>
                <label className="text-xs font-medium text-[#D1C6B4] block mb-1">
                  Full Name / Business Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alex Rivera (Peak Fitness)"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#140A22] border border-[#351052] focus:border-[#A855F7] focus:outline-none text-[#F2E9DC] text-sm"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#D1C6B4] block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#140A22] border border-[#351052] focus:border-[#A855F7] focus:outline-none text-[#F2E9DC] text-sm"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#D1C6B4] block mb-1">
                  WhatsApp or Direct Mobile (for instant 60s briefing) *
                </label>
                <input
                  type="tel"
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#140A22] border border-[#351052] focus:border-[#A855F7] focus:outline-none text-[#F2E9DC] text-sm"
                />
                {errors.phoneOrWhatsApp && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.phoneOrWhatsApp}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#D1C6B4] block mb-1">
                  Current Website URL or Social Profile (optional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="https://yourwebsite.com or @instagram"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#140A22] border border-[#351052] focus:border-[#A855F7] focus:outline-none text-[#F2E9DC] text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#351052]/60">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-[#A69986] hover:text-[#F2E9DC]"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#8B2FC9] via-[#A855F7] to-[#7B2CBF] hover:from-[#A855F7] hover:to-[#8B2FC9] text-white text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] transition-all cursor-pointer"
              >
                <span>Submit & Reserve Consultation</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Instant Confirmation & Simulation of the Automation System */}
        {step === 4 && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-[#8B2FC9]/30 border border-[#A855F7]/60 flex items-center justify-center text-[#C084FC] mx-auto mb-4 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              <CheckCircle2 className="w-8 h-8 text-[#C084FC]" />
            </div>

            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest block mb-1">
              SYSTEM TRIGGER ACTIVATED
            </span>
            <h3 className="text-2xl font-bold font-display text-[#F2E9DC] mb-2">
              Consultation Request Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C6B4] max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#C084FC] font-semibold">{formData.fullName}</span>. Our growth team has received your profile for <span className="text-white font-medium">{formData.businessType}</span>.
            </p>

            {/* Live Automated Flow Simulation Card */}
            <div className="p-4 rounded-2xl bg-[#140A22] border border-[#351052] text-left mb-6 space-y-3">
              <div className="text-[11px] font-mono text-[#A69986] uppercase tracking-wider flex items-center justify-between">
                <span>AUTOMATION DISPATCH LOG</span>
                <span className="text-[#C084FC] flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-ping" />
                  Sent Live
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#F2E9DC]">
                <MessageSquare className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                <span>
                  WhatsApp notification queued to <strong className="text-white">{formData.phoneOrWhatsApp}</strong>
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#F2E9DC]">
                <Calendar className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                <span>
                  Calendar invite & audit blueprint sent to <strong className="text-white">{formData.email}</strong>
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#351052]/50 border border-[#8B2FC9]/60 text-white text-xs font-bold hover:bg-[#8B2FC9]/40 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,47,201,0.3)]"
            >
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
