import { Leaf, Stack, Drop } from '@phosphor-icons/react';
import CTABanner from '../components/ui/CTABanner';
import logoIcon from '../assets/logo-icon.png';
import fabricTexture from '../assets/fabric-texture.jpg';
import groupPro from '../assets/Group-pro.png';

// Place your images in src/assets/products/
import productsHero    from '../assets/products/hero.jpg';
import capBedLinen     from '../assets/products/cap-bed-linen.jpg';
import capHomeTextile  from '../assets/products/cap-home-textile.jpg';
import capWovenFabrics from '../assets/products/cap-woven-fabrics.jpg';
import capCustom       from '../assets/products/cap-custom-technical.jpg';
import capGarments     from '../assets/products/cap-garments.jpg';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white py-16 border-b border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <h1
              className="text-[42px] md:text-[50px] font-semibold leading-tight text-text-primary mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Textile Categories<br />We Execute With Confidence
            </h1>
            <p className="text-text-secondary text-base leading-relaxed max-w-[500px]">
              DIDOSIA does not offer catalogs or finished SKUs. We operate across core woven textile
              categories where Egypt has proven, repeatable manufacturing strength.
              Our scope reflects capability, not inventory.
            </p>
          </div>

          {/* Right: hero image */}
          <div className="h-[280px] md:h-[320px] overflow-hidden rounded-xl bg-bg-muted">
            <img
              src={productsHero}
              alt="Egyptian textile fabrics"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── The Quality Framework ────────────────────────────────────────────────────
function QualityFramework() {
  return (
    <section
      className="w-full py-12 relative overflow-hidden border-y border-brand-primary/20"
      style={{ backgroundImage: `url(${fabricTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Decorative asset — right side (full height) */}
      <img
        src={groupPro} alt="" aria-hidden
        className="absolute right-0 top-0 bottom-0 h-full opacity-20 pointer-events-none select-none object-cover"
      />
      {/* Bottom center wheat */}
      <img
        src={logoIcon} alt="" aria-hidden
        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-8 opacity-50 pointer-events-none select-none"
      />

      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        <h2
          className="text-text-primary text-lg font-semibold mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The Quality Framework
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            'Proven Manufacturing: Established Weaving & Finishing In Egypt.',
            'Controlled Execution: Factories We Effectively Oversee And Manage.',
            'Container-Level Success: Reliable Execution For International Buyers.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
              <span className="text-brand-primary text-xs shrink-0 mt-0.5">✦</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Capability Overview ──────────────────────────────────────────────────────
const capabilities = [
  {
    title: 'Bed Linen & Bedding Textiles',
    description: 'Precision categories where consistency makes all the difference.',
    image: capBedLinen,
  },
  {
    title: 'Home & Household Textiles',
    description: 'Comprehensive home textile programs spanning decorative and functional end uses.',
    image: capHomeTextile,
  },
  {
    title: 'Woven Fabrics (Greige & Finished)',
    description: 'For buyers sourcing fabric directly from the source.',
    image: capWovenFabrics,
  },
  {
    title: 'Contract & Technical Textiles',
    description: 'Specification-driven production for industrial and functional applications.',
    image: capCustom,
  },
  {
    title: 'Garments & CMT Production',
    description: 'Cut, make, trim production with full inline quality oversight.',
    image: capGarments,
  },
];

function CapabilityOverview() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Capability Overview
        </h2>

        {/* Horizontal scroll on mobile/tablet, grid on large screens */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="shrink-0 w-[200px] lg:w-auto snap-start flex flex-col group"
            >
              {/* Image */}
              <div className="h-[180px] overflow-hidden rounded-lg bg-bg-muted mb-4 border border-border-default/30">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text */}
              <h3
                className="text-text-primary text-sm font-semibold mb-1.5 leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {cap.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Superior Inputs & Materials ─────────────────────────────────────────────
const materials = [
  {
    title: 'Egyptian Cotton',
    description: 'Sourcing various staple lengths tailored to your specific product requirements.',
    icon: <Leaf size={36} weight="light" />,
  },
  {
    title: 'Blended Yarns',
    description: 'Technically engineered blends designed for durability, performance, and cost-efficiency.',
    icon: <Stack size={36} weight="light" />,
  },
  {
    title: 'Custom Dyeing & Finishing',
    description: 'Tailored chemical and mechanical processes to achieve your exact color and hand-feel specifications.',
    icon: <Drop size={36} weight="light" />,
  },
];

function SuperiorMaterials() {
  return (
    <section className="w-full py-20 bg-white border-t border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-14"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Superior Inputs & Materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {materials.map((mat) => (
            <div
              key={mat.title}
              className="flex flex-col items-center text-center rounded-xl border border-border-default/50 p-10 hover:border-brand-primary/40 transition-colors duration-200"
            >
              <div className="text-text-secondary mb-5">{mat.icon}</div>
              <h3
                className="text-text-primary font-semibold mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {mat.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{mat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <main className="w-full">
      <Hero />
      <QualityFramework />
      <CapabilityOverview />
      <SuperiorMaterials />
      <CTABanner />
    </main>
  );
}