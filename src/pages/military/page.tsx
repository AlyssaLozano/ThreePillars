import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const steps = [
  {
    num: '01',
    icon: 'ri-phone-line',
    title: 'Reach Out Before You Leave',
    body: 'Contact us as soon as you receive orders — even if you\'re months out. Early prep means a smoother transition and no gaps in coverage.',
  },
  {
    num: '02',
    icon: 'ri-home-gear-line',
    title: 'We Get Your Property Rent-Ready',
    body: 'We handle the inspection, coordinate any needed repairs, price the rental correctly, and create professional listings — all before you ship out.',
  },
  {
    num: '03',
    icon: 'ri-user-search-line',
    title: 'Tenant Screening & Placement',
    body: 'Background check, credit check, income verification, rental history. We only place qualified tenants who will protect your investment.',
  },
  {
    num: '04',
    icon: 'ri-bank-card-line',
    title: 'Rent Collected, You Get Paid',
    body: 'Automated rent collection, enforcement if needed, and direct disbursement to your account — whether you\'re in Maryland or halfway around the world.',
  },
  {
    num: '05',
    icon: 'ri-shield-check-line',
    title: 'Full Management While You Serve',
    body: 'Maintenance handled, leases enforced, inspections documented. You check the owner portal when you want. We handle everything else.',
  },
];

const faqs = [
  {
    q: 'What if I get PCS orders mid-lease?',
    a: 'We\'ve handled this many times. We\'ll review your lease terms, coordinate with your tenant, and manage the transition seamlessly — whether that means a lease assignment, early termination coordination, or simply continuing management with the existing tenant under a new arrangement.',
  },
  {
    q: 'Can you manage my property while I\'m deployed?',
    a: 'Absolutely. Remote management is one of our core strengths. You\'ll have 24/7 access to your owner portal for real-time updates, and we handle every aspect of management on your behalf — maintenance, rent collection, lease enforcement, and more.',
  },
  {
    q: 'How does the military discount work?',
    a: 'Active duty military and government employees at Fort Meade receive our exclusive rate: a flat $150/month OR 7% of monthly rent — whichever is less. Standard pricing is already $175/month or 8%. This is our way of giving back to the community we were built for.',
  },
  {
    q: 'How do I stay informed while I\'m away?',
    a: 'Through your owner portal, you\'ll see real-time financial statements, rent collection status, maintenance requests and updates, lease documents, and inspection reports — from any device, anywhere in the world. No waiting for monthly emails.',
  },
  {
    q: 'Do you manage apartment buildings as well as single-family homes?',
    a: 'Yes. We manage single-family homes, townhomes, condos, and apartment buildings throughout Maryland. Our founder personally owned both single-family homes and multi-unit apartment buildings — so we understand both sides.',
  },
  {
    q: 'How quickly can you get my property ready if orders come fast?',
    a: 'Reach out immediately — even if you only have a few weeks. We\'ll prioritize your property, expedite the inspection and prep process, and work with our vendor network to get you covered before you leave.',
  },
];

export default function MilitaryOwners() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('submitting');
    const form = formRef.current;
    if (!form) return;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.name && el.value) data.append(el.name, el.value);
    }
    try {
      await fetch('https://readdy.ai/api/form/d6ulda51l1ubpb1295v0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitState('success');
      form.reset();
      setCharCount(0);
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=United%20States%20military%20soldier%20in%20uniform%20standing%20proudly%20in%20front%20of%20American%20flag%20Fort%20Meade%20Maryland%20military%20base%20wide%20shot%20golden%20hour%20warm%20patriotic%20sunlight%20dramatic%20cinematic%20photography%20very%20high%20quality&width=1440&height=900&seq=mil-hero-1&orientation=landscape"
            alt="Military property management Fort Meade Maryland"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/94 via-navy/82 to-navy/40"></div>
        </div>

        {/* Discount badge */}
        <div className="absolute top-28 right-8 lg:right-16 z-20 bg-gold rounded-xl px-5 py-3 text-center hidden md:block">
          <p className="text-navy text-xs font-bold uppercase tracking-widest">Military Exclusive</p>
          <p className="font-display text-2xl font-bold text-navy leading-none mt-0.5">$150<span className="text-base font-semibold"> /mo</span></p>
          <p className="text-navy/70 text-xs mt-0.5">or 7% — whichever is less</p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-shield-star-fill text-gold text-xl"></i>
            </div>
            <p className="text-gold text-xs font-bold uppercase tracking-widest">For Military &amp; Government Owners</p>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight mb-6 max-w-3xl">
            PCS Orders Coming?<br />
            <span className="text-gold">Your Property Is</span><br />
            Covered.
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-xl leading-relaxed mb-4">
            Three Pillars was built by a former NSA employee at Fort Meade — someone who lived exactly what you&apos;re going through. We manage your property while you serve, from screening to rent collection to maintenance, whether you&apos;re in Maryland or overseas.
          </p>
          <p className="text-gold text-sm font-semibold mb-8">
            Active duty &amp; government employees receive exclusive pricing: $150/mo flat or 7% — whichever is less.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#inquiry-form"
              className="px-8 py-4 bg-gold text-navy font-bold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Claim Military Discount →
            </a>
            <Link to="/contact"
              className="px-8 py-4 bg-transparent text-cream font-medium text-sm rounded-md border border-cream/40 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
          <span className="text-cream/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gold/40"></div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="bg-gold py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <i className="ri-medal-line text-navy text-xl"></i>
          </div>
          <p className="text-navy font-semibold text-sm">
            <strong>Military &amp; Government Exclusive Discount:</strong> Active duty military and Fort Meade government employees pay just{' '}
            <strong>$150/month flat OR 7% of rent — whichever is less.</strong>{' '}
            Standard rate is $175/mo or 8%. Mention your status when you reach out.
          </p>
        </div>
      </section>

      {/* We Understand Your Situation */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[45%]">
              <img
                src="https://readdy.ai/api/search-image?query=military%20family%20couple%20standing%20outside%20suburban%20Maryland%20home%20with%20for%20rent%20sign%20looking%20relieved%20and%20confident%20warm%20sunset%20lighting%20professional%20real%20estate%20photography&width=600&height=500&seq=mil-family-1&orientation=landscape"
                alt="Military family property owners Maryland"
                className="w-full rounded-2xl object-cover object-top"
                style={{ height: '420px' }}
              />
            </div>
            <div className="lg:w-[55%]">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-10 h-px bg-gold"></span>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest">We&apos;ve Been In Your Shoes</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold leading-tight mb-6">
                Built for the Person<br />Who Can&apos;t Always Be There
              </h2>
              <div className="space-y-4 text-charcoal text-base leading-relaxed">
                <p>
                  Our founder spent years as an analyst at the NSA on Fort Meade. He watched good people — military families, government employees, intelligence community professionals — get PCS orders with sixty days notice and scramble to find someone they could trust with their home.
                </p>
                <p>
                  He wasn&apos;t just watching. He was living it. He owned single-family homes and apartment buildings in Maryland while working a demanding government career. He made the late-night maintenance calls. He dealt with property managers who charged 10% and couldn&apos;t tell him what was happening with his own property.
                </p>
                <p>
                  <strong className="text-navy">Three Pillars exists because that company didn&apos;t.</strong> If you&apos;re at Fort Meade or anywhere in the Maryland military and government community — you&apos;re exactly who we built this for.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: 'ri-shield-star-line', label: 'Military Roots' },
                  { icon: 'ri-global-line', label: 'Remote Management' },
                  { icon: 'ri-lock-2-line', label: 'Owner Portal 24/7' },
                  { icon: 'ri-money-dollar-circle-line', label: 'No Hidden Fees' },
                  { icon: 'ri-user-line', label: 'Real Person. Always.' },
                  { icon: 'ri-calendar-check-line', label: 'PCS-Ready Process' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 bg-cream-dark border border-gold/15 rounded-lg px-3 py-2.5">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-gold text-base`}></i>
                    </div>
                    <span className="text-navy text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Exclusive Military &amp; Government Pricing</p>
            <h2 className="font-display text-4xl text-cream font-semibold">Your Discount, Side by Side</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Traditional */}
            <div className="bg-navy-light border border-cream/10 rounded-xl p-7 text-center">
              <p className="text-cream/50 text-xs font-semibold uppercase tracking-widest mb-4">Traditional Manager</p>
              <p className="font-display text-5xl text-cream/40 font-bold mb-1">10%</p>
              <p className="text-cream/30 text-sm mb-6">of monthly rent</p>
              <ul className="space-y-2 text-sm text-left">
                {['10%+ monthly fee', 'Setup fees', 'Lease renewal fees', 'Maintenance markups', 'No real-time portal', 'Call center support'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-cream/35">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-close-line text-red-400 text-sm"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Three Pillars Standard */}
            <div className="bg-cream/5 border border-gold/30 rounded-xl p-7 text-center">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Three Pillars Standard</p>
              <p className="font-display text-5xl text-cream font-bold mb-1">8%</p>
              <p className="text-cream/50 text-sm mb-1">or $175/mo flat</p>
              <p className="text-gold text-xs mb-6">whichever is less</p>
              <ul className="space-y-2 text-sm text-left">
                {['No setup fees', 'No renewal fees', 'No markups on repairs', '24/7 owner portal', 'Real person, real responses', 'All of Maryland'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-cream/70">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-gold text-sm"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Military Exclusive */}
            <div className="bg-gold rounded-xl p-7 text-center relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="bg-navy text-cream text-xs font-bold px-2.5 py-1 rounded-full">YOUR RATE</span>
              </div>
              <p className="text-navy text-xs font-bold uppercase tracking-widest mb-4">Military &amp; Gov. Exclusive</p>
              <p className="font-display text-5xl text-navy font-bold mb-1">7%</p>
              <p className="text-navy/70 text-sm mb-1">or $150/mo flat</p>
              <p className="text-navy/60 text-xs mb-6">whichever is less</p>
              <ul className="space-y-2 text-sm text-left">
                {['Lowest rate available', 'No setup fees', 'No renewal fees', 'No markups on repairs', '24/7 owner portal', 'PCS-priority onboarding', 'Deployed-owner support'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-navy">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-shield-check-line text-navy text-sm"></i>
                    </div>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Savings example */}
          <div className="mt-8 bg-cream/5 border border-gold/20 rounded-xl p-6">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">Example Savings — $2,000/mo Rental</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-cream/40 text-xs mb-1">Traditional (10%)</p>
                <p className="font-display text-2xl text-cream/40 font-bold">$200<span className="text-sm">/mo</span></p>
              </div>
              <div>
                <p className="text-cream/70 text-xs mb-1">Three Pillars Std.</p>
                <p className="font-display text-2xl text-cream font-bold">$160<span className="text-sm">/mo</span></p>
              </div>
              <div>
                <p className="text-gold text-xs font-semibold mb-1">Your Military Rate</p>
                <p className="font-display text-2xl text-gold font-bold">$140<span className="text-sm">/mo</span></p>
                <p className="text-gold/60 text-xs mt-0.5">Save $720/yr vs. traditional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold leading-tight mb-4">
              From Orders to Rent Check —<br />We Handle Everything
            </h2>
            <p className="text-charcoal text-base max-w-xl mx-auto">You focus on your mission. Here&apos;s exactly what happens when you hand your property to Three Pillars.</p>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gold/20 z-0" style={{ top: '2.5rem' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 flex items-center justify-center bg-cream border-2 border-gold/30 rounded-full mb-5 group-hover:border-gold group-hover:bg-navy transition-all">
                    <i className={`${step.icon} text-2xl text-gold group-hover:text-gold transition-colors`}></i>
                  </div>
                  <span className="text-gold/40 text-xs font-bold uppercase tracking-widest mb-1">{step.num}</span>
                  <h3 className="font-display text-base font-semibold text-navy mb-2 leading-snug">{step.title}</h3>
                  <p className="text-charcoal text-xs leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">What Owners Say</p>
            <h2 className="font-display text-4xl text-navy font-semibold">Real Words from Real Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I got PCS orders in February with a March report date. Three Pillars had my property listed, a tenant screened and placed, and the first rent payment sent to my account before I even landed at my new duty station. I didn't have to do a single thing.",
                name: 'SSG Marcus T.',
                detail: 'Fort Meade → PCS to Germany · 3BR Odenton Home',
                icon: 'ri-shield-star-fill',
              },
              {
                quote: "I was TDY overseas for seven months. I logged into the owner portal every couple weeks just to check in — maintenance was handled, rent was paid on time, and I never once had to make a call or send an email. That peace of mind is priceless when you're deployed.",
                name: 'GS-13 Patricia W.',
                detail: 'NSA Fort Meade · TDY Rotation · Glen Burnie Condo',
                icon: 'ri-government-line',
              },
              {
                quote: "My old property manager charged 10% and couldn't tell me what was happening without 48 hours notice. Three Pillars charges less, I can see everything in the portal in real time, and I've actually spoken to a real person every time I've called. Night and day difference.",
                name: 'CW3 Darnell H.',
                detail: 'Army Contractor · Fort Meade · 4-Unit Anne Arundel Building',
                icon: 'ri-building-2-line',
              },
            ].map((t) => (
              <div key={t.name} className="bg-cream border border-gold/20 rounded-xl p-7 hover:border-gold/40 transition-colors flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center bg-navy rounded-lg mb-5 flex-shrink-0">
                  <i className={`${t.icon} text-gold text-base`}></i>
                </div>
                <p className="text-charcoal text-sm leading-relaxed italic flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gold/15 pt-4">
                  <p className="text-navy font-semibold text-sm">{t.name}</p>
                  <p className="text-charcoal-light text-xs mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="font-display text-4xl text-navy font-semibold">Military Owner FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gold/20 rounded-xl overflow-hidden hover:border-gold/40 transition-colors">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-navy font-semibold text-sm pr-4">{faq.q}</span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i className={`ri-${openFaq === i ? 'subtract' : 'add'}-line text-gold text-lg transition-transform`}></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-charcoal text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-14 items-start">
            {/* Left: messaging */}
            <div className="lg:w-[40%] lg:sticky lg:top-28">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Claim Your Discount</p>
              <h2 className="font-display text-4xl text-navy font-semibold leading-tight mb-4">
                Get in Touch.<br />Let&apos;s Protect<br />Your Investment.
              </h2>
              <p className="text-charcoal text-sm leading-relaxed mb-6">
                Whether your orders just came in or you&apos;re planning ahead — reach out now. The earlier you contact us, the smoother your transition. We respond within 1 business day, usually the same day.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'ri-shield-star-line', text: 'Active duty &amp; Fort Meade government employees get $150/mo or 7% — whichever is less' },
                  { icon: 'ri-time-line', text: 'Response within 1 business day — usually same day' },
                  { icon: 'ri-check-double-line', text: 'No obligation, no pressure, no sales pitch' },
                  { icon: 'ri-global-line', text: 'We can handle everything remotely if you\'re already away' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy rounded-lg flex-shrink-0">
                      <i className={`${item.icon} text-gold text-sm`}></i>
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
              <div className="bg-navy rounded-xl p-5">
                <p className="text-cream text-xs font-semibold mb-1">Direct Contact</p>
                <a href="tel:+14435885777" className="flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors cursor-pointer mb-1">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-fill text-sm"></i>
                  </div>
                  443-588-5777
                </a>
                <a href="mailto:info@threepillarsproperties.com" className="flex items-center gap-2 text-cream/60 text-xs hover:text-gold transition-colors cursor-pointer break-all">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-mail-line text-sm"></i>
                  </div>
                  info@threepillarsproperties.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:w-[60%] bg-cream border border-gold/20 rounded-2xl p-8 lg:p-10">
              {submitState === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 flex items-center justify-center bg-gold/15 rounded-full mx-auto mb-4">
                    <i className="ri-shield-check-line text-3xl text-gold"></i>
                  </div>
                  <h3 className="font-display text-3xl text-navy mb-2">We&apos;re On It!</h3>
                  <p className="text-charcoal text-sm max-w-sm mx-auto">
                    Your message is received. We&apos;ll be in touch within one business day — usually the same day. You can also reach us directly at{' '}
                    <a href="tel:+14435885777" className="text-gold font-semibold cursor-pointer">443-588-5777</a>.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  data-readdy-form
                  id="military-owner-inquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <p className="font-display text-2xl text-navy font-semibold mb-1">Military Owner Inquiry</p>
                    <p className="text-charcoal text-xs mb-6">Mention your military or government status to receive your exclusive discount.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">First Name *</label>
                      <input name="first_name" required type="text" placeholder="James"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Last Name *</label>
                      <input name="last_name" required type="text" placeholder="Mitchell"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Email *</label>
                      <input name="email" required type="email" placeholder="james@email.com"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Phone</label>
                      <input name="phone" type="tel" placeholder="443-555-0100"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Military / Government Status *</label>
                    <select name="military_status" required
                      className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy cursor-pointer">
                      <option value="">Select your status</option>
                      <option value="Active Duty Military - Fort Meade">Active Duty Military — Fort Meade</option>
                      <option value="Active Duty Military - Other Base">Active Duty Military — Other Base</option>
                      <option value="Government Employee - NSA/Fort Meade">Government Employee — NSA / Fort Meade</option>
                      <option value="Government Employee - Other">Government Employee — Other Agency</option>
                      <option value="Military Veteran">Military Veteran</option>
                      <option value="Military Spouse/Family">Military Spouse / Family Member</option>
                      <option value="Civilian - General Inquiry">Civilian — General Inquiry</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Property Address</label>
                      <input name="property_address" type="text" placeholder="123 Main St, Glen Burnie, MD"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Number of Units</label>
                      <input name="num_units" type="number" min={1} placeholder="1"
                        className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">PCS / TDY / Situation</label>
                    <select name="situation" className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy cursor-pointer">
                      <option value="">Select your situation</option>
                      <option value="Received PCS Orders">Received PCS Orders</option>
                      <option value="Currently on TDY">Currently on TDY</option>
                      <option value="Deploying Soon">Deploying Soon</option>
                      <option value="Currently Deployed">Currently Deployed</option>
                      <option value="Planning Ahead">Planning Ahead (No Immediate Orders)</option>
                      <option value="Already Away">Already Away — Need Management Now</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide">Message / Questions</label>
                      <span className={`text-xs ${charCount > 450 ? 'text-red-400' : 'text-charcoal-light'}`}>{charCount}/500</span>
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={500}
                      onChange={(e) => setCharCount(e.target.value.length)}
                      placeholder="Tell us about your property, timeline, and any questions. PCS report date? Number of units? Monthly rent you expect? The more detail, the faster we can help."
                      className="w-full px-4 py-3 text-sm border border-gold/30 rounded-lg bg-cream focus:outline-none focus:border-gold text-navy placeholder-charcoal-light resize-none"
                    />
                  </div>
                  {submitState === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again or call us at 443-588-5777.</p>
                  )}
                  <button type="submit" disabled={submitState === 'submitting'}
                    className="w-full py-4 bg-gold text-navy font-bold text-sm rounded-lg hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60">
                    {submitState === 'submitting' ? 'Sending...' : 'Submit & Claim Military Discount →'}
                  </button>
                  <p className="text-charcoal-light text-xs text-center">No obligation. No pressure. Response within 1 business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
