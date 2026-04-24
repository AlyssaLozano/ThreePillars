import { useState, useEffect, useRef } from 'react';

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [target, duration, active]);

  return count;
}

interface Props {
  onAnalysis: () => void;
}

export default function SavingsCounter({ onAnalysis }: Props) {
  const [rent, setRent] = useState(2000);
  const [active, setActive] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const traditionalMonthly = rent * 0.1;
  const ourMonthly = Math.min(175, rent * 0.08);
  const monthlySavings = traditionalMonthly - ourMonthly;
  const annualSavings = monthlySavings * 12;
  const fiveYearSavings = annualSavings * 5;
  const traditionalPct = 100;
  const ourPct = Math.round((ourMonthly / traditionalMonthly) * 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleRentChange = (val: number) => {
    setRent(val);
    setActive(false);
    setAnimKey((k) => k + 1);
    setTimeout(() => setActive(true), 40);
  };

  const monthly = useCountUp(monthlySavings, 1000, active);
  const annual = useCountUp(annualSavings, 1300, active);
  const fiveYear = useCountUp(fiveYearSavings, 1600, active);
  const traditionalDisplay = useCountUp(traditionalMonthly, 1000, active);
  const ourDisplay = useCountUp(ourMonthly, 1000, active);

  return (
    <section ref={sectionRef} className="py-20 bg-navy-light relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Live Savings Calculator</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-4">
            See What You&apos;re Leaving on the Table
          </h2>
          <p className="text-cream/60 text-base max-w-lg mx-auto">
            Drag the slider to your monthly rent. Watch the savings add up in real time.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-cream/50 text-sm">Monthly Rent</span>
            <span className="font-display text-2xl text-gold font-bold">
              ${rent.toLocaleString()}<span className="text-cream/40 text-base font-normal">/mo</span>
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min={800}
              max={5000}
              step={50}
              value={rent}
              onChange={(e) => handleRentChange(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((rent - 800) / (5000 - 800)) * 100}%, rgba(255,255,255,0.1) ${((rent - 800) / (5000 - 800)) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-cream/30 text-xs">
              <span>$800</span>
              <span>$2,000</span>
              <span>$3,500</span>
              <span>$5,000</span>
            </div>
          </div>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12" key={animKey}>
          {/* Monthly */}
          <div className="bg-white/5 border border-gold/20 rounded-xl p-7 text-center relative overflow-hidden group hover:border-gold/40 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/40 rounded-t-xl" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 mx-auto mb-4">
              <i className="ri-calendar-line text-gold text-lg"></i>
            </div>
            <p className="text-cream/50 text-xs uppercase tracking-widest mb-2">Monthly Savings</p>
            <p className="font-display text-5xl font-bold text-gold leading-none mb-1">
              ${monthly.toLocaleString()}
            </p>
            <p className="text-cream/40 text-xs">per month back in your pocket</p>
          </div>

          {/* Annual — highlighted */}
          <div className="bg-gold border border-gold rounded-xl p-7 text-center relative overflow-hidden shadow-lg scale-[1.03]">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-navy/20 mx-auto mb-4">
              <i className="ri-trophy-line text-navy text-lg"></i>
            </div>
            <p className="text-navy/60 text-xs uppercase tracking-widest mb-2 font-semibold">Annual Savings</p>
            <p className="font-display text-5xl font-bold text-navy leading-none mb-1">
              ${annual.toLocaleString()}
            </p>
            <p className="text-navy/50 text-xs">every year, guaranteed</p>
            <div className="mt-4 px-3 py-1.5 bg-navy/15 rounded-full inline-block">
              <span className="text-navy text-xs font-semibold">Most popular</span>
            </div>
          </div>

          {/* 5-Year */}
          <div className="bg-white/5 border border-gold/20 rounded-xl p-7 text-center relative overflow-hidden group hover:border-gold/40 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/40 rounded-t-xl" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 mx-auto mb-4">
              <i className="ri-rocket-line text-gold text-lg"></i>
            </div>
            <p className="text-cream/50 text-xs uppercase tracking-widest mb-2">5-Year Savings</p>
            <p className="font-display text-5xl font-bold text-gold leading-none mb-1">
              ${fiveYear.toLocaleString()}
            </p>
            <p className="text-cream/40 text-xs">over five years of management</p>
          </div>
        </div>

        {/* Visual Bar Comparison */}
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl px-8 py-7 mb-10">
          <p className="text-cream/50 text-xs uppercase tracking-widest mb-6 text-center">Monthly Cost Breakdown</p>
          <div className="space-y-5">
            {/* Traditional */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block flex-shrink-0" />
                  <span className="text-cream/70 text-sm">Traditional Manager (10%)</span>
                </div>
                <span className="text-red-400 font-semibold text-sm">${traditionalDisplay.toLocaleString()}/mo</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-700"
                  style={{ width: `${traditionalPct}%` }}
                />
              </div>
            </div>

            {/* Three Pillars */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block flex-shrink-0" />
                  <span className="text-cream/70 text-sm">Three Pillars ($175 flat or 8% — whichever is less)</span>
                </div>
                <span className="text-gold font-semibold text-sm">${ourDisplay.toLocaleString()}/mo</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-700"
                  style={{ width: `${ourPct}%` }}
                />
              </div>
            </div>

            {/* Savings bar */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-sm">You keep the difference</span>
                <span className="text-cream font-bold text-base">
                  <span className="text-gold">${monthly.toLocaleString()}</span>
                  <span className="text-cream/40 text-xs font-normal"> /mo</span>
                  <span className="text-cream/40 mx-2">·</span>
                  <span className="text-gold">${annual.toLocaleString()}</span>
                  <span className="text-cream/40 text-xs font-normal"> /yr</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-cream/50 text-sm mb-5">
            Military owners save an additional <span className="text-gold font-semibold">$50/mo</span> — ask about our exclusive military discount
          </p>
          <button
            onClick={onAnalysis}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap"
          >
            Claim Your Free Property Analysis
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #D4AF37;
          border: 3px solid #0B1F3A;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(212,175,55,0.2);
        }
        input[type='range']::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #D4AF37;
          border: 3px solid #0B1F3A;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
