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
    <section className="bg-dark py-10 page-x relative overflow-hidden h-[252px]"
    style={{ backgroundColor: '#1a1f21' }}>
      {/* Decorative wheat icons bottom corners */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none" >
        <img src={wheatLeft} alt="" className="h-20 object-contain opacity-80" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img src={wheatRight} alt="" className="h-20 object-contain opacity-80" />
      </div>

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2
          className="text-[48px] font-bold text-white mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
        <p className="text-white/60 text-base mb-10">{subtitle}</p>

        {/* Outlined gold button — matches Figma */}
        <Link
          to={buttonTo}
          className=" bg-brand-primary items-center justify-center px-8 py-3 border border-brand-primary text-text-primary text-sm font-medium hover:bg-brand-primary hover:bg-brand-secondary transition-colors duration-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}