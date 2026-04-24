interface MilitarySectionProps {
  onCall: () => void;
}

const points = [
  {
    icon: 'ri-map-2-line',
    title: 'PCS Orders? We\'ve Got You.',
    body: 'When you get orders and have to move, your property doesn\'t have to become a source of stress. We handle the transition seamlessly — finding new tenants, executing the lease, and keeping everything running. You focus on the move. We handle the property.',
  },
  {
    icon: 'ri-global-line',
    title: 'Manage from Anywhere.',
    body: 'Whether you\'re in Maryland, across the country on TDY, or stationed overseas — your owner portal gives you complete visibility. Check your rent, review maintenance tickets, read your financial statements. Your property is always within reach.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'We\'ve Been in Your Shoes.',
    body: 'Our founder is a former NSA employee from Fort Meade. He watched colleagues become accidental landlords every time PCS orders arrived. He experienced it himself — owning homes and apartment buildings while working a demanding government job. Three Pillars was built because this solution didn\'t exist.',
  },
];

export default function MilitarySection({ onCall }: MilitarySectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-cream-dark">
      {/* Subtle bg image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://readdy.ai/api/search-image?query=Fort%20Meade%20Maryland%20military%20installation%20gates%20entrance%20professional%20architectural%20photography%20clear%20sky%20patriotic%20American%20military%20base&width=1400&height=700&seq=military1&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Badge */}
        <div className="flex justify-center mb-7">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 bg-cream">
            <i className="ri-shield-star-fill text-gold text-sm"></i>
            <span className="text-navy text-xs font-semibold tracking-wide">Built for Military &amp; Government Property Owners</span>
          </div>
        </div>

        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
            We Understand PCS &amp; TDY
          </h2>
          <p className="text-charcoal text-base max-w-2xl mx-auto leading-relaxed">
            Good people shouldn&apos;t be forced into bad landlord situations because of orders. Your property is protected while you serve — we handle everything remotely, your tenants are screened, and your rent is collected whether you&apos;re in Maryland or across the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {points.map((pt) => (
            <div key={pt.title} className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-navy rounded-2xl mx-auto mb-5 group-hover:bg-navy-light transition-colors">
                <i className={`${pt.icon} text-gold text-2xl`}></i>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">{pt.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-navy rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-cream font-medium mb-1">
              Deploying or Getting Orders?
            </p>
            <p className="text-cream/65 text-sm">Let&apos;s talk about your property before you leave. We&apos;ll take care of everything.</p>
          </div>
          <button
            onClick={onCall}
            className="flex-shrink-0 px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
