import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ChevronDown, Star, AlertTriangle, Info, TreePine, Home, DollarSign, Navigation } from "lucide-react";

// ─── COLORS ──────────────────────────────────────────────────────────────────
const NAVY   = "#0a1628";
const GOLD   = "#C9A84C";
const CREAM  = "#F5F0E8";
const DGOLD  = "#8B6914";

// ─── DATA ────────────────────────────────────────────────────────────────────
const PROP = {
  address: "0 Democracy Boulevard",
  city: "Potomac, Maryland 20854",
  price: "$500,000",
  acres: "1.19",
  zoning: "RE-2",
  subdivision: "Kentsdale Estates",
  taxAccount: "10-02859601",
  assessment: "$155,500",
  annualTax: "~$1,790",
  county: "Montgomery County, Maryland",
};

const AGENT = {
  name: "Fernando Herboso",
  title: "Managing Broker",
  company: "Maxus Realty Group of Samson Properties",
  phone: "240-426-5754",
  email: "fernando@reallynicehomes.com",
  website: "www.herboso.com",
};

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────
const GoldDivider = () => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-px w-16 opacity-60" style={{ backgroundColor: GOLD }} />
    <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: GOLD }} />
    <div className="h-px w-16 opacity-60" style={{ backgroundColor: GOLD }} />
  </div>
);

const SectionLabel = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
     style={{ color: light ? "#C9A84C99" : GOLD, fontFamily: "'Montserrat', sans-serif" }}>
    {children}
  </p>
);

const CTABar = () => (
  <div className="py-6 px-6 flex flex-col sm:flex-row items-center justify-center gap-5 border-t"
       style={{ borderColor: `${GOLD}30`, backgroundColor: `${NAVY}ee` }}>
    <p className="text-sm font-medium" style={{ color: CREAM, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
      Interested in this rare Potomac homesite?
    </p>
    <a href={`tel:${AGENT.phone}`}
       className="flex items-center gap-2 px-6 py-2.5 rounded text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
       style={{ backgroundColor: GOLD, color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
      <Phone size={14} /> Call {AGENT.phone}
    </a>
  </div>
);

// ─── HERO SECTION ────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex flex-col">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src="/images/prop_3.jpg" alt="0 Democracy Boulevard" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${NAVY}99 0%, ${NAVY}40 40%, ${NAVY}cc 80%, ${NAVY} 100%)` }} />
      </motion.div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-5">
        <img src="/images/maxus_logo.jpg" alt="Maxus Realty" className="h-10 object-contain" />
        <a href={`tel:${AGENT.phone}`}
           className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded border hover:bg-white/10 transition"
           style={{ color: GOLD, borderColor: `${GOLD}60`, fontFamily: "'Montserrat', sans-serif" }}>
          <Phone size={13} /> {AGENT.phone}
        </a>
      </div>

      {/* Hero Content */}
      <motion.div style={{ opacity }} className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-16">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionLabel light>Prestigious Homesite · Potomac, Maryland</SectionLabel>
          </motion.div>
          <motion.h1 variants={fadeUp}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
            style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
            0 Democracy<br />Boulevard
          </motion.h1>
          <motion.div variants={fadeUp}>
            <GoldDivider />
          </motion.div>
          <motion.p variants={fadeUp}
            className="text-xl md:text-2xl mb-2 font-light"
            style={{ color: CREAM, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Build Your Legacy in One of Montgomery County's<br />Most Desirable Locations
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-3xl font-bold mt-6 mb-8"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Offered at {PROP.price}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${AGENT.phone}`}
               className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition"
               style={{ backgroundColor: GOLD, color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>
              <Phone size={15} /> Schedule a Viewing
            </a>
            <a href={`mailto:${AGENT.email}`}
               className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase border hover:bg-white/10 transition"
               style={{ color: CREAM, borderColor: `${GOLD}80`, fontFamily: "'Montserrat', sans-serif" }}>
              <Mail size={15} /> Request Information
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={28} style={{ color: `${GOLD}80` }} />
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function Index() {
  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* SLIDE 1 — HERO */}
      <Hero />

      {/* SLIDE 2 — PROPERTY OVERVIEW */}
      <section id="overview" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel>Property Overview</SectionLabel>
              <h2 className="text-4xl font-bold mb-2" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                A Premier Potomac Homesite
              </h2>
              <GoldDivider />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <img src="/images/parcel_map.png" alt="Parcel Map" className="rounded shadow-xl w-full object-cover border" style={{ borderColor: `${GOLD}40` }} />
              </motion.div>
              <motion.div variants={stagger}>
                <div className="space-y-5">
                  {[
                    { label: "Address",      value: `${PROP.address}, ${PROP.city}` },
                    { label: "Lot Size",     value: `${PROP.acres} Acres (Approx.)` },
                    { label: "Zoning",       value: PROP.zoning + " — Residential Land" },
                    { label: "Subdivision",  value: PROP.subdivision },
                    { label: "Tax Account",  value: PROP.taxAccount },
                    { label: "County",       value: PROP.county },
                    { label: "Asking Price", value: PROP.price },
                  ].map(row => (
                    <motion.div key={row.label} variants={fadeUp}
                      className="flex items-start gap-4 pb-4 border-b" style={{ borderColor: `${GOLD}30` }}>
                      <span className="text-xs font-bold tracking-widest uppercase w-32 shrink-0 pt-0.5" style={{ color: GOLD }}>
                        {row.label}
                      </span>
                      <span className="text-base font-medium" style={{ color: NAVY }}>{row.value}</span>
                    </motion.div>
                  ))}
                  <motion.div variants={fadeUp}>
                    <a href={`tel:${AGENT.phone}`}
                       className="inline-flex items-center gap-2 mt-4 px-6 py-3 text-sm font-bold tracking-wide"
                       style={{ backgroundColor: NAVY, color: GOLD }}>
                      <Phone size={14} /> Inquire About This Property
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 3 — RARE OPPORTUNITY */}
      <section id="opportunity" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel light>Rare Opportunity</SectionLabel>
              <h2 className="text-4xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                A Rare Opportunity in Potomac
              </h2>
              <GoldDivider />
              <p className="text-lg mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: `${CREAM}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Very few vacant residential parcels remain available in this highly sought-after area of Montgomery County. This represents a genuine opportunity to secure your place in one of the region's most prestigious communities.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Home size={28} />,       title: "Custom Home Opportunity",     desc: "Design and build the residence of your dreams on a private, wooded parcel in the heart of Potomac." },
                { icon: <TreePine size={28} />,   title: "Natural Surroundings",         desc: "Mature hardwood trees and lush natural landscape create an exceptional private setting for your estate." },
                { icon: <Star size={28} />,        title: "Established Luxury Neighborhood", desc: "Situated within Kentsdale Estates, surrounded by distinguished homes and discerning neighbors." },
                { icon: <DollarSign size={28} />, title: "Long-Term Value Potential",   desc: "Potomac real estate has historically demonstrated strong appreciation. This lot offers compelling long-term potential." },
                { icon: <Navigation size={28} />, title: "Prime Location",               desc: "Close proximity to major employment centers, world-class amenities, and transportation corridors." },
                { icon: <Star size={28} />,        title: "Legacy Property",              desc: "Create something enduring — a family homestead, generational estate, or private retreat unlike any other." },
              ].map(card => (
                <motion.div key={card.title} variants={fadeUp}
                  className="p-6 border text-left hover:border-opacity-60 transition-all duration-300"
                  style={{ borderColor: `${GOLD}40`, background: `${CREAM}08` }}>
                  <div className="mb-4" style={{ color: GOLD }}>{card.icon}</div>
                  <h4 className="font-bold mb-2 text-sm tracking-wide" style={{ color: CREAM }}>{card.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: `${CREAM}80` }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <CTABar />
      </section>

      {/* PHOTO BREAK */}
      <div className="relative h-72 overflow-hidden">
        <img src="/images/prop_6.jpg" alt="Property Road" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: `${NAVY}88` }}>
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>Nature as Your Canvas</p>
            <h3 className="text-4xl font-bold" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
              "A Prestigious Lot for a Prestigious Home"
            </h3>
          </div>
        </div>
      </div>

      {/* SLIDE 4 — AI RENDERINGS */}
      <section id="renderings" style={{ backgroundColor: "#060d19" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <SectionLabel light>Vision &amp; Possibility</SectionLabel>
              <h2 className="text-4xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                What Could Be Built Here?
              </h2>
              <GoldDivider />
              <p className="text-base max-w-2xl mx-auto" style={{ color: `${CREAM}99`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Imagine the possibilities. These AI-generated conceptual renderings illustrate the type of distinguished residences that could grace this 1.19-acre canvas — from sleek modern to timeless manor.
              </p>
              <p className="text-xs mt-3" style={{ color: `${CREAM}50` }}>
                * Renderings are conceptual illustrations only. Actual buildability, design, and development subject to buyer's independent investigation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: "/images/render_modern_2_2.jpg",       style: "Modern Contemporary",  range: "$2.8M – $3.8M", desc: "Sleek modernist architecture with floor-to-ceiling glass, infinity pool, and seamless indoor-outdoor living." },
                { src: "/images/render_transitional_2_2.jpg", style: "Transitional Estate",   range: "$2.4M – $3.4M", desc: "Classic elegance meets modern sensibility — white brick, black windows, grand circular driveway." },
                { src: "/images/render_craftsman_2_2.jpg",    style: "Craftsman Luxury",      range: "$2.2M – $3.0M", desc: "Natural stone, cedar accents, deep covered porches — a warm and sophisticated mountain-inspired estate." },
                { src: "/images/render_manor_2_2.jpg",        style: "Georgian Estate Manor", range: "$3.0M – $4.2M", desc: "Timeless Georgian grandeur with columned portico, symmetrical brick façade, and motor court." },
              ].map((r, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="group overflow-hidden border hover:border-opacity-80 transition-all duration-500"
                  style={{ borderColor: `${GOLD}30` }}>
                  <div className="relative overflow-hidden h-64">
                    <img src={r.src} alt={r.style} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1" style={{ backgroundColor: GOLD, color: NAVY }}>
                        {r.style}
                      </span>
                    </div>
                  </div>
                  <div className="p-5" style={{ backgroundColor: `${NAVY}dd` }}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold" style={{ color: CREAM }}>{r.style}</h4>
                      <span className="text-sm font-bold" style={{ color: GOLD }}>{r.range} Est.</span>
                    </div>
                    <p className="text-sm" style={{ color: `${CREAM}80`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <CTABar />
      </section>

      {/* SLIDE 5 — LOCATION */}
      <section id="location" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <SectionLabel>Location Matters</SectionLabel>
                <h2 className="text-4xl font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                  Everything Within Reach
                </h2>
                <GoldDivider />
                <p className="text-base mb-8 leading-relaxed" style={{ color: `${NAVY}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                  Ideally positioned at the confluence of Potomac's most coveted corridors — minutes from everything that matters, yet removed from it all.
                </p>
                <div className="space-y-4">
                  {[
                    { place: "Potomac Village",           time: "5 min" },
                    { place: "Montgomery Mall",            time: "8 min" },
                    { place: "Cabin John Village",         time: "10 min" },
                    { place: "Downtown Bethesda",          time: "15 min" },
                    { place: "I-495 Capital Beltway",      time: "10 min" },
                    { place: "Washington, D.C.",           time: "25 min" },
                    { place: "Northern Virginia",          time: "30 min" },
                    { place: "Reagan National Airport",    time: "35 min" },
                  ].map(loc => (
                    <div key={loc.place} className="flex items-center justify-between py-3 border-b" style={{ borderColor: `${GOLD}25` }}>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ backgroundColor: GOLD }} />
                        <span className="font-medium text-sm" style={{ color: NAVY }}>{loc.place}</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: GOLD }}>{loc.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-4">
                <img src="/images/prop_2.jpg" alt="Property view" className="w-full h-52 object-cover rounded shadow-xl" />
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/prop_4.jpg" alt="Property" className="w-full h-40 object-cover rounded shadow" />
                  <img src="/images/prop_5.jpg" alt="Property" className="w-full h-40 object-cover rounded shadow" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 6 — POTOMAC LIFESTYLE (PARALLAX BANNER) */}
      <div className="relative h-96 overflow-hidden">
        <img src="/images/prop_7.jpg" alt="Potomac" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${NAVY}e0 50%, ${NAVY}50 100%)` }} />
        <div className="absolute inset-0 flex items-center px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel light>Potomac Lifestyle</SectionLabel>
              <h2 className="text-3xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                Life at Its Finest
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: `${CREAM}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Potomac, Maryland consistently ranks among the most affluent and desirable communities in the nation — celebrated for its distinguished estates, exceptional schools, expansive parks, and unmatched quality of life.
              </p>
              <ul className="space-y-2">
                {[
                  "Highly regarded Montgomery County schools",
                  "Established luxury communities and prestigious neighbors",
                  "C&O Canal, Great Falls Park, Cabin John Regional Park",
                  "World-class shopping, dining, and entertainment",
                  "Access to multiple transportation corridors",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: `${CREAM}cc` }}>
                    <span style={{ color: GOLD }}>◆</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SLIDE 7 — NATURAL SETTING */}
      <section id="nature" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel light>The Natural Setting</SectionLabel>
              <h2 className="text-4xl font-bold mb-2" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                Nature as Your Canvas
              </h2>
              <GoldDivider />
              <p className="text-base max-w-3xl mx-auto" style={{ color: `${CREAM}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                The mature hardwood canopy that graces this property is not a limitation — it is an extraordinary asset. These towering trees provide natural privacy screening, dappled golden light, and a serene, park-like ambiance that cannot be manufactured.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {["/images/prop_1.jpg", "/images/prop_3.jpg", "/images/prop_8.jpg", "/images/prop_4.jpg"].map((src, i) => (
                <motion.div key={i} variants={fadeUp} className="overflow-hidden aspect-square">
                  <img src={src} alt={`Property ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
            <motion.div variants={stagger} className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { title: "Mature Hardwoods",    desc: "Towering trees that took decades to grow, providing natural grandeur from day one." },
                { title: "Privacy Potential",   desc: "Dense natural screening creates extraordinary seclusion within your private estate." },
                { title: "Dappled Light",        desc: "Ethereal filtered sunlight creates a magical ambiance throughout the property." },
                { title: "Natural Beauty",       desc: "Preserve and integrate nature into your architectural vision for a truly unique estate." },
              ].map(f => (
                <motion.div key={f.title} variants={fadeUp} className="p-5 border" style={{ borderColor: `${GOLD}30` }}>
                  <div className="w-8 h-px mx-auto mb-3" style={{ backgroundColor: GOLD }} />
                  <h4 className="font-bold text-sm mb-2" style={{ color: GOLD }}>{f.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: `${CREAM}80` }}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <CTABar />
      </section>

      {/* SLIDE 8 — PROPERTY INFORMATION */}
      <section id="info" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel>Property Information</SectionLabel>
              <h2 className="text-4xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                The Details
              </h2>
              <GoldDivider />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Full Address",        value: `${PROP.address}, ${PROP.city}` },
                { label: "Lot Size",            value: `${PROP.acres} Acres (Approx.)` },
                { label: "Zoning",              value: PROP.zoning },
                { label: "Land Use",            value: "Residential Land" },
                { label: "Subdivision",         value: PROP.subdivision },
                { label: "Tax Account No.",     value: PROP.taxAccount },
                { label: "Tax Assessment",      value: PROP.assessment },
                { label: "Annual Property Tax", value: PROP.annualTax },
                { label: "County",              value: PROP.county },
                { label: "Asking Price",        value: PROP.price },
              ].map(row => (
                <motion.div key={row.label} variants={fadeUp}
                  className="flex items-start justify-between p-4 border-b" style={{ borderColor: `${GOLD}25` }}>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>{row.label}</span>
                  <span className="text-sm font-semibold text-right ml-4" style={{ color: NAVY }}>{row.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 9 — BUYER DUE DILIGENCE */}
      <section id="diligence" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <SectionLabel light>Important Information</SectionLabel>
              <h2 className="text-4xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                Buyer Due Diligence
              </h2>
              <GoldDivider />
            </motion.div>
            <motion.div variants={fadeUp}
              className="p-8 border" style={{ borderColor: `${GOLD}40`, background: `${CREAM}06` }}>
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle size={24} style={{ color: GOLD }} className="shrink-0 mt-1" />
                <p className="font-bold text-sm tracking-wide" style={{ color: CREAM }}>
                  This property is being offered as vacant land. Prospective purchasers are strongly encouraged to perform their own independent investigations including, but not limited to:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Building feasibility and structural engineering",
                  "Utility availability and connection costs",
                  "Permitting requirements and timelines",
                  "Environmental considerations and assessments",
                  "Setback and easement requirements",
                  "Access and road frontage requirements",
                  "Stormwater management requirements",
                  "Any other required development approvals",
                  "Subdivision potential and restrictions",
                  "Soil composition and percolation testing",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm" style={{ color: `${CREAM}cc` }}>
                    <span style={{ color: GOLD }}>◆</span> {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: `${GOLD}30` }}>
                <p className="text-xs leading-relaxed" style={{ color: `${CREAM}70` }}>
                  Buyers should verify all information directly with Montgomery County, applicable governmental authorities, and qualified professionals. All information provided is believed to be accurate but is not guaranteed. Buyer is responsible for independently verifying all information to their satisfaction.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 10 — PROPERTY ACCESS */}
      <section id="access" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <img src="/images/prop_5.jpg" alt="Property Access" className="w-full h-64 object-cover rounded shadow-xl border" style={{ borderColor: `${GOLD}30` }} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SectionLabel>Property Access &amp; Viewing</SectionLabel>
                <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                  Visiting the Property
                </h2>
                <GoldDivider />
                <div className="flex items-start gap-3 mb-5 p-4 rounded border" style={{ borderColor: `${GOLD}40`, backgroundColor: `${NAVY}08` }}>
                  <Info size={18} style={{ color: DGOLD }} className="shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>Visitors may inspect the property at their own risk. Please exercise caution at all times.</p>
                </div>
                <h4 className="font-bold text-sm mb-3" style={{ color: DGOLD }}>Terrain Conditions</h4>
                <ul className="space-y-2 mb-6">
                  {["Wooded terrain with dense understory","Uneven ground and natural slopes","Stream crossing and drainage areas","Seasonal elevation changes"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: NAVY }}>
                      <span style={{ color: GOLD }}>◆</span> {item}
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold text-sm mb-3" style={{ color: DGOLD }}>Recommended Attire</h4>
                <ul className="space-y-2">
                  {["Waterproof boots or sturdy outdoor footwear","Long pants","Appropriate outdoor clothing"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: NAVY }}>
                      <span style={{ color: GOLD }}>◆</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLIDE 11 — INVESTMENT POTENTIAL */}
      <section id="investment" style={{ backgroundColor: "#060d19" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <SectionLabel light>Investment Perspective</SectionLabel>
              <h2 className="text-4xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                Investment Potential
              </h2>
              <GoldDivider />
              <p className="text-base max-w-2xl mx-auto" style={{ color: `${CREAM}99`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Vacant residential land in established Potomac neighborhoods is extraordinarily rare. The opportunity to acquire a parcel of this character may not present itself again.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Limited Supply",         desc: "The opportunity to acquire buildable vacant lots within established Potomac communities is increasingly rare — making this offering particularly noteworthy." },
                { title: "Desirable Location",     desc: "Potomac, MD has consistently attracted high-net-worth individuals and families seeking prestige, privacy, and proximity to Washington, D.C." },
                { title: "Appreciation Potential", desc: "Land in mature luxury communities may offer compelling long-term appreciation potential, particularly for those with a patient investment horizon." },
              ].map(c => (
                <motion.div key={c.title} variants={fadeUp}
                  className="p-7 border" style={{ borderColor: `${GOLD}40`, background: `${CREAM}05` }}>
                  <div className="h-px mb-5" style={{ backgroundColor: GOLD }} />
                  <h4 className="font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>{c.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: `${CREAM}80` }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp}
              className="text-center p-6 border" style={{ borderColor: `${GOLD}40` }}>
              <p className="text-xs" style={{ color: `${CREAM}50` }}>
                * Investment language is illustrative only. Past performance of real estate markets does not guarantee future results. Prospective buyers should conduct their own independent analysis. No representations are made regarding future appreciation, buildability, or investment returns.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <CTABar />
      </section>

      {/* SLIDE 12 — WE WELCOME YOUR OFFER */}
      <section id="offer" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel>An Invitation</SectionLabel>
              <h2 className="text-4xl font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                We Welcome Your Offer
              </h2>
              <GoldDivider />
              <p className="text-base max-w-3xl mx-auto" style={{ color: `${NAVY}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Whether you envision a custom luxury residence, a family legacy estate, or a strategic land investment — this property deserves your thoughtful consideration.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: "🏗️", title: "Custom Home Builders",     desc: "An exceptional canvas for architects and builders seeking a distinguished Potomac address for a signature project." },
                { icon: "📈", title: "Investors",                  desc: "A compelling opportunity in one of Montgomery County's most sought-after corridors. Offers with appropriate due diligence contingencies welcomed." },
                { icon: "🏡", title: "Dream Homesite Seekers",    desc: "For the discerning family seeking a rare opportunity to design and build the home they've always imagined, in a community they've always admired." },
              ].map(c => (
                <motion.div key={c.title} variants={fadeUp}
                  className="text-center p-8 border hover:shadow-lg transition-shadow duration-300"
                  style={{ borderColor: `${GOLD}30` }}>
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h4 className="font-bold mb-3" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>{c.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}99` }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL SLIDE — CONTACT */}
      <section id="contact" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #060d19 100%)` }}>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <img src="/images/maxus_logo.jpg" alt="Maxus Realty" className="h-14 object-contain mx-auto mb-8" />
              <SectionLabel light>Schedule Your Property Tour</SectionLabel>
              <h2 className="text-5xl font-bold mb-4" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                Let's Talk Possibilities
              </h2>
              <GoldDivider />
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: `${CREAM}cc`, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                For additional information, to arrange a property tour, or to discuss this unique Potomac homesite, please contact us today.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}
              className="inline-block mb-10 p-8 border" style={{ borderColor: `${GOLD}50` }}>
              <div className="flex items-start gap-5 text-left">
                <img src="/images/agent_fernando.png" alt="Fernando Herboso" className="w-20 h-20 rounded-full object-cover border-2 shrink-0" style={{ borderColor: GOLD }} />
                <div>
                  <p className="text-2xl font-bold mb-1" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>{AGENT.name}</p>
                  <p className="text-sm mb-1" style={{ color: GOLD }}>{AGENT.title}</p>
                  <p className="text-sm mb-4" style={{ color: `${CREAM}80` }}>{AGENT.company}</p>
                  <div className="space-y-2">
                    <a href={`tel:${AGENT.phone}`} className="flex items-center gap-2 text-sm hover:opacity-80 transition" style={{ color: CREAM }}>
                      <Phone size={14} style={{ color: GOLD }} /> {AGENT.phone}
                    </a>
                    <a href={`mailto:${AGENT.email}`} className="flex items-center gap-2 text-sm hover:opacity-80 transition" style={{ color: CREAM }}>
                      <Mail size={14} style={{ color: GOLD }} /> {AGENT.email}
                    </a>
                    <p className="flex items-center gap-2 text-sm" style={{ color: `${CREAM}70` }}>
                      <MapPin size={14} style={{ color: GOLD }} /> {AGENT.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${AGENT.phone}`}
                 className="flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold tracking-widest uppercase"
                 style={{ backgroundColor: GOLD, color: NAVY }}>
                <Phone size={15} /> Call Now
              </a>
              <a href={`mailto:${AGENT.email}`}
                 className="flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold tracking-widest uppercase border"
                 style={{ color: CREAM, borderColor: `${GOLD}60` }}>
                <Mail size={15} /> Email Inquiry
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-16 text-xs" style={{ color: `${CREAM}35` }}>
              © 2026 {AGENT.company} · {AGENT.name}, {AGENT.title} · All information deemed reliable but not guaranteed. Buyer to independently verify all information. No representations made regarding buildability, permitting, utilities, or development. Equal Housing Opportunity. ⊕
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
