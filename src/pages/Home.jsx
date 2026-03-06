import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Boat, Tag, Buildings, SquaresFour, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import heroBg from '../assets/hero-bg.png';
import shotAsset from '../assets/Group 1686.png';
import logoIcon from '../assets/logo-icon.png';
import worldMap from '../assets/world-map.png';
import fabricTexture from '../assets/fabric-texture.jpg';
import qualityImage from '../assets/Screenshot 2026-02-26 041425.png';
import CTABanner from '../components/ui/CTABanner';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Al-Mahalla Al-Kubra" className="w-full h-full object-cover object-center sm:object-top" />
        <div className="absolute inset-0 bg-black/55 sm:bg-black/50 md:bg-black/55" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-8 mx-auto py-24">
        <h1
          className="text-[42px] md:text-[46px] font-semibold leading-tight text-white mt-15 mb-5 w-full"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          End-To-End Textile Sourcing From Egypt
        </h1>
        <p 
          className="text-white text-base md:text-[24px] mb-5 leading-relaxed"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Rooted in Egypt's Ancient Textile Capital <br /> Serving Global Markets
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-primary text-text-primary md:text-[16px] font-medium px-8 py-3.5 hover:bg-brand-secondary transition-colors duration-200 text-sm"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Chat with our Expert
        </Link>
      </div>
    </section>
  );
}

// ─── Representation (inlined from external file) ─────────────────────────────
function Representation() {
  return (
    <section className="w-full relative overflow-hidden py-16">
      {/* ── Fabric texture background ── */}
      <div className="absolute inset-0 z-0">
        <img src={fabricTexture} alt="" aria-hidden className="w-full h-full object-cover" />
        {/* Warm tint to match Figma tone */}
        <div className="absolute inset-0 bg-[#ede8df]/50" />
      </div>

      {/* ── 4 logos — one centered on each rectangle side ── */}
      {/* Top center */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[5%] h-14 opacity-25 rotate-180 pointer-events-none select-none z-10"
      />
      {/* Bottom center */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-5%] h-14 opacity-25 rotate-0 pointer-events-none select-none z-10"
      />
      {/* Left center — rotated so it faces inward */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[25%] h-14 opacity-25 rotate-90 pointer-events-none select-none z-10"
      />
      {/* Right center */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[25%] h-14 opacity-25 -rotate-90 pointer-events-none select-none z-10"
      />

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto page-x p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          

          {/* Left: text */}
          <div>
            <h2
              className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-7 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your On-The-Ground Representation In Egypt
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Our Operational Home Is In Al-Mahalla El-Kubra, Egypt's Thriving Textile Manufacturing Hub",
                'We Maintain A Buyer-Focused Commercial Presence In Germany',
                "This Means We're Right Where Production Happens And Always Available Where You Make Decisions.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0 mt-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: transparent world map blending into fabric bg */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={worldMap}
              alt="World map showing Egypt and Germany locations"
              className="w-full max-w-[520px] h-[80%] object-contain"
              style={{ opacity: 0.88 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Why Buyers Love DIDOSIA ──────────────────────────────────────────────────
const whyUs = [
  {
    title: 'Consistent Quality',
    description: 'We Control Processes From Start To Finish, Not Just Inspect At The End',
  },
  {
    title: 'On-Time Delivery',
    description: 'We Monitor Timelines Locally And Give You Early Heads-Up If Anything Changes',
  },
  {
    title: 'Crystal Clear Communication',
    description: 'We Bridge Language, Culture, And Manufacturing Realities So Nothing Gets Lost',
  },
];

function WhyUs() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="text-center mb-10">
          <h2
            className="text-[32px] md:text-[36px] font-semibold text-text-primary mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Buyers Love Working With DIDOSIA
          </h2>
          <p className="text-text-secondary text-sm">
            DIDOSIA Was Created To Solve The Three Biggest Challenges Buyers Face When Sourcing From Egypt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border-default/60 p-7 hover:border-brand-primary/40 transition-colors duration-200"
            >
              <h3
                className="text-text-primary text-base font-semibold mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Clients ──────────────────────────────────────────────────────────────
const clientTypes = [
  { icon: <Boat size={48} weight="light" />,        label: 'Importers & Distributors.' },
  { icon: <Tag size={48} weight="light" />,          label: 'Retail & Private-Label Brands' },
  { icon: <Buildings size={48} weight="light" />,   label: 'Hospitality & Contract Buyers' },
  { icon: <SquaresFour size={48} weight="light" />, label: 'Wholesalers & Procurers' },
];

function OurClients() {
  return (
    <section className="w-full py-16 bg-white border-t border-border-default/30">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clientTypes.map((client) => (
            <div
              key={client.label}
              className="rounded-lg border border-border-default/60 flex flex-col items-center justify-center gap-4 py-10 px-5 hover:border-brand-primary/40 hover:bg-bg-muted/20 transition-colors duration-200 text-center"
            >
              <span className="text-text-secondary">{client.icon}</span>
              <p
                className="text-text-primary text-sm font-semibold leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {client.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How We Keep Everything Running Smoothly — Carousel ──────────────────────
const operations = [
  {
    number: '1',
    title: 'One Point Of Contact',
    description: "You'll Have A Dedicated Representative Who Owns Your Project From Start To Finish",
  },
  {
    number: '2',
    title: 'Verified Capabilities',
    description: "We Thoroughly Check Each Factory's Abilities Before Making Any Commitments",
  },
  {
    number: '3',
    title: 'Regular Check-Ins',
    description: 'Quality Inspections Happen Throughout Production, Not Just At The End',
  },
  {
    number: '4',
    title: 'Local Problem-Solving',
    description: 'Our Team Can Step In Immediately In Case Any Issues Arise',
  },
  {
    number: '5',
    title: 'Full Transparency',
    description: "You'll Get Structured Updates And Complete Visibility At Every Stage",
  },
];



function HowWeOperate() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
  const updateVisible = () => {
    if (window.innerWidth < 640) {
      setVisibleCount(1); // mobile
    } else if (window.innerWidth < 1024) {
      setVisibleCount(2); // tablet
    } else {
      setVisibleCount(3); // desktop
    }
  };

  updateVisible();
  window.addEventListener("resize", updateVisible);
  return () => window.removeEventListener("resize", updateVisible);
}, []);
  const maxIndex = operations.length - visibleCount;
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: '#1a1f21' }}
    >
      {/* layout asset */}
      <img
        src={shotAsset}
        alt=""
        aria-hidden
        className="pointer-events-none select-none"
        style={{
          opacity: 0.6,
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(0deg)',
        }}
      />

      {/* ── Content ── */}
      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10 pt-10 pb-8">

        {/* Header row: title left, arrows right */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-[26px] md:text-[34px] font-semibold text-white leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            How We Keep Everything Running Smoothly
          </h2>
          <div className="flex items-center gap-3 shrink-0 ml-6">
            <button onClick={prev} disabled={current === 0}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-brand-primary hover:text-brand-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous">
              <ArrowLeft size={16} />
            </button>
            <button onClick={next} disabled={current >= maxIndex}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-brand-primary hover:text-brand-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Cards — full section height, dashed connectors between */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 5px / ${visibleCount})))` }}
          >
            {operations.map((op, idx) => (
              <div key={op.number} className="shrink-0 flex items-stretch"
                style={{ width: `calc(100% / ${visibleCount})`, paddingRight: idx < operations.length - 1 ? '0' : '0' }}>
                {/* Card */}
                <div className="flex-1 min-w-0 bg-white rounded-lg mx-2 sm:mx-3 p-8 flex flex-col gap-4 min-h-[180px]">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-primary text-xl font-bold leading-none"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                      {op.number}
                    </span>
                    <h3 className="text-text-primary text-base font-semibold leading-snug"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                      {op.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{op.description}</p>
                </div>
                {/* Dashed connector between cards */}
                {idx < operations.length - 1 && (
                  <div className="flex items-center shrink-0 w-4">
                    <div className="w-full border-t border-dashed border-brand-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── The Distinction Of Quality ───────────────────────────────────────────────
const qualityPoints = [
  {
    title: 'Material Control',
    description: 'Fiber selection, specifications, and finishing parameters are defined before production begins.',
  },
  {
    title: 'Compliance & Standards',
    description: 'Quality protocols and compliance requirements are embedded into every production stage.',
  },
  {
    title: 'Production Discipline',
    description: 'Output consistency is maintained through checkpoints, sampling reviews, and on-ground supervision.',
  },
  {
    title: 'End-to-End Oversight',
    description: 'Visibility and accountability are maintained from sourcing through final shipment.',
  },
];

function QualityDistinction() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-14"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The Distinction Of Quality
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: image — no border box */}
          <div className="rounded-sm overflow-hidden bg-bg-muted h-[420px] lg:h-[500px]">
            <img
              src={qualityImage}
              alt="Quality textile measurement"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: quality points with ✦ icon */}
          <div className="flex flex-col gap-8">
            {qualityPoints.map((point) => (
              <div key={point.title}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-primary text-sm">✦</span>
                  <h4
                    className="text-text-primary font-semibold text-base"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {point.title}
                  </h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-5">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Representation />
      <WhyUs />
      <OurClients />
      <HowWeOperate />
      <QualityDistinction />
      <CTABanner />
    </main>
  );
}