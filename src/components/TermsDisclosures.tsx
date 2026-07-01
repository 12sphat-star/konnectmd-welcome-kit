import { useState } from 'react';
import { FAQS_DATA } from '../data/benefitsData';
import { ShieldAlert, Trash2, HelpCircle, Scale, MessageSquare, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function TermsDisclosures() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openPolicySection, setOpenPolicySection] = useState<string | null>('disclaimer');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const togglePolicy = (section: string) => {
    setOpenPolicySection(openPolicySection === section ? null : section);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Left Column: Interactive FAQs */}
      <div className="lg:col-span-6 space-y-6">
        <div>
          <h3 className="font-display font-bold text-xl text-brand-blue-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-gold-500" />
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-brand-blue-500 mt-1">
            Find immediate answers to standard questions about your KonnectMD Plus membership benefits.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-brand-blue-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-brand-blue-50/30 transition-colors cursor-pointer"
                >
                  <div className="flex gap-2.5 items-center">
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100">
                      {faq.category}
                    </span>
                    <span className="font-display font-semibold text-sm md:text-base text-brand-blue-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brand-blue-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-blue-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-brand-blue-600 leading-relaxed border-t border-brand-blue-50 bg-brand-blue-50/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Terms, Conditions, Disclosures Accordion */}
      <div className="lg:col-span-6 space-y-6">
        <div>
          <h3 className="font-display font-bold text-xl text-brand-blue-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-brand-gold-500" />
            Terms, Conditions & Disclosures
          </h3>
          <p className="text-sm text-brand-blue-500 mt-1">
            Official cardholder agreements, disclosures, and refund policies.
          </p>
        </div>

        <div className="space-y-4">
          
          {/* 1. Mandatory ACA Disclosure (Always High Visibility) */}
          <div className="bg-brand-gold-50/50 border border-brand-gold-300 rounded-2xl p-5 space-y-3">
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-brand-gold-500 text-white rounded-lg shrink-0 mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-blue-900 text-sm md:text-base">
                  Required ACA Disclosure
                </h4>
                <p className="text-xs text-brand-blue-800 font-semibold mt-0.5">
                  THIS PLAN IS NOT INSURANCE
                </p>
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-brand-blue-700 font-medium">
              This is a discount membership program. This agreement is with Gallagher Affinity Insurance Services, Inc. (a registered 'discount plan organization' / DPO). It is effective on the date of acceptance of your application. This plan does NOT meet minimum creditable coverage requirements under the Affordable Care Act (ACA). It does not meet M.G.L. c. 111M and 956 CMR 5.00. This is not a Medicare prescription drug plan. Discounts are not available in Maryland. Licensed DPO: Gallagher Affinity Insurance Services, Inc., 1-866-770-5259.
            </p>
          </div>

          {/* Collapsible details */}
          <div className="space-y-3">
            
            {/* Important Terms */}
            <div className="bg-white border border-brand-blue-100 rounded-xl overflow-hidden">
              <button
                onClick={() => togglePolicy('terms')}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-brand-blue-50/30 transition-colors cursor-pointer"
              >
                <span className="font-display font-semibold text-sm md:text-base text-brand-blue-900 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-gold-500" />
                  Key Membership Terms
                </span>
                {openPolicySection === 'terms' ? (
                  <ChevronUp className="w-4 h-4 text-brand-blue-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-blue-400" />
                )}
              </button>
              {openPolicySection === 'terms' && (
                <div className="px-5 pb-5 pt-1 text-xs text-brand-blue-600 leading-relaxed border-t border-brand-blue-50 space-y-2">
                  <p>• Providers are subject to change without notice. Always verify participation with your chosen provider when scheduling appointments.</p>
                  <p>• No portion of any provider's fee will be reimbursed or paid by the DPO. You are solely and fully responsible for payment at the time of service.</p>
                  <p>• Program discounts cannot be used in conjunction with any other insurance, Medicare, or other network-based discount program.</p>
                  <p>• Membership is non-transferable. However, family/household memberships cover all individuals residing in your primary residence.</p>
                </div>
              )}
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white border border-brand-blue-100 rounded-xl overflow-hidden">
              <button
                onClick={() => togglePolicy('cancel')}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-brand-blue-50/30 transition-colors cursor-pointer"
              >
                <span className="font-display font-semibold text-sm md:text-base text-brand-blue-900 flex items-center gap-2.5">
                  <Trash2 className="w-4 h-4 text-red-500" />
                  Cancellation & Refund Guarantee
                </span>
                {openPolicySection === 'cancel' ? (
                  <ChevronUp className="w-4 h-4 text-brand-blue-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-blue-400" />
                )}
              </button>
              {openPolicySection === 'cancel' && (
                <div className="px-5 pb-5 pt-1 text-xs text-brand-blue-600 leading-relaxed border-t border-brand-blue-50 space-y-2">
                  <p>You may cancel your membership at any time without penalty.</p>
                  <p className="font-semibold text-brand-blue-800">30-Day Money-Back Guarantee:</p>
                  <p>You have the absolute right to cancel this plan within 30 days of your effective activation date for a full refund of any fees paid. Refund disbursements are processed within 30 days of receiving your cancellation request.</p>
                  <p className="font-semibold text-brand-blue-800">How to Submit a Request:</p>
                  <p className="pl-2 border-l-2 border-brand-blue-200">
                    • Online Form: <strong>konnectmd.com/contact</strong><br />
                    • Phone: <strong>844-563-2863</strong><br />
                    • Mail: <strong>KonnectMD, 9520 North May Ave #231, Oklahoma City, OK 73120</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Complaint Procedure */}
            <div className="bg-white border border-brand-blue-100 rounded-xl overflow-hidden">
              <button
                onClick={() => togglePolicy('complaints')}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-brand-blue-50/30 transition-colors cursor-pointer"
              >
                <span className="font-display font-semibold text-sm md:text-base text-brand-blue-900 flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-brand-blue-600" />
                  State Complaint Procedures
                </span>
                {openPolicySection === 'complaints' ? (
                  <ChevronUp className="w-4 h-4 text-brand-blue-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-brand-blue-400" />
                )}
              </button>
              {openPolicySection === 'complaints' && (
                <div className="px-5 pb-5 pt-1 text-xs text-brand-blue-600 leading-relaxed border-t border-brand-blue-50 space-y-2">
                  <p>Complaints may be filed directly with Gallagher Affinity Insurance Services, Inc., 2850 Golf Rd., Rolling Meadows, IL 60008. All submissions are formally acknowledged within five (5) business days and resolved within thirty (30) calendar days.</p>
                  <p>Contact <strong>1-800-308-0374</strong> to request a state complaint contact list or specialized state filings information.</p>
                  <p><strong>Governing Law:</strong> This cardholder agreement is governed by the laws of the State of Illinois. Disputes are resolved via binding, non-appealable private arbitration per the Rules of the American Arbitration Association (AAA) in Chicago, IL.</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
