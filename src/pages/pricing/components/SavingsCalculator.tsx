import { useState } from 'react';

interface SavingsCalculatorProps {
  onAnalysis: () => void;
}

export default function SavingsCalculator({ onAnalysis }: SavingsCalculatorProps) {
  const [rent, setRent] = useState(2000);

  const threeP = Math.min(175, rent * 0.08);
  const traditional = rent * 0.1;
  const monthlySavings = Math.round(traditional - threeP);
  const annualSavings = monthlySavings * 12;
  const threePDisplay = rent * 0.08 <= 175 ? `$${Math.round(rent * 0.08)}/mo (8%)` : '$175/mo (flat)';

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Interactive Calculator</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-3">
            See Your Exact Savings
          </h2>
          <p className="text-cream/55 text-base">Enter your monthly rent and see exactly how much you&apos;d save with Three Pillars vs. a traditional 10% manager.</p>
        </div>

        <div className="bg-cream rounded-2xl p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-navy text-sm font-semibold">Monthly Rent Amount</label>
              <span className="font-display text-3xl font-bold text-navy">${rent.toLocaleString()}<span className="text-base text-charcoal-light font-normal">/mo</span></span>
            </div>
            <input
              type="range"
              min={800}
              max={5000}
              step={50}
              value={rent}
              onChange={(e) => setRent(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: '#C9A961' }}
            />
            <div className="flex justify-between text-xs text-charcoal-light mt-1">
              <span>$800</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="text-center p-5 bg-cream-dark border border-gold/20 rounded-xl">
              <p className="text-charcoal-light text-xs font-semibold uppercase tracking-wide mb-2">Traditional Manager</p>
              <p className="font-display text-3xl font-bold text-red-500">${Math.round(traditional)}<span className="text-base text-charcoal-light font-normal">/mo</span></p>
              <p className="text-charcoal-light text-xs mt-1">at 10%</p>
            </div>
            <div className="text-center p-5 bg-gold/10 border border-gold/35 rounded-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">Three Pillars</div>
              <p className="text-charcoal-light text-xs font-semibold uppercase tracking-wide mb-2 mt-1">Your Fee</p>
              <p className="font-display text-3xl font-bold text-navy">${Math.round(threeP)}<span className="text-base text-charcoal-light font-normal">/mo</span></p>
              <p className="text-gold text-xs mt-1 font-semibold">{threePDisplay}</p>
            </div>
            <div className="text-center p-5 bg-cream-dark border border-gold/20 rounded-xl">
              <p className="text-charcoal-light text-xs font-semibold uppercase tracking-wide mb-2">You Save</p>
              <p className="font-display text-3xl font-bold text-green-600">${monthlySavings}<span className="text-base text-charcoal-light font-normal">/mo</span></p>
              <p className="text-green-600 text-xs font-semibold mt-1">${annualSavings.toLocaleString()}/year</p>
            </div>
          </div>

          {/* How it works note */}
          <div className="bg-navy/5 border border-gold/20 rounded-xl p-4 text-center mb-6">
            <p className="text-navy text-sm">
              At <strong>${rent.toLocaleString()}/month</strong>: {rent * 0.08 <= 175
                ? `8% = $${Math.round(rent * 0.08)}, which is less than $175 — so you pay $${Math.round(rent * 0.08)}/month.`
                : `8% = $${Math.round(rent * 0.08)}, which is more than $175 — so you pay the flat $175/month.`
              }
            </p>
          </div>

          <button
            onClick={onAnalysis}
            className="w-full py-4 bg-navy text-cream font-semibold text-sm rounded-md hover:bg-navy-light transition-colors cursor-pointer whitespace-nowrap">
            Get My Free Property Analysis →
          </button>
        </div>
      </div>
    </section>
  );
}
