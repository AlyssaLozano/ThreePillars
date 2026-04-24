import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Owner Portal', path: '/owner-portal' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-cream shadow-sm border-b border-gold/20' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/2ccb17bce31e94e46580e45d7ffbd5c6.png"
            alt="Three Pillars Property Management"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap ${isActive(link.path) ? 'text-gold' : 'text-navy hover:text-gold'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/military-owners"
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${isActive('/military-owners') ? 'text-gold' : 'text-gold hover:text-gold-dark'}`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-shield-star-fill text-xs"></i>
            </div>
            Military Owners
          </Link>
          <a
            href="https://threepillars.managebuilding.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-sm font-medium text-charcoal hover:text-gold transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Apply for a Rental
          </a>
          <a
            href="https://threepillars.managebuilding.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="px-4 py-2 bg-gold text-navy text-sm font-semibold rounded-md hover:bg-gold-light transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <i className="ri-shield-keyhole-line text-sm"></i>
            Owner Login
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-t border-gold/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium cursor-pointer ${isActive(link.path) ? 'text-gold' : 'text-navy hover:text-gold'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/military-owners"
            className="text-base font-semibold text-gold flex items-center gap-2 cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-shield-star-fill text-sm"></i>
            </div>
            Military Owners
          </Link>
          <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
            className="text-base font-medium text-charcoal hover:text-gold cursor-pointer">
            Apply for a Rental
          </a>
          <a href="https://threepillars.managebuilding.com" target="_blank" rel="nofollow noopener noreferrer"
            className="mt-1 px-5 py-3 bg-gold text-navy text-sm font-semibold rounded-md text-center cursor-pointer flex items-center justify-center gap-2">
            <i className="ri-shield-keyhole-line"></i> Owner Login
          </a>
        </div>
      )}
    </header>
  );
}
