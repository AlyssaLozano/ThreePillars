import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactModal from '../../components/feature/ContactModal';
import ServicesFAQ from './components/ServicesFAQ';

const services = [
  {
    num: '01',
    icon: 'ri-user-search-line',
    title: 'Tenant Screening',
    tagline: 'Rigorous vetting. Reliable tenants.',
    desc: 'Every applicant goes through a comprehensive screening process designed to protect your investment and minimize risk. We verify everything — no shortcuts.',
    details: [
      'Full criminal background check',
      'Credit report & score review',
      'Income verification (2.5–3x monthly rent required)',
      'Employment history and stability check',
      'Rental history & prior eviction screening',
      'Previous landlord reference check',
      'Identity verification',
    ],
    portalTab: 'overview',
    portalLabel: 'Tenant status visible on Dashboard',
    portalIcon: 'ri-layout-grid-line',
  },
  {
    num: '02',
    icon: 'ri-megaphone-line',
    title: 'Leasing & Marketing',
    tagline: 'Fast vacancy fill. Qualified applicants.',
    desc: 'Every vacant day costs you money. We market aggressively across every major rental platform, price competitively based on real market data, and coordinate showings efficiently.',
    details: [
      'Professional property photography',
      'Listings on Zillow, Trulia, Realtor.com, Apartments.com',
      'Competitive rent pricing analysis',
      'Showing scheduling & coordination',
      'Application collection & review',
      'Tenant selection recommendation to owner',
      'Lease preparation & execution',
    ],
    portalTab: 'documents',
    portalLabel: 'Lease & application docs in Document Vault',
    portalIcon: 'ri-file-list-3-line',
  },
  {
    num: '03',
    icon: 'ri-bank-card-line',
    title: 'Rent Collection',
    tagline: 'Automated. On time. Transparent.',
    desc: 'We use automated systems to ensure rent is collected on schedule. When tenants are late, we enforce immediately. Your disbursement arrives reliably every month.',
    details: [
      'Online tenant payment portal',
      'Automated rent reminders',
      'Late fee enforcement per lease terms',
      'Full payment tracking & records',
      'Owner disbursement by the 15th of each month',
      'Bounced payment handling & follow-up',
      'Rental income documentation for taxes',
    ],
    portalTab: 'financials',
    portalLabel: 'Live rent & disbursement tracking in Financials',
    portalIcon: 'ri-line-chart-line',
  },
  {
    num: '04',
    icon: 'ri-tools-line',
    title: 'Maintenance Coordination',
    tagline: 'Fast response. Zero markups. Full transparency.',
    desc: 'We coordinate all maintenance through a trusted vendor network. We never mark up repairs — what the vendor charges is what you pay. You approve everything non-emergency.',
    details: [
      'Trusted local vendor network (licensed & insured)',
      '24/7 emergency maintenance response',
      'Zero markup on all repairs — ever',
      'Owner approval required for non-emergency work',
      'Repair photo documentation',
      'Preventive maintenance scheduling',
      'Vendor invoice transparency in owner portal',
    ],
    portalTab: 'maintenance',
    portalLabel: 'Approve work orders & view photos in Maintenance tab',
    portalIcon: 'ri-tools-line',
  },
  {
    num: '05',
    icon: 'ri-camera-line',
    title: 'Property Inspections',
    tagline: 'Photo-documented. Thorough. Proactive.',
    desc: 'We document your property\'s condition at every key moment — move-in, move-out, and periodically throughout the tenancy — so you always have visual proof of its status.',
    details: [
      'Move-in inspection with full photo report',
      'Move-out inspection & damage assessment',
      'Periodic mid-tenancy inspections',
      'Written condition reports uploaded to portal',
      'Security deposit dispute documentation',
      'Maintenance issue identification during inspections',
      'All reports accessible 24/7 via owner portal',
    ],
    portalTab: 'documents',
    portalLabel: 'Inspection photos & reports in Document Vault',
    portalIcon: 'ri-camera-line',
  },
  {
    num: '06',
    icon: 'ri-line-chart-line',
    title: 'Financial Reporting',
    tagline: 'Real-time visibility. No waiting. No guessing.',
    desc: 'Your financials are always organized and accessible. Through your 24/7 owner portal, you can review income, expenses, and statements any time — from anywhere in the world.',
    details: [
      'Monthly owner financial statements',
      'Year-end tax documentation (1099)',
      'Real-time income & expense tracking in portal',
      'Rent collection status dashboard',
      'Maintenance expense ledger',
      'Vacancy cost reporting',
      'Owner portal access from any device, 24/7',
    ],
    portalTab: 'financials',
    portalLabel: 'Download statements & view ledger in Financials',
    portalIcon: 'ri-line-chart-line',
  },
  {
    num: '07',
    icon: 'ri-file-text-line',
    title: 'Lease Enforcement & Compliance',
    tagline: 'Maryland law expertise. Issues handled swiftly.',
    desc: 'We know Maryland landlord-tenant law. When tenants violate lease terms, we act promptly, document properly, and protect your legal standing as a property owner.',
    details: [
      'Lease violation notices (properly documented)',
      'Late rent notices (5-day, 10-day)',
      'Maryland landlord-tenant law compliance',
      'Lease renewal coordination and negotiation',
      'Unauthorized occupant enforcement',
      'Property damage claim documentation',
      'Legal standing protection for owners',
    ],
    portalTab: 'documents',
    portalLabel: 'Lease docs & notices stored in Document Vault',
    portalIcon: 'ri-file-list-3-line',
  },
  {
    num: '08',
    icon: 'ri-scales-3-line',
    title: 'Eviction Coordination',
    tagline: 'End-to-end if necessary. Handled professionally.',
    desc: 'Evictions are a last resort, but when necessary, we handle the entire process — from initial filing through court coordination — so you never have to navigate it alone.',
    details: [
      'Formal eviction filing preparation',
      'Court documentation and scheduling',
      'Coordination with Maryland eviction attorneys',
      'Communication with tenant during process',
      'Post-eviction property condition assessment',
      'Re-marketing the property immediately after',
      'Full process documentation in owner portal',
    ],
    portalTab: 'documents',
    portalLabel: 'All eviction documentation logged in portal',
    portalIcon: 'ri-file-list-3-line',
  },
  {
    num: '09',
    icon: 'ri-customer-service-2-line',
    title: 'Owner Communication & Support',
    tagline: 'A real person. Real responses. Not a ticket number.',
    desc: 'Because we\'re a small company, every owner has a dedicated point of contact. No call centers, no automated runarounds. When you reach out, a real person responds.',
    details: [
      'Dedicated owner point of contact',
      'Portal messaging with real responses',
      'Proactive updates — you\'re never left wondering',
      'Direct phone and email access',
      'Response within 1 business day (typically same day)',
      'Regular property status updates',
      'Available for military/government owners remotely',
    ],
    portalTab: 'messages',
    portalLabel: 'Direct messaging with your PM in Messages tab',
    portalIcon: 'ri-chat-3-line',
  },
];

const portalTabColorMap: Record<string, { bg: string; text: string; border: string }> = {
  overview:    { bg: 'bg-navy/6',    text: 'text-navy',    border: 'border-navy/20' },
  financials:  { bg: 'bg-green-50',  text: 'text-green-700', border: 'border-green-200' },
  maintenance: { bg: 'bg-amber-50',  text: 'text-amber-700', border: 'border-amber-200' },
  documents:   { bg: 'bg-gold/8',    text: 'text-amber-800', border: 'border-gold/30' },
  messages:    { bg: 'bg-rose-50',   text: 'text-rose-700',  border: 'border-rose-200' },
};

export default function Services() {
  const [modal, setModal] = useState<'analysis' | 'call' | null>(null);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=Maryland%20luxury%20rental%20properties%20aerial%20view%20suburban%20residential%20neighborhood%20well-maintained%20homes%20Anne%20Arundel%20County%20Fort%20Meade%20area%20warm%20golden%20hour%20light&width=1400&height=600&seq=svc-hero2&orientation=landscape"
            alt="Maryland property management"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-cream/10 mb-6">
              <i className="ri-shield-star-line text-gold text-xs"></i>
              <span className="text-cream text-xs font-medium tracking-wide">Built for Owners Who Can&apos;t Always Be There</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-tight mb-5">
              Everything Your Property Needs.<br />
              <span className="text-gold italic">One Flat Fee.</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Built for owners who can&apos;t always be there in person — whether you&apos;re on PCS orders, TDY, or just don&apos;t want to deal with it yourself. All nine services. No à la carte. No surprises.
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
        </div>
      </section>

      {/* Buildium portal banner */}
      <div className="bg-navy-light border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gold/15 rounded-lg flex-shrink-0">
              <i className="ri-layout-grid-line text-gold text-sm"></i>
            </div>
            <p className="text-cream text-sm">
              <span className="font-semibold">Every service below is tracked live in your Buildium owner portal</span>
              <span className="text-cream/55"> — look for the portal badge on each card.</span>
            </p>
          </div>
          <Link
            to="/owner-portal"
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gold/15 border border-gold/35 text-gold text-xs font-semibold rounded-full hover:bg-gold/25 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-eye-line text-xs"></i>
            Preview the Portal
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">All 9 Services Included</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
              Full-Service Management,<br />Start to Finish
            </h2>
            <p className="text-charcoal text-base max-w-xl mx-auto">Every one of these services is included in your flat monthly fee. There is no additional charge for any of them.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {services.map((svc) => {
              const portalColor = portalTabColorMap[svc.portalTab] ?? portalTabColorMap.overview;
              return (
                <div key={svc.num} className="bg-white border border-gold/15 rounded-xl p-7 hover:border-gold/40 transition-all group">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="flex-shrink-0 text-right" style={{ minWidth: '40px' }}>
                      <span className="font-display text-3xl font-bold text-gold/25 group-hover:text-gold/45 transition-colors leading-none">{svc.num}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-9 h-9 flex items-center justify-center bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                          <i className={`${svc.icon} text-gold text-lg`}></i>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-navy">{svc.title}</h3>
                      </div>
                      <p className="text-gold text-xs font-semibold mb-2">{svc.tagline}</p>
                      <p className="text-charcoal text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                  <div className="border-t border-gold/15 pt-4 pl-14">
                    <ul className="grid grid-cols-1 gap-1.5 mb-4">
                      {svc.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-charcoal">
                          <i className="ri-check-line text-gold flex-shrink-0 mt-0.5"></i>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Portal deep-link badge */}
                    <Link
                      to={`/owner-portal?tab=${svc.portalTab}`}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all hover:scale-105 cursor-pointer ${portalColor.bg} ${portalColor.text} ${portalColor.border}`}
                    >
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <i className={`${svc.portalIcon} text-xs`}></i>
                      </div>
                      <span>{svc.portalLabel}</span>
                      <i className="ri-arrow-right-line text-xs opacity-70"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portal callout strip */}
      <section className="py-16 bg-navy-light border-y border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-building-line text-gold text-sm"></i>
                </div>
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">Powered by Buildium</span>
              </div>
              <h3 className="font-display text-3xl text-cream mb-3">
                Every Service. One Dashboard.
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-5">
                Every service listed above feeds directly into your Buildium owner dashboard — maintenance work orders, financial statements, inspection photos, lease documents, and real-time messaging are all visible 24/7 from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: 'ri-layout-grid-line', label: 'Dashboard Overview' },
                  { icon: 'ri-line-chart-line', label: 'Financials' },
                  { icon: 'ri-tools-line', label: 'Maintenance' },
                  { icon: 'ri-file-list-3-line', label: 'Documents' },
                  { icon: 'ri-chat-3-line', label: 'Messages' },
                ].map((tab) => (
                  <Link
                    key={tab.label}
                    to={`/owner-portal?tab=${tab.label.toLowerCase().replace(' ', '')}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-cream/8 border border-cream/15 text-cream/70 text-xs rounded-full hover:border-gold/50 hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className={`${tab.icon} text-xs`}></i>
                    </div>
                    {tab.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3">
              {[
                { icon: 'ri-eye-2-line', text: 'See every dollar in and out', sub: 'Real-time in Financials tab' },
                { icon: 'ri-notification-3-line', text: 'Approve repairs before they happen', sub: 'Work orders in Maintenance tab' },
                { icon: 'ri-folder-open-line', text: 'Access every doc ever signed', sub: '48 photos, leases, invoices' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 bg-cream/5 border border-cream/10 rounded-xl p-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/15 rounded-lg flex-shrink-0">
                    <i className={`${item.icon} text-gold text-base`}></i>
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">{item.text}</p>
                    <p className="text-cream/45 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/owner-portal"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap mt-1"
              >
                <i className="ri-layout-grid-line"></i>
                Tour the Full Owner Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServicesFAQ />

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-4">All Nine Services. One Flat Fee.</h2>
          <p className="text-cream/60 text-base mb-8 max-w-lg mx-auto">No setup fees, no inspection fees, no lease renewal fees, no maintenance markups. Just straightforward pricing.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setModal('analysis')}
              className="px-8 py-4 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Get Free Property Analysis
            </button>
            <a href="/pricing" className="px-8 py-4 bg-transparent text-cream text-sm font-medium rounded-md border border-cream/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              View Pricing Details →
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile floating CTA */}
      {!dismissed && (
        <div
          className={`md:hidden fixed bottom-5 left-4 right-4 z-50 transition-all duration-500 ${
            showFloatingCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2 bg-navy rounded-2xl shadow-xl border border-gold/30 p-2 pr-3">
            <button
              onClick={() => setModal('analysis')}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gold text-navy font-semibold text-sm rounded-xl hover:bg-amber-400 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-star-line text-sm"></i>
              Get Free Analysis
            </button>
            <button
              onClick={() => setModal('call')}
              className="flex items-center gap-1.5 px-4 py-3 bg-cream/8 border border-cream/15 text-cream text-xs font-medium rounded-xl hover:bg-cream/15 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line text-xs"></i>
              Call
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="w-9 h-9 flex items-center justify-center text-cream/40 hover:text-cream/70 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              aria-label="Dismiss"
            >
              <i className="ri-close-line text-base"></i>
            </button>
          </div>
        </div>
      )}

      <Footer />
      <ContactModal isOpen={modal !== null} onClose={() => setModal(null)} type={modal ?? 'analysis'} />
    </div>
  );
}
