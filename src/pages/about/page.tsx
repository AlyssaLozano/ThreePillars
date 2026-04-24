import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactModal from '../../components/feature/ContactModal';

const values = [
  { icon: 'ri-eye-line', title: 'Transparency', desc: 'Every dollar, every decision, every maintenance request — visible in real time. The owner portal isn\'t a feature. It\'s a reflection of how we think management should work.' },
  { icon: 'ri-alarm-line', title: 'Responsiveness', desc: 'We respond within one business day — usually same day. When you reach out, a real person picks up. No call centers. No ticket queues. No waiting.' },
  { icon: 'ri-user-heart-line', title: 'Owner-First', desc: 'Everything we do is designed around your interests as an owner. Our flat-fee model, our portal, our vendor relationships — all of it exists to protect your income and your investment.' },
  { icon: 'ri-shield-check-line', title: 'Integrity', desc: 'No markups, no hidden fees, no manufactured urgency on repairs. We make our money one way: the flat monthly fee. That alignment matters, and it shows.' },
];

const milestones = [
  { year: '2018', title: 'The Accidental Landlord Years', body: 'Our founder — an analyst at the NSA on Fort Meade — begins managing his own properties while working a demanding government career. He owns single-family homes and apartment buildings. He makes late-night maintenance calls, chases down invoices, deals with fee-heavy managers who can\'t tell him what\'s happening with his own properties.' },
  { year: '2019–20', title: 'Watching Others Struggle', body: 'He watches colleagues receive PCS orders and scramble to find someone trustworthy to manage their homes. Good people — government workers, military families — becoming accidental landlords overnight with no support system they could rely on. The idea for Three Pillars starts to take shape.' },
  { year: '2021', title: 'Three Pillars Is Founded', body: 'He starts Three Pillars because the company he needed didn\'t exist. The name reflects the three principles he built the business around: Transparency, Responsiveness, and Owner-First service. The company launches in Glen Burnie, Maryland, serving Fort Meade and the surrounding Anne Arundel County region.' },
  { year: '2022–23', title: 'Growing Across Maryland', body: 'What began as a solution for the military and government community grows into a full-service property management company serving all Maryland property owners. Single-family homes, townhomes, apartment buildings — the portfolio expands while the small-company attention stays the same.' },
  { year: '2024', title: 'The Owner Portal Launches', body: 'Three Pillars rolls out the 24/7 owner portal — giving every client real-time visibility into their financials, maintenance, and lease status from any device, anywhere. For deployed owners and remote investors, it\'s a game-changer. For every owner, it\'s the transparency standard they always deserved.' },
  { year: 'Today', title: 'Small by Design', body: 'Three Pillars remains a small company intentionally. Personalized attention isn\'t a bonus — it\'s the product. Every client is known by name. Every property matters. The mission hasn\'t changed: give every owner the same peace of mind whether they\'re 5 miles away or stationed overseas.' },
];

export default function About() {
  const [modal, setModal] = useState<'analysis' | 'call' | null>(null);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Fort%20Meade%20Maryland%20military%20installation%20gate%20entrance%20patriotic%20American%20flag%20waving%20sunrise%20warm%20golden%20light%20professional%20architectural%20photography&width=1400&height=700&seq=about-hero2&orientation=landscape"
            alt="Fort Meade Maryland"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/45"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream font-semibold leading-tight mb-6 max-w-2xl">
            Built Because the Right<br />Company Didn&apos;t Exist.
          </h2>
          <p className="text-cream/70 text-lg max-w-xl leading-relaxed mb-8">
            A former NSA employee. A property owner who lived every headache. A founder who built the company he wished had existed when he needed it most.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setModal('analysis')}
              className="px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Get a Free Property Analysis
            </button>
            <Link to="/contact"
              className="px-7 py-3.5 bg-transparent text-cream font-medium text-sm rounded-md border border-cream/40 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Full Origin Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-[40%] flex-shrink-0">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=confident%20professional%20African%20American%20male%20executive%20businessman%20in%20dark%20navy%20suit%20standing%20in%20modern%20upscale%20office%20real%20estate%20property%20manager%20Maryland%20serious%20composed%20sophisticated%20warm%20portrait%20photography&width=480&height=580&seq=founder-about2&orientation=portrait"
                  alt="Three Pillars Founder"
                  className="w-full rounded-2xl object-cover object-top"
                  style={{ height: '480px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/85 to-transparent p-7 rounded-b-2xl">
                  <p className="text-cream font-display text-xl font-semibold">Founder, Three Pillars</p>
                  <p className="text-cream/60 text-sm mt-0.5">Former NSA Employee · Fort Meade, MD</p>
                </div>
              </div>
              {/* Mission statement card */}
              <div className="mt-6 p-6 bg-navy rounded-xl">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our Mission</p>
                <p className="font-display text-xl italic text-cream leading-relaxed">
                  &ldquo;Give every owner the same peace of mind — whether they&apos;re 5 miles away or stationed overseas.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:w-[60%]">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-10 h-px bg-gold"></span>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest">The Full Story</p>
              </div>
              <h3 className="font-display text-4xl text-navy font-semibold leading-tight mb-7">
                The Company He Needed<br />But Couldn&apos;t Find
              </h3>
              <div className="space-y-5 text-charcoal text-base leading-relaxed">
                <p>
                  Our founder spent years as an analyst at the NSA on Fort Meade. In that world, you watch a lot of good people receive PCS orders with thirty or sixty days notice — and suddenly scramble to figure out what to do with the home they own and can&apos;t take with them.
                </p>
                <p>
                  He didn&apos;t just watch it happen to colleagues. He lived it himself. He owned single-family homes and apartment buildings in Maryland — and tried to manage them while working a demanding full-time government career.
                </p>
                <p>
                  He made the late-night maintenance calls. He chased unpaid invoices. He dealt with property managers who charged 10%+ and couldn&apos;t tell him what was happening with his own properties without a week&apos;s notice. He paid lease renewal fees on top of management fees. He absorbed maintenance markups he didn&apos;t know about until after the fact.
                </p>
                <p>
                  After years of that experience — and watching colleagues go through the same thing every time orders came through — he decided to build what he&apos;d been looking for.
                </p>
                <p>
                  <strong className="text-navy">Three Pillars was built for the person who needed someone they could actually trust.</strong> A small company where your property manager knows your address, knows your tenant&apos;s name, and picks up the phone. Where the pricing is what it says it is. Where you can log into a portal at midnight from a hotel room in another state and see exactly what&apos;s happening with your rental.
                </p>
                <p>
                  What started as a solution for the Fort Meade and Maryland military and government community has grown into a full-service company serving <strong className="text-navy">all property owners in Maryland</strong>. But the foundation never changed. Because it&apos;s a small company, every client gets real attention — not a ticket number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-cream border border-gold/20 rounded-xl p-7 hover:border-gold/45 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-navy rounded-xl mb-5">
                  <i className={`${v.icon} text-gold text-xl`}></i>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-charcoal text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">How We Got Here</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">Our Journey</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-5 items-start">
                <div className="md:w-28 flex-shrink-0">
                  <span className="font-display text-2xl font-bold text-gold">{m.year}</span>
                </div>
                <div className="flex-1 bg-cream-dark border border-gold/15 rounded-xl p-5 hover:border-gold/30 transition-colors md:ml-4">
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">{m.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area — Full Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Where We Work</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold leading-tight mb-4">
              Serving Maryland Property Owners
            </h2>
            <p className="text-charcoal text-base max-w-2xl mx-auto leading-relaxed">
              From Fort Meade to Baltimore County, Three Pillars manages properties across the Maryland region — with a special focus on the military and government communities who live and serve here.
            </p>
          </div>

          {/* Region cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: 'ri-shield-star-fill',
                region: 'Fort Meade / NSA Region',
                desc: 'Our roots. We know this community deeply — the PCS cycles, TDY schedules, and what military and government owners need most.',
                tag: 'Primary Focus',
                tagColor: 'bg-gold text-navy',
              },
              {
                icon: 'ri-map-pin-2-line',
                region: 'Anne Arundel County',
                desc: 'Glen Burnie, Odenton, Pasadena, Crofton, Gambrills, Severn, Severna Park — our home base and the heart of our portfolio.',
                tag: 'Core Service Area',
                tagColor: 'bg-navy text-cream',
              },
              {
                icon: 'ri-building-2-line',
                region: "Prince George's County",
                desc: "Bowie, Laurel, Hyattsville, College Park, Upper Marlboro — close proximity to Fort Meade and the DC metro corridor.",
                tag: 'Active Service Area',
                tagColor: 'bg-navy/80 text-cream',
              },
              {
                icon: 'ri-city-line',
                region: 'Baltimore County',
                desc: 'Arbutus, Catonsville, Towson, Essex, Dundalk — strong rental demand, close to employers and transit.',
                tag: 'Active Service Area',
                tagColor: 'bg-navy/80 text-cream',
              },
              {
                icon: 'ri-home-4-line',
                region: 'Howard County',
                desc: 'Columbia, Ellicott City, Elkridge — high-demand rental market midway between Baltimore and DC.',
                tag: 'Active Service Area',
                tagColor: 'bg-navy/80 text-cream',
              },
              {
                icon: 'ri-government-line',
                region: 'Montgomery County',
                desc: 'Rockville, Silver Spring, Gaithersburg, Germantown — one of Maryland\'s largest rental markets, close to DC and major federal employers.',
                tag: 'Active Service Area',
                tagColor: 'bg-navy/80 text-cream',
              },
              {
                icon: 'ri-landscape-line',
                region: 'Charles County',
                desc: 'Waldorf, La Plata, White Plains — a fast-growing area with strong military ties to Joint Base Andrews and Naval Air Facility Thurmont.',
                tag: 'Active Service Area',
                tagColor: 'bg-navy/80 text-cream',
              },
              {
                icon: 'ri-map-2-line',
                region: 'Surrounding Maryland',
                desc: "Don't see your area? We likely serve it. Reach out — if you own property in Maryland, we want to hear from you.",
                tag: 'Inquire',
                tagColor: 'bg-gold/20 text-navy',
              },
            ].map((area) => (
              <div key={area.region} className="bg-cream border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-navy rounded-xl group-hover:bg-gold transition-colors">
                    <i className={`${area.icon} text-gold group-hover:text-navy text-lg transition-colors`}></i>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${area.tagColor} whitespace-nowrap`}>
                    {area.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{area.region}</h3>
                <p className="text-charcoal text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-gold/25" style={{ height: '440px' }}>
            <iframe
              title="Three Pillars Property Management Service Area — Maryland"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d197621.5!2d-76.7!3d39.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000001!5m2!1sen!2sus"
            />
          </div>
          <p className="text-center text-charcoal-light text-xs mt-4">
            Service area spans Fort Meade, Anne Arundel County, Prince George&apos;s County, Baltimore County, Howard County, Montgomery County, Charles County &amp; surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl text-cream font-semibold mb-2">Own Property in Maryland?</h2>
            <p className="text-cream/55 text-sm">Let&apos;s talk about what stress-free management actually looks like for your situation.</p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <button onClick={() => setModal('analysis')}
              className="px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap">
              Get Free Property Analysis
            </button>
            <Link to="/contact"
              className="px-7 py-3.5 bg-transparent text-cream text-sm font-medium rounded-md border border-cream/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={modal !== null} onClose={() => setModal(null)} type={modal ?? 'analysis'} />
    </div>
  );
}
