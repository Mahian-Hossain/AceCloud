'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal, .word-reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ac-container ac-section ac-hero" id="top" ref={ref}>
      <div className="hero-eyebrow reveal">
        <span className="item">
          <span className="dot" />
          Available for Q3 — 2 slots
        </span>
        <span className="item">EST. 2023 · Toronto, Canada</span>
        <span className="item">A digital infrastructure studio</span>
      </div>

      <h1 className="h-display hero-headline">
        <span className="hero-line word-reveal">
          <span>We engineer</span>
        </span>{' '}
        <span className="hero-line word-reveal reveal-d-1">
          <span>brand experiences</span>
        </span>{' '}
        <span className="hero-line indent word-reveal reveal-d-2">
          <span>
            <span className="serif-italic">that</span> scale
            <span className="pill">
              <span className="stack">
                <span /><span /><span />
              </span>
              with you
            </span>
            .
          </span>
        </span>
      </h1>

      <div className="hero-foot reveal reveal-d-3">
        <p className="lede">
          AceCloud is a full-stack digital partner for ambitious brands —
          design, engineering and growth infrastructure under one roof.
        </p>
        <div className="meta">
          Based<strong>Toronto, Canada</strong>
        </div>
        <div className="meta">
          Engagements<strong>From $24K</strong>
        </div>
        <Link href="/book-meeting" className="ac-btn">
          <span>Start a project</span>
          <span className="arr">↗</span>
        </Link>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="bar" />
        <span>01 / 09</span>
      </div>
    </section>
  );
}
