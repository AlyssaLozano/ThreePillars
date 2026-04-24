const pillars = [
  {
    number: '01',
    title: 'Transparent Flat-Fee Pricing',
    body: "We charge $175/month or 8% of rent — whichever is less. That's it. No setup fees, no lease renewal fees, no maintenance markups, no surprises. Traditional managers take 10%+ and add fees on top. We built our model the way we wished it had existed when we were owners ourselves.",
  },
  {
    number: '02',
    title: 'Personalized Small-Company Attention',
    body: "We're not a franchise or a call center. When you work with Three Pillars, you get a real person who knows your property's address, your tenant's name, and your goals. Because we keep our client base intentionally sized, every owner gets the kind of attention that actually moves the needle.",
  },
  {
    number: '03',
    title: 'Real-Time Owner Portal',
    body: "No more waiting for monthly statements. Log into your owner portal any time to see rent collection status, maintenance requests, lease documents, financial statements, and inspection reports. Full transparency — every dollar, every detail, always available.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Content blocks */}
          <div className="lg:w-[55%]">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-14 h-1 bg-gold rounded-full"></span>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest">What Sets Us Apart</p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-12 leading-tight">
              Why Property Owners<br />Choose Three Pillars
            </h2>
            <div className="space-y-10">
              {pillars.map((p) => (
                <div key={p.number} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <span className="font-display text-4xl font-bold text-gold/30 group-hover:text-gold/50 transition-colors">{p.number}</span>
                  </div>
                  <div className="border-l-2 border-gold/25 pl-6 group-hover:border-gold/60 transition-colors">
                    <h3 className="font-display text-2xl text-navy mb-2 font-semibold">{p.title}</h3>
                    <p className="text-charcoal text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder quote card — offset */}
          <div className="lg:w-[40%] lg:mt-20">
            <div className="bg-cream-dark border border-gold/25 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-8">
                <span className="font-display text-6xl text-gold leading-none">&ldquo;</span>
              </div>
              <div className="mt-6 mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20African%20American%20businessman%20in%20sharp%20navy%20suit%20at%20modern%20office%20desk%20confident%20executive%20portrait%20warm%20lighting%20cream%20background%20real%20estate%20professional%20property%20manager&width=200&height=200&seq=founder1&orientation=squarish"
                  alt="Three Pillars Founder"
                  className="w-16 h-16 rounded-full object-cover object-top mb-5 border-2 border-gold/30"
                />
                <p className="font-display text-xl italic text-navy leading-relaxed mb-5">
                  I built the company I needed when I was managing my own properties while working a demanding government job. I lived every headache. Three Pillars is the solution I couldn&apos;t find.
                </p>
                <div>
                  <p className="text-navy font-semibold text-sm">Founder, Three Pillars</p>
                  <p className="text-charcoal-light text-xs mt-0.5">Former NSA Employee · Fort Meade, Maryland</p>
                </div>
              </div>
              <div className="pt-5 border-t border-gold/20">
                <div className="flex items-center gap-3">
                  <i className="ri-building-2-line text-gold"></i>
                  <p className="text-xs text-charcoal-light">Managing single-family homes &amp; apartment buildings across Maryland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
