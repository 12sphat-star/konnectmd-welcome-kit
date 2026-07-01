import { useState, ComponentType } from 'react';
import { Benefit } from '../types';
import { BENEFITS_DATA } from '../data/benefitsData';
import {
  Search, Pill, Smile, Eye, MessageSquareText, Stethoscope, FlaskConical, Activity, Flame,
  Phone, Globe, ClipboardCheck, ArrowRight, Table, HelpCircle, FileText, CheckCircle2, ChevronRight
} from 'lucide-react';

const ICON_MAP: Record<string, ComponentType<any>> = {
  Pill,
  Smile,
  Eye,
  MessageSquareText,
  Stethoscope,
  FlaskConical,
  Activity,
  Flame,
};

export default function BenefitsExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBenefitId, setSelectedBenefitId] = useState<string>('rx');

  const filteredBenefits = BENEFITS_DATA.filter(benefit => {
    const query = searchQuery.toLowerCase();
    const matchesName = benefit.name.toLowerCase().includes(query);
    const matchesDesc = benefit.description.toLowerCase().includes(query);
    const matchesShort = benefit.shortDescription.toLowerCase().includes(query);
    const matchesKeyPoints = benefit.keyPoints.some(pt => pt.toLowerCase().includes(query));
    
    const matchesSavings = benefit.savingsTable?.some(item => 
      item.product.toLowerCase().includes(query)
    );
    
    const matchesCategories = benefit.conditionsOrCategories?.some(cat => 
      cat.toLowerCase().includes(query)
    );

    return matchesName || matchesDesc || matchesShort || matchesKeyPoints || matchesSavings || matchesCategories;
  });

  const selectedBenefit = BENEFITS_DATA.find(b => b.id === selectedBenefitId) || BENEFITS_DATA[0];

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-brand-blue-100 shadow-xs">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-blue-400" />
          <input
            type="text"
            placeholder="Search medications, cleanings, vision, tests, or networks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-brand-blue-200 rounded-lg text-sm text-brand-blue-900 placeholder-brand-blue-400 focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:border-brand-gold-400"
          />
        </div>
        <p className="text-xs text-brand-blue-500 font-sans">
          Showing <strong>{filteredBenefits.length}</strong> of <strong>{BENEFITS_DATA.length}</strong> benefits
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: Directory list of benefits */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-2.5">
          <div className="hidden lg:block mb-2 font-display font-semibold text-xs text-brand-blue-400 uppercase tracking-widest pl-2">
            Membership Benefits Index
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {filteredBenefits.map((benefit) => {
              const IconComp = ICON_MAP[benefit.iconName] || Pill;
              const isSelected = benefit.id === selectedBenefit.id;
              
              return (
                <button
                  key={benefit.id}
                  onClick={() => setSelectedBenefitId(benefit.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer group ${
                    isSelected
                      ? 'bg-brand-blue-900 border-brand-blue-950 text-white shadow-md'
                      : 'bg-white border-brand-blue-100 hover:border-brand-blue-200 text-brand-blue-900 hover:bg-brand-blue-50/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-brand-gold-500 text-white' : 'bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-100'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-semibold text-sm md:text-base leading-snug group-hover:text-brand-gold-500 transition-colors">
                      {benefit.name}
                    </h4>
                    <p className={`text-xs mt-1 truncate ${isSelected ? 'text-brand-blue-200' : 'text-brand-blue-500'}`}>
                      {benefit.shortDescription}
                    </p>
                    
                    {/* Tiny badges to show network names or codes */}
                    {benefit.networks && (
                      <span className={`inline-block text-[9px] font-mono px-1.5 py-0.5 rounded mt-1.5 font-medium ${
                        isSelected ? 'bg-white/10 text-brand-gold-300' : 'bg-brand-blue-50 text-brand-blue-600'
                      }`}>
                        {benefit.networks}
                      </span>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                    isSelected ? 'text-brand-gold-400 translate-x-1' : 'text-brand-blue-300 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
            
            {filteredBenefits.length === 0 && (
              <div className="col-span-full py-12 text-center bg-white border border-dashed border-brand-blue-200 rounded-2xl">
                <p className="text-sm font-semibold text-brand-blue-900">No benefits match your search</p>
                <p className="text-xs text-brand-blue-500 mt-1">Try clearing your filters or search keywords</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs bg-brand-blue-900 text-white px-3 py-1.5 rounded-lg hover:bg-brand-blue-950 font-medium cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Deep-dive Detail of Selected Benefit */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="bg-white rounded-2xl border border-brand-blue-100 p-6 md:p-8 shadow-sm space-y-6 md:space-y-8">
            
            {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-6 border-b border-brand-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold-500 text-white rounded-xl shadow-sm mt-1 shrink-0">
                  {(() => {
                    const IconComp = ICON_MAP[selectedBenefit.iconName] || Pill;
                    return <IconComp className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-brand-blue-900 leading-none">
                    {selectedBenefit.name}
                  </h3>
                  <p className="text-brand-gold-600 font-medium text-sm mt-1 flex items-center gap-1">
                    {selectedBenefit.shortDescription}
                  </p>
                </div>
              </div>

              {/* Instant Call / Actions */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {selectedBenefit.phone && (
                  <a
                    href={`tel:${selectedBenefit.phone}`}
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-brand-blue-900 hover:bg-brand-blue-950 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer border border-brand-blue-950 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call {selectedBenefit.phone}
                  </a>
                )}
                {selectedBenefit.website && (
                  <a
                    href={`https://${selectedBenefit.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <Globe className="w-3.5 h-3.5 text-brand-gold-500" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>

            {/* Content: 2 Column Split for Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              
              {/* Left detail: Description, Categories, Tables */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h4 className="font-display font-semibold text-xs text-brand-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    About This Benefit
                  </h4>
                  <p className="text-brand-blue-700 text-sm leading-relaxed">
                    {selectedBenefit.description}
                  </p>
                </div>

                {/* Categories covered */}
                {selectedBenefit.conditionsOrCategories && (
                  <div>
                    <h4 className="font-display font-semibold text-xs text-brand-blue-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-500" />
                      What is Included / Covered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedBenefit.conditionsOrCategories.map((cat, i) => (
                        <div key={i} className="flex items-start gap-2 bg-brand-blue-50/50 border border-brand-blue-100/50 rounded-lg p-2.5 text-xs text-brand-blue-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-1.5" />
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Bullet Summary points */}
                {selectedBenefit.keyPoints && (
                  <div>
                    <h4 className="font-display font-semibold text-xs text-brand-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-brand-gold-500" />
                      Program Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-brand-blue-600">
                      {selectedBenefit.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-gold-500 font-bold shrink-0">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Savings Table (if available) */}
                {selectedBenefit.savingsTable && (
                  <div>
                    <h4 className="font-display font-semibold text-xs text-brand-blue-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Table className="w-3.5 h-3.5 text-brand-gold-500" />
                      Sample Member Savings
                    </h4>
                    <div className="overflow-x-auto border border-brand-blue-100 rounded-xl">
                      <table className="w-full text-left text-xs font-sans">
                        <thead className="bg-brand-blue-50 text-brand-blue-800 font-semibold uppercase tracking-wider text-[10px] border-b border-brand-blue-100">
                          <tr>
                            <th className="px-3.5 py-2.5">Product / Service</th>
                            <th className="px-3.5 py-2.5 text-right">Avg Price</th>
                            <th className="px-3.5 py-2.5 text-right text-brand-gold-700">You Pay</th>
                            <th className="px-3.5 py-2.5 text-right text-emerald-600">Savings</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-blue-100/50 text-brand-blue-900 font-medium">
                          {selectedBenefit.savingsTable.map((item, i) => (
                            <tr key={i} className="hover:bg-brand-blue-50/20">
                              <td className="px-3.5 py-2.5">{item.product}</td>
                              <td className="px-3.5 py-2.5 text-right font-mono text-brand-blue-500">${item.avgPrice.toFixed(2)}</td>
                              <td className="px-3.5 py-2.5 text-right font-mono text-brand-gold-600 font-bold bg-brand-gold-50/30">${item.youPay.toFixed(2)}</td>
                              <td className="px-3.5 py-2.5 text-right font-mono text-emerald-600 font-bold">
                                ${item.savings.toFixed(2)}
                                {item.percentSaved && (
                                  <span className="text-[10px] font-sans font-normal ml-1 bg-emerald-50 text-emerald-700 px-1 py-0.2 rounded">
                                    -{item.percentSaved}%
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Right detail: Step-by-Step Activation Checklist */}
              <div className="md:col-span-5 bg-brand-blue-50/70 border border-brand-blue-100 rounded-2xl p-5 md:p-6 space-y-4">
                <h4 className="font-display font-semibold text-xs text-brand-blue-900 uppercase tracking-widest flex items-center gap-1.5 pb-2 border-b border-brand-blue-100">
                  <ClipboardCheck className="w-4 h-4 text-brand-gold-500" />
                  How to Use This Benefit
                </h4>
                
                <div className="space-y-4">
                  {selectedBenefit.howToUse.map((step, index) => (
                    <div key={index} className="flex gap-3 items-start group">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-gold-500 transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-xs md:text-[13px] leading-relaxed text-brand-blue-800 font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Network / Code callout info box */}
                {(selectedBenefit.networks || selectedBenefit.code || selectedBenefit.promoCode) && (
                  <div className="mt-6 pt-4 border-t border-brand-blue-200/60 space-y-2">
                    {selectedBenefit.networks && (
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-blue-500 font-medium">Network Partner:</span>
                        <span className="font-bold text-brand-blue-900">{selectedBenefit.networks}</span>
                      </div>
                    )}
                    {selectedBenefit.code && (
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-blue-500 font-medium">Reference Code:</span>
                        <span className="font-mono font-bold bg-brand-blue-100 text-brand-blue-800 px-1.5 py-0.5 rounded text-[11px] select-all">
                          {selectedBenefit.code}
                        </span>
                      </div>
                    )}
                    {selectedBenefit.promoCode && (
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-blue-500 font-medium">Promo Coupon:</span>
                        <span className="font-mono font-bold bg-brand-gold-100 text-brand-gold-800 px-1.5 py-0.5 rounded text-[11px] select-all">
                          {selectedBenefit.promoCode}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {selectedBenefit.note && (
                  <div className="text-[10px] text-brand-blue-500 italic mt-4 pt-3 border-t border-brand-blue-200/50 leading-relaxed">
                    {selectedBenefit.note}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
