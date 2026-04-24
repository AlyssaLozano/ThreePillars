import { useState, useEffect } from 'react';

interface HeroProps {
  onAnalysis: () => void;
  onCall: () => void;
}

export default function Hero({ onAnalysis, onCall }: HeroProps) {
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const target = 480;
    const duration = 1800;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setSavings(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };
    const timer = setTimeout(() => requestAnimationFrame(frame), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=luxury%20Maryland%20single%20family%20home%20exterior%20golden%20hour%20warm%20evening%20light%20professional%20real%20estate%20photography%20elegant%20suburban%20property%20with%20manicured%20lawn%20mature%20trees%20beautiful%20architectural%20details%20colonial%20style%20brick%20facade&width=1600&height=900&seq=hero1&orientation=landscape"
          alt="Maryland luxury property"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-cream/10 backdrop-blur-sm mb-7 animate-fade-in-up">
            <i className="ri-shield-star-line text-gold text-xs"></i>
            <span className="text-cream text-xs font-medium tracking-wide">Trusted by Fort Meade Military &amp; Government Community</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6 animate-fade-in-up text-balance">
            Your Property.<br />
            Your Profit.<br />
            <span className="text-gold italic">Zero Surprises.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-cream/85 text-lg md:text-xl leading-relaxed mb-4 max-w-xl animate-fade-in-up">
            Maryland&apos;s most transparent property management company — flat-fee pricing that saves owners hundreds every year, and a real-time owner portal so you always know what&apos;s happening.
          </p>
          <p className="text-cream/75 text-base leading-relaxed mb-10 max-w-xl animate-fade-in-up">
            Getting PCS orders? Deployed TDY? We&apos;ve been in your shoes. Your property is in safe hands.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up">
            <button
              onClick={onAnalysis}
              className="px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              Get a Free Property Analysis
              <i className="ri-arrow-right-line"></i>
            </button>
            <button
              onClick={onCall}
              className="px-7 py-3.5 bg-transparent text-cream font-medium text-sm rounded-md border border-cream/50 hover:border-gold hover:text-gold transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Schedule a Call →
            </button>
          </div>

          {/* Floating Savings Card — animated */}
          <div className="inline-flex items-center gap-4 px-5 py-4 bg-cream/10 backdrop-blur-md rounded-xl border border-gold/30">
            <div className="text-center">
              <p className="text-gold font-display text-3xl font-bold tabular-nums">
                ${savings.toLocaleString()}
                {savings >= 480 ? '+' : ''}
              </p>
              <p className="text-cream/70 text-xs">Saved Annually*</p>
            </div>
            <div className="w-px h-10 bg-gold/30"></div>
            <div>
              <p className="text-cream text-sm font-medium">vs. traditional managers</p>
              <p className="text-cream/60 text-xs mt-0.5">on a $2,000/mo rental</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <i className="ri-arrow-down-line animate-bounce"></i>
      </div>
    </section>
  );
}
