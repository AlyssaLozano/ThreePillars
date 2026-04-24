const trustItems = [
  { icon: 'ri-shield-check-line', label: 'Licensed & Insured', desc: 'Maryland certified' },
  { icon: 'ri-map-pin-2-line', label: 'Maryland-Based', desc: 'Local expertise' },
  { icon: 'ri-medal-line', label: 'Military Community Roots', desc: 'Fort Meade founded' },
  { icon: 'ri-price-tag-3-line', label: 'Transparent Pricing', desc: 'No hidden fees' },
  { icon: 'ri-computer-line', label: 'Owner Portal Access', desc: '24/7 real-time data' },
  { icon: 'ri-user-heart-line', label: 'Small Company Care', desc: 'Every client by name' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-dark border-y border-gold/20 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                <i className={`${item.icon} text-gold text-lg`}></i>
              </div>
              <p className="text-navy text-xs font-semibold uppercase tracking-wide leading-tight">{item.label}</p>
              <p className="text-charcoal-light text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
