import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactModal from '../../components/feature/ContactModal';
import SavingsCalculator from './components/SavingsCalculator';
import PricingFAQ from './components/PricingFAQ';

const notCharged = [
  'Tenant placement / leasing fee',
  'Lease renewal fee ($250–$400 typical)',
  'Maintenance markup or commission',
  'Management fee during vacancy',
  'Move-in / move-out inspection fees',
  'Eviction coordination surcharge',
  'Annual account or admin fees',
  'Setup / onboarding fee',
  'Photography fee',
  'Showing fee',
];

const included = [
  'Full tenant screening & placement',
  'Leasing & property marketing',
  'Rent collection & enforcement',
  'Maintenance coordination (zero markup)',
  'Move-in / move-out inspections',
  'Periodic property inspections',
  'Monthly financial statements',
  '24/7 owner portal access',
  'Lease preparation & renewals',
  'Lease enforcement & compliance',
  'Eviction coordination (if needed)',
  'Dedicated owner point of contact',
];

export default function Pricing() {
  const [modal, setModal] = useState<'analysis' | 'call' | null>(null);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-gold" style={{ transform: 'translate(40%,-40%)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-gold" style={{ transform: 'translate(-40%,40%)' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-tight mb-5">
            $175/mo or 8% of Rent.<br />
            <span className="text-gold italic">Whichever Is Less.</span>
          </h2>
          <p className="text-cream/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            No hidden fees. No markups. No surprises. The same all-inclusive flat fee covers every service we offer — every month.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setModal('analysis')}
              className="px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Get Free Property Analysis
            </button>
            <button onClick={() => setModal('call')}
              className="px-7 py-3.5 bg-transparent text-cream font-medium text-sm rounded-md border border-cream/40 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              Schedule a Call →
            </button>
          </div>
        </div>
      </section>

      {/* Main pricing comparison */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Side-by-Side Comparison</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">Three Pillars vs. Traditional Manager</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="bg-white border border-red-200 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-400 rounded-t-xl"></div>
              <p className="text-charcoal text-xs font-semibold uppercase tracking-widest mb-5">Traditional Management</p>
              <p className="font-display text-6xl font-bold text-red-400 mb-1">10%+</p>
              <p className="text-charcoal-light text-xs mb-6">of monthly rent — plus extra fees</p>
              <ul className="space-y-3 mb-6">
                {['10%–12% monthly management fee','Leasing fee (often 1 month\'s rent)','Lease renewal fee ($250–$400)','Maintenance markup (10–15%)','Inspection fees','Eviction surcharges','Administrative & setup fees'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <i className="ri-close-line text-red-400 flex-shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600 text-sm font-semibold">On $2,000/mo rent: <span className="line-through">$200+/mo</span></p>
                <p className="text-red-400 text-xs mt-1">Plus fees = often $300–$400/mo effective cost</p>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="bg-cream-dark border border-gold/35 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-t-xl"></div>
              <div className="flex items-start justify-between mb-5">
                <p className="text-navy text-xs font-semibold uppercase tracking-widest">Three Pillars</p>
                <span className="text-xs bg-gold/15 text-gold px-2.5 py-1 rounded-full font-semibold border border-gold/25">Best Value</span>
              </div>
              <p className="font-display text-5xl font-bold text-navy mb-0.5">$175 <span className="text-3xl text-charcoal-light font-normal">or</span> 8%</p>
              <p className="text-gold text-xs font-semibold mb-6">Whichever is LESS — fully all-inclusive</p>
              <ul className="space-y-2.5 mb-6">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <i className="ri-check-line text-gold flex-shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-gold/10 rounded-lg border border-gold/25">
                <p className="text-navy text-sm font-semibold">On $2,000/mo rent: <span className="text-gold">$160/month (8%)</span></p>
                <p className="text-charcoal-light text-xs mt-1">Save <strong className="text-navy">$480+ per year</strong> vs. traditional managers</p>
              </div>
              <button onClick={() => setModal('analysis')}
                className="w-full mt-5 py-3 bg-navy text-cream text-sm font-semibold rounded-md hover:bg-navy-light transition-colors cursor-pointer whitespace-nowrap">
                Get Started — Free Analysis →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <SavingsCalculator onAnalysis={() => setModal('analysis')} />

      {/* What's NOT charged */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Total Transparency</p>
            <h2 className="font-display text-4xl text-navy leading-tight mb-3">No Hidden Fees. Ever.</h2>
            <p className="text-charcoal text-sm max-w-lg mx-auto">Traditional property managers layer on extra charges for everything. Here&apos;s a complete list of what Three Pillars <strong className="text-navy">does not charge</strong>:</p>
          </div>
          <div className="bg-cream-dark border border-gold/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notCharged.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-charcoal">
                  <i className="ri-close-circle-line text-red-400 flex-shrink-0"></i>
                  <span><strong className="text-navy">Not charged:</strong> {item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gold/20 text-center">
              <p className="font-display text-2xl text-navy mb-2">One flat fee. That&apos;s it.</p>
              <p className="text-charcoal text-sm">$175/month or 8% of rent — whichever is less — covers everything listed above. No exceptions, no add-ons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PricingFAQ />

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-4">Ready to See What You&apos;d Save?</h2>
          <p className="text-cream/60 text-base mb-8 max-w-lg mx-auto">Get a free property analysis — we&apos;ll show you exactly what your fee would be and how much you&apos;d save versus your current or previous manager.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setModal('analysis')}
              className="px-8 py-4 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Get Free Property Analysis
            </button>
            <a href="tel:+14435885777"
              className="px-8 py-4 bg-transparent text-cream text-sm font-medium rounded-md border border-cream/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              Call 443-588-5777
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={modal !== null} onClose={() => setModal(null)} type={modal ?? 'analysis'} />
    </div>
  );
}
