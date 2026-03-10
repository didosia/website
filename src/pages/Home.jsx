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
import Vector from '../assets/Vector.png';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[467px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Al-Mahalla Al-Kubra" className="w-full h-full object-cover object-center sm:object-top" />
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 text-center mx-auto px-6 sm:px-12 md:px-16 lg:px-[104px] py-12 md:py-[60px]">
        <h1
          className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-bold leading-tight text-white w-full"
          style={{ fontFamily: 'Playfair Display, serif', marginBottom: '24px', fontWeight: 700 }}
        >
          End-To-End Textile Sourcing From Egypt
        </h1>
        <p
          className="text-white text-center w-full text-[16px] sm:text-[20px] md:text-[24px] leading-snug"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 400,
            letterSpacing: '0%',
            marginBottom: '24px'
          }}
        >
          Rooted in Egypt's Ancient Textile Capital <br className="hidden sm:block" /> Serving Global Markets
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-brand-primary text-text-primary hover:bg-brand-secondary transition-colors duration-200 px-6 h-12 md:h-[52px] text-[15px] md:text-[16px]"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0%',
            opacity: 1
          }}
        >
          Chat with our Expert
        </Link>
      </div>
    </section>
  );
}

// ─── Representation ───────────────────────────────────────────────────────────
function Representation() {
  return (
    <section className="w-full relative overflow-hidden py-12 md:py-[60px] px-4 sm:px-8 lg:px-16">
      {/* Fabric texture background */}
      <div className="absolute inset-0 z-0">
        <img src={fabricTexture} alt="" aria-hidden className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#ede8df]/50" />
      </div>

      {/* 4 logos — one on each side */}
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[5%] h-14 opacity-25 rotate-180 pointer-events-none select-none z-10"
      />
      <img src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[5%] h-14 opacity-25 rotate-0 pointer-events-none select-none z-10"
      />
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[25%] h-14 opacity-25 rotate-90 pointer-events-none select-none z-10"
      />
      <img src={logoIcon} alt="" aria-hidden
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[25%] h-14 opacity-25 -rotate-90 pointer-events-none select-none z-10"
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-8 lg:gap-8">

          {/* Left: text */}
          <div>
            <h2
              className="text-text-primary leading-tight text-[24px] sm:text-[28px] md:text-[32px] w-full"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0%',
                marginBottom: '24px',
                textTransform: 'capitalize',
                opacity: 1
              }}
            >
              Your On-The-Ground Representation In Egypt
            </h2>
            <ul className="flex flex-col gap-5 md:gap-8 w-full">
              {[
                "Our Operational Home Is In Al-Mahalla El-Kubra, Egypt's Thriving Textile Manufacturing Hub",
                'We Maintain A Buyer-Focused Commercial Presence In Germany',
                "This Means We're Right Where Production Happens And Always Available Where You Make Decisions.",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 leading-relaxed text-[15px] sm:text-[17px] md:text-[20px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    textTransform: 'capitalize',
                    color: '#6B7280'
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-text-secondary shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: world map */}
          <div className="flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src={worldMap}
              alt="World map showing Egypt and Germany locations"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] object-contain"
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
    <section className="w-full bg-white border-b border-border-default/30 py-8 md:py-10 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2
            className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-text-primary mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Buyers Love Working With DIDOSIA
          </h2>
          <p
            className="text-text-secondary text-[14px] sm:text-[16px] md:text-[20px] leading-snug w-full"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'capitalize',
              opacity: 1
            }}
          >
            DIDOSIA Was Created To Solve The Three Biggest Challenges Buyers Face When Sourcing From Egypt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="rounded-lg p-6 md:p-8 hover:border-brand-primary/40 transition-colors duration-200"
              style={{ border: '2px solid #e5e7eb' }}
            >
              <h3
                className="text-text-primary mb-4 text-[20px] md:text-[24px]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  lineHeight: '32px',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-text-secondary"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Clients ──────────────────────────────────────────────────────────────
const clientTypes = [
  { icon: <Boat size={44} weight="light" />,        label: 'Importers & Distributors.' },
  { icon: <Tag size={44} weight="light" />,          label: 'Retail & Private-Label Brands' },
  { icon: <Buildings size={44} weight="light" />,   label: 'Hospitality & Contract Buyers' },
  { icon: <SquaresFour size={44} weight="light" />, label: 'Wholesalers & Procurers' },
];

function OurClients() {
  return (
    <section className="w-full bg-white py-8 md:py-10 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        <h2
          className="text-center text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-text-primary"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {clientTypes.map((client) => (
            <div
              key={client.label}
              className="rounded-lg border border-border-default/40 flex flex-col items-center justify-center gap-4 py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 hover:border-brand-primary/60 hover:shadow-sm transition-all duration-200 text-center"
            >
              <span className="text-text-secondary text-4xl sm:text-5xl md:text-6xl">{client.icon}</span>
              <p
                className="text-text-primary text-[16px] sm:text-[18px] md:text-[24px]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
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
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = operations.length - visibleCount;
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section
      className="w-full relative overflow-hidden py-10 sm:py-12 md:py-[60px] px-4 sm:px-8 lg:px-16 flex flex-col gap-6 md:gap-8"
      style={{ backgroundColor: '#1a1f21', minHeight: '300px' }}
    >
      {/* layout asset */}
      <img
        src={shotAsset}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-0 left-0"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col gap-6 md:gap-8">

        {/* Header row: title left, arrows right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2
            className="text-white flex-1 text-[22px] sm:text-[26px] md:text-[32px]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '0%',
              textTransform: 'capitalize'
            }}
          >
            How We Keep Everything Running Smoothly
          </h2>
          <div className="flex items-center gap-3 shrink-0">
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

        {/* Cards — carousel */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 24px / ${visibleCount})))`,
            }}
          >
            {operations.map((op, idx) => (
              <div
                key={op.number}
                className="shrink-0"
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                  marginRight: idx < operations.length - 1 ? '24px' : '0'
                }}
              >
                <div
                  className="bg-white rounded-lg flex flex-col gap-4 p-5 sm:p-6 md:p-8"
                  style={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-brand-primary text-2xl font-semibold leading-none shrink-0"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {op.number}
                    </span>
                    <h3
                      className="text-text-primary text-[18px] sm:text-[20px] md:text-[24px]"
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        lineHeight: '1.4',
                        letterSpacing: '0%',
                        textTransform: 'capitalize'
                      }}
                    >
                      {op.title}
                    </h3>
                  </div>
                  <p
                    className="text-text-secondary"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textTransform: 'capitalize',
                      opacity: 1
                    }}
                  >
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2 bg-brand-primary' : 'w-2 h-2 bg-white/30'
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
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <h2
          className="text-center text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-text-primary mb-10 md:mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The Distinction Of Quality
        </h2>

        <div className="flex flex-col mx-auto gap-6 w-full max-w-[518px]">
          {qualityPoints.map((point) => (
            <div key={point.title} className="text-center">
              <h4
                className="text-text-primary mb-3 flex items-center justify-center gap-2 text-[17px] sm:text-[18px] md:text-[20px]"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                <img src={Vector} alt="" aria-hidden style={{ width: '20px', height: '20px' }} />
                {point.title}
              </h4>
              <p
                className="text-text-secondary"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  textTransform: 'capitalize'
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="w-full flex flex-col gap-6">
      <div className="h-6" />
      <Hero />
      <Representation />
      <WhyUs />
      <OurClients />
      <HowWeOperate />
      <QualityDistinction />
      <CTABanner />
      <div className="h-6" />
    </main>
  );
}