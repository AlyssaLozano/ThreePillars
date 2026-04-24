import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-home-gear-line',
    title: 'Full-Service Management',
    desc: 'End-to-end management of your rental property — from tenant screening and placement to rent collection, maintenance coordination, and lease enforcement. You own it. We handle it.',
  },
  {
    icon: 'ri-user-search-line',
    title: 'Tenant Screening & Placement',
    desc: 'Rigorous background, credit, income, and rental history checks. We find qualified tenants who pay on time and treat your property with respect.',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Property Marketing & Leasing',
    desc: 'Professional listings across major rental platforms, compelling property photos, and fast vacancy turnaround. Minimizing vacancy time means maximizing your income.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Maintenance Coordination',
    desc: 'Trusted vendor network, fast response times, and zero markup on repairs. You approve work, we coordinate. No surprise invoices.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Financial Reporting',
    desc: 'Monthly statements, year-end tax documents, and real-time portal access. Your financials are always organized and transparent.',
  },
  {
    icon: 'ri-file-text-line',
    title: 'Lease Enforcement',
    desc: 'Late notices, lease violations, and eviction coordination handled professionally and legally. We protect your investment and your rights as an owner.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
            Full-Service Property Management<br />Done Right
          </h2>
          <p className="text-charcoal text-base max-w-xl mx-auto">Everything your property needs — under one flat fee. No à la carte surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white border border-gold/15 rounded-xl p-7 hover:border-gold/40 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-xl mb-5 group-hover:bg-gold/20 transition-colors">
                <i className={`${svc.icon} text-gold text-2xl`}></i>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">{svc.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">{svc.desc}</p>
              <Link
                to="/services"
                className="text-gold text-xs font-semibold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
              >
                Learn More <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
