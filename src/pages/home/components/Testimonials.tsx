const testimonials = [
  {
    name: 'Capt. Marcus T.',
    role: 'Active Duty, Fort Meade — PCS to Germany',
    quote: 'No More Landlord Nightmares on Deployment',
    review: "Got PCS orders to Germany with 60 days notice. Three Pillars found a qualified tenant, executed the lease, and had rent deposited into my account before I even landed. I check my owner portal from overseas and everything is exactly as they promised. Finally a property manager who actually gets what military life looks like.",
    avatar: 'https://readdy.ai/api/search-image?query=professional%20military%20officer%20African%20American%20man%20confident%20portrait%20uniform%20clean%20background%20neutral&width=80&height=80&seq=t1&orientation=squarish',
  },
  {
    name: 'Diane & Robert K.',
    role: 'Multi-Unit Investors, Annapolis, MD',
    quote: 'We\'ve Saved Over $2,000 This Year',
    review: "We have four units in Anne Arundel County. Our previous manager was charging 10% plus a lease renewal fee and a maintenance markup. Three Pillars consolidates everything into one flat fee. We logged into the portal last month and I could see every dollar. Real transparency. We\'ve saved over $2,000 this year alone — and our properties are better managed.",
    avatar: 'https://readdy.ai/api/search-image?query=middle%20aged%20white%20couple%20professional%20portrait%20investors%20business%20casual%20warm%20smile%20neutral%20background&width=80&height=80&seq=t2&orientation=squarish',
  },
  {
    name: 'Leon W.',
    role: 'NSA Analyst, Fort Meade — TDY Rotation',
    quote: 'They Handle Everything. I Handle My Job.',
    review: "I own a rental in Glen Burnie and have been on TDY rotations three times this year. My previous property manager gave me zero visibility — I had no idea what was happening until I got a call about a broken water heater and a $600 invoice. With Three Pillars I see everything in real time. The communication is fast, the fees are honest, and my property is in genuinely good hands.",
    avatar: 'https://readdy.ai/api/search-image?query=professional%20government%20employee%20man%2040s%20business%20casual%20portrait%20confident%20warm%20neutral%20studio%20background&width=80&height=80&seq=t3&orientation=squarish',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-px bg-gold"></span>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest">What Owners Say</p>
            <span className="block w-8 h-px bg-gold"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
            Trusted by Maryland Property Owners
          </h2>
          <p className="text-charcoal text-base max-w-xl mx-auto">Real experiences from military, government, and local investors who made the switch to Three Pillars.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gold/15 rounded-xl p-7 flex flex-col hover:border-gold/35 transition-colors group">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-gold text-sm"></i>
                ))}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">&ldquo;{t.quote}&rdquo;</h3>
              <p className="text-charcoal text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-gold/15 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover object-top flex-shrink-0 border-2 border-gold/25"
                />
                <div>
                  <p className="text-navy font-semibold text-sm">{t.name}</p>
                  <p className="text-charcoal-light text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
