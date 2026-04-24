import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactForm from './components/ContactForm';

const trustStats = [
  { icon: 'ri-timer-flash-line', value: '< 1 Day', label: 'Response Time' },
  { icon: 'ri-shield-star-line', value: 'Zero', label: 'Setup Fees' },
  { icon: 'ri-map-pin-2-line', value: 'Local', label: 'Anne Arundel County' },
  { icon: 'ri-flag-line', value: 'Military', label: 'PCS Specialists' },
];

const contactDetails = [
  { icon: 'ri-phone-line', label: 'Phone', value: '443-588-5777', href: 'tel:+14435885777' },
  { icon: 'ri-mail-line', label: 'Email', value: 'info@threepillarsproperties.com', href: 'mailto:info@threepillarsproperties.com' },
  { icon: 'ri-map-pin-line', label: 'Office', value: '7310 Ritchie Hwy, Suite 200\nGlen Burnie, MD 21061', href: null },
  { icon: 'ri-time-line', label: 'Hours', value: 'Mon–Fri, 9am–5pm\nEmergency line 24/7', href: null },
];

const quickLinks = [
  { icon: 'ri-money-dollar-circle-line', label: 'See Flat-Fee Pricing', to: '/pricing' },
  { icon: 'ri-list-check-2', label: 'All 9 Services Included', to: '/services' },
  { icon: 'ri-layout-grid-line', label: 'Preview Owner Portal', to: '/owner-portal' },
  { icon: 'ri-shield-star-line', label: 'Military Owners Guide', to: '/military-owners' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-navy overflow-hidden">
        {/* Geometric accent lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-16 w-72 h-72 rounded-full border border-gold/10" />
          <div className="absolute top-16 right-24 w-44 h-44 rounded-full border border-gold/15" />
          <div className="absolute -bottom-12 left-10 w-52 h-52 rounded-full border border-gold/8" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cream/3" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/35 bg-gold/8 mb-6">
            <i className="ri-chat-smile-3-line text-gold text-xs"></i>
            <span className="text-cream text-xs font-medium tracking-wide">Real People. Real Responses.</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-tight mb-5">
            Let&apos;s Talk About<br />
            <span className="text-gold italic">Your Property</span>
          </h1>
          <p className="text-cream/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            No call centers. No automated runarounds. A real property manager reads every message and responds — typically the same business day.
          </p>
          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {trustStats.map((s) => (
              <div key={s.label} className="bg-cream/5 border border-cream/10 rounded-xl py-3 px-2">
                <div className="w-7 h-7 flex items-center justify-center bg-gold/15 rounded-lg mx-auto mb-1.5">
                  <i className={`${s.icon} text-gold text-sm`}></i>
                </div>
                <p className="text-cream font-bold text-base leading-tight">{s.value}</p>
                <p className="text-cream/45 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military PCS callout */}
      <div className="bg-gold/10 border-b border-gold/25 py-3.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-center gap-3 text-center flex-wrap">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <i className="ri-shield-star-fill text-gold text-base"></i>
          </div>
          <p className="text-navy text-sm">
            <strong>PCS Orders incoming?</strong> Reach out early — we can have your home rent-ready before you leave and manage it remotely while you&apos;re away.
          </p>
          <Link to="/military-owners"
            className="text-gold text-xs font-semibold flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
            Military Owner Guide <i className="ri-arrow-right-line text-xs"></i>
          </Link>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar — 2 columns */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Contact Details */}
              <div className="bg-white border border-gold/15 rounded-2xl p-6">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">Contact Information</p>
                <ul className="space-y-4">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-navy rounded-lg flex-shrink-0">
                        <i className={`${item.icon} text-gold text-sm`}></i>
                      </div>
                      <div>
                        <p className="text-navy font-semibold text-xs uppercase tracking-wide">{item.label}</p>
                        {item.href ? (
                          <a href={item.href}
                            className="text-charcoal text-sm mt-0.5 hover:text-gold transition-colors cursor-pointer block leading-snug">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-charcoal text-sm mt-0.5 leading-snug whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Owner Portal quick access */}
              <div className="bg-navy rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-gold/20 rounded-lg flex-shrink-0">
                    <i className="ri-shield-keyhole-line text-gold text-base"></i>
                  </div>
                  <div>
                    <p className="text-cream font-semibold text-sm">Already an Owner?</p>
                    <p className="text-cream/45 text-xs">Access your Buildium dashboard</p>
                  </div>
                </div>
                <p className="text-cream/55 text-xs leading-relaxed mb-4">View financials, approve maintenance, download statements, and message us directly — all in one place.</p>
                <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
                  className="w-full py-2.5 bg-gold text-navy text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-external-link-line text-sm"></i>
                  Access Owner Portal
                </a>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-gold/15 rounded-2xl p-6">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Explore First</p>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-cream/60 transition-colors cursor-pointer group">
                        <div className="w-7 h-7 flex items-center justify-center bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors flex-shrink-0">
                          <i className={`${link.icon} text-gold text-xs`}></i>
                        </div>
                        <span className="text-navy text-sm font-medium group-hover:text-gold transition-colors">{link.label}</span>
                        <i className="ri-arrow-right-line text-charcoal/30 text-xs ml-auto group-hover:text-gold transition-colors"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tenant rental callout */}
              <div className="bg-cream border border-gold/15 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center bg-gold/10 rounded-lg flex-shrink-0">
                  <i className="ri-home-search-line text-gold text-base"></i>
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm mb-1">Looking to Rent Instead?</p>
                  <p className="text-charcoal text-xs leading-relaxed mb-2.5">
                    Browse available rentals and apply online through our tenant portal.
                  </p>
                  <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
                    className="text-gold text-xs font-semibold flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer">
                    View Available Rentals <i className="ri-external-link-line text-xs"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white border-t border-gold/15 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-8">
            <div className="lg:col-span-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our Office</p>
              <h2 className="font-display text-3xl text-navy leading-tight mb-3">
                Glen Burnie, MD
              </h2>
              <p className="text-charcoal text-sm leading-relaxed mb-5">
                7310 Ritchie Highway, Suite 200<br />Glen Burnie, MD 21061
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://maps.google.com/?q=7310+Ritchie+Highway+Suite+200+Glen+Burnie+MD+21061"
                  target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy text-cream text-sm font-semibold rounded-lg hover:bg-navy/90 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-map-pin-2-line text-gold text-sm"></i>
                  Get Directions
                </a>
                <a href="tel:+14435885777"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream border border-gold/25 text-navy text-sm font-medium rounded-lg hover:border-gold transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-phone-line text-gold text-sm"></i>
                  443-588-5777
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gold/15" style={{ height: '380px' }}>
              <iframe
                title="Three Pillars Property Management — Glen Burnie MD"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.1234567890!2d-76.6198!3d39.1676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f7c0d1234567%3A0xabcdef1234567890!2s7310+Ritchie+Hwy+%23200%2C+Glen+Burnie%2C+MD+21061!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              />
            </div>
          </div>

          {/* Service area note */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 border-t border-gold/10">
            <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wide">Service Area:</p>
            {['Glen Burnie', 'Fort Meade', 'Odenton', 'Severn', 'Millersville', 'Pasadena', 'Linthicum', 'Hanover'].map((area) => (
              <span key={area} className="text-charcoal text-xs flex items-center gap-1.5">
                <i className="ri-map-pin-line text-gold text-xs"></i>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
