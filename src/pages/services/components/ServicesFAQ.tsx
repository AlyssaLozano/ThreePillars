import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Fees & Pricing
  {
    category: 'fees',
    q: 'Do I have to pay for inspections?',
    a: 'No. Move-in, move-out, and periodic mid-tenancy inspections are all fully included in your flat monthly management fee. There are no per-inspection charges, no scheduling fees, and no add-ons. You will receive a complete photo report for every inspection, uploaded directly to your owner portal.',
  },
  {
    category: 'fees',
    q: 'Are there any hidden fees on top of the monthly management fee?',
    a: 'None. No setup fees, no onboarding fees, no lease renewal fees, no inspection fees, no marketing fees, and absolutely no maintenance markups. The only charges outside your monthly management fee are the actual vendor invoices for repairs — and those are passed through at cost with zero markup. What the vendor charges is exactly what you pay.',
  },
  {
    category: 'fees',
    q: 'Do you mark up repair costs?',
    a: 'Never. We have a strict zero-markup policy on all maintenance and repairs. When a vendor invoices for work completed on your property, that exact invoice total is what appears in your portal and what you are charged. We do not add a coordination fee, handling fee, or percentage on top. Every invoice is visible in your owner portal.',
  },
  {
    category: 'fees',
    q: 'What happens to my management fee if the property is vacant?',
    a: 'You are not charged a management fee during vacancy periods. We only charge our fee when a paying tenant is in place. During vacancy we actively work to fill the unit — marketing, showings, applications, screening — all at no additional cost to you. Our incentive is to get your property leased quickly.',
  },
  // Maintenance
  {
    category: 'maintenance',
    q: 'Who approves repairs before work is done?',
    a: 'You do — for anything non-emergency. When a maintenance request comes in, we assess it, get a vendor quote if needed, and send you an approval request through the portal or directly. We do not schedule non-emergency work without your go-ahead. For true emergencies (active water leak, no heat in winter, electrical hazard), we act immediately to protect the property and notify you right after.',
  },
  {
    category: 'maintenance',
    q: 'What counts as an emergency repair?',
    a: 'Emergencies are situations that pose an immediate risk to the property or tenant safety: active water leaks or flooding, complete HVAC failure in extreme temperatures, major electrical issues, broken exterior locks or doors, or anything that makes the property uninhabitable. In those cases, we dispatch a vendor immediately and notify you as soon as the situation is under control.',
  },
  {
    category: 'maintenance',
    q: 'Can I use my own contractors?',
    a: 'Yes, with conditions. Your preferred vendor must be licensed, insured, and willing to work within our coordination process. We just need to be able to schedule them, receive invoices through our system, and have confirmation that the work is completed and documented. Many owners have go-to contractors they trust — we work with them.',
  },
  {
    category: 'maintenance',
    q: 'What if my tenant never reports maintenance issues?',
    a: 'That is exactly why we do periodic inspections. Some tenants ignore small problems until they become big ones. Our scheduled mid-tenancy walk-throughs are designed to catch issues before they escalate — plumbing drips, HVAC filter neglect, minor damage — all documented with photos and uploaded to your portal. You never have to wait for your tenant to report something.',
  },
  // Tenants & Rent
  {
    category: 'tenants',
    q: 'What if my tenant doesn\'t pay rent?',
    a: 'We move fast. The moment rent is late, automated reminders go out. If that does not resolve it, we issue a formal late notice per Maryland law. If they still have not paid, we begin the eviction process and keep you informed at every step. We do not let late rent sit without action. Your disbursement schedule does not change — if rent collection is delayed, you will know exactly why and exactly what we are doing about it.',
  },
  {
    category: 'tenants',
    q: 'How quickly will my property be rented after I sign up?',
    a: 'We start marketing immediately after onboarding. In the Anne Arundel County and Fort Meade area, average time-to-lease for a well-priced property is typically 2–4 weeks. Properties priced accurately to current market data and presented with professional photos lease considerably faster than those that are not. We provide a rent analysis up front so you go to market at the right price.',
  },
  {
    category: 'tenants',
    q: 'Can I reject a tenant you recommend?',
    a: 'Yes — with one condition. The final placement decision is yours. However, any rejection must be based on legitimate, documented criteria (income, credit, rental history) rather than characteristics protected under the Fair Housing Act. We will walk you through what is and is not permissible so you stay legally protected while exercising your rights as an owner.',
  },
  {
    category: 'tenants',
    q: 'What if I already have a tenant when I sign with you?',
    a: 'No problem at all. We take over the existing tenancy, review the current lease, conduct an initial property condition assessment, and get everything set up in the Buildium portal. Your tenant gets introduced to us as the new point of contact and transition is typically seamless within a few days.',
  },
  {
    category: 'tenants',
    q: 'What happens to the security deposit?',
    a: 'Security deposits are held in a dedicated, Maryland-compliant escrow account as required by law. We document the property condition thoroughly at move-in and move-out with photo reports so that any deductions are fully backed by evidence. Any legitimate deduction is documented in writing and the remaining balance is returned to the tenant within the timeframe required by Maryland law.',
  },
  // Legal & Eviction
  {
    category: 'legal',
    q: 'Do I need my own attorney if an eviction is needed?',
    a: 'For the vast majority of evictions in Maryland, no. We coordinate the entire process — preparing the filing, handling court documentation, scheduling — and work with established Maryland eviction attorneys when court appearances are required. If attorney fees are incurred, they are a direct pass-through at cost with zero markup. You will know exactly what was charged and why.',
  },
  {
    category: 'legal',
    q: 'What if my tenant damages the property beyond normal wear and tear?',
    a: 'This is where our inspection documentation pays off. We have photo evidence from move-in, periodic inspections, and move-out to document exactly what damage occurred and when. We apply the security deposit to covered damages, bill the tenant for amounts beyond the deposit if warranted, and coordinate repairs through our vendor network. Everything is documented in your portal.',
  },
  {
    category: 'legal',
    q: 'What Maryland landlord-tenant laws do I need to know about?',
    a: 'Honestly, you do not need to memorize them — that is part of what you are paying us to know. Maryland has specific rules around security deposit limits, notice periods, habitability standards, late fee caps, and eviction timelines. We stay current on all of it and ensure every action we take on your behalf is fully compliant. If something changes in the law, we adjust our procedures and notify you when it affects your property.',
  },
  // Getting Started
  {
    category: 'started',
    q: 'How long does it take to get started after I sign the management agreement?',
    a: 'We typically have your property fully onboarded within 3–5 business days of signing. That includes a property walkthrough, initial condition documentation, portal setup, and — if the property is vacant — beginning the marketing process. If you already have a tenant, we handle the transition communication so you do not have to.',
  },
  {
    category: 'started',
    q: 'I\'m on PCS orders and need to rent my home quickly. Can you help?',
    a: 'Absolutely — this is exactly the situation we are built for. We work with military homeowners frequently and understand the urgency of PCS timelines. We can start the process remotely and you do not need to be physically present for onboarding, showings, or any of the ongoing management. Everything is accessible through your owner portal from anywhere in the world.',
  },
  {
    category: 'started',
    q: 'What if I live out of state or overseas?',
    a: 'That is the norm for many of our owners, not the exception. Our entire operation is designed for remote ownership — 24/7 portal access, digital document signing, direct communication through the portal, and disbursements sent electronically. Being out of state or overseas changes nothing about how we manage your property or how you stay informed.',
  },
];

const categories = [
  { id: 'all', label: 'All Questions', icon: 'ri-question-answer-line' },
  { id: 'fees', label: 'Fees & Pricing', icon: 'ri-money-dollar-circle-line' },
  { id: 'maintenance', label: 'Maintenance', icon: 'ri-tools-line' },
  { id: 'tenants', label: 'Tenants & Rent', icon: 'ri-group-line' },
  { id: 'legal', label: 'Legal & Eviction', icon: 'ri-scales-3-line' },
  { id: 'started', label: 'Getting Started', icon: 'ri-rocket-line' },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        isOpen ? 'border-gold/40 bg-white' : 'border-gold/10 bg-white hover:border-gold/25'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left cursor-pointer group"
      >
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gold/10 text-gold text-xs font-bold mt-0.5 group-hover:bg-gold/20 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`flex-1 font-semibold text-sm leading-snug transition-colors ${isOpen ? 'text-navy' : 'text-navy/80 group-hover:text-navy'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center ml-2 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className={`ri-arrow-down-s-line text-base ${isOpen ? 'text-gold' : 'text-navy/30'}`}></i>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 pl-15">
          <div className="pl-10 border-l-2 border-gold/20">
            <p className="text-charcoal text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesFAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <section className="py-24 bg-cream" id="faq">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Owner FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
            Questions Owners Actually Ask
          </h2>
          <p className="text-charcoal text-base max-w-xl mx-auto">
            Real answers — no marketing fluff. If something here doesn&apos;t cover your situation, reach out directly and a real person will respond.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-navy text-cream'
                  : 'bg-white border border-gold/20 text-navy/60 hover:border-gold/50 hover:text-navy'
              }`}
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className={`${cat.icon} text-xs`}></i>
              </div>
              {cat.label}
              {cat.id !== 'all' && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-gold/25 text-gold' : 'bg-gold/10 text-gold/80'
                }`}>
                  {faqs.filter((f) => f.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filtered.map((item, idx) => (
            <AccordionItem
              key={`${item.category}-${idx}`}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
              index={idx}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-navy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gold/15 rounded-xl flex-shrink-0">
              <i className="ri-chat-smile-3-line text-gold text-xl"></i>
            </div>
            <div>
              <p className="text-cream font-semibold text-base">Still have a question?</p>
              <p className="text-cream/55 text-sm mt-0.5">A real person responds — typically within the same business day.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+14435551234"
              className="flex items-center gap-2 px-5 py-2.5 bg-cream/8 border border-cream/15 text-cream text-sm font-medium rounded-lg hover:bg-cream/15 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line text-xs"></i>
              Call Us
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-send-line text-xs"></i>
              Send a Message
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
