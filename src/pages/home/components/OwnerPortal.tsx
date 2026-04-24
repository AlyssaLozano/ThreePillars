import { Link } from 'react-router-dom';

interface OwnerPortalProps {
  onAnalysis: () => void;
}

const features = [
  'Real-time rent collection status',
  'Monthly & year-end financial statements',
  'Maintenance request tracking & updates',
  'Lease documents & renewal history',
  'Move-in / move-out inspection reports',
  'Secure owner-manager messaging',
];

export default function OwnerPortal({ onAnalysis }: OwnerPortalProps) {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left: Text content */}
          <div className="lg:w-[45%]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 rounded-full border border-gold/25 mb-6">
              <i className="ri-wifi-line text-gold text-xs"></i>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">24/7 Transparency</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-5">
              Your Property Dashboard.<br />
              <span className="italic text-gold">Always On.</span>
            </h2>
            <p className="text-charcoal text-base leading-relaxed mb-7">
              No more waiting for monthly emails. No more guessing whether your rent was collected or what the plumber fixed. Log in any time and you&apos;ll see exactly what&apos;s happening with your property — right now.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-charcoal">
                  <i className="ri-check-line text-gold text-base flex-shrink-0"></i>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://threepillars.managebuilding.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="px-5 py-3 bg-navy text-cream text-sm font-medium rounded-md hover:bg-navy-light transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-shield-keyhole-line"></i>
                Access Owner Portal
              </a>
              <Link
                to="/owner-portal"
                className="px-5 py-3 bg-transparent text-navy text-sm font-medium rounded-md border border-navy/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
              >
                See Portal Preview →
              </Link>
            </div>
          </div>

          {/* Right: Portal mockup */}
          <div className="lg:w-[55%] relative">
            <div className="bg-navy rounded-2xl p-6 shadow-xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <div className="flex-1 ml-3 bg-navy-light rounded px-3 py-1 text-cream/40 text-xs">threepillars.managebuilding.com</div>
              </div>
              {/* Dashboard UI mockup */}
              <div className="bg-cream-dark rounded-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-navy font-semibold text-sm">Owner Dashboard</p>
                    <p className="text-charcoal-light text-xs">Welcome back, James</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Rent Collected</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Monthly Income', val: '$2,000', icon: 'ri-money-dollar-circle-line', color: 'text-green-600' },
                    { label: 'Mgmt Fee', val: '$160', icon: 'ri-price-tag-3-line', color: 'text-gold' },
                    { label: 'Net to Owner', val: '$1,840', icon: 'ri-bank-line', color: 'text-navy' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-lg p-3 text-center">
                      <i className={`${stat.icon} ${stat.color} text-lg`}></i>
                      <p className={`font-display text-xl font-bold ${stat.color} mt-1`}>{stat.val}</p>
                      <p className="text-charcoal-light text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'March Rent — 123 Oak St', status: 'Collected', color: 'bg-green-100 text-green-700' },
                    { label: 'HVAC Filter Replacement', status: 'Completed', color: 'bg-blue-100 text-blue-700' },
                    { label: 'Lease Renewal — Due Apr 1', status: 'On Track', color: 'bg-gold/15 text-gold-dark' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                      <p className="text-navy text-xs font-medium">{row.label}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating testimonial card */}
            <div className="absolute -bottom-4 -left-4 bg-cream border border-gold/30 rounded-xl px-5 py-4 max-w-56 hidden lg:block">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-gold text-xs"></i>
                ))}
              </div>
              <p className="text-navy text-xs font-medium leading-relaxed">&ldquo;I check my property from my phone every morning. Total game-changer.&rdquo;</p>
              <p className="text-charcoal-light text-xs mt-2">— Property Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
