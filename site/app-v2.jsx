/* AceCloud v2 — refined for premium perception
   - cinematic loader (blur dissolve + logo reveal)
   - stronger headline + trust strip immediately below
   - editorial sections, fewer cards
   - capabilities (not services), premium nomenclature
   - browser-framed work, layered presentation
   - 5-phase process
   - single strong testimonial
   - massive final close, minimal footer
   - choreographed motion: text → supporting → metrics → cta
*/

const { useState, useEffect, useRef, useMemo } = React;

/* ───── Cinematic Loader ─────
   1) brand mark fades in + blurs out
   2) wordmark reveals
   3) scrim stretches up to expose page
*/
function Loader({ done }) {
  const [n, setN] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame;
    let start;
    const dur = 1700;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * 100));
      if (p < 1) frame = requestAnimationFrame(tick);else
      {
        setTimeout(() => setHidden(true), 350);
        setTimeout(done, 1300);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={"loader" + (hidden ? " gone" : "")}>
      <div>
        <div className="loader-tag">acecloud / 2026</div>
        <div className="loader-tag" style={{ marginTop: 8, opacity: 0.5 }}>BLR · NYC · LDN</div>
      </div>
      <div className="loader-count">{String(n).padStart(3, "0")}</div>
      <div style={{ textAlign: "right" }}>
        <div className="loader-mark">Initialising</div>
        <div className="loader-mark" style={{ marginTop: 8, opacity: 0.5 }}>v.04 — full-stack</div>
      </div>
    </div>);

}

/* ───── Reveal hook with directional + blur variants ───── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    el.querySelectorAll(".rv, .rv-blur, .rv-up, .rv-left, .word-reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ───── Magnetic button ───── */
function Magnetic({ children, className = "", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    };
    const onLeave = () => {el.style.transform = "";};
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return <button ref={ref} className={className} {...rest}>{children}</button>;
}

/* ───── Navbar ───── */
function Navbar({ ready }) {
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
  ["work", "Work"],
  ["capabilities", "Capabilities"],
  ["process", "Process"],
  ["studio", "Studio"]];

  return (
    <nav className={"nav nav-v2" + (!ready ? " intro" : "") + (scrolled ? " tight" : "")}>
      <a href="#top" className="nav-brand">
        <span className="mark-v2">
          <img src="assets/cloud.png" alt="" className="mark-cloud" />
        </span>
        <span className="bn">acecloud<sup>®</sup></span>
      </a>
      <div className="nav-links">
        <a href="work.html">Work</a>
        <a href="capabilities.html">Capabilities</a>
        <a href="process.html">Process</a>
        <a href="studio.html">Studio</a>
        <a href="blog.html">Journal</a>
      </div>
      <a href="mailto:hello@acecloud.studio" className="nav-cta nav-cta-v2">
        <span className="dot"></span>
        <span>Start a project</span>
        <span className="arr">↗</span>
      </a>
    </nav>);

}

/* ───── Hero ───── */
function Hero() {
  const ref = useReveal();
  return (
    <section className="container hero hero-v2" id="top" ref={ref} data-screen-label="01 Hero">
      <div className="hero-eyebrow rv-up">
        <span className="item">
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 8px var(--accent)" }} />
          Currently engaging — Q3 / Q4 2026
        </span>
        <span className="item">A digital infrastructure studio</span>
      </div>

      <h1 className="h-display hero-headline-v2">
        <span className="hero-line word-reveal"><span>Infrastructure</span></span>{" "}
        <span className="hero-line word-reveal" style={{ transitionDelay: "0.08s" }}><span>for serious</span></span>{" "}
        <span className="hero-line word-reveal indent" style={{ transitionDelay: "0.16s" }}>
          <span style={{ fontSize: "18px" }}>
            <span className="serif-italic">modern</span> growth.
          </span>
        </span>
      </h1>

      <div className="hero-positioning rv-blur" style={{ transitionDelay: "0.6s" }}>
        <p className="lede">
          AceCloud is a full-stack digital studio for ambitious operators.
          We engineer the brand, product surfaces and growth infrastructure
          that companies running at scale actually require.
        </p>
        <div className="hero-actions">
          <Magnetic className="btn btn-lg" onClick={() => location.hash = "#contact"}>
            <span>Start a project</span>
            <span className="arr">↗</span>
          </Magnetic>
          <a href="#work" className="btn-text">
            <span>See selected work</span>
            <span className="arr">↘</span>
          </a>
        </div>
      </div>
    </section>);

}

/* ───── Trust strip — directly under hero ───── */
function TrustStrip() {
  const ref = useReveal();
  const metrics = [
  ["$2.4B+", "Revenue influenced"],
  ["120+", "Brands shipped"],
  ["12", "Industries served"],
  ["98%", "Client retention"]];

  return (
    <section className="trust-strip" ref={ref} data-screen-label="02 Trust">
      <div className="container">
        <div className="ts-head rv-up">
          <span className="ts-label">Trusted by category-leading operators</span>
          <span className="ts-rule"></span>
          <span className="ts-label r">Selected — 2019 / 2026</span>
        </div>
        <div className="ts-metrics">
          {metrics.map(([n, l], i) =>
          <div key={i} className="ts-metric rv-up" style={{ transitionDelay: 0.1 + i * 0.08 + "s" }}>
              <div className="ts-num">{n}</div>
              <div className="ts-l">{l}</div>
            </div>
          )}
        </div>
        <div className="ts-logos rv-blur" style={{ transitionDelay: "0.5s" }}>
          {["Halycon", "Northwind", "Lumen Bio", "Mercato", "Atlas Foundry", "Fieldnotes", "Parallel", "Outset"].map((l) =>
          <span key={l} className="ts-logo">{l}</span>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Capabilities — editorial, not card-grid ───── */
function Capabilities() {
  const ref = useReveal();
  const rows = [
  { n: "01", name: "Brand Systems", desc: "Identity, narrative and design language built to flex across product, marketing and platform.", deliv: "Identity / Narrative / Guidelines" },
  { n: "02", name: "Growth Architecture", desc: "Marketing surfaces engineered for compounding distribution — SEO, content systems, conversion infrastructure.", deliv: "SEO / Content / CRO" },
  { n: "03", name: "Performance Engineering", desc: "Next.js, headless CMS and edge-grade infrastructure. We ship behind flags and progressively reveal.", deliv: "Next.js / Headless / Edge" },
  { n: "04", name: "Conversion Infrastructure", desc: "Analytics, experimentation systems and conversion engineering wired in from day one — not bolted on.", deliv: "Analytics / Exp. / Funnel" },
  { n: "05", name: "Full-Stack Execution", desc: "Embedded design + engineering capacity for teams shipping every week. One team, one accountability.", deliv: "Embedded / Iterative / On-call" }];

  return (
    <section className="container section section-v2" id="capabilities" ref={ref} data-screen-label="03 Capabilities">
      <div className="sect-head sect-head-v2">
        <div className="sect-tag rv-up"><span className="num">01</span>Capabilities</div>
        <h2 className="h-1 word-reveal" style={{ display: "block" }}>
          <span>
            Strategic operating systems —
            not <span className="serif-italic">agency</span> services.
          </span>
        </h2>
      </div>
      <div className="cap-list">
        {rows.map((r, i) =>
        <a href="#" key={r.n} className="cap-row rv-up" style={{ transitionDelay: i * 0.05 + "s" }}>
            <span className="cap-n">{r.n}</span>
            <span className="cap-name" data-name={r.name}>{r.name}</span>
            <span className="cap-desc">{r.desc}</span>
            <span className="cap-deliv">{r.deliv}</span>
            <span className="cap-arr">↗</span>
          </a>
        )}
      </div>
    </section>);

}

/* ───── Browser frame for case studies ───── */
function BrowserFrame({ children, url, theme = "light" }) {
  return (
    <div className={"bframe " + (theme === "dark" ? "bframe-dark" : "")}>
      <div className="bframe-bar">
        <div className="bframe-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="bframe-url">{url}</div>
        <div className="bframe-stub"></div>
      </div>
      <div className="bframe-body">{children}</div>
    </div>);

}

/* ───── Work — cinematic, layered ───── */
function Work() {
  const ref = useReveal();
  return (
    <section className="container section section-v2" id="work" ref={ref} data-screen-label="04 Work">
      <div className="sect-head sect-head-v2">
        <div className="sect-tag rv-up"><span className="num">02</span>Selected work</div>
        <h2 className="h-1 word-reveal" style={{ display: "block" }}>
          <span>
            Built quietly. <span className="serif-italic">Shipped</span> at scale.
          </span>
        </h2>
      </div>

      {/* Case 01 — Halycon, full-bleed editorial */}
      <article className="case rv-up">
        <header className="case-meta">
          <div><span className="l">01 — Halycon Capital</span></div>
          <div><span className="l">Re-platform · 8 weeks · 2025</span></div>
          <div><span className="l">↘ Live</span></div>
        </header>
        <h3 className="case-title">
          A $4B fund's public face — <span className="serif-italic">re-engineered</span> in eight weeks.
        </h3>
        <div className="case-stage">
          <BrowserFrame url="halycon.capital" theme="dark">
            <CaseViz kind="halycon" />
          </BrowserFrame>
        </div>
        <div className="case-narrative">
          <div className="cn-col">
            <div className="cn-l">Problem</div>
            <p>An institutional brand stuck behind a marketing-led website that no longer matched the firm's stature.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">System</div>
            <p>Editorial brand surface, headless CMS for IR & insights, and an LP portal stitched into a single platform.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">Impact</div>
            <p>+84% qualified pipeline in Q1. Closed largest fund in firm history same quarter as launch.</p>
          </div>
        </div>
      </article>

      {/* Case 02 — Northwind */}
      <article className="case rv-up">
        <header className="case-meta">
          <div><span className="l">02 — Northwind</span></div>
          <div><span className="l">Series B launch · 12 weeks · 2025</span></div>
          <div><span className="l">↘ Live</span></div>
        </header>
        <h3 className="case-title">
          A DevOps platform <span className="serif-italic">that</span> reads like an operating system.
        </h3>
        <div className="case-stage">
          <BrowserFrame url="northwind.dev">
            <CaseViz kind="northwind" />
          </BrowserFrame>
        </div>
        <div className="case-narrative">
          <div className="cn-col">
            <div className="cn-l">Problem</div>
            <p>A serious technical product wrapped in marketing-flavoured pages that engineers immediately distrusted.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">System</div>
            <p>OS-grade design system, in-product documentation, and a marketing surface that shares primitives with the product.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">Impact</div>
            <p>Closed Series B inside 60 days of relaunch. Conversion to qualified trial up 3.4×.</p>
          </div>
        </div>
      </article>

      {/* Case 03 — Atlas Foundry */}
      <article className="case rv-up">
        <header className="case-meta">
          <div><span className="l">03 — Atlas Foundry</span></div>
          <div><span className="l">Growth infra · 6 month engagement · 2025</span></div>
          <div><span className="l">↘ Live</span></div>
        </header>
        <h3 className="case-title">
          Engineering organic growth <span className="serif-italic">into</span> the foundation.
        </h3>
        <div className="case-stage">
          <BrowserFrame url="atlasfoundry.com">
            <CaseViz kind="atlas" />
          </BrowserFrame>
        </div>
        <div className="case-narrative">
          <div className="cn-col">
            <div className="cn-l">Problem</div>
            <p>Strong industrial brand, zero organic distribution. Paid acquisition costs eating margin.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">System</div>
            <p>Structured data, programmatic SEO templates and a content engine wired into operations.</p>
          </div>
          <div className="cn-col">
            <div className="cn-l">Impact</div>
            <p>+312% organic traffic in 6 months. Paid spend cut 41% with pipeline up.</p>
          </div>
        </div>
      </article>

      <div className="case-cta rv-up">
        <span className="l">12 more in the index</span>
        <a href="work.html" className="btn-text">
          <span>View all case studies</span>
          <span className="arr">↗</span>
        </a>
      </div>
    </section>);

}

/* Case visuals — original, layered, no copyrighted UI */
function CaseViz({ kind }) {
  if (kind === "halycon") {
    return (
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block", background: "#0E0E14" }}>
        <text x="80" y="240" fontFamily="Geist, sans-serif" fontSize="44" fontWeight="500" fill="rgba(255,255,255,0.5)" letterSpacing="-0.5">Halycon Capital</text>
        <text x="80" y="500" fontFamily="Instrument Serif, serif" fontSize="220" fontStyle="italic" fill="white" letterSpacing="-6">Patient capital.</text>
        <text x="80" y="640" fontFamily="Geist, sans-serif" fontSize="180" fontWeight="500" fill="white" letterSpacing="-6">Built to last.</text>
        <text x="80" y="780" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(255,255,255,0.5)" letterSpacing="2">EST. 1998 · NEW YORK / LONDON · AUM $4.2B</text>
        <rect x="1180" y="180" width="340" height="220" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <text x="1200" y="220" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.5)" letterSpacing="1.5">FUND VII · 2026</text>
        <text x="1200" y="290" fontFamily="Geist, sans-serif" fontSize="56" fontWeight="500" fill="white" letterSpacing="-1.5">$1.2B</text>
        <text x="1200" y="320" fontFamily="Geist, sans-serif" fontSize="14" fill="rgba(255,255,255,0.6)">Targeted close · Q4</text>
        <line x1="1200" y1="360" x2="1480" y2="360" stroke="rgba(255,255,255,0.15)" />
        <rect x="1200" y="380" width="80" height="6" rx="3" fill="oklch(0.65 0.16 250)" />
        <rect x="1280" y="380" width="160" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      </svg>);

  }
  if (kind === "northwind") {
    return (
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block", background: "#F8F8F4" }}>
        <text x="80" y="200" fontFamily="Geist Mono, monospace" fontSize="13" fill="#56564F" letterSpacing="2">NORTHWIND / DEVOPS PLATFORM</text>
        <text x="80" y="380" fontFamily="Geist, sans-serif" fontSize="170" fontWeight="500" fill="#0A0A0A" letterSpacing="-5">Ship like</text>
        <text x="80" y="540" fontFamily="Geist, sans-serif" fontSize="170" fontWeight="500" fill="#0A0A0A" letterSpacing="-5">infrastructure.</text>
        <rect x="80" y="620" width="180" height="56" rx="28" fill="#0A0A0A" />
        <text x="120" y="656" fontFamily="Geist, sans-serif" fontSize="16" fontWeight="500" fill="white">Start free</text>
        <rect x="280" y="620" width="200" height="56" rx="28" fill="none" stroke="#0A0A0A" />
        <text x="310" y="656" fontFamily="Geist, sans-serif" fontSize="16" fontWeight="500" fill="#0A0A0A">View documentation</text>
        <rect x="900" y="160" width="620" height="540" rx="14" fill="white" stroke="#DEDDD6" />
        <rect x="900" y="160" width="620" height="44" rx="14" fill="#F1F0EB" />
        <text x="922" y="188" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F">~ northwind / production</text>
        <text x="922" y="240" fontFamily="Geist Mono, monospace" fontSize="13" fill="#0A0A0A">$ nw deploy --env=prod</text>
        <text x="922" y="270" fontFamily="Geist Mono, monospace" fontSize="13" fill="#56564F">→ building 12 services...</text>
        <text x="922" y="300" fontFamily="Geist Mono, monospace" fontSize="13" fill="#56564F">→ pushing to edge (28 regions)</text>
        <text x="922" y="330" fontFamily="Geist Mono, monospace" fontSize="13" fill="oklch(0.55 0.14 150)">✓ live in 11.2s</text>
        <line x1="922" y1="370" x2="1500" y2="370" stroke="#DEDDD6" />
        <text x="922" y="408" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1">UPTIME · 30D</text>
        <text x="922" y="450" fontFamily="Geist, sans-serif" fontSize="42" fontWeight="500" fill="#0A0A0A" letterSpacing="-1">99.998%</text>
        <rect x="922" y="480" width="580" height="180" rx="6" fill="#FAFAF7" stroke="#E8E7E1" />
        <path d="M940 620 L1000 580 L1080 600 L1160 540 L1240 510 L1320 470 L1400 450 L1480 510" stroke="#0A0A0A" strokeWidth="1.5" fill="none" />
      </svg>);

  }
  // atlas
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block", background: "#FAFAF7" }}>
      <text x="80" y="180" fontFamily="Geist Mono, monospace" fontSize="13" fill="#56564F" letterSpacing="2">ATLAS FOUNDRY · INDUSTRIAL CASTINGS · EST. 1972</text>
      <text x="80" y="380" fontFamily="Geist, sans-serif" fontSize="220" fontWeight="500" fill="#0A0A0A" letterSpacing="-7">Built</text>
      <text x="80" y="600" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="220" fontWeight="400" fill="oklch(0.32 0.12 250)" letterSpacing="-7">to weather.</text>
      <rect x="900" y="160" width="620" height="320" rx="6" fill="white" stroke="#DEDDD6" />
      <text x="920" y="200" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.5">ORGANIC TRAFFIC · 6 MONTHS</text>
      <text x="920" y="250" fontFamily="Geist, sans-serif" fontSize="48" fontWeight="500" fill="#0A0A0A">+312%</text>
      <path d="M920 440 L1000 420 L1080 410 L1160 360 L1240 320 L1320 260 L1400 220 L1500 180" stroke="#0A0A0A" strokeWidth="2" fill="none" />
      <path d="M920 440 L1000 420 L1080 410 L1160 360 L1240 320 L1320 260 L1400 220 L1500 180 L1500 460 L920 460 Z" fill="oklch(0.92 0.04 250)" opacity="0.5" />
      <circle cx="1500" cy="180" r="6" fill="oklch(0.65 0.16 250)" />
      <line x1="920" y1="460" x2="1500" y2="460" stroke="#DEDDD6" />
      <rect x="80" y="700" width="560" height="100" rx="6" fill="white" stroke="#DEDDD6" />
      <text x="100" y="740" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.5">PAID SPEND</text>
      <text x="100" y="780" fontFamily="Geist, sans-serif" fontSize="32" fontWeight="500" fill="#0A0A0A">−41%</text>
      <text x="320" y="740" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.5">PIPELINE</text>
      <text x="320" y="780" fontFamily="Geist, sans-serif" fontSize="32" fontWeight="500" fill="#0A0A0A">+178%</text>
    </svg>);

}

/* ───── Process — 5 phases ───── */
function Process() {
  const ref = useReveal();
  const steps = [
  { t: "Audit", d: "A written, contrarian point of view on where the brand and platform actually stand. Two weeks.", w: "Wk 01–02" },
  { t: "Architecture", d: "System design — brand, surfaces, infrastructure and growth model — defined as one unified spec.", w: "Wk 03–05" },
  { t: "Execution", d: "Vertical slices, behind feature flags. Demo every Friday. Ship weekly to a real environment.", w: "Wk 04–10" },
  { t: "Optimization", d: "Performance budgets, SEO baselines and conversion targets enforced through measurement.", w: "Wk 09–12" },
  { t: "Scale", d: "Hand-back of design system, growth infrastructure and tooling — or extend into retainer partnership.", w: "Wk 12+" }];

  return (
    <section className="section section-v2" id="process" ref={ref} data-screen-label="05 Process">
      <div className="container">
        <div className="sect-head sect-head-v2">
          <div className="sect-tag rv-up"><span className="num">03</span>Process</div>
          <h2 className="h-1 word-reveal" style={{ display: "block" }}>
            <span>
              Five phases. <span className="serif-italic">One</span> compounding system.
            </span>
          </h2>
        </div>
        <div className="phases">
          {steps.map((s, i) =>
          <div key={i} className="phase rv-up" style={{ transitionDelay: i * 0.06 + "s" }}>
              <div className="ph-meta">
                <span className="ph-n">P0{i + 1}</span>
                <span className="ph-w">{s.w}</span>
              </div>
              <div className="ph-t">{s.t}</div>
              <div className="ph-d">{s.d}</div>
              <div className="ph-rule"></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Studio / Why — editorial, not card grid ───── */
function Studio() {
  const ref = useReveal();
  return (
    <section className="container section section-v2" id="studio" ref={ref} data-screen-label="06 Studio">
      <div className="sect-head sect-head-v2">
        <div className="sect-tag rv-up"><span className="num">04</span>Studio</div>
        <h2 className="h-1 word-reveal" style={{ display: "block" }}>
          <span>
            We don't launch websites. We engineer <span className="serif-italic">what</span> growth runs on.
          </span>
        </h2>
      </div>

      <div className="studio-grid">
        <div className="studio-text">
          <p className="lede rv-up">
            AceCloud operates as one shipping team — strategy, design and engineering in a single accountability,
            not handed across silos. We staff engagements with partners and senior practitioners only.
            No layered juniors. No project managers translating between disciplines.
          </p>
          <p className="lede rv-up" style={{ transitionDelay: "0.1s", marginTop: 24 }}>
            Every brief is owned by a partner end-to-end. Every Friday is a working demo.
            Every engagement closes with a system handed back —
            not a one-shot deliverable that decays the day we leave.
          </p>
        </div>
        <div className="studio-pillars">
          {[
          ["Systems thinking", "Brand, product and growth modeled as one platform — not three vendors."],
          ["Full-stack ownership", "Strategy through engineering, under one roof, billed as one engagement."],
          ["Performance + growth", "Numbers locked at brief: load budgets, conversion targets, SEO baselines."],
          ["Senior by default", "Partners on the brief, partners in the build, partners on the call."]].
          map(([t, d], i) =>
          <div key={i} className="pillar rv-up" style={{ transitionDelay: i * 0.08 + "s" }}>
              <div className="p-i">0{i + 1}</div>
              <div className="p-t">{t}</div>
              <div className="p-d">{d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Single strong testimonial ───── */
function Testimonial() {
  const ref = useReveal();
  return (
    <section className="container section section-v2" ref={ref} data-screen-label="07 Voice">
      <div className="testimonial-v2">
        <div className="t-mark rv-up">"</div>
        <blockquote className="t-quote word-reveal" style={{ display: "block" }}>
          <span>
            They re-platformed our public face in eight weeks — and we closed the largest fund
            in our history the same quarter. <span className="serif-italic">AceCloud doesn't ship websites. They ship leverage.</span>
          </span>
        </blockquote>
        <div className="t-attr rv-up" style={{ transitionDelay: "0.3s" }}>
          <div className="t-av"></div>
          <div>
            <strong>Priya Mehta</strong>
            <span>VP Marketing · Halycon Capital · $4B AUM</span>
          </div>
        </div>
      </div>
    </section>);

}

/* ───── Massive final CTA ───── */
function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="final-cta-v2" id="contact" ref={ref} data-screen-label="08 Close">
      <div className="container">
        <div className="fc-eyebrow rv-up">
          <span className="dot"></span>
          <span>Currently engaging — Q3 / Q4 2026 — 2 slots remaining</span>
        </div>
        <h2 className="fc-mega word-reveal" style={{ display: "block" }}>
          <span>
            Let's make your<br />
            next move <span className="serif-italic">inevitable</span>.
          </span>
        </h2>
        <div className="fc-foot">
          <p className="fc-lede rv-up" style={{ transitionDelay: "0.4s" }}>
            Tell us where you're going. We'll send a written point of view within 48 hours —
            no decks, no boilerplate, no discovery calls.
          </p>
          <Magnetic className="fc-btn rv-up" style={{ transitionDelay: "0.5s" }}
          onClick={() => location.href = "mailto:hello@acecloud.studio"}>
            <span>Start a project</span>
            <span className="arr">↗</span>
          </Magnetic>
        </div>
      </div>
    </section>);

}

/* ───── Quiet small footer ───── */
function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="ft-row">
          <div className="ft-brand">
            <span className="mark-v2 sm">
              <img src="assets/cloud.png" alt="" className="mark-cloud" />
            </span>
            <span>acecloud<sup>®</sup></span>
          </div>
          <div className="ft-links">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#studio">Studio</a>
            <a href="mailto:hello@acecloud.studio">hello@acecloud.studio</a>
          </div>
          <div className="ft-social">
            <a href="#">↗ LinkedIn</a>
            <a href="#">↗ Are.na</a>
          </div>
        </div>
        <div className="ft-rule"></div>
        <div className="ft-base">
          <span>© 2026 AceCloud Studio Pvt. Ltd.</span>
          <span>BLR · NYC · LDN</span>
          <span>All systems · operational</span>
        </div>
      </div>
    </footer>);

}

/* ───── App ───── */
function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#3D6FE6",
    "background": "#F6F5F1",
    "showLoader": true,
    "density": "comfy"
  } /*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [navReady, setNavReady] = useState(!t.showLoader);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--bg", t.background);
    r.style.setProperty("--accent-ink", t.accent);
  }, [t.accent, t.background]);

  useEffect(() => {
    const r = document.documentElement;
    if (t.density === "compact") r.style.setProperty("--section", "clamp(72px, 10vh, 140px)");else
    if (t.density === "comfy") r.style.setProperty("--section", "clamp(112px, 16vh, 220px)");else
    r.style.setProperty("--section", "clamp(140px, 20vh, 280px)");
  }, [t.density]);

  return (
    <>
      {t.showLoader && <Loader done={() => setNavReady(true)} />}
      <Navbar ready={navReady} />
      <div className="shell shell-v2">
        <Hero />
        <TrustStrip />
        <Capabilities />
        <Work />
        <Process />
        <Studio />
        <Testimonial />
        <FinalCTA />
        <Footer />
      </div>
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accent}
        options={["#3D6FE6", "#0A0A0A", "#7A5AE0", "#1F8A5B"]}
        onChange={(v) => setTweak("accent", v)} />
        <TweakColor label="Paper" value={t.background}
        options={["#F6F5F1", "#FAFAF7", "#FFFFFF", "#EFEEE9"]}
        onChange={(v) => setTweak("background", v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
        options={["compact", "comfy", "airy"]}
        onChange={(v) => setTweak("density", v)} />
        <TweakSection label="Intro" />
        <TweakToggle label="Show loader" value={t.showLoader}
        onChange={(v) => setTweak("showLoader", v)} />
      </TweaksPanel>
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);