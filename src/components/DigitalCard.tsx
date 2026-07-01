import { useState, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { CreditCard, RotateCw, Printer, Download, User, Calendar, ShieldCheck, HeartPulse } from 'lucide-react';
import { MemberInfo } from '../types';

interface DigitalCardProps {
  memberInfo: MemberInfo;
  onUpdateName: (name: string) => void;
}

export default function DigitalCard({ memberInfo, onUpdateName }: DigitalCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tempName, setTempName] = useState(memberInfo.fullName);
  const [isSaved, setIsSaved] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTempName(value);
    onUpdateName(value || 'Valued Member');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveSimulated = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  return (
    <div id="digital-card-container" className="flex flex-col items-center">
      {/* Interactive Card Controls */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-brand-blue-100 p-6 shadow-sm mb-6">
        <h3 className="font-display font-semibold text-lg text-brand-blue-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-brand-gold-500" />
          Personalize Your Digital ID Card
        </h3>
        <p className="text-sm text-brand-blue-500 mb-4">
          Enter your name below to instantly update your digital KonnectMD Plus ID card. Use this card to claim benefits at pharmacies, dental offices, and clinics.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="member-name-input" className="block text-xs font-medium text-brand-blue-600 mb-1">
              Member Full Name
            </label>
            <input
              id="member-name-input"
              type="text"
              value={tempName}
              onChange={handleNameChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 border border-brand-blue-200 rounded-lg text-brand-blue-900 placeholder-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:border-brand-gold-400 font-sans transition-all duration-200"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-700 font-medium text-sm rounded-lg transition-colors border border-brand-blue-100 cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              Flip Card
            </button>
            <button
              onClick={handleSaveSimulated}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {isSaved ? 'Saved!' : 'Download Card'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center p-2 bg-brand-blue-900 hover:bg-brand-blue-950 text-white rounded-lg transition-colors cursor-pointer"
              title="Print Membership Details"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Card Flip Container */}
      <div className="relative w-full max-w-md h-64 [perspective:1000px] mb-4">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative w-full h-full [transform-style:preserve-3d] shadow-xl rounded-2xl cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] bg-brand-blue-900 text-white p-6 flex flex-col justify-between overflow-hidden border border-brand-blue-950">
            {/* Glossy overlay effects */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br from-brand-gold-200/20 to-transparent blur-2xl" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-gradient-to-br from-brand-blue-500/20 to-transparent blur-2xl" />
            
            {/* Header */}
            <div className="flex justify-between items-start z-10">
              <div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-6 h-6 text-brand-gold-400" />
                  <span className="font-display font-bold tracking-wider text-xl">
                    Konnect<span className="text-brand-gold-400">MD</span>
                  </span>
                  <span className="bg-brand-gold-400/20 text-brand-gold-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-brand-gold-400/30 uppercase tracking-widest ml-1">
                    Plus
                  </span>
                </div>
                <p className="text-[10px] font-sans tracking-widest text-brand-blue-200 uppercase mt-0.5">
                  Affordable Healthcare Benefits
                </p>
              </div>
              <div className="text-right">
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold px-2 py-1 rounded-full border border-emerald-400/20 uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {memberInfo.status}
                </span>
              </div>
            </div>

            {/* Middle: Member Details */}
            <div className="my-auto z-10 space-y-3">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Member Name</p>
                <p className="font-display font-medium text-lg leading-tight tracking-wide truncate max-w-xs text-white">
                  {memberInfo.fullName}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Member ID</p>
                  <p className="font-mono text-sm tracking-wider font-semibold text-brand-gold-300">
                    {memberInfo.memberId}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">Group Number</p>
                  <p className="font-mono text-sm tracking-wider font-semibold text-brand-gold-300">
                    {memberInfo.groupNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end border-t border-brand-blue-800 pt-3 z-10 text-[10px] text-brand-blue-200">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-gold-400" />
                <span>Effective Date: <strong>{memberInfo.effectiveDate}</strong></span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-400" />
                <span className="font-semibold uppercase tracking-wider text-brand-gold-400 text-[9px]">
                  Discount Program
                </span>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 w-full h-full rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white text-brand-blue-900 p-5 flex flex-col justify-between border border-brand-blue-200 shadow-xl overflow-hidden">
            {/* Magnetic Stripe representation */}
            <div className="absolute top-4 left-0 right-0 h-9 bg-brand-blue-950/90 z-0" />
            
            {/* Content offset for stripe */}
            <div className="mt-10 z-10 flex-1 flex flex-col justify-between">
              {/* Network logos */}
              <div className="grid grid-cols-3 gap-2 py-1.5 px-2 bg-brand-blue-50/70 rounded-lg border border-brand-blue-100 text-[9px] text-center">
                <div>
                  <p className="text-[7px] uppercase font-mono text-brand-blue-400">Dental Access</p>
                  <p className="font-semibold text-brand-blue-800 leading-none mt-0.5">Aetna Dental</p>
                </div>
                <div className="border-x border-brand-blue-200">
                  <p className="text-[7px] uppercase font-mono text-brand-blue-400">Vision Network</p>
                  <p className="font-semibold text-brand-blue-800 leading-none mt-0.5">Coast to Coast</p>
                </div>
                <div>
                  <p className="text-[7px] uppercase font-mono text-brand-blue-400">Chiropractic</p>
                  <p className="font-semibold text-brand-blue-800 leading-none mt-0.5">Uni-Care</p>
                </div>
              </div>

              {/* Service Phone Numbers */}
              <div className="space-y-1.5 my-1.5 text-[9px]">
                <div className="flex justify-between border-b border-brand-blue-50 pb-0.5">
                  <span className="font-medium text-brand-blue-600">Customer Support:</span>
                  <span className="font-mono font-bold text-brand-blue-900">1-866-770-5259</span>
                </div>
                <div className="flex justify-between border-b border-brand-blue-50 pb-0.5">
                  <span className="font-medium text-brand-blue-600">KonnectMD Direct Helpline:</span>
                  <span className="font-mono font-bold text-brand-blue-900">877-273-3932</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-brand-blue-600">Member Portal URL:</span>
                  <span className="font-mono font-bold text-brand-blue-900">portal.konnectmd.com</span>
                </div>
              </div>

              {/* Disclosure disclaimer */}
              <div className="border-t border-brand-blue-100 pt-2 text-[7px] leading-relaxed text-brand-blue-500 text-center">
                <strong>THIS IS NOT INSURANCE.</strong> It is a discount benefits program. Administered by Gallagher Affinity. Present this card at participating dentists, pharmacies, and clinics to receive scheduled discounts.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-xs text-brand-blue-400 flex items-center gap-1">
        <RotateCw className="w-3.5 h-3.5" />
        Click the card above to toggle front / back
      </p>
    </div>
  );
}
