'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FinalCTA() {
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
    <section className="ac-section" id="contact" style={{ paddingTop: 0 }} ref={ref}>
      <div className="ac-cta">
        <div className="cta-eyebrow reveal">
          <span className="dot" />
          Currently booking — Q3 / Q4 2026
        </div>
        <h2 className="cta-headline reveal reveal-d-1">
          Let&apos;s build the <em>next</em> chapter of your company.
        </h2>
        <div className="cta-foot">
          <p className="lede reveal reveal-d-2" style={{ color: 'rgba(250,250,247,0.7)', margin: 0 }}>
            Tell us where you&apos;re going. We&apos;ll send a written point of view within 48 hours —
            no decks, no boilerplate.
          </p>
          <div className="reveal reveal-d-3">
            <div className="cl">Direct</div>
            <div className="cv">hello@acecloud.ca</div>
          </div>
          <div className="reveal reveal-d-3">
            <div className="cl">New business</div>
            <div className="cv">+1 (647) 931-1690</div>
          </div>
          <Link href="/book-meeting" className="cta-foot-btn reveal reveal-d-4">
            Start a project
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
