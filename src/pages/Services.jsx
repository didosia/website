import CTABanner from '../components/ui/CTABanner';
import logoIcon from '../assets/logo-icon.png';
import servicesHero from '../assets/services-hero.png';
import howWeWorkImg from '../assets/services-how-we-work.jpg';
import hexAsset from '../assets/Group 1688.png';
import hdecore from '../assets/Group 1687.png';
import fabricTexture from '../assets/fabric-texture.jpg';
import qualityAsset from '../assets/Group 1684.png';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white py-16 border-b border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: text */}
          <div>
            <h1
              className="text-[42px] md:text-[52px] font-semibold leading-tight text-text-primary mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Complete Sourcing Support
            </h1>
            <p className="text-text-secondary text-base leading-relaxed max-w-[520px]">
              From finding the perfect factory to smooth export delivery, we provide friendly,
              comprehensive support throughout your textile sourcing journey.
            </p>
          </div>

          {/* Right: factory machinery photo */}
          <div className="h-[300px] md:h-[340px] overflow-hidden rounded-xl bg-bg-muted">
            <img
              src={servicesHero}
              alt="Textile factory machinery"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Our Operating Position ───────────────────────────────────────────────────
function OperatingPosition() {
  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      style={{ backgroundColor: '#1a1f21' }}
    >
      {/* Egyptian side decoration — left edge */}
      <img
        src={hdecore}
        alt=""
        aria-hidden
        className="absolute left-0 top-0 bottom-0 h-full object-contain opacity-60 pointer-events-none select-none"
      />

      {/* Wheat decoration — bottom right */}
      <img
        src={logoIcon} alt="" aria-hidden
        className="absolute bottom-0 right-6 h-20 opacity-30 pointer-events-none select-none"
      />

      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: heading + bullets */}
          <div>
            <h2
              className="text-[28px] md:text-[34px] font-semibold text-white mb-8 leading-snug"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Operating Position
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                'DIDOSIA Operates Inside The Production Ecosystem As A Buyer-Side Control Layer.',
                'We Align Factories, Timelines, And Quality With Buyer Objectives, Not Factory Incentives.',
                'Our Role Is Operational Execution, Not Commercial Promotion.',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/60 text-base leading-none mt-0.5 shrink-0">•</span>
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>

            {/* Bold statement */}
            <p
              className="mt-12 text-white text-sm font-semibold leading-relaxed italic"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              We Only Work On Projects When We Are 100% Sure That We Can Maintain Proper Control Of Each Step.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[420px]">
              <img src={hexAsset} alt="Operating position diagram" className="w-full h-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Hexagon SVG Card ─────────────────────────────────────────────────────────
function HexagonCard({ size = 'sm', icon, label }) {
  const isLg = size === 'lg';
  const w = isLg ? 140 : 100;
  const h = isLg ? 160 : 114;
  const goldFill = isLg ? '#c9a06a' : '#b8895a';

  return (
    <div className="flex flex-col items-center" style={{ width: w }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
        {/* Hexagon shape */}
        <polygon
          points={hexPoints(w, h)}
          fill={goldFill}
          opacity={isLg ? 1 : 0.85}
        />
        {/* Icon inside */}
        <g transform={`translate(${w / 2}, ${h / 2})`}>
          {icon === 'didosia' && (
            // Wheat/logo icon — simplified SVG
            <g transform="translate(-14, -18)" fill="white" opacity="0.9">
              <ellipse cx="14" cy="8" rx="3" ry="6" />
              <ellipse cx="8" cy="12" rx="3" ry="5" transform="rotate(-30 8 12)" />
              <ellipse cx="20" cy="12" rx="3" ry="5" transform="rotate(30 20 12)" />
              <rect x="13" y="14" width="2" height="12" />
            </g>
          )}
          {icon === 'handshake' && (
            <g stroke="white" strokeWidth="1.5" fill="none" transform="translate(-14,-10)">
              <path d="M2 14l5-5 4 2 5-5" />
              <path d="M16 6l4 4-7 7-4-2-5 5" />
            </g>
          )}
          {icon === 'factory' && (
            <g stroke="white" strokeWidth="1.5" fill="none" transform="translate(-12,-10)">
              <rect x="1" y="10" width="22" height="10" />
              <path d="M1 10V4l7 6V4l7 6V4" />
              <rect x="9" y="14" width="3" height="6" />
            </g>
          )}
        </g>
      </svg>
      {label && (
        <p className="text-white text-xs font-bold mt-1 tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>
          {label}
        </p>
      )}
    </div>
  );
}

function hexPoints(w, h) {
  const cx = w / 2, cy = h / 2;
  const rx = w * 0.48, ry = h * 0.48;
  return [
    [cx, cy - ry],
    [cx + rx, cy - ry / 2],
    [cx + rx, cy + ry / 2],
    [cx, cy + ry],
    [cx - rx, cy + ry / 2],
    [cx - rx, cy - ry / 2],
  ].map(([x, y]) => `${x},${y}`).join(' ');
}

// ─── Service Pillars ──────────────────────────────────────────────────────────
// Place your images in src/assets/services/ with these filenames:
import pillar1 from '../assets/services/pillar-1-factory-matching.jpg';
import pillar2 from '../assets/services/pillar-2-product-development.jpg';
import pillar3 from '../assets/services/pillar-3-production-qc.jpg';
import pillar4 from '../assets/services/pillar-4-export-logistics.jpg';
import pillar5 from '../assets/services/pillar-5-onground-support.jpg';

const pillars = [
  {
    title: 'Factory Matching & Sourcing',
    image: pillar1,
    intro: 'We carefully identify and connect you with factories based on their capabilities, capacity, and track record.',
    whatIncluded: [
      'Smart Factory Matching: We pair you with factories that truly fit your needs.',
      'Capacity & MOQ Alignment: Making sure volumes work for everyone.',
      'Certification & Compliance Checks: Verifying all necessary standards are met.',
      'Complete Neutrality: We never favor placements, it\'s about the right fit.',
    ],
    note: { label: 'No Surprises', text: 'Over-promising, hidden subcontracting, and unauthorized businesses.' },
  },
  {
    title: 'Product Development Support',
    image: pillar2,
    intro: 'We help translate your specifications into viable production-ready solutions that factories can make or feasibly.',
    whatIncluded: [
      'Sampling Coordination: Managing the complete process, ensuring.',
      'Specification Clarity: Making sure settings get lost. Is tolerable.',
      'Material Sourcing: Finding the right fabrics, yarns, and components.',
      'Egyptian Cotton Expertise: Specialized support for premium Egyptian cotton.',
      'Pre-Production Validation: Quality checking and testing before production starts.',
    ],
    note: { label: 'This Matters', text: 'Ensures what gets approved is exactly what gets production. No surprises.' },
  },
  {
    title: 'Production Oversight & Quality Control',
    image: pillar3,
    intro: 'Quality is built into the process from day one, not just checked at the end.',
    whatIncluded: [
      'Pre-Production Reviews: Confirming potential issues before they start.',
      'Ongoing Quality Inspections: Regular check-ins throughout production.',
      'Milestone Verification: Confirming progress at key stages.',
      'Fast Problem Resolution: We act quickly if any issues arise.',
      'Final Inspection Coordination: Whether remote or third-party.',
    ],
    note: { label: 'Our Philosophy', text: 'No problems are in the process rather than explain them later.' },
  },
  {
    title: 'Export & Logistics Facilitation',
    image: pillar4,
    intro: 'We solve document headaches to prevent last-minute issues and documentation failures.',
    whatIncluded: [
      'Export Documentation: Getting all paperwork sorted properly.',
      'Shipping Coordination: Aligning INCOIF requirements smoothly.',
      'Freight Forwarder Management: Working with reliable logistics partners.',
      'Customs & Compliance: Navigating regulations consistently.',
      'Timeline Management: Keeping everything on schedule before the first shipment.',
    ],
    note: { label: 'Note', text: 'This Process Ensures last-minute delays, documentation failures, and compliance issues.' },
  },
  {
    title: 'On-Ground Buyer Support',
    image: pillar5,
    intro: 'When you make sourcing decisions, we act as your trusted eyes and ears on the ground.',
    whatIncluded: [
      'Factory Visit Coordination: Organizing productive site visits.',
      'On-Site Representation: Being your local presence when needed.',
      'Negotiation Support: Helping navigate local business practices.',
      'Local Communication: Solving problems quickly with local knowledge.',
    ],
    note: { label: 'Our Commitment', text: 'Bridging language and cultural gaps to act as your trusted local eyes and ears.' },
  },
];

function ServicePillars() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Service Pillars
        </h2>

        <div className="flex flex-col gap-20">
          {pillars.map((pillar, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={pillar.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={`overflow-hidden rounded-xl bg-bg-muted h-[300px] md:h-[360px] ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3
                    className="text-text-primary text-[22px] font-semibold mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{pillar.intro}</p>

                  <p className="text-text-primary text-xs font-semibold uppercase tracking-widest mb-3">
                    What's Included:
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {pillar.whatIncluded.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                        <span className="text-brand-primary text-xs shrink-0 mt-0.5">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Highlighted note */}
                  <div className="flex items-start gap-2 mt-1">
                    <span className="text-brand-primary font-semibold text-xs shrink-0 mt-0.5">
                      {pillar.note.label}:
                    </span>
                    <p className="text-text-muted text-xs leading-relaxed italic">{pillar.note.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How We Work ─────────────────────────────────────────────────────────────
const steps = [
  { number: '1', title: 'Understanding Your Needs',   description: 'We start by clearly documenting your technical, commercial, and timeline requirements.' },
  { number: '2', title: 'Finding the Right Partners', description: 'Factories are carefully selected based on capability, capacity, and execution fit.' },
  { number: '3', title: 'Validation & Approval',      description: 'Samples and specifications are validated to ensure readiness before moving forward.' },
  { number: '4', title: 'Guided Production',          description: 'Production proceeds with active oversight, regular checkpoints, and immediate problem-solving.' },
  { number: '5', title: 'Export & Delivery',          description: 'All documentation, compliance, and shipment coordination is handled smoothly.' },
];

function HowWeWork() {
  return (
    <section className="w-full py-20 bg-white border-t border-border-default/20">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-[32px] md:text-[36px] font-semibold text-text-primary mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          How We Work
        </h2>
        <p className="text-text-muted text-sm mb-12">
          We Maintain Control Throughout — Never Just Delegate And Hope.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: numbered steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {step.number}
                  </span>
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1.5" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right: factory image */}
          <div className="h-[420px] md:h-[500px] overflow-hidden rounded-xl bg-bg-muted">
            <img src={howWeWorkImg} alt="Factory production floor" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quality & Compliance ─────────────────────────────────────────────────────
const qualityColumns = [
  {
    title: 'Quality Control Stages',
    items: [
      'Step 1: Pre-Production: Verification before any fabric is cut.',
      'Step 2: In-Line: Regular Inspections during the manufacturing process.',
      'Step 3: Final Inspection: Comprehensive quality check before shipment.',
    ],
  },
  {
    title: 'Compliance & Protocols',
    items: [
      'Global Standards: OEKO-TEX & GOTS compliant sourcing.',
      'US Market Ready: QIZ Protocol expertise for duty-free exports.',
      'Custom Compliance: Meeting your specific market-regulated requirements.',
    ],
  },
  {
    title: 'Risk Prevention',
    items: [
      'Capacity verification before any commitments.',
      'Early warning systems for potential issues.',
      'Complete buyer visibility at every stage.',
    ],
  },
];

function QualityCompliance() {
  return (
    <section
      className="w-full py-20 relative overflow-hidden border-y border-brand-primary/20"
      style={{ backgroundImage: `url(${fabricTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img src={qualityAsset} alt="" aria-hidden className="absolute top-3 right-6 h-20 opacity-60 pointer-events-none select-none" />
      <img src={logoIcon} alt="" aria-hidden className="absolute top-3 right-0 h-16 opacity-50 pointer-events-none select-none" style={{ transform: 'rotate(-117.26deg)' }} />
      
      <div className="w-full max-w-[1440px] mx-auto page-x relative z-10">
        <h2
          className="text-center text-[32px] md:text-[36px] font-semibold text-text-primary mb-14"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Quality & Compliance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {qualityColumns.map((col) => (
            <div key={col.title} className="bg-white rounded-lg border border-border-default/40 p-8">
              <h3 className="text-text-primary font-semibold mb-5 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                    <span className="text-brand-primary shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Scope Of Work ────────────────────────────────────────────────────────────
function ScopeOfWork() {
  const always = [
    'Buyer representation and advocacy',
    'Factory matching and relationship management',
    'Production oversight and quality coordination',
    'Export readiness and logistics support',
  ];
  const available = [
    'Third-party inspection agencies',
    'Laboratory testing services',
    'Specialized certifications',
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto page-x">
        <h2
          className="text-[32px] md:text-[36px] font-semibold text-text-primary mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Scope Of Work
        </h2>
        <p className="text-text-muted text-sm mb-12">
          We Only Work On Projects When We Are 100% Sure That We Can Maintain Proper Control Of Each Step
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border-default/50 rounded-lg p-8">
            <h3 className="text-text-primary font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              Always Included
            </h3>
            <ul className="flex flex-col gap-3">
              {always.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                  <span className="text-brand-primary shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border-default/50 rounded-lg p-8">
            <h3 className="text-text-primary font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              Available When Needed
            </h3>
            <ul className="flex flex-col gap-3">
              {available.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                  <span className="text-brand-primary shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <main className="w-full">
      <Hero />
      <OperatingPosition />
      <ServicePillars />
      <HowWeWork />
      <QualityCompliance />
      <ScopeOfWork />
      <CTABanner />
    </main>
  );
}