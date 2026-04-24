import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/2ccb17bce31e94e46580e45d7ffbd5c6.png"
              alt="Three Pillars Property Management"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-cream/50 text-xs italic mb-4">Maryland's transparent, flat-fee property management company. Built by an owner, for owners.</p>
            <div className="flex items-center gap-3">
              {['ri-facebook-fill','ri-instagram-line','ri-linkedin-fill'].map((icon) => (
                <a key={icon} href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full border border-cream/20 text-cream/50 hover:text-gold hover:border-gold transition-colors cursor-pointer">
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-cream/65">
                <i className="ri-map-pin-line text-gold mt-0.5 flex-shrink-0"></i>
                <span>7310 Ritchie Highway, Suite 200<br />Glen Burnie, MD 21061</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-gold flex-shrink-0"></i>
                <a href="tel:+14435885777" className="text-cream/65 hover:text-gold transition-colors cursor-pointer">443-588-5777</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-gold flex-shrink-0"></i>
                <a href="mailto:info@threepillarsproperties.com" className="text-cream/65 hover:text-gold transition-colors cursor-pointer text-xs break-all">info@threepillarsproperties.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/', internal: true },
                { label: 'Services', to: '/services', internal: true },
                { label: 'Pricing', to: '/pricing', internal: true },
                { label: 'About Us', to: '/about', internal: true },
                { label: 'Contact', to: '/contact', internal: true },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-cream/65 hover:text-gold transition-colors cursor-pointer">{l.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
                  className="text-cream/65 hover:text-gold transition-colors cursor-pointer flex items-center gap-1">
                  Apply for a Rental <i className="ri-external-link-line text-xs"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Owner Resources */}
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">Owner Resources</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
                  className="text-gold font-semibold hover:text-gold-light transition-colors cursor-pointer flex items-center gap-1.5">
                  <i className="ri-shield-keyhole-line text-sm"></i> Owner Portal Login
                </a>
              </li>
              <li><Link to="/pricing" className="text-cream/65 hover:text-gold transition-colors cursor-pointer">View Pricing</Link></li>
              <li><Link to="/contact" className="text-cream/65 hover:text-gold transition-colors cursor-pointer">Free Property Analysis</Link></li>
              <li><Link to="/contact" className="text-cream/65 hover:text-gold transition-colors cursor-pointer">Schedule a Consultation</Link></li>
            </ul>
            <div className="mt-5 p-3 bg-cream/5 rounded-lg border border-gold/15">
              <p className="text-cream/50 text-xs leading-relaxed">Serving Fort Meade · Anne Arundel County · All of Maryland</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-cream/10 space-y-2">
          <p className="text-cream/35 text-xs text-center">
            Three Pillars Property Management is a licensed property management company in the state of Maryland.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-cream/30 text-xs">&copy; {new Date().getFullYear()} Three Pillars Property Management LLC. All rights reserved.</p>
            <div className="flex items-center gap-5 text-xs text-cream/30">
              <a href="#" className="hover:text-cream/60 transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-cream/60 transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-cream/60 transition-colors cursor-pointer">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
