import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    day: 'Day 1',
    icon: 'ri-search-eye-line',
    title: 'Free Property Analysis',
    body: "We walk your property (in person or virtually), review comparable rents in your area, and build a custom management proposal — at zero cost and zero obligation. You'll know your earning potential before you sign a thing.",
    highlight: 'No cost. No obligation.',
  },
  {
    day: 'Days 2–3',
    icon: 'ri-file-text-line',
    title: 'Sign & Meet Your Manager',
    body: "You sign a simple digital agreement and get introduced to your dedicated property manager — a real person who knows your address, your goals, and your preferred communication style from day one.",
    highlight: 'One person. Always accountable.',
  },
  {
    day: 'Week 1',
    icon: 'ri-camera-line',
    title: 'Professional Listing Goes Live',
    body: "We coordinate professional photography, write a compelling listing, and syndicate across Zillow, Rentals.com, and MLS. Your portal access goes live so you can watch leasing activity in real time.",
    highlight: 'Full market exposure, fast.',
  },
  {
    day: 'Weeks 2–4',
    icon: 'ri-shield-user-line',
    title: 'Tenant Screened & Placed',
    body: "We run full background, credit, income, and rental history checks on every applicant. We present only qualified candidates and you have final approval. Lease gets signed, keys get handed over — professionally.",
    highlight: 'Quality tenants. Your final say.',
  },
  {
    day: 'Ongoing',
    icon: 'ri-bank-card-line',
    title: 'You Collect. We Handle Everything.',
    body: "Rent hits your account by the 10th every month. Maintenance requests, inspections, renewals, emergencies — we own all of it. Your portal shows every dollar and every detail, 24/7, any device.",
    highlight: 'Passive income. Finally.',
  },
];

function TimelineStep({
  step,
  index,
  isLeft,
}: {
  step: typeof steps[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-0 lg:gap-8 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Left content or spacer */}
      <div className={`lg:text-right ${isLeft ? 'order-2 lg:order-1' : 'hidden lg:block order-3 lg:order-1'}`}>
        {isLeft && (
          <div className="bg-white border border-stone-100 rounded-2xl p-7 hover:border-gold/40 transition-colors group">
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-widest mb-3 border border-gold/30 rounded-full px-3 py-1">
              {step.day}
            </span>
            <h3 className="font-display text-2xl text-navy mb-3 leading-snug">{step.title}</h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4">{step.body}</p>
            <p className="text-gold text-sm font-semibold flex items-center lg:justify-end gap-1.5">
              <i className="ri-checkbox-circle-fill"></i>
              {step.highlight}
            </p>
          </div>
        )}
      </div>

      {/* Center node */}
      <div className="order-1 lg:order-2 flex flex-col items-center">
        {/* Icon circle */}
        <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-navy border-4 border-gold/50 group-hover:border-gold transition-colors flex-shrink-0">
          <i className={`${step.icon} text-gold text-xl`}></i>
        </div>
        {/* Step number badge */}
        <div className="mt-2 w-6 h-6 flex items-center justify-center rounded-full bg-gold text-navy text-xs font-bold">
          {index + 1}
        </div>
      </div>

      {/* Right content or spacer */}
      <div className={`${!isLeft ? 'order-2 lg:order-3' : 'hidden lg:block order-3 lg:order-3'}`}>
        {!isLeft && (
          <div className="bg-white border border-stone-100 rounded-2xl p-7 hover:border-gold/40 transition-colors group">
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-widest mb-3 border border-gold/30 rounded-full px-3 py-1">
              {step.day}
            </span>
            <h3 className="font-display text-2xl text-navy mb-3 leading-snug">{step.title}</h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4">{step.body}</p>
            <p className="text-gold text-sm font-semibold flex items-center gap-1.5">
              <i className="ri-checkbox-circle-fill"></i>
              {step.highlight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OnboardingTimeline() {
  return (
    <section className="py-28 bg-cream-dark relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-10 h-px bg-gold rounded-full"></span>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest">What Happens Next</p>
            <span className="block w-10 h-px bg-gold rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy mb-5 leading-tight">
            Here's Exactly What Happens<br />After You Sign
          </h2>
          <p className="text-charcoal text-base max-w-xl mx-auto leading-relaxed">
            No guesswork. No silence. Just a clear, proven process that goes from contract signed to rent deposited — usually within 30 days.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10 pointer-events-none"></div>

          <div className="flex flex-col gap-10 lg:gap-12">
            {steps.map((step, i) => (
              <TimelineStep key={step.day} step={step} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-navy text-cream rounded-full px-6 py-3 text-sm">
            <i className="ri-time-line text-gold"></i>
            <span>Most owners are fully set up and collecting rent within <strong className="text-gold">30 days</strong> of signing.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
