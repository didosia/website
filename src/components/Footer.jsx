import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

const footerLinks = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Products', to: '/products' },
    { label: 'About Us', to: '/about' },
  ],
  Resources: [
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/contact' },
    { label: 'Al-Mahalla Ecosystem', to: '/about' },
    { label: 'Our Process', to: '/services' },
  ],
};

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Didosia/61588638628551/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/didosia.tex',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://de.linkedin.com/company/didosia',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-default/40">
      <div className="max-w-[1440px] mx-auto page-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex flex-col items-start w-fit">
              <img src={logoIcon} alt="DIDOSIA" className="h-10 object-contain mb-1" />
              <span
                className="text-text-primary tracking-[0.28em] text-sm font-bold uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                DIDOSIA
              </span>
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed">
              Crafting Egyptian Excellence for the World
            </p>

            <div>
              <p className="text-text-primary text-xs font-medium mb-3">Follow Us :</p>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-border-default/50 flex items-center justify-center text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company & Resources */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4
                className="text-text-primary text-base font-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-text-secondary text-sm hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-text-primary text-base font-semibold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: 'pin',   text: 'Al-Mahalla El-Kubra, Egypt' },
                { icon: 'pin',   text: 'Heilbronn, Germany' },
                { icon: 'mail',  text: 'info@didosia.com' },
                { icon: 'phone', text: '+201060400903' },
                { icon: 'phone', text: '+4915568198104' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-text-secondary text-sm">
                  {item.icon === 'pin' && (
                    <svg className="shrink-0 text-brand-primary" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                  {item.icon === 'mail' && (
                    <svg className="shrink-0 text-brand-primary" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  {item.icon === 'phone' && (
                    <svg className="shrink-0 text-brand-primary" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  )}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-default/40">
        <div className="max-w-[1440px] mx-auto page-x py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-xs">© 2026 Didosia. All rights reserved.</p>
          <p className="text-text-muted text-xs">Textile Sourcing & Manufacturing Facilitation</p>
        </div>
      </div>
    </footer>
  );
}