import { Crown, Warehouse } from '@phosphor-icons/react';
import heroBg from '../assets/hero-bg.png';
import logoIcon from '../assets/logo-icon.png';
import heroDecor from '../assets/Group 1689.png';
import storyFactory from '../assets/story-factory.jpg';
import CTABanner from '../components/ui/CTABanner';
import wheatLeft from '../assets/logo 3.png';
import wheatRight from '../assets/logo 2.png';
import bgfabric from '../assets/fabric-texture.jpg';
import globalCards from '../assets/Frame 2121452613.png';
import cornerAsset from '../assets/Group 1686.png';

// Team photos — place these in src/assets/team/
import nashat from '../assets/team/nashat-nagy.jpg';
import abdullah from '../assets/team/abdullah-elbara.jpg';
import natalia from '../assets/team/natalia-kutanina.jpg';
import hager from '../assets/team/hager-ibrahim.jpg';
import salah from '../assets/team/salah-thaer.jpg';
import mohamed from '../assets/team/mohamed-abu-al-yazed.jpg';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white py-14 border-b border-border-default/20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-center opacity-20 pointer-events-none select-none">
              <img src={logoIcon} alt="" className="h-40 object-contain" style={{ filter: 'sepia(1)' }} />
            </div>
            {/* bottom-left decorative asset */}
            <img
              src={heroDecor}
              alt=""
              aria-hidden
              className="absolute bottom-0 left-0 pointer-events-none select-none"
              style={{ width: '120px', opacity: 0.8 }}
            />
            <div className="relative z-10">
              <h1
                className="text-[40px] md:text-[48px] font-semibold leading-tight text-text-primary mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Your Production Gateway<br />To Egypt's Textile Industry
              </h1>
              <p className="text-text-secondary text-base leading-relaxed max-w-[520px]">
                We're a buyer-focused textile sourcing partner dedicated to bringing structure, reliability,
                and clear execution to Egypt's fragmented textile ecosystem.
              </p>
            </div>
          </div>
          <div className="h-[260px] md:h-[300px] overflow-hidden rounded-lg bg-bg-muted">
            <img src={heroBg} alt="Al-Mahalla El-Kubra" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mission & Vision ─────────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="w-full py-16 relative overflow-hidden" style={{ backgroundColor: '#1e2224' }}>
      <img src={wheatLeft} alt="" aria-hidden className="absolute bottom-0 left-4 h-20 opacity-50 pointer-events-none select-none" />
      <img src={wheatRight} alt="" aria-hidden className="absolute bottom-0 right-4 h-20 opacity-50 pointer-events-none select-none " />
      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-xl border border-white/15 p-8 bg-white/5">
            <div className="flex items-center gap-3 mb-5">
              <Crown size={22} weight="light" className="text-brand-primary" />
              <h3 className="text-white text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Mission</h3>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              To bring structure and reliable execution to Al-Mahalla's talented textile community,
              helping factories work more transparently while giving buyers complete confidence when
              sourcing from Egypt. We're here to raise the bar for sourcing excellence, not just process orders.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 p-8 bg-white/5">
            <div className="flex items-center gap-3 mb-5">
              <Warehouse size={22} weight="light" className="text-brand-primary" />
              <h3 className="text-white text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Vision</h3>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              To rebuild global confidence in Egyptian textile manufacturing, and eventually deepen
              our role in the ecosystem through thoughtful, production-focused investments when the
              system is ready. We believe growth follows control, not the other way around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Our Values ───────────────────────────────────────────────────────────────
const values = [
  { title: 'Transparency',          description: 'Clear communication, realistic promises, and well-documented decisions' },
  { title: 'Accountability',        description: 'Everyone knows their role, progress is tracked, and commitments are kept' },
  { title: 'Sustainability',        description: 'We build lasting relationships, not short-term deals' },
  { title: 'Fairness & Respect',    description: 'Balanced outcomes for buyers and factories through honest, straightforward execution' },
  { title: 'Process Over Promises', description: 'We deliver through systematic work, not just good intentions and promises' },
];

function Values() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {values.slice(0, 3).map((v) => (
            <div key={v.title} className="rounded-lg border border-border-default/60 p-7 text-center hover:border-brand-primary/40 transition-colors duration-200">
              <h3 className="text-text-primary font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[66%] mx-auto">
          {values.slice(3).map((v) => (
            <div key={v.title} className="rounded-lg border border-border-default/60 p-7 text-center hover:border-brand-primary/40 transition-colors duration-200">
              <h3 className="text-text-primary font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{v.description}</p>
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
    <section className="w-full py-20 bg-white border-t border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Story
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="text-text-secondary text-sm leading-[1.85]">
            <p><strong className="text-text-primary font-semibold">DIDOSIA</strong> was founded by a team born and raised in Al-Mahalla El-Kubra, a city where textile manufacturing is not an industry but an inheritance.</p>
            <p className="mt-3">We grew up carrying the pride of our families who worked inside spinning halls, weaving floors, and finishing lines, many of them at Misr Spinning and Weaving, once the largest textile complex in the world. Discipline, precision, and accountability shaped daily life.</p>
            <p className="mt-3">For more than a century, Al-Mahalla formed the backbone of Egyptian cotton manufacturing. When large-scale state production declined, the capability did not disappear — it fragmented, leaving exceptional skill without the structure required to control outcomes.</p>
            <p className="mt-4"><strong className="text-text-primary font-semibold">As the industry fragmented</strong> into thousands of small and mid-sized factories, craftsmanship remained strong but execution weakened. Planning rigor, capacity discipline, and clear communication eroded, and international buyers began to experience Egypt as a source of risk rather than reliability.</p>
            <p className="mt-3">DIDOSIA exists to correct this failure.</p>
            <p className="mt-3"><strong className="text-text-primary font-semibold">We do not trade goods and we do not own factories.</strong>{' '}We act as the buyer's operational arm inside Egypt, translating buyer intent into executable production reality and enforcing discipline across factory selection, production execution, quality control, and export readiness.</p>
            <p className="mt-4">The name <strong className="text-text-primary font-semibold">DIDOSIA</strong> comes from the ancient Egyptian name of what is now Al-Mahalla El-Kubra, a place long tied to cotton and textile production along the Nile Delta. Al-Mahalla's strength has always been density of factories, labor expertise, and accumulated production knowledge. DIDOSIA is rooted in this reality but shaped by a modern execution mindset. With an operational base in Egypt and a commercial presence in Germany, we combine local authority with European planning rigor. This is not nostalgia. It is operational stewardship, restoring control, transparency, and accountability to an industry that still deserves global trust.</p>
          </div>
          <div className="rounded-sm overflow-hidden bg-bg-muted h-[560px] lg:h-auto lg:min-h-[500px]">
            <img src={storyFactory} alt="Misr Spinning and Weaving — Al-Mahalla El-Kubra" className="w-full h-full object-cover object-center" />
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
      className="w-full py-20 relative overflow-hidden border-y border-brand-primary/20"
      style={{
        backgroundColor: '#ede8df',
        backgroundImage: `url(${bgfabric})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Top-left decorative asset */}
      <img
        src={cornerAsset}
        alt=""
        aria-hidden
        className="absolute top-6 left-6 w-90 opacity-50 pointer-events-none select-none"
      />
      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-14"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Strategic Global Presence
        </h2>
        <div className="flex justify-center">
          <img src={globalCards} alt="Global presence overview" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

// ─── Core Team ────────────────────────────────────────────────────────────────
const team = [
  { name: 'Nashat Nagy',          role: 'Co-Founder',              photo: nashat   },
  { name: 'Abdullah Elbara',      role: 'Co-Founder',              photo: abdullah },
  { name: 'Natalia Kutanina',     role: 'Marketing Director',      photo: natalia  },
  { name: 'Hager Ibrahim',        role: 'Financial Director',      photo: hager    },
  { name: 'Salah Thaer',          role: 'Technology Director',     photo: salah    },
  { name: 'Mohamed Abu Al-Yazed', role: 'Quality Control Director',photo: mohamed  },
];

function CoreTeam() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-semibold text-text-primary"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Core Team
          </h2>
          <p className="text-text-muted text-base mt-2">
            Rooted in Egypt, strengthened by international experience, focused on delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((member) => (
            <div key={member.name}>
              {/* Photo card — rounded-xl matching Figma */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-bg-muted mb-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="text-text-primary text-sm font-semibold leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}>
                {member.name}
              </h4>
              <p className="text-text-muted text-xs mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
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