interface PricingSectionProps {
  onAnalysis: () => void;
}

export default function PricingSection({ onAnalysis }: PricingSectionProps) {
  const included = [
    'Full tenant screening & placement',
    'Rent collection & disbursement',
    'Maintenance coordination',
    'Monthly financial statements',
    'Lease drafting & renewals',
    '24/7 Owner portal access',
    'Move-in / move-out inspections',
    'Annual property inspection reports',
  ];

  const traditional = [
    '10%+ management fee (often 12%)',
    'Tenant placement / leasing fee',
    'Lease renewal fee ($250–$400)',
    'Maintenance markup (10–15%)',
    'Inspection fees',
    'Eviction coordination fees',
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our Pricing Model</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-4">
            Transparent Pricing That<br />Saves You Money
          </h2>
          <p className="text-cream/65 text-base max-w-xl mx-auto">No hidden fees. No markups. No surprises. Just straightforward flat-fee management.</p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Traditional — left */}
          <div className="bg-navy-light border border-white/10 rounded-xl p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/60 rounded-t-xl"></div>
            <p className="text-cream/50 text-xs font-semibold uppercase tracking-widest mb-4">Traditional Management</p>
            <p className="font-display text-5xl font-bold text-red-400 mb-1">10%+</p>
            <p className="text-cream/40 text-xs mb-6">of monthly rent — plus extra fees</p>
            <ul className="space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/60">
                  <i className="ri-close-line text-red-400 mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
              <p className="text-red-300 text-sm font-medium">$2,000/mo rental: <span className="line-through">$200+/month</span></p>
              <p className="text-red-300/60 text-xs mt-0.5">Plus fees = often $300+/mo total</p>
            </div>
          </div>

          {/* Three Pillars — right */}
          <div className="bg-cream border border-gold/30 rounded-xl p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-t-xl"></div>
            <div className="flex items-start justify-between mb-4">
              <p className="text-navy text-xs font-semibold uppercase tracking-widest">Three Pillars</p>
              <span className="text-xs bg-gold/15 text-gold px-2.5 py-1 rounded-full font-medium border border-gold/25">Recommended</span>
            </div>
            <p className="font-display text-4xl font-bold text-navy mb-0.5">$175 <span className="text-2xl text-charcoal">or</span> 8%</p>
            <p className="text-gold text-xs font-semibold mb-6">Whichever is LESS — all-inclusive</p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                  <i className="ri-check-line text-gold mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-gold/10 rounded-lg border border-gold/25">
              <p className="text-navy text-sm font-semibold">$2,000/mo rental: <span className="text-gold">$160/month</span></p>
              <p className="text-charcoal-light text-xs mt-0.5">Save <strong className="text-navy">$480+ every year</strong> vs. traditional managers</p>
            </div>
            <button
              onClick={onAnalysis}
              className="w-full mt-5 py-3 bg-navy text-cream text-sm font-semibold rounded-md hover:bg-navy-light transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Your Free Property Analysis →
            </button>
          </div>
        </div>

        {/* Example math bar */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-gold/20 rounded-xl px-8 py-6 text-center">
          <p className="text-cream/50 text-xs uppercase tracking-widest mb-3">Real Example</p>
          <p className="text-cream text-base leading-relaxed">
            On a <strong className="text-gold">$2,000/month</strong> rental property — a traditional manager charges <strong className="text-red-400 line-through">$200+/month</strong>.
            Three Pillars charges <strong className="text-gold">$160/month</strong> (8%).
            That&apos;s <strong className="text-gold text-lg">$480+ back in your pocket</strong> every single year.
          </p>
          <p className="text-cream/40 text-xs mt-2">*Based on $175/mo flat fee vs. 8% calculation. 8% = $160 on $2,000 rent, which is less than $175, so 8% applies.</p>
        </div>
      </div>
    </section>
  );
}
