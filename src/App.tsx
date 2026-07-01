import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartPulse,
  CreditCard,
  BookOpen,
  Calculator,
  ShieldCheck,
  User,
  Calendar,
  Layers,
  Sparkles,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';

import { INITIAL_MEMBER_INFO, CONTACT_INFO } from './data/benefitsData';
import { MemberInfo } from './types';

// Component imports
import WelcomeLetter from './components/WelcomeLetter';
import DigitalCard from './components/DigitalCard';
import BenefitsExplorer from './components/BenefitsExplorer';
import SavingsEstimator from './components/SavingsEstimator';
import TermsDisclosures from './components/TermsDisclosures';

export default function App() {
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(INITIAL_MEMBER_INFO);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleUpdateName = (newName: string) => {
    setMemberInfo(prev => ({
      ...prev,
      fullName: newName
    }));
  };

  const tabs = [
    { id: 'dashboard', label: 'Welcome Dashboard', icon: Layers },
    { id: 'card', label: 'Digital ID Card', icon: CreditCard },
    { id: 'benefits', label: 'Benefits Directory', icon: BookOpen },
    { id: 'estimator', label: 'Savings Estimator', icon: Calculator },
    { id: 'disclosures', label: 'FAQ & Disclosures', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-brand-blue-50/40 flex flex-col font-sans selection:bg-brand-gold-200 selection:text-brand-blue-900">
      
      {/* 1. Global Non-Insurance Disclaimer Strip (Required regulatory text from PDF) */}
      <div className="bg-brand-gold-500 text-brand-blue-950 px-4 py-2 text-center text-[11px] md:text-xs font-semibold uppercase tracking-wider shadow-inner z-50 flex items-center justify-center gap-1.5 border-b border-brand-gold-600/30">
        <span className="bg-brand-blue-900 text-brand-gold-300 px-2 py-0.5 rounded text-[10px] font-bold">DISCLOSURE</span>
        THIS PLAN IS NOT INSURANCE. It is a discount healthcare membership program administered by Gallagher Affinity.
      </div>

      {/* 2. Primary Portal Navigation Header */}
      <header className="sticky top-0 bg-brand-blue-900 border-b border-brand-blue-950 text-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-gold-500 rounded-xl shadow-inner text-white shrink-0">
              <HeartPulse className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-wider text-lg md:text-xl leading-none">
                  Konnect<span className="text-brand-gold-400">MD</span>
                </span>
                <span className="bg-white/10 text-brand-gold-300 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-widest leading-none border border-white/5">
                  Plus
                </span>
              </div>
              <p className="text-[10px] text-brand-blue-300 font-mono tracking-widest uppercase mt-0.5 hidden sm:block">
                Digital Member Onboarding Portal
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-brand-gold-300 font-semibold shadow-inner border border-white/5'
                      : 'text-brand-blue-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold-400' : 'text-brand-blue-300'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* User Quick Indicator */}
          <div className="hidden sm:flex items-center gap-3 bg-brand-blue-950/80 border border-brand-blue-800 rounded-xl px-4 py-1.5">
            <div className="w-8 h-8 rounded-full bg-brand-gold-500 flex items-center justify-center text-brand-blue-950 font-bold text-sm">
              {memberInfo.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="text-left text-xs">
              <p className="font-semibold text-white truncate max-w-[120px]">
                {memberInfo.fullName}
              </p>
              <p className="font-mono text-[10px] text-brand-blue-300 mt-0.5">
                ID: {memberInfo.memberId}
              </p>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-brand-blue-950 text-brand-blue-100 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-blue-950 border-b border-brand-blue-900 text-white overflow-hidden z-30"
          >
            <div className="px-4 py-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-brand-gold-500 text-brand-blue-950 font-bold'
                        : 'text-brand-blue-100 hover:bg-brand-blue-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {tab.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-brand-blue-900 flex items-center gap-3 mt-2 px-2">
                <div className="w-10 h-10 rounded-full bg-brand-gold-500 flex items-center justify-center text-brand-blue-950 font-bold">
                  {memberInfo.fullName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{memberInfo.fullName}</p>
                  <p className="font-mono text-xs text-brand-blue-300">ID: {memberInfo.memberId}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Welcome Hero Header section */}
      <section className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-800 text-white py-12 md:py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-gold-400/20 text-brand-gold-300 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-3 border border-brand-gold-400/25">
                <Sparkles className="w-3 h-3 text-brand-gold-400" />
                Premium Onboarding Experience
              </span>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
                Your Access to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 to-brand-gold-500">Affordable Healthcare</span> Benefits
              </h1>
              <p className="text-brand-blue-100 text-sm md:text-base mt-3 leading-relaxed max-w-xl">
                A streamlined welcome kit and active directory for your new membership benefits. Compare dental savings, personalize your digital ID card, and find local providers instantly.
              </p>
            </div>

            {/* Household & Status Quick Badge Cards */}
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0 min-w-[280px]">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-mono text-brand-blue-300 uppercase tracking-wider">Plan Coverage</p>
                  <p className="font-display font-bold text-lg text-white mt-1">Household Plus</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-brand-blue-200 mt-2">
                  <User className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Extends to everyone</span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-mono text-brand-blue-300 uppercase tracking-wider">Status Date</p>
                  <p className="font-display font-bold text-lg text-brand-gold-400 mt-1">Active Now</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-brand-blue-200 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Eff: {memberInfo.effectiveDate}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Active Tab Content Window */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' && (
              <WelcomeLetter memberInfo={memberInfo} onNavigateToTab={setActiveTab} />
            )}
            
            {activeTab === 'card' && (
              <div className="flex justify-center">
                <DigitalCard memberInfo={memberInfo} onUpdateName={handleUpdateName} />
              </div>
            )}
            
            {activeTab === 'benefits' && (
              <BenefitsExplorer />
            )}
            
            {activeTab === 'estimator' && (
              <SavingsEstimator />
            )}
            
            {activeTab === 'disclosures' && (
              <TermsDisclosures />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Footer and Administrative Disclaimers */}
      <footer className="bg-brand-blue-950 text-brand-blue-300 border-t border-brand-blue-900 pt-12 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-brand-blue-900">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <HeartPulse className="w-5 h-5 text-brand-gold-400" />
                <span className="font-display font-bold tracking-wider text-base">
                  Konnect<span className="text-brand-gold-400">MD</span> Plus
                </span>
              </div>
              <p className="text-xs text-brand-blue-400 leading-relaxed max-w-xs">
                A premium discount healthcare benefits program. Restructuring access to affordable wellness care, dental procedures, optical savings, and immediate mental health counseling.
              </p>
              <p className="text-[10px] text-brand-blue-500 font-mono">
                Administered by Gallagher Affinity Insurance Services, Inc.
              </p>
            </div>

            {/* Column 2: Program Contacts */}
            <div className="md:col-span-4 space-y-3 text-xs">
              <h4 className="font-display font-semibold text-white uppercase tracking-wider text-[11px]">
                Support Helpline Directory
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-brand-blue-900/60 pb-1">
                  <span>General Support:</span>
                  <a href={`tel:${CONTACT_INFO.customerService}`} className="font-mono text-white hover:text-brand-gold-400">
                    {CONTACT_INFO.customerService}
                  </a>
                </div>
                <div className="flex justify-between border-b border-brand-blue-900/60 pb-1">
                  <span>Direct Rx & Psychiatrist:</span>
                  <a href={`tel:${CONTACT_INFO.konnectmdDirect}`} className="font-mono text-white hover:text-brand-gold-400">
                    {CONTACT_INFO.konnectmdDirect}
                  </a>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Billing and Cancellation:</span>
                  <a href={`tel:${CONTACT_INFO.billingAndCancellations}`} className="font-mono text-white hover:text-brand-gold-400">
                    {CONTACT_INFO.billingAndCancellations}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Resources & Verification status */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-display font-semibold text-white uppercase tracking-wider text-[11px]">
                Official Digital Resources
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-blue-400">
                <li>
                  <a href={`https://${CONTACT_INFO.portalUrl}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold-400 hover:underline">
                    portal.konnectmd.com (Online Portal)
                  </a>
                </li>
                <li>
                  <a href={`https://${CONTACT_INFO.websiteUrl}`} target="_blank" rel="noreferrer" className="hover:text-brand-gold-400 hover:underline">
                    www.findbestbenefits.com (Provider Search)
                  </a>
                </li>
                <li>
                  <a href="https://konnectmd.com/rx" target="_blank" rel="noreferrer" className="hover:text-brand-gold-400 hover:underline">
                    konnectmd.com/rx (Rx Drug Formulary)
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded-lg w-fit text-[11px] text-brand-blue-200">
                <PhoneCall className="w-3.5 h-3.5 text-brand-gold-400" />
                <span>Call hours: Weekdays 8 AM - 5 PM CT</span>
              </div>
            </div>

          </div>

          {/* Legal Fine Print Strip */}
          <div className="pt-8 text-center text-[10px] leading-relaxed text-brand-blue-500 space-y-2">
            <p className="max-w-4xl mx-auto font-medium">
              <strong>Plan Disclosures:</strong> This plan is NOT insurance. This is a discount card membership. You are solely responsible for payment at the time of your medical, dental, or chiropractic appointments. Gallagher Affinity Insurance Services, Inc. is the registered Discount Plan Organization (DPO) representing this program nationwide.
            </p>
            <p>© 2026 KonnectMD Plus Program. All rights reserved. Registered, licensed, and administered in the United States.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
