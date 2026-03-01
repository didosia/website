import { useState } from 'react';
import { LinkedinLogo, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
import logoIcon from '../assets/logo-icon.png';
import contactDeco from '../assets/Group-con.png';
import egAsset from '../assets/Group-eg.png';
import gerAsset from '../assets/Group-ger.png';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white pt-14 pb-0 relative overflow-hidden">
      {/* Decorative asset — top right (full height) */}
      <img
        src={contactDeco}
        alt=""
        aria-hidden
        className="absolute right-0 top-0 bottom-0 h-full opacity-25 pointer-events-none select-none object-cover"
      />

      <div className="w-full max-w-[1440px] mx-auto page-x pb-10 relative z-10 text-center">
        <h1
          className="text-[36px] md:text-[42px] font-semibold text-text-primary mb-4 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Get In Touch With Our Team
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed max-w-[560px] mx-auto">
          We engage with international buyers seeking structured sourcing, production oversight,
          and long-term partnership.
        </p>
      </div>
    </section>
  );
}

// ─── Contact Info Strip ───────────────────────────────────────────────────────
function ContactStrip() {
  return (
    <section className="w-full bg-bg-dark py-8 relative overflow-hidden">
      {/* Wheat decoration — bottom left and right */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 left-4 h-14 opacity-25 pointer-events-none select-none" />
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 right-4 h-14 opacity-25 pointer-events-none select-none scale-x-[-1]" />

      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        {/* Email centered */}
        <div className="flex justify-center mb-7">
          <a
            href="mailto:info@didosia.com"
            className="flex items-center gap-2 text-white/80 text-sm hover:text-brand-primary transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-brand-primary">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            info@didosia.com
          </a>
        </div>

        {/* Two office columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[760px] mx-auto divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* Egypt image */}
          <div className="px-6 py-2 flex items-center justify-center">
            <img src={egAsset} alt="Egypt office" aria-hidden className="w-full max-w-[420px] object-contain" />
          </div>

          {/* Germany image */}
          <div className="px-6 py-2 flex items-center justify-center">
            <img src={gerAsset} alt="Germany office" aria-hidden className="w-full max-w-[420px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Form + Social ────────────────────────────────────────────────────────────
const socials = [
  { label: 'LinkedIn',  href: 'https://de.linkedin.com/company/didosia', Icon: LinkedinLogo  },
  { label: 'Facebook',  href: 'https://www.facebook.com/people/Didosia/61588638628551/', Icon: FacebookLogo  },
  { label: 'Instagram', href: 'https://www.instagram.com/didosia.tex', Icon: InstagramLogo },
];

function FormAndSocial() {
  const [form, setForm] = useState({ fullName: '', company: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full border border-border-default/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors duration-200 bg-white rounded-sm";

  return (
    <section className="w-full py-14 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-14">

          {/* Left: Follow Us */}
          <div>
            <p className="text-text-primary text-sm font-semibold mb-6">Follow Us :</p>
            <div className="flex flex-col gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary text-sm hover:text-brand-primary transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-full border border-border-default/50 flex items-center justify-center group-hover:border-brand-primary group-hover:text-brand-primary transition-colors duration-200">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2
              className="text-[22px] font-semibold text-text-primary mb-7"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Send a Sourcing Inquiry
            </h2>

            {submitted ? (
              <div className="border border-brand-primary/30 bg-bg-muted/40 p-10 text-center max-w-[620px]">
                <div className="w-10 h-10 rounded-full border border-brand-primary flex items-center justify-center mx-auto mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-text-primary font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Inquiry Received
                </h3>
                <p className="text-text-muted text-sm">
                  We'll review your requirements and get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[760px]">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" className={inputClass} />
                </div>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Business Email" className={inputClass} />
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject Line" className={inputClass} />
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your needs" rows={6}
                  className={`${inputClass} resize-none`} />
                <div className="pt-1">
                  <button
                    type="submit"
                    className="bg-brand-primary text-text-primary font-medium px-8 py-3 hover:bg-brand-secondary transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <main className="w-full">
      <Hero />
      <ContactStrip />
      <FormAndSocial />
    </main>
  );
}