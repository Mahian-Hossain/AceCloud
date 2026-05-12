'use client';

import { useEffect, useRef } from 'react';

const cards = [
  { ico: 'F/S', t: 'Full-stack, not full-service.', d: 'Strategy, design and engineering — one team, one system, one accountability.' },
  { ico: '/01', t: 'Senior by default.', d: 'No layered juniors. Every project is staffed by partners and senior practitioners.' },
  { ico: '↑↑', t: 'Built to compound.', d: 'We hand back design systems, growth infrastructure and tooling — not a one-shot site.' },
  { ico: '≡≡', t: 'A studio cadence.', d: 'Two-week cycles, weekly demos, written briefs. You feel velocity, not chaos.' },
  { ico: '◐', t: 'Numbers, not vibes.', d: 'Performance budgets, conversion targets and SEO baselines locked in at brief stage.' },
  { ico: '★', t: 'Quietly category-defining.', d: 'Our work has launched, repositioned and scaled category leaders. Ask us.' },
];

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ac-container ac-section" id="why" ref={ref}>
      <div className="sect-head">
        <div className="sect-tag reveal">
          <span className="num">05</span>Why AceCloud
        </div>
        <h2 className="h-1 reveal reveal-d-1">
          Operators choose us because <span className="serif-italic">we move</span> like a product team.
        </h2>
      </div>

      <div className="why-grid">
        {cards.map((c, i) => (
          <div key={i} className={`why-card reveal reveal-d-${Math.min(i, 5)}`}>
            <div className="why-ico">{c.ico}</div>
            <div className="why-t">{c.t}</div>
            <div className="why-d">{c.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
