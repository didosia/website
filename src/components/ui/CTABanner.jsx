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
    <section
      className="relative overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-16"
      style={{ backgroundColor: '#1a1f21' }}
    >
      {/* Decorative wheat icons bottom corners */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none">
        <img src={wheatLeft} alt="" className="h-14 sm:h-20 object-contain opacity-80" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img src={wheatRight} alt="" className="h-14 sm:h-20 object-contain opacity-80" />
      </div>

      <div className="max-w-[1440px] mx-auto text-center relative z-10 flex flex-col items-center gap-4 md:gap-6">
        <h2
          className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-white leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
        <p className="text-white/60 text-sm sm:text-base">{subtitle}</p>

        <Link
          to={buttonTo}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-brand-primary bg-brand-primary text-text-primary text-sm font-medium hover:bg-brand-secondary transition-colors duration-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}