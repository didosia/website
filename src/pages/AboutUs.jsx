import { Crown, Warehouse } from "@phosphor-icons/react";
import heroBg from "../assets/Group_about_us.png";
import logoIcon from "../assets/logo-icon.png";
import heroDecor from "../assets/Group 1689.png";
import storyFactory from "../assets/story-factory.jpg";
import CTABanner from "../components/ui/CTABanner";
import wheatLeft from "../assets/logo 3.png";
import wheatRight from "../assets/logo 2.png";
import bgfabric from "../assets/fabric-texture.jpg";
import EgCard from "../assets/eg-card.png";
import GerCard from "../assets/ger_card.png";
import Carve from "../assets/carve.png";
import Shield from "../assets/shield.png";
import cornerAsset from "../assets/Group 1686.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nashat from "../assets/team/nashat-nagy.jpg";
import abdullah from "../assets/team/abdullah-elbara.jpg";
import natalia from "../assets/team/natalia-kutanina.jpg";
import hager from "../assets/team/hager-ibrahim.jpg";
import salah from "../assets/team/salah-thaer.jpg";
import mohamed from "../assets/team/mohamed-abu-al-yazed.jpg";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative py-8 md:py-10">
      {/* Decorative corner asset */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none w-[80px] md:w-[120px] opacity-80 z-0">
        <img src={heroDecor} alt="" aria-hidden className="w-full h-auto" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 pl-0 sm:pl-2">
          <h1
            className="font-bold text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[120%] capitalize text-[#111827] w-full"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Your Production Gateway
            <br />
            To Egypt's Textile Industry
          </h1>
          <p
            className="text-[15px] sm:text-[17px] md:text-[20px] leading-[1.6] text-[#211E1D] w-full"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
          >
            We're a buyer-focused textile sourcing partner dedicated to bringing structure, reliability, and clear execution to Egypt's fragmented textile ecosystem.
          </p>
        </div>

        {/* Hero image */}
        <div className="w-full lg:w-[473px] shrink-0 overflow-hidden rounded-xl">
          <img
            src={heroBg}
            alt="Al-Mahalla El-Kubra"
            className="w-full h-[220px] sm:h-[260px] lg:h-[271px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Mission & Vision ─────────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="w-full relative overflow-hidden bg-[#1a1f21] py-10 md:py-14 px-4 sm:px-8 lg:px-16 flex justify-center items-center">
      <img src={wheatLeft} alt="" aria-hidden className="absolute bottom-0 left-0 h-16 md:h-20 opacity-80 pointer-events-none select-none" />
      <img src={wheatRight} alt="" aria-hidden className="absolute bottom-0 right-0 h-16 md:h-20 opacity-80 pointer-events-none select-none" />

      <div className="w-full max-w-[1248px] flex flex-col sm:flex-row gap-6 sm:gap-8">
        {[
          {
            icon: <Crown size={22} weight="light" className="text-brand-primary" />,
            title: "Mission",
            text: "To bring structure and reliable execution to Al-Mahalla's talented textile community, helping factories work more transparently while giving buyers complete confidence when sourcing from Egypt. We're here to raise the bar for sourcing excellence, not just process orders.",
          },
          {
            icon: <Warehouse size={22} weight="light" className="text-brand-primary" />,
            title: "Vision",
            text: "To rebuild global confidence in Egyptian textile manufacturing, and eventually deepen our role in the ecosystem through thoughtful, production-focused investments when the system is ready. We believe growth follows control, not the other way around.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="flex-1 border border-white/15 bg-white/5 rounded-2xl p-4 sm:p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              {card.icon}
              <h3
                className="text-white font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-none"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {card.title}
              </h3>
            </div>
            <p
              className="text-white/65 text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Our Values ───────────────────────────────────────────────────────────────
const values = [
  { title: "Transparency", description: "Clear communication, realistic promises, and well-documented decisions" },
  { title: "Accountability", description: "Everyone knows their role, progress is tracked, and commitments are kept" },
  { title: "Sustainability", description: "We build lasting relationships, not short-term deals" },
  { title: "Fairness & Respect", description: "Balanced outcomes for buyers and factories through honest, straightforward execution" },
  { title: "Process Over Promises", description: "We deliver through systematic work, not just good intentions and promises" },
];

function Values() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <h2
          className="text-center text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-text-primary mb-10 md:mb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {values.slice(0, 3).map((v) => (
            <div key={v.title} className="rounded-lg border border-border-default/60 p-6 md:p-7 text-center hover:border-brand-primary/40 transition-colors duration-200">
              <h3
                className="text-text-primary font-semibold mb-3 text-[17px] sm:text-[18px] md:text-[20px] leading-none text-center"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {v.title}
              </h3>
              <p
                className="text-text-secondary text-[13px] md:text-[14px] leading-relaxed text-center"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[66%] mx-auto">
          {values.slice(3).map((v) => (
            <div key={v.title} className="rounded-lg border border-border-default/60 p-6 md:p-7 text-center hover:border-brand-primary/40 transition-colors duration-200">
              <h3
                className="text-text-primary font-semibold mb-3 text-[17px] sm:text-[18px] md:text-[20px] leading-none text-center"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {v.title}
              </h3>
              <p
                className="text-text-secondary text-[13px] md:text-[14px] leading-relaxed text-center"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Story ────────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="w-full py-12 md:py-20 bg-white border-t border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <h2
          className="text-center text-[26px] sm:text-[30px] md:text-[36px] font-bold text-text-primary mb-10 md:mb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Story
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Text */}
          <div className="flex flex-col gap-4">
            {[
              <><strong className="text-text-primary font-bold">DIDOSIA</strong> was founded by a team born and raised in Al-Mahalla El-Kubra, a city where textile manufacturing is not an industry but an inheritance.</>,
              <>We grew up carrying the pride of our families who worked inside spinning halls, weaving floors, and finishing lines, many of them at Misr Spinning and Weaving, once the largest textile complex in the world. Discipline, precision, and accountability shaped daily life.</>,
              <>For more than a century, Al-Mahalla formed the backbone of Egyptian cotton manufacturing. When large-scale state production declined, the capability did not disappear — it fragmented, leaving exceptional skill without the structure required to control outcomes.</>,
              <><strong className="text-text-primary font-semibold">As the industry fragmented</strong> into thousands of small and mid-sized factories, craftsmanship remained strong but execution weakened. Planning rigor, capacity discipline, and clear communication eroded, and international buyers began to experience Egypt as a source of risk rather than reliability.</>,
              <>DIDOSIA exists to correct this failure.</>,
              <><strong className="text-text-primary font-semibold">We do not trade goods and we do not own factories.</strong> We act as the buyer's operational arm inside Egypt, translating buyer intent into executable production reality and enforcing discipline across factory selection, production execution, quality control, and export readiness.</>,
              <>The name <strong className="text-text-primary font-semibold">DIDOSIA</strong> comes from the ancient Egyptian name of what is now Al-Mahalla El-Kubra, a place long tied to cotton and textile production along the Nile Delta. Al-Mahalla's strength has always been density of factories, labor expertise, and accumulated production knowledge. DIDOSIA is rooted in this reality but shaped by a modern execution mindset. With an operational base in Egypt and a commercial presence in Germany, we combine local authority with European planning rigor. This is not nostalgia. It is operational stewardship, restoring control, transparency, and accountability to an industry that still deserves global trust.</>,
            ].map((para, i) => (
              <p
                key={i}
                className="text-[15px] sm:text-[17px] md:text-[20px] leading-[1.7] text-[#211E1D]"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-xl bg-bg-muted">
            <img
              src={storyFactory}
              alt="Misr Spinning and Weaving — Al-Mahalla El-Kubra"
              className="w-full h-[340px] sm:h-[480px] lg:h-full lg:max-h-[1027px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Strategic Global Presence ────────────────────────────────────────────────
function GlobalPresence() {
  return (
    <section
      className="w-full py-12 md:py-20 relative overflow-hidden border-y border-brand-primary/20"
      style={{
        backgroundColor: "#ede8df",
        backgroundImage: `url(${bgfabric})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={cornerAsset}
        alt=""
        aria-hidden
        className="absolute top-6 left-6 w-32 md:w-60 lg:w-90 opacity-50 pointer-events-none select-none"
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <h2
          className="text-center text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-text-primary mb-10 md:mb-14"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Strategic Global Presence
        </h2>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
          <img src={EgCard} alt="Egypt presence" className="max-w-full sm:max-w-[50%] h-auto" />
          <img src={GerCard} alt="Germany presence" className="max-w-full sm:max-w-[50%] h-auto" />
        </div>

        {/* Carve + Shield */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="relative inline-block">
            <img src={Carve} alt="" className="max-w-full h-auto" />
            <img
              src={Shield}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Core Team ────────────────────────────────────────────────────────────────
const team = [
  { name: "Nashat Nagy", role: "Co-Founder", photo: nashat },
  { name: "Abdullah Elbara", role: "Co-Founder", photo: abdullah },
  { name: "Natalia Kutanina", role: "Marketing Director", photo: natalia },
  { name: "Hager Ibrahim", role: "Financial Director", photo: hager },
  { name: "Salah Thaer", role: "Technology Director", photo: salah },
  { name: "Mohamed Abu Al-Yazed", role: "Quality Control Director", photo: mohamed },
];

function CoreTeam() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="text-text-primary text-[26px] sm:text-[30px] md:text-[32px] font-bold leading-[120%] capitalize"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Core Team
          </h2>
          <p
            className="mt-2 text-[14px] sm:text-[16px] md:text-[20px] leading-none text-center"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Rooted in Egypt, strengthened by international experience, focused on delivery.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          className="
            [&_.swiper-button-next]:!w-9
            [&_.swiper-button-prev]:!w-9
            [&_.swiper-button-next]:!h-9
            [&_.swiper-button-prev]:!h-9
            [&_.swiper-button-next]:bg-black/5
            [&_.swiper-button-prev]:bg-black/5
            [&_.swiper-button-next]:rounded-full
            [&_.swiper-button-prev]:rounded-full
            [&_.swiper-button-next]:text-black/70
            [&_.swiper-button-prev]:text-black/70
            [&_.swiper-button-next]:scale-75
            [&_.swiper-button-prev]:scale-75
            [&_.swiper-button-next]:shadow-sm
            [&_.swiper-button-prev]:shadow-sm
            [&_.swiper-button-next:hover]:bg-black/10
            [&_.swiper-button-prev:hover]:bg-black/10
          "
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {team.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="group cursor-pointer p-2">
                <div className="w-full aspect-[5/6] overflow-hidden rounded-xl bg-bg-muted mb-3 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4
                  className="text-text-primary text-sm font-semibold leading-snug"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {member.name}
                </h4>
                <p className="text-text-muted text-xs mt-0.5">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <main className="w-full">
      <Hero />
      <MissionVision />
      <Values />
      <OurStory />
      <GlobalPresence />
      <CoreTeam />
      <CTABanner />
    </main>
  );
}