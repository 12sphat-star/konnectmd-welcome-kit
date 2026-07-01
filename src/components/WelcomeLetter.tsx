import { useState } from 'react';
import { Mail, Phone, Clock, Globe, ShieldCheck, HeartPulse, CheckSquare, Square, CreditCard, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/benefitsData';
import { MemberInfo } from '../types';

interface WelcomeLetterProps {
  memberInfo: MemberInfo;
  onNavigateToTab: (tabId: string) => void;
}

export default function WelcomeLetter({ memberInfo, onNavigateToTab }: WelcomeLetterProps) {
  const [checklist, setChecklist] = useState([
    { id: 'card', text: 'Personalize and review your Digital ID Card', checked: true, tabId: 'card' },
    { id: 'explore', text: 'Browse included Rx list and dental networks', checked: false, tabId: 'benefits' },
    { id: 'calc', text: 'Estimate your household annual savings', checked: false, tabId: 'estimator' },
    { id: 'provider', text: 'Find local network dentists or vision providers', checked: false, link: 'https://www.findbestbenefits.com' },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Premium Welcome Letter */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-blue-100 p-6 md:p-8 shadow-sm flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-gold-50 border border-brand-gold-250 text-brand-gold-600 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-2xl text-brand-blue-900 leading-tight">
              A Personal Message For You
            </h2>
          </div>

          <div className="font-display font-medium text-lg text-brand-blue-800 leading-relaxed pt-2">
            Dear Valued Member,
          </div>

          <div className="space-y-4 text-sm md:text-base text-brand-blue-600 leading-relaxed font-sans">
            <p>
              Welcome to the <strong className="text-brand-blue-900">KonnectMD Plus program!</strong> We are pleased to provide you and your loved ones with seamless access to high-quality, pre-negotiated discount healthcare services designed to save you money on critical, everyday care.
            </p>
            <p>
              Included in this digital kit is your official <strong className="text-brand-blue-900">KonnectMD Plus membership identification card</strong>. Simply show your card at any participating provider location across the United States to receive immediate discounts on the dental, vision, counseling, or chiropractic care you receive.
            </p>
            <p>
              Our premium national networks deliver the same exceptional care and service wherever you may be in the country. Because your membership <strong>extends to anyone residing in your household</strong>, there is absolutely no limit to how often or how much your family can save!
            </p>
            <p>
              Please read through the quick-start sections in this portal to discover covered medication formularies, locate participating providers, and make the absolute most of your membership.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-blue-100 mt-8 pt-6 flex justify-between items-center">
          <div>
            <p className="text-xs text-brand-blue-400 font-mono uppercase tracking-widest">Sincerely,</p>
            <p className="font-display font-bold text-brand-blue-950 mt-1">KonnectMD Customer Service Team</p>
            <p className="text-xs text-brand-blue-500">Gallagher Affinity Administered Services</p>
          </div>
          
          <div className="flex items-center gap-1 bg-brand-blue-50/70 border border-brand-blue-100 rounded-lg px-3 py-1.5 text-xs text-brand-blue-700 font-semibold font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            SECURED PORTAL
          </div>
        </div>
      </div>

      {/* Right Column: Key Contacts & Interactive Onboarding Checklist */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Contact Info Hub Widget */}
        <div className="bg-brand-blue-900 text-white rounded-2xl p-6 shadow-md border border-brand-blue-950 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-brand-gold-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="font-display font-bold text-lg text-brand-gold-300 flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
            <Phone className="w-5 h-5 text-brand-gold-400" />
            Contact Information
          </h3>

          <div className="space-y-4">
            {/* Customer Service */}
            <div className="flex gap-3">
              <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/5 h-fit text-brand-gold-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Customer Service (Benefits)</p>
                <a href={`tel:${CONTACT_INFO.customerService}`} className="font-mono font-bold text-sm hover:text-brand-gold-400 transition-colors block mt-0.5">
                  {CONTACT_INFO.customerService}
                </a>
                <p className="text-xs text-brand-blue-200 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-gold-400" />
                  {CONTACT_INFO.customerServiceHours}
                </p>
              </div>
            </div>

            {/* KonnectMD Direct Helpline */}
            <div className="flex gap-3">
              <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/5 h-fit text-brand-gold-400">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">KonnectMD Direct Helpline</p>
                <a href={`tel:${CONTACT_INFO.konnectmdDirect}`} className="font-mono font-bold text-sm hover:text-brand-gold-400 transition-colors block mt-0.5">
                  {CONTACT_INFO.konnectmdDirect}
                </a>
                <p className="text-[11px] text-brand-blue-200 mt-0.5">
                  Rx Formulary & Virtual Psychiatry Line
                </p>
              </div>
            </div>

            {/* Billing & Cancellations */}
            <div className="flex gap-3">
              <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/5 h-fit text-brand-gold-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Billing & Cancellations</p>
                <a href={`tel:${CONTACT_INFO.billingAndCancellations}`} className="font-mono font-bold text-sm hover:text-brand-gold-400 transition-colors block mt-0.5">
                  {CONTACT_INFO.billingAndCancellations}
                </a>
              </div>
            </div>

            {/* Web Resources */}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <div className="p-2 bg-white/10 rounded-lg shrink-0 border border-white/5 h-fit text-brand-gold-400">
                <Globe className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Digital Resource Links</p>
                <a href={`https://${CONTACT_INFO.portalUrl}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-brand-gold-300 hover:underline block mt-1 truncate">
                  {CONTACT_INFO.portalUrl} (Portal)
                </a>
                <a href={`https://${CONTACT_INFO.websiteUrl}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-brand-gold-300 hover:underline block mt-1 truncate">
                  {CONTACT_INFO.websiteUrl} (Provider Search)
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Onboarding Tasks Widget */}
        <div className="bg-white rounded-2xl border border-brand-blue-100 p-6 shadow-sm">
          <h3 className="font-display font-semibold text-base text-brand-blue-900 mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-brand-gold-500" />
            Quick Member Start Guide
          </h3>
          
          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.tabId) {
                    onNavigateToTab(item.tabId);
                  } else if (item.link) {
                    window.open(item.link, '_blank');
                  } else {
                    toggleCheck(item.id);
                  }
                }}
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-blue-50/50 cursor-pointer transition-colors border border-transparent hover:border-brand-blue-100/30 group"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCheck(item.id);
                  }}
                  className="mt-0.5 focus:outline-none cursor-pointer"
                >
                  {item.checked ? (
                    <CheckSquare className="w-4.5 h-4.5 text-brand-gold-500 fill-brand-gold-50" />
                  ) : (
                    <Square className="w-4.5 h-4.5 text-brand-blue-300 group-hover:text-brand-blue-400" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs md:text-sm font-medium ${
                    item.checked ? 'text-brand-blue-400 line-through' : 'text-brand-blue-800'
                  }`}>
                    {item.text}
                  </p>
                </div>
                {(item.tabId || item.link) && (
                  <ChevronRight className="w-4 h-4 text-brand-blue-300 group-hover:text-brand-blue-500 transition-colors shrink-0 mt-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
