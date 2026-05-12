'use client';

import { useState, useEffect, useRef } from 'react';

const list = [
  {
    who: 'Priya Mehta',
    role: 'VP Marketing · Halycon Capital',
    quote: (
      <>
        &ldquo;They <span className="accent">re-platformed our public face</span> in eight weeks — and we closed the largest fund in our history the same quarter. AceCloud doesn&apos;t ship websites. They ship leverage.&rdquo;
      </>
    ),
  },
  {
    who: 'Daniel Okafor',
    role: 'Founder · Northwind',
    quote: (
      <>
        &ldquo;Most agencies pitch a deck. AceCloud pitched a <span className="accent">six-month system</span> — design, infra, and growth — and then actually built it. We&apos;ve been shipping on top of it ever since.&rdquo;
      </>
    ),
  },
  {
    who: 'Sophie Lang',
    role: 'CMO · Mercato',
    quote: (
      <>
        &ldquo;Senior people, every meeting, every week. <span className="accent">The conversion lift paid for the engagement</span> in the first month. The brand work paid forward for years.&rdquo;
      </>
    ),
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
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
    <section className="ac-container ac-section" ref={ref}>
      <div className="sect-head">
        <div className="sect-tag reveal">
          <span className="num">06</span>Voices
        </div>
        <h2 className="h-1 reveal reveal-d-1">
          Operators on what it&apos;s <span className="serif-italic">like</span> to work with us.
        </h2>
      </div>

      <div className="tst-stage">
        <div className="reveal">
          <div className="tst-quote">{list[active].quote}</div>
          <div className="tst-meta">
            <div className="av" />
            <div className="who">
              <strong>{list[active].who}</strong>
              <span>{list[active].role}</span>
            </div>
          </div>
        </div>

        <div className="tst-side reveal reveal-d-1">
          {list.map((t, i) => (
            <button
              key={i}
              className={`tst-pick${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div>
                <div className="tst-who">{t.who}</div>
                <div className="tst-role">{t.role}</div>
              </div>
              <span className="tst-arr">{i === active ? '●' : '↗'}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
