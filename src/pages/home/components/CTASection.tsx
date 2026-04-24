interface CTASectionProps {
  onAnalysis: () => void;
  onCall: () => void;
}

export default function CTASection({ onAnalysis, onCall }: CTASectionProps) {
  return (
    <section id="contact" className="py-28 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-gold" style={{ transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-gold" style={{ transform: 'translate(-40%, 40%)' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Take the Next Step</p>
        <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-5">
          Ready to Maximize Your<br />Property Income?
        </h2>
        <p className="text-cream/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get a free property analysis and see exactly how much you could earn — and how much you could save switching to Three Pillars.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onAnalysis}
            className="px-8 py-4 bg-gold text-navy font-semibold text-base rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            Get Free Property Analysis
            <i className="ri-arrow-right-line"></i>
          </button>
          <button
            onClick={onCall}
            className="px-8 py-4 bg-transparent text-cream text-base font-medium rounded-md border border-cream/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule a Call →
          </button>
        </div>

        <p className="text-cream/40 text-sm">
          Or call us directly:{' '}
          <a href="tel:+14435885777" className="text-cream/60 hover:text-gold transition-colors cursor-pointer">443-588-5777</a>
        </p>

        {/* Three trust points */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'ri-time-line', label: '24-Hour Response', sub: 'We respond to every inquiry within one business day' },
            { icon: 'ri-price-tag-3-line', label: 'No-Obligation Analysis', sub: 'Free, detailed breakdown with zero pressure' },
            { icon: 'ri-shield-check-line', label: 'Licensed & Insured', sub: 'Maryland-certified property management' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 px-4 py-6 rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
              <i className={`${item.icon} text-gold text-2xl`}></i>
              <p className="text-cream font-medium text-sm">{item.label}</p>
              <p className="text-cream/45 text-xs text-center">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
