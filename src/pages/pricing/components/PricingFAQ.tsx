import { useState } from 'react';

const faqs = [
  {
    q: 'What if I get PCS orders mid-lease?',
    a: 'We\'ve handled this many times. If you receive PCS orders mid-lease, we work with you immediately to assess your options — whether that\'s keeping your current tenant through the remaining lease term, coordinating an early termination, or transitioning to a new tenant. We\'ll help you understand your rights under Maryland law and the Servicemembers Civil Relief Act (SCRA). Reach out as soon as orders come through — the earlier we know, the more options you have.',
    military: true,
  },
  {
    q: 'Can you manage my property while I\'m deployed?',
    a: 'Yes — this is exactly what Three Pillars was built for. Our founder is a former NSA/government employee who managed his own properties while working full-time and understood how difficult it is to stay on top of property management when you\'re away. With our 24/7 owner portal, you can monitor everything remotely — rent collection, maintenance updates, financial statements, lease status. We handle everything on the ground so you don\'t have to.',
    military: true,
  },
  {
    q: 'How does the owner portal work?',
    a: 'Once you\'re onboarded, you\'ll receive login credentials for your secure owner portal at threepillars.managebuilding.com. From any device, at any time, you can view: current rent collection status, monthly and year-end financial statements, maintenance requests and their status, inspection reports with photos, lease documents, and direct messaging with our team. No waiting for monthly emails — everything is always available in real time.',
    military: true,
  },
  {
    q: 'Do you manage apartment buildings as well as single-family homes?',
    a: 'Yes. We manage single-family homes, townhomes, and small apartment buildings across Maryland. Our founder personally owned and managed apartment buildings while working his government career, so we understand the distinct demands of multi-unit properties — including unit turnover coordination, building maintenance, and the financial reporting that comes with managing multiple units under one roof.',
    military: true,
  },
  {
    q: 'What\'s included in the flat fee?',
    a: 'Everything. The flat fee covers: tenant screening and placement, property marketing and leasing, rent collection and enforcement, maintenance coordination (no markups), move-in and move-out inspections, periodic property inspections, monthly financial statements, 24/7 owner portal access, lease preparation and renewals, lease enforcement, eviction coordination if necessary, and dedicated owner support. There are no add-on charges for any of these services.',
  },
  {
    q: 'How do I get paid each month?',
    a: 'Once rent is collected from your tenant, Three Pillars deducts the management fee and any approved expenses, and disburses the net amount directly to your designated bank account. Disbursements go out by the 15th of each month. You\'ll receive a detailed monthly statement in your owner portal showing every dollar collected and disbursed.',
  },
  {
    q: 'What happens when my property is vacant?',
    a: 'We do not charge a management fee during vacancy periods. Our incentive is aligned with yours — we want your property occupied by a qualified tenant as quickly as possible. We market aggressively and price competitively to minimize vacancy time.',
  },
  {
    q: 'How does the flat fee vs. percentage model work exactly?',
    a: 'We calculate both 8% of your monthly rent and $175. Whichever is lower is what you pay. For example: on a $2,000/month rental, 8% = $160 — which is less than $175 — so you pay $160. On a $2,500/month rental, 8% = $200 — which is more than $175 — so you pay the flat $175. The model is always in your favor.',
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">Frequently Asked</h2>
          <p className="text-charcoal text-sm mt-3 max-w-lg mx-auto">Including questions specific to military and government property owners.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`bg-cream border rounded-xl overflow-hidden transition-colors ${open === idx ? 'border-gold/40' : 'border-gold/15 hover:border-gold/30'}`}
              itemScope itemType="https://schema.org/Question">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <div className="flex items-center gap-2.5">
                  {faq.military && (
                    <span className="flex-shrink-0 text-xs bg-gold/10 text-gold border border-gold/25 px-2 py-0.5 rounded-full font-medium">Military</span>
                  )}
                  <span className="text-navy font-medium text-sm" itemProp="name">{faq.q}</span>
                </div>
                <i className={`ri-${open === idx ? 'subtract' : 'add'}-line text-gold flex-shrink-0 text-lg`}></i>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 border-t border-gold/15" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-charcoal text-sm leading-relaxed pt-4" itemProp="text">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
