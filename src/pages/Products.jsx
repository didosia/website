import { Leaf, Stack, Drop } from '@phosphor-icons/react';
import CTABanner from '../components/ui/CTABanner';
import logoIcon from '../assets/logo-icon.png';
import fabricTexture from '../assets/fabric-texture.jpg';
import groupPro from '../assets/Group-pro.png';

// Place your images in src/assets/products/
import productsHero    from '../assets/products/hero.jpg';
import capTerryBath     from '../assets/products/cap-bed-linen.jpg';
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
          <div className="w-full">
            <h1
              className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-tight text-text-primary mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Textile Categories<br />We Execute With Confidence
            </h1>
            <p
              className="text-text-secondary leading-relaxed w-full text-[16px] sm:text-[18px] lg:text-[20px]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              DIDOSIA does not offer catalogs or finished SKUs. We operate across core woven textile
              categories where Egypt has proven, repeatable manufacturing strength.
              Our scope reflects capability, not inventory.
            </p>
          </div>

          {/* Right: hero image */}
          <div className="w-full h-[280px] sm:h-[340px] lg:h-[403px] overflow-hidden rounded-xl bg-bg-muted">
            <img
              src={productsHero}
              alt="Egyptian textile fabrics"
              className="w-full h-full object-cover object-bottom"
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
          className="text-text-primary text-lg font-bold mb-6"
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
            <li key={i} className="flex items-start gap-3 leading-relaxed font-medium not-italic text-base leading-[1.2] align-middle capitalize">
              <span className="shrink-0 mt-0.5" style={{color:"#111827"}}>✦</span>
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
    title: 'Terry & Bath Textiles',
    description: 'Egypt\'s strongest and most celebrated textile specialty.',
    image: capTerryBath,
  },
  {
    title: ' Bed Linen & Bedding Textiles',
    description: 'Precision categories where consistency makes all the difference.',
    image: capHomeTextile,
  },
  {
    title: 'Home & Household Textiles',
    description: 'Comprehensive home textile programs spanning decorative and functional end uses.',
    image: capWovenFabrics,
  },
  {
    title: ' Woven Fabrics (Greige & Finished)',
    description: 'For buyers sourcing fabric directly from the source.',
    image: capCustom,
  },
  {
    title: 'Contract & Custom Textile Programs ',
    description: 'Specification-driven programs beyond standard categories.',
    image: capGarments,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CapabilityOverview() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Capability Overview
        </h2>

        {/* ── Carousel on mobile/tablet, grid on lg+ ── */}

        {/* Mobile/tablet: Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0:   { slidesPerView: 1.2 },
              480: { slidesPerView: 2.1 },
              768: { slidesPerView: 3.1 },
            }}
            className="!pb-10"
          >
            {capabilities.map((cap) => (
              <SwiperSlide key={cap.title}>
                <CapabilityCard cap={cap} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: static 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-5">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ cap }) {
  return (
    <div className="flex flex-col group w-full">
      <div className="h-[180px] sm:h-[220px] overflow-hidden rounded-lg bg-bg-muted mb-4 border border-border-default/30">
        <img
          src={cap.image}
          alt={cap.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3
        className="text-text-primary text-sm font-semibold mb-1.5 leading-snug"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {cap.title}
      </h3>
      <p className="text-text-muted text-xs leading-relaxed">
        {cap.description}
      </p>
    </div>
  );
}

// ─── Sample Work & Product Examples ──────────────────────────────────────────
function SampleWork() {
  return (
    <section className="w-full py-12 relative overflow-hidden border-y border-brand-primary/200"
    style={{ backgroundImage: `url(${fabricTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

      <div className="w-full max-w-[1440px] mx-auto page-x flex flex-col items-center text-center">
        <h2
          className="text-[32px] md:text-[36px] font-bold text-text-primary mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Review our Sample Work & Product Examples
        </h2>
        <p
          className="text-text-secondary text-[16px] sm:text-[18px] leading-relaxed max-w-[600px] mb-10 font-semibold"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Browse through real product examples and sample outputs that reflect the quality and
          breadth of what DIDOSIA executes across our textile categories.
        </p>
        
        <a
          href="https://docs.google.com/document/d/1wVOEdKp2bnPUUMEULwgtWkeRIP8VaJTBsEz3cTm6nio/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-text-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-primary transition-colors duration-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Click Here
        </a>
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
      <SampleWork /> 
      <SuperiorMaterials />
      <CTABanner />
    </main>
  );
}