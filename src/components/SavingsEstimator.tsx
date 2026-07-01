import { useState } from 'react';
import { Calculator, Plus, Minus, Landmark, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface EstimatorService {
  id: string;
  category: 'Dental' | 'Vision' | 'Chiropractic';
  name: string;
  avgPrice: number;
  youPay: number;
  savings: number;
}

const ESTIMATOR_SERVICES: EstimatorService[] = [
  // Dental
  { id: 'dent-1', category: 'Dental', name: 'Adult Cleaning & Polish', avgPrice: 111, youPay: 67, savings: 44 },
  { id: 'dent-2', category: 'Dental', name: 'Child Cleaning & Polish', avgPrice: 86, youPay: 52, savings: 34 },
  { id: 'dent-3', category: 'Dental', name: 'Complete Dental X-rays', avgPrice: 165, youPay: 99, savings: 66 },
  { id: 'dent-4', category: 'Dental', name: 'Root Canal (Anterior)', avgPrice: 951, youPay: 571, savings: 380 },
  { id: 'dent-5', category: 'Dental', name: 'Complete Upper Denture', avgPrice: 1616, youPay: 970, savings: 646 },
  // Vision
  { id: 'vis-1', category: 'Vision', name: 'Regular Eye Examination', avgPrice: 91.67, youPay: 79.25, savings: 12.42 },
  { id: 'vis-2', category: 'Vision', name: 'Single Vision Lenses', avgPrice: 95.67, youPay: 70.43, savings: 25.24 },
  { id: 'vis-3', category: 'Vision', name: 'Progressive Lenses', avgPrice: 259.33, youPay: 191.53, savings: 67.80 },
  { id: 'vis-4', category: 'Vision', name: 'Designer Eyeglass Frames', avgPrice: 194.33, youPay: 144.20, savings: 50.13 },
  // Chiropractic
  { id: 'chiro-1', category: 'Chiropractic', name: 'Initial Consultation', avgPrice: 60, youPay: 0, savings: 60 },
  { id: 'chiro-2', category: 'Chiropractic', name: 'Initial Examination', avgPrice: 115, youPay: 35, savings: 80 },
  { id: 'chiro-3', category: 'Chiropractic', name: 'X-Ray (Full Spine)', avgPrice: 200, youPay: 150, savings: 50 },
  { id: 'chiro-4', category: 'Chiropractic', name: 'Electrical Stimulation', avgPrice: 27, youPay: 21.60, savings: 5.40 },
];

export default function SavingsEstimator() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'dent-1': 2, // Default with 2 cleanings
    'dent-3': 1, // 1 set of xrays
    'vis-1': 2, // 2 eye exams
    'vis-4': 1, // 1 designer frame
    'chiro-1': 1, // 1 consultation
  });

  const [activeCategory, setActiveCategory] = useState<'All' | 'Dental' | 'Vision' | 'Chiropractic'>('All');

  const updateQuantity = (id: string, amount: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + amount);
      return { ...prev, [id]: next };
    });
  };

  const resetEstimator = () => {
    setQuantities({});
  };

  // Calculations
  let totalAvgPrice = 0;
  let totalYouPay = 0;
  let totalSavings = 0;
  let selectedItemsCount = 0;

  ESTIMATOR_SERVICES.forEach(service => {
    const qty = quantities[service.id] || 0;
    if (qty > 0) {
      totalAvgPrice += service.avgPrice * qty;
      totalYouPay += service.youPay * qty;
      totalSavings += service.savings * qty;
      selectedItemsCount += qty;
    }
  });

  const savingsPercentage = totalAvgPrice > 0 ? (totalSavings / totalAvgPrice) * 100 : 0;

  const filteredServices = ESTIMATOR_SERVICES.filter(service => {
    if (activeCategory === 'All') return true;
    return service.category === activeCategory;
  });

  return (
    <div className="bg-white rounded-2xl border border-brand-blue-100 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-brand-blue-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold-50 border border-brand-gold-200 text-brand-gold-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Value Calculator
          </span>
          <h2 className="font-display font-bold text-2xl text-brand-blue-900 leading-tight">
            Estimate Your Annual Household Savings
          </h2>
          <p className="text-sm text-brand-blue-500 mt-1">
            Compare estimated national average healthcare costs with your special discounted rates.
          </p>
        </div>
        
        {selectedItemsCount > 0 && (
          <button
            onClick={resetEstimator}
            className="text-xs font-medium text-brand-blue-400 hover:text-brand-blue-600 transition-colors cursor-pointer underline underline-offset-4"
          >
            Clear Selected
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Services List */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Badges */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-brand-blue-50/70 rounded-lg border border-brand-blue-100/50 w-fit">
            {(['All', 'Dental', 'Vision', 'Chiropractic'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-blue-900 text-white shadow-xs'
                    : 'text-brand-blue-600 hover:text-brand-blue-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredServices.map(service => {
              const qty = quantities[service.id] || 0;
              return (
                <div
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    qty > 0
                      ? 'border-brand-gold-300 bg-brand-gold-50/30 shadow-xs'
                      : 'border-brand-blue-100 bg-white hover:border-brand-blue-200'
                  }`}
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        service.category === 'Dental'
                          ? 'bg-teal-50 text-teal-700 border border-teal-100'
                          : service.category === 'Vision'
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {service.category}
                      </span>
                      {qty > 0 && (
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold-500 text-white text-[10px] font-bold">
                          {qty}x
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-semibold text-brand-blue-900 mt-1 text-sm md:text-base">
                      {service.name}
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-brand-blue-500 font-mono">
                      <span>Avg Price: <strong className="text-brand-blue-700">${service.avgPrice.toFixed(2)}</strong></span>
                      <span className="text-brand-gold-600 font-sans">You Pay: <strong className="font-mono font-bold">${service.youPay.toFixed(2)}</strong></span>
                      <span className="text-emerald-600 font-sans">Save: <strong className="font-mono font-bold">${service.savings.toFixed(2)}</strong></span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    {qty > 0 ? (
                      <>
                        <button
                          onClick={() => updateQuantity(service.id, -1)}
                          className="w-8 h-8 rounded-full border border-brand-blue-200 bg-white text-brand-blue-600 hover:bg-brand-blue-50 flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-4 text-center font-mono font-bold text-brand-blue-900 text-sm">
                          {qty}
                        </span>
                      </>
                    ) : null}
                    <button
                      onClick={() => updateQuantity(service.id, 1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        qty > 0
                          ? 'bg-brand-blue-900 hover:bg-brand-blue-950 text-white'
                          : 'border border-brand-blue-200 hover:border-brand-blue-300 bg-white text-brand-blue-600 hover:bg-brand-blue-50'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visualizing Savings */}
        <div className="lg:col-span-5">
          <div className="bg-brand-blue-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden border border-brand-blue-950">
            {/* Ambient Background decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="font-display font-semibold text-lg text-brand-gold-300 flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-brand-gold-400" />
                Est. Household Benefits
              </h3>

              {selectedItemsCount === 0 ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <Calculator className="w-6 h-6 text-brand-gold-400" />
                  </div>
                  <p className="font-display font-medium text-sm text-brand-blue-200">
                    Your savings bucket is empty
                  </p>
                  <p className="text-xs text-brand-blue-300/80 mt-1 max-w-xs mx-auto">
                    Click the <span className="bg-white/20 px-1 py-0.5 rounded font-bold text-white">+</span> buttons on any benefit service on the left to estimate your customized family benefits.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-brand-blue-300">National Avg</p>
                      <p className="font-mono text-lg font-bold mt-1 text-white">${totalAvgPrice.toFixed(2)}</p>
                    </div>
                    <div className="bg-brand-gold-400/10 border border-brand-gold-400/20 p-3 rounded-xl">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-brand-gold-300">Your Special Price</p>
                      <p className="font-mono text-lg font-bold mt-1 text-brand-gold-300">${totalYouPay.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Total Savings Hero */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute right-3 top-3">
                      <Check className="w-8 h-8 text-emerald-400/20" />
                    </div>
                    <p className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-semibold">Net Annual Savings</p>
                    <p className="font-mono text-3xl font-extrabold mt-1 text-emerald-400">
                      ${totalSavings.toFixed(2)}
                    </p>
                    <p className="text-[11px] text-emerald-300/90 mt-1 flex items-center gap-1">
                      <span>An average discount of <strong>{savingsPercentage.toFixed(0)}%</strong> off retail.</span>
                    </p>
                  </div>

                  {/* Simple CSS-based bar chart */}
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-xs text-brand-blue-200">
                      <span>Savings Progress</span>
                      <span className="font-mono font-semibold text-brand-gold-300">{savingsPercentage.toFixed(0)}% Saved</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-brand-gold-500 to-emerald-400 transition-all duration-500 rounded-full"
                        style={{ width: `${savingsPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom: KonnectMD Plus standard card reminder */}
            {selectedItemsCount > 0 && (
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-brand-blue-300 flex items-start gap-2">
                <Landmark className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>
                  This calculation represents estimated average procedures. Your actual costs will vary, but you are guaranteed the negotiated schedule discounts when using <strong>Aetna Dental Access®</strong>, <strong>Coast to Coast Vision™</strong>, or <strong>Uni-Care</strong> providers.
                </span>
              </div>
            )}
            
            {/* Security disclaimer info */}
            {selectedItemsCount === 0 && (
              <div className="mt-12 bg-white/5 rounded-xl p-3 border border-white/5 text-[11px] text-brand-blue-200 flex gap-2">
                <ShieldAlert className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>
                  KonnectMD is <strong>not insurance</strong>, but a powerful discount card program. These figures represent real provider schedules. Keep this tool handy to compare procedures before your next appointment!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
