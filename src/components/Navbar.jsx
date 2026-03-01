import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

const navLinks = [
  { label: 'Home',     to: '/',        end: true },
  { label: 'About Us', to: '/about',   end: false },
  { label: 'Services', to: '/services',end: false },
  { label: 'Products', to: '/products',end: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-brand-primary/30 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto page-x h-16 flex items-center justify-between">

        {/* Logo — wheat icon stacked above DIDOSIA text */}
        <Link to="/" className="flex flex-col items-center shrink-0">
          <img src={logoIcon} alt="DIDOSIA" className="h-6 object-contain" />
          <span
            className="text-text-primary text-[11px] font-bold tracking-[0.3em] uppercase leading-none mt-0.5"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            DIDOSIA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-[15px] transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-primary font-medium'
                    : 'text-text-muted hover:text-text-primary font-normal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-brand-primary text-text-primary text-sm font-medium px-5 py-2 hover:bg-brand-secondary transition-colors duration-200"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-primary/20 px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-[15px] ${isActive ? 'text-brand-primary font-medium' : 'text-text-muted'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-primary text-text-primary text-sm font-medium px-5 py-2.5 text-center hover:bg-brand-secondary transition-colors duration-200 mt-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}