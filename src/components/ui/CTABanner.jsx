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
    <section className="py-16 md:py-20 lg:py-24 page-x px-4 relative overflow-hidden"
    style={{ backgroundColor: '#1a1f21' }}>
      {/* Decorative wheat icons bottom corners */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none" >
        <img src={wheatLeft} alt="" className="h-24 md:h-28 object-contain opacity-60" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img src={wheatRight} alt="" className="h-24 md:h-28 object-contain opacity-60" />
      </div>

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2
          className="text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-white mb-4 md:mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
        <p className="text-white/70 text-base md:text-[16px] mb-8 md:mb-10 leading-relaxed">{subtitle}</p>

        {/* Outlined gold button — matches Figma */}
        <Link
          to={buttonTo}
          className="inline-flex bg-brand-primary items-center justify-center px-8 md:px-10 py-3 md:py-3.5 text-text-primary text-sm md:text-base font-medium hover:bg-brand-secondary transition-colors duration-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}