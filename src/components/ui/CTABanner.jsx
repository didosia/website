import { Link } from 'react-router-dom';
import wheatLeft from '../../assets/logo 3.png';
import wheatRight from '../../assets/logo 2.png';

/**
 * Shared CTA Banner — dark bg, wheat decoration bottom-left,
 * outlined gold button. Used at the bottom of every page.
 */
export default function CTABanner({
  title = 'Ready To Start Sourcing?',
  subtitle = 'Tell us about your requirements and let us show you how we can help.',
  buttonText = 'Talk to Our Team',
  buttonTo = '/contact',
}) {
  return (
    <section className="bg-bg-dark py-20 page-x relative overflow-hidden">
      {/* Decorative wheat icons bottom corners */}
      <div className="absolute bottom-0 left-6 pointer-events-none select-none" >
        <img src={wheatLeft} alt="" className="h-20 object-contain opacity-50" />
      </div>
      <div className="absolute bottom-0 right-6 pointer-events-none select-none">
        <img src={wheatRight} alt="" className="h-20 object-contain opacity-50" />
      </div>

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2
          className="text-[40px] font-semibold text-white mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
        <p className="text-white/60 text-base mb-10">{subtitle}</p>

        {/* Outlined gold button — matches Figma */}
        <Link
          to={buttonTo}
          className="inline-flex items-center justify-center px-8 py-3 border border-brand-primary text-brand-primary text-sm font-medium hover:bg-brand-primary hover:text-text-primary transition-colors duration-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}