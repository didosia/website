import { useState } from 'react';
import { LinkedinLogo, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
import logoIcon from '../assets/logo-icon.png';
import contactDeco from '../assets/Group-con.png';
import EgFlag from '../assets/Eg-Flag.png';
import GerFlag from '../assets/Ger-Flag.png';

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
    <section className="w-full bg-bg-dark py-8 relative overflow-hidden" style={{ backgroundColor: '#1a1f21' }}>
      {/* Wheat decoration — bottom left and right */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 left-4 h-14 opacity-50 pointer-events-none select-none"/>
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 right-4 h-14 opacity-50 pointer-events-none select-none scale-x-[-1]" />

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1140px] mx-auto">

          {/* Egypt */}
          <div className="rounded-[20px] bg-[#1a1f21] p-6 flex flex-col gap-4 border border-solid border-[#9A9A92]">
            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-xl"><
                img src={EgFlag} alt="Egypt Flag" />
              </span>
              <span
                className="text-white font-semibold text-[18px]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Egypt
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 text-white/80 text-[14px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <svg className="shrink-0 text-white/60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +20 106 040 0903
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 text-white/80 text-[14px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <svg className="shrink-0 text-white/60 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Al-Mahalla El-Kubra (Part 2) Gharbia Governorate, Egypt
            </div>
          </div>

          {/* Germany */}
          <div className="rounded-[20px] bg-[#1a1f21] p-6 flex flex-col gap-4 border border-solid border border-[#9A9A92]">
            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <img src={GerFlag} alt="Germany Flag" />
              </span>
              <span
                className="text-white font-semibold text-[18px]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Germany
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 text-white/80 text-[14px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <svg className="shrink-0 text-white/60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +49 155 681 98104
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 text-white/80 text-[14px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <svg className="shrink-0 text-white/60 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Frankenbacher Straße 11574078 eilbronn, Germany
            </div>
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
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMuLOu5G3Ftyr5gSoYR-QQqEtL2R3j6GadE_rw7XPUagwCTZ41IILLYwC2SlSV1T_l/exec";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("company", form.company);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,   // ← FormData, no Content-Type header
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong. Please try again or email us directly at info@didosia.com");
    } finally {
      setLoading(false);
    }
  };

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
                    disabled={loading}
                    className="bg-brand-primary text-text-primary font-medium px-8 py-3 hover:bg-brand-secondary transition-colors duration-200 text-sm disabled:opacity-50"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
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