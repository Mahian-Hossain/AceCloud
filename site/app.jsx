/* AceCloud — sections */

const { useState, useEffect, useRef, useMemo } = React;

// ─── Loader ───
function Loader({ done }) {
  const [n, setN] = useState(0);
  const [up, setUp] = useState(false);

  useEffect(() => {
    let frame, start;
    const dur = 1600;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setUp(true), 260);
        setTimeout(done, 260 + 1050);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={"loader-curtain" + (up ? " slide-up" : "")}>
      <div className="lc-count">{String(n).padStart(3, "0")}</div>
      <div className="lc-corner lc-tl">acecloud / 2026</div>
      <div className="lc-corner lc-br">Est. 2023</div>
    </div>
  );
}

// ─── Reveal hook ───
function useReveal(threshold = 0.15) {
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
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    el.querySelectorAll(".reveal, .word-reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── Navbar ───
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
    ["services", "Services"],
    ["process", "Process"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <nav className={"nav" + (!ready ? " intro" : "")}
      style={scrolled ? { top: 14, width: "min(94vw, 820px)" } : null}>
      <a href="#top" className="nav-brand">
        <img src="assets/cloud.png" className="mark" alt="AceCloud" />
      </a>
      <div className="nav-links">
        <a href="portfolio.html">Portfolio</a>
        <div className="nav-dd">
          <a href="services.html">Services <span className="chev">↓</span></a>
          <div className="nav-dd-menu">
            <a href="service-brand.html">Brand Systems</a>
            <a href="service-web-design.html">Web Design</a>
            <a href="service-web-dev.html">Web Development</a>
            <a href="service-growth.html">Growth Infrastructure</a>
            <a href="service-digital.html">Digital Systems</a>
            <a href="service-retainer.html">Retainer Partnership</a>
          </div>
        </div>
        <a href="process.html">Process</a>
        <a href="studio.html">Studio</a>
        <div className="nav-dd">
          <a href="blog.html">Resources <span className="chev">↓</span></a>
          <div className="nav-dd-menu">
            <a href="blog.html">Blog</a>
            <a href="faqs.html">FAQs</a>
            <a href="testimonials.html">Testimonials</a>
            <a href="studio.html">About us</a>
          </div>
        </div>
      </div>
      <a href="book.html" className="nav-cta">
        <span className="dot"></span>
        Start a project
      </a>
    </nav>
  );
}

// ─── Hero ───
function Hero() {
  const ref = useReveal();
  return (
    <section className="hv3" id="top" ref={ref} data-screen-label="01 Hero">
      <div className="hv3-inner">

        {/* Eyebrow */}
        <div className="hv3-eyebrow reveal">
          <span className="hv3-avail">
            <span className="dot-live"/>
            Available for Q3
          </span>
          <span className="hv3-rule"/>
          <span>Toronto · Est. 2023</span>
          <span className="hv3-rule"/>
          <span>Strategy · Design · Engineering</span>
        </div>

        {/* Headline */}
        <h1 className="hv3-h">
          <span className="reveal">We engineer</span>
          <span className="reveal reveal-d-1">brand <em>experiences</em></span>
          <span className="hv3-h-last reveal reveal-d-2"><em>that</em> scale.</span>
        </h1>

        {/* Footer row: description + CTAs */}
        <div className="hv3-foot reveal reveal-d-3">
          <p className="hv3-desc">
            A full-stack studio for ambitious brands — strategy, design
            and engineering operating as one compounding system.
          </p>
          <div className="hv3-ctas">
            <a href="book.html" className="btn">
              <span>Start a project</span>
              <span className="arr">↗</span>
            </a>
            <a href="portfolio.html" className="btn btn-ghost">
              <span>View our work</span>
              <span className="arr">↗</span>
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hv3-stats reveal reveal-d-4">
          <div className="hv3-stat">
            <span className="hv3-sn">120+</span>
            <span className="hv3-sl">Brands shipped, MVP to scale</span>
          </div>
          <div className="hv3-sdiv"/>
          <div className="hv3-stat">
            <span className="hv3-sn">3.4×</span>
            <span className="hv3-sl">Avg. post-launch conversion lift</span>
          </div>
          <div className="hv3-sdiv"/>
          <div className="hv3-stat">
            <span className="hv3-sn">48h</span>
            <span className="hv3-sl">Brief to first strategic output</span>
          </div>
          <div className="hv3-sdiv"/>
          <div className="hv3-stat">
            <span className="hv3-sn">$200M+</span>
            <span className="hv3-sl">Capital raised by clients</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Trust / Metrics + Marquee ───
function Trust() {
  const ref = useReveal();
  const metrics = [
    ["120", "+", "Brands shipped from MVP to scale"],
    ["48h", "", "Median strategy turnaround"],
    ["3.4", "x", "Average post-launch conversion lift"],
    ["09", "", "Engineers, designers & strategists"],
  ];
  const logos = [
    "Northwind", "Halycon", "Fieldnotes", "Atlas Foundry",
    "Mercato", "Lumen Bio", "Parallel", "Outset",
    "Northwind", "Halycon", "Fieldnotes", "Atlas Foundry",
    "Mercato", "Lumen Bio", "Parallel", "Outset",
  ];
  return (
    <section className="trust" ref={ref} data-screen-label="02 Trust">
      <div className="container">
        <div className="trust-head">
          {metrics.map(([n, sup, label], i) => (
            <div key={i} className={"metric reveal reveal-d-" + i}>
              <div className="num">
                <span>{n}</span>{sup && <sup>{sup}</sup>}
              </div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {logos.map((l, i) => (
            <span key={i} className="item">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───
function Services() {
  const ref = useReveal();
  const rows = [
    { n: "01", name: "Brand Systems", desc: "Identity, narrative and design language built to flex across product, marketing and platform.", deliv: ["Identity", "Narrative", "Guidelines"], href: "service-brand.html" },
    { n: "02", name: "Web Design", desc: "Editorial, product-grade marketing sites built to win the click and hold attention.", deliv: ["Marketing site", "Design system", "CMS"], href: "service-web-design.html" },
    { n: "03", name: "Web Development", desc: "Next.js, headless CMS and edge-grade infrastructure — engineered for 95+ Lighthouse on every page.", deliv: ["Next.js", "Sanity / Contentful", "Edge"], href: "service-web-dev.html" },
    { n: "04", name: "Growth Infrastructure", desc: "Technical SEO, analytics, A/B systems and conversion engineering wired in from day one — not bolted on later.", deliv: ["SEO", "Analytics", "CRO"], href: "service-growth.html" },
    { n: "05", name: "Digital Systems", desc: "Internal tools, dashboards and product surfaces designed and built at brand pace.", deliv: ["Product UI", "Tooling", "Ops"], href: "service-digital.html" },
    { n: "06", name: "Retainer Partnership", desc: "Embedded design and engineering capacity for teams shipping every week — one pod, on-call.", deliv: ["Embedded", "Iterative", "On-call"], href: "service-retainer.html" },
  ];
  return (
    <section className="container section" id="services" ref={ref} data-screen-label="03 Services">
      <div className="sect-head">
        <h2 className="h-1 reveal">
          A full-stack of <span className="serif-italic">design,</span> engineering and growth — under one roof.
        </h2>
      </div>
      <div className="services-list">
        {rows.map((r, i) => (
          <a href={r.href} key={r.n} className={"svc-row reveal reveal-d-" + Math.min(i, 5)}>
            <div className="num">{r.n}</div>
            <div className="name" data-name={r.name}>{r.name}</div>
            <div className="desc">{r.desc}</div>
            <div className="deliv">{r.deliv.map((d) => <span key={d}>{d}</span>)}</div>
            <div className="arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Visual placeholder ───
function Viz({ kind, label, year, type }) {
  return (
    <div className={"viz viz-" + kind}>
      <div className={"viz-tag" + (kind === 2 || kind === 6 ? " dark" : "")}>
        <span className="chip">{type}</span>
        <span className="chip">{year}</span>
      </div>
      <VizContent kind={kind} label={label} />
    </div>
  );
}

function VizContent({ kind, label }) {
  // Original abstract compositions, no copyrighted iconography
  if (kind === 1) {
    // soft blue — large rounded card stack
    return (
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="oklch(0.96 0.02 250)"/>
            <stop offset="1" stopColor="oklch(0.86 0.06 250)"/>
          </linearGradient>
        </defs>
        <rect x="40" y="80" width="520" height="240" rx="20" fill="white" stroke="rgba(0,0,0,0.06)"/>
        <rect x="60" y="100" width="180" height="14" rx="7" fill="oklch(0.86 0.06 250)"/>
        <rect x="60" y="124" width="120" height="10" rx="5" fill="oklch(0.92 0.04 250)"/>
        <rect x="60" y="160" width="480" height="80" rx="10" fill="url(#g1)"/>
        <circle cx="500" cy="120" r="22" fill="oklch(0.65 0.16 250)"/>
        <rect x="60" y="260" width="100" height="36" rx="18" fill="oklch(0.18 0 0)"/>
        <rect x="180" y="260" width="80" height="36" rx="18" fill="white" stroke="rgba(0,0,0,0.1)"/>
      </svg>
    );
  }
  if (kind === 2) {
    // dark — grid composition
    return (
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        <text x="40" y="180" fontFamily="Geist, sans-serif" fontSize="92" fontWeight="500" fill="white" letterSpacing="-3">Halycon</text>
        <text x="40" y="220" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">FINANCIAL PLATFORM · 2025</text>
        <line x1="40" y1="280" x2="560" y2="280" stroke="rgba(255,255,255,0.15)"/>
        <rect x="40" y="300" width="100" height="44" rx="22" fill="oklch(0.65 0.16 250)"/>
        <rect x="160" y="300" width="80" height="44" rx="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)"/>
      </svg>
    );
  }
  if (kind === 3) {
    // off-white — typographic
    return (
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        <text x="40" y="240" fontFamily="Geist, sans-serif" fontSize="160" fontWeight="500" fill="#0A0A0A" letterSpacing="-6">FN.</text>
        <rect x="320" y="120" width="220" height="160" rx="14" fill="white" stroke="rgba(0,0,0,0.08)"/>
        <rect x="340" y="140" width="60" height="60" rx="8" fill="oklch(0.78 0.10 250)"/>
        <rect x="340" y="220" width="120" height="10" rx="5" fill="#0A0A0A"/>
        <rect x="340" y="240" width="80" height="8" rx="4" fill="#A3A3A0"/>
      </svg>
    );
  }
  if (kind === 4) {
    // warm — product mock
    return (
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        <rect x="60" y="60" width="480" height="280" rx="14" fill="white" stroke="rgba(0,0,0,0.06)"/>
        <rect x="60" y="60" width="480" height="36" rx="14" fill="#F6F5F1"/>
        <circle cx="80" cy="78" r="4" fill="#DEDDD6"/>
        <circle cx="92" cy="78" r="4" fill="#DEDDD6"/>
        <circle cx="104" cy="78" r="4" fill="#DEDDD6"/>
        <text x="84" y="160" fontFamily="Geist, sans-serif" fontSize="40" fontWeight="500" fill="#0A0A0A" letterSpacing="-1.5">Mercato</text>
        <text x="84" y="190" fontFamily="Geist Mono, monospace" fontSize="11" fill="#56564F" letterSpacing="1.2">ECOMMERCE · D2C</text>
        <rect x="84" y="220" width="160" height="100" rx="8" fill="oklch(0.92 0.03 60)"/>
        <rect x="256" y="220" width="160" height="100" rx="8" fill="oklch(0.84 0.04 70)"/>
        <rect x="428" y="220" width="100" height="100" rx="8" fill="#0A0A0A"/>
      </svg>
    );
  }
  if (kind === 5) {
    // paper — chart
    return (
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        <path d="M40 320 L120 280 L200 290 L280 220 L360 200 L440 140 L520 100 L560 80" stroke="#0A0A0A" strokeWidth="2" fill="none"/>
        <path d="M40 320 L120 280 L200 290 L280 220 L360 200 L440 140 L520 100 L560 80 L560 360 L40 360 Z" fill="oklch(0.92 0.04 250)" opacity="0.6"/>
        <circle cx="560" cy="80" r="6" fill="oklch(0.65 0.16 250)"/>
        <line x1="40" y1="360" x2="560" y2="360" stroke="#DEDDD6"/>
        <text x="40" y="355" fontFamily="Geist, sans-serif" fontSize="44" fontWeight="500" fill="#0A0A0A" letterSpacing="-1.5" opacity="0.18">Atlas</text>
      </svg>
    );
  }
  // kind 6 — deep blue editorial
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
      <text x="40" y="220" fontFamily="Geist, sans-serif" fontSize="120" fontWeight="500" fill="white" letterSpacing="-4" fontStyle="italic">Lumen.</text>
      <text x="40" y="260" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.5)" letterSpacing="2">BIOTECH · CATEGORY LAUNCH</text>
      <circle cx="500" cy="120" r="80" fill="none" stroke="rgba(255,255,255,0.2)"/>
      <circle cx="500" cy="120" r="50" fill="none" stroke="rgba(255,255,255,0.3)"/>
      <circle cx="500" cy="120" r="20" fill="oklch(0.65 0.16 250)"/>
    </svg>
  );
}

// ─── Work / Case studies ───
function Work() {
  const ref = useReveal();
  return (
    <section className="container section" id="work" ref={ref} data-screen-label="04 Work">
      <div className="sect-head">
        <h2 className="h-1 reveal">
          Brands we've quietly shipped <span className="serif-italic">into</span> the next stage.
        </h2>
      </div>

      <div className="work-grid">
        <a href="case-halycon.html" className="work-card col-7 reveal">
          <div className="visual"><Viz kind={2} type="Platform" year="2025"/></div>
          <div className="meta"><span className="l">01 — Halycon Capital</span><span className="l">→ +84% pipeline</span></div>
          <div className="title"><span>Re-platforming a fund's public face.</span><span className="arr">↗</span></div>
        </a>
        <a href="case-northwind.html" className="work-card col-5 reveal reveal-d-1">
          <div className="visual"><Viz kind={1} type="SaaS" year="2025"/></div>
          <div className="meta"><span className="l">02 — Northwind</span><span className="l">→ Series B launch</span></div>
          <div className="title"><span>An OS-style site for a serious DevOps tool.</span><span className="arr">↗</span></div>
        </a>
        <a href="case-fieldnotes.html" className="work-card col-4 reveal">
          <div className="visual"><Viz kind={3} type="Identity" year="2024"/></div>
          <div className="meta"><span className="l">03 — Fieldnotes</span><span className="l">→ Brand system</span></div>
          <div className="title"><span>A patient, editorial brand world.</span><span className="arr">↗</span></div>
        </a>
        <a href="case-mercato.html" className="work-card col-4 reveal reveal-d-1">
          <div className="visual"><Viz kind={4} type="D2C" year="2025"/></div>
          <div className="meta"><span className="l">04 — Mercato</span><span className="l">→ +3.1× conv.</span></div>
          <div className="title"><span>Commerce that earns the buy.</span><span className="arr">↗</span></div>
        </a>
        <a href="case-lumen.html" className="work-card col-4 reveal reveal-d-2">
          <div className="visual"><Viz kind={6} type="Biotech" year="2024"/></div>
          <div className="meta"><span className="l">05 — Lumen Bio</span><span className="l">→ Category launch</span></div>
          <div className="title"><span>A category, defined.</span><span className="arr">↗</span></div>
        </a>
        <a href="case-atlas.html" className="work-card col-12 reveal">
          <div className="visual" style={{ aspectRatio: "21/9" }}><Viz kind={5} type="Growth" year="2025"/></div>
          <div className="meta"><span className="l">06 — Atlas Foundry</span><span className="l">→ +312% organic / 6 mo</span></div>
          <div className="title"><span>Engineering organic growth into the foundation.</span><span className="arr">↗</span></div>
        </a>
      </div>

      <div style={{display:"flex",justifyContent:"center",marginTop:"clamp(48px,6vh,80px)"}} className="reveal">
        <a href="work.html" className="btn btn-ghost">
          <span>View all 32 case studies</span>
          <span className="arr">↗</span>
        </a>
      </div>
    </section>
  );
}

// ─── Process ───
function Process() {
  const ref = useReveal();
  const steps = [
    { t: "Diagnose", d: "Audit, narrative interrogation, and a sharp written brief. Two weeks, no surprises.", w: "Wk 01–02" },
    { t: "Design", d: "Identity, system, marketing site and product surfaces — designed in vertical slices.", w: "Wk 03–06" },
    { t: "Engineer", d: "Next.js, headless CMS, edge infra. We ship behind a flag, then progressively reveal.", w: "Wk 05–09" },
    { t: "Compound", d: "Performance, SEO and CRO baked in. We measure, iterate, and hand back a system.", w: "Wk 10+" },
  ];
  return (
    <section className="section" id="process" ref={ref} data-screen-label="05 Process">
      <div className="process">
        <div className="sect-head">
          <div>
            <h2 className="h-1 reveal reveal-d-1" style={{maxWidth:"14ch"}}>
              Four phases. <span className="serif-italic" style={{color:"rgba(250,250,247,0.55)"}}>One</span> compounding system.
            </h2>
            <p className="lede reveal reveal-d-2" style={{marginTop:24}}>
              Strategy, design and engineering operate as a single shipping team —
              not handoffs across silos.
            </p>
          </div>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className={"step reveal reveal-d-" + i}>
              <div className="step-bar"></div>
              <div className="step-n">Phase 0{i + 1} · {s.w}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why AceCloud ───
function Why() {
  const ref = useReveal();
  const cards = [
    { ico: "F/S", t: "Full-stack, not full-service.", d: "Strategy, design and engineering — one team, one system, one accountability." },
    { ico: "/01", t: "Senior by default.", d: "No layered juniors. Every project is staffed by partners and senior practitioners." },
    { ico: "↑↑", t: "Built to compound.", d: "We hand back design systems, growth infrastructure and tooling — not a one-shot site." },
    { ico: "≡≡", t: "A studio cadence.", d: "Two-week cycles, weekly demos, written briefs. You feel velocity, not chaos." },
    { ico: "◐", t: "Numbers, not vibes.", d: "Performance budgets, conversion targets and SEO baselines locked in at brief stage." },
    { ico: "★", t: "Quietly category-defining.", d: "Our work has launched, repositioned and IPO'd category leaders. Ask us." },
  ];
  return (
    <section className="container section" id="about" ref={ref} data-screen-label="06 Why">
      <div className="sect-head">
        <h2 className="h-1 reveal">
          Operators choose us because <span className="serif-italic">we move</span> like a product team.
        </h2>
      </div>
      <div className="why-grid">
        {cards.map((c, i) => (
          <div key={i} className={"why-card reveal reveal-d-" + Math.min(i, 5)}>
            <div className="ico">{c.ico}</div>
            <div className="why-t">{c.t}</div>
            <div className="why-d">{c.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ───
function Testimonials() {
  const ref = useReveal();
  const list = [
    {
      who: "Priya Mehta", role: "VP Marketing · Halycon Capital",
      quote: <>“They <span className="accent">re-platformed our public face</span> in eight weeks — and we closed the largest fund in our history the same quarter. AceCloud doesn't ship websites. They ship leverage.”</>,
    },
    {
      who: "Daniel Okafor", role: "Founder · Northwind",
      quote: <>“Most agencies pitch a deck. AceCloud pitched a <span className="accent">six-month system</span> — design, infra, and growth — and then actually built it. We've been shipping on top of it ever since.”</>,
    },
    {
      who: "Sophie Lang", role: "CMO · Mercato",
      quote: <>“Senior people, every meeting, every week. <span className="accent">The conversion lift paid for the engagement</span> in the first month. The brand work paid forward for years.”</>,
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="container section" ref={ref} data-screen-label="07 Testimonials">
      <div className="sect-head">
        <h2 className="h-1 reveal">
          Operators on what it's <span className="serif-italic">like</span> to work with us.
        </h2>
      </div>

      <div className="tst-stage">
        <div className="reveal">
          <div className="tst-quote">{list[active].quote}</div>
          <div className="tst-meta">
            <div className="av"></div>
            <div className="who">
              <strong>{list[active].who}</strong>
              <span>{list[active].role}</span>
            </div>
          </div>
        </div>
        <div className="tst-side reveal reveal-d-1">
          {list.map((t, i) => (
            <button key={i} className={"tst-pick" + (i === active ? " active" : "")} onClick={() => setActive(i)}>
              <div>
                <div className="who">{t.who}</div>
                <div className="role">{t.role}</div>
              </div>
              <span className="arr">{i === active ? "●" : "↗"}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───
function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="section" id="contact" ref={ref} data-screen-label="08 CTA" style={{ paddingTop: 0 }}>
      <div className="cta">
        <div className="cta-eyebrow reveal">
          <span className="dot"></span>
          Currently booking — Q3 / Q4 2026
        </div>
        <h2 className="cta-headline reveal reveal-d-1">
          Let's build the <em>next</em> chapter of your company.
        </h2>
        <div className="cta-foot">
          <p className="lede reveal reveal-d-2" style={{ color: "rgba(250,250,247,0.7)", margin: 0 }}>
            Tell us where you're going. We'll send a written point of view within 48 hours —
            no decks, no boilerplate.
          </p>
          <div className="reveal reveal-d-3">
            <div className="l">Direct</div>
            <div className="v">hello@acecloud.studio</div>
          </div>
          <div className="reveal reveal-d-3">
            <div className="l">New business</div>
            <div className="v">+1 (212) 555 — 0186</div>
          </div>
          <button className="cta-btn reveal reveal-d-4">
            Start a project
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer() {
  const ref = useReveal();
  return (
    <footer className="container" ref={ref} data-screen-label="09 Footer">
      <div className="foot-mega reveal">
        <span>AceCloud</span>
        <span className="star">© 2026 / v.04</span>
      </div>
      <div className="foot-grid">
        <div className="foot-col">
          <h4>Studio</h4>
          <p className="addr">A digital infrastructure studio for ambitious brands. Toronto, Canada.</p>
          <p style={{marginTop:18,color:"var(--mid-1)"}}>Founded 2023</p>
        </div>
        <div className="foot-col">
          <h4>Sitemap</h4>
          <a href="portfolio.html">Portfolio</a>
          <a href="services.html">Services</a>
          <a href="process.html">Process</a>
          <a href="studio.html">Studio</a>
          <a href="book.html">Start a project</a>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <a href="services.html#brand">Brand systems</a>
          <a href="services.html#web-design">Web design</a>
          <a href="services.html#engineering">Engineering</a>
          <a href="services.html#hosting">Hosting</a>
          <a href="services.html#migration">Website migration</a>
        </div>
        <div className="foot-col">
          <h4>Resources</h4>
          <a href="blog.html">Blog</a>
          <a href="faqs.html">FAQs</a>
          <a href="testimonials.html">Testimonials</a>
          <a href="studio.html">About us</a>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <a href="mailto:hello@acecloud.ca">hello@acecloud.ca</a>
          <a href="book.html">Start a project</a>
          <a href="#" style={{marginTop:14, display:"inline-flex", gap:6}}>↗ LinkedIn</a>
          <a href="#" style={{display:"inline-flex", gap:6}}>↗ Instagram</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© AceCloud Studio Pvt. Ltd. — 2019/2026</span>
        <span>All systems · operational</span>
        <span>Crafted in BLR / NYC</span>
      </div>
    </footer>
  );
}

// ─── Cap Band (animated marquee signature) ───
function CapBand() {
  const words = [
    ["Brand", "systems"],
    ["Web", "design"],
    ["Engineering", null],
    ["SEO", "& growth"],
    ["Paid", "media"],
    ["Graphic", "design"],
    ["Conversion", null],
    ["Product", "surfaces"],
  ];
  const Item = ({ a, b, k }) => (
    <span key={k}>{a}{b ? <em>&nbsp;{b}</em> : null}</span>
  );
  return (
    <section className="cap-band">
      <div className="cap-band-track">
        {words.map((w, i) => <Item key={"a" + i} a={w[0]} b={w[1]} k={i} />)}
        {words.map((w, i) => <Item key={"b" + i} a={w[0]} b={w[1]} k={i} />)}
      </div>
    </section>
  );
}

// ─── App ───
function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#4F8AFF",
    "background": "#F6F5F1",
    "showLoader": true,
    "density": "comfy"
  }/*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [navReady, setNavReady] = useState(!t.showLoader);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--bg", t.background);
    // derive accent-ink (darker) — keep simple
    r.style.setProperty("--accent-ink", t.accent);
  }, [t.accent, t.background]);

  useEffect(() => {
    if (!t.density) return;
    const r = document.documentElement;
    if (t.density === "compact") r.style.setProperty("--section", "clamp(72px, 10vh, 140px)");
    else if (t.density === "comfy") r.style.setProperty("--section", "clamp(96px, 14vh, 200px)");
    else r.style.setProperty("--section", "clamp(120px, 18vh, 240px)");
  }, [t.density]);

  return (
    <>
      {t.showLoader && <Loader done={() => setNavReady(true)} />}
      <Navbar ready={navReady} />
      <div className="shell">
        <Hero />
        <CapBand />
        <Trust />
        <Services />
        <Work />
        <Process />
        <Why />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accent}
          options={["#4F8AFF", "#0A0A0A", "#7A5AE0", "#1F8A5B"]}
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
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
