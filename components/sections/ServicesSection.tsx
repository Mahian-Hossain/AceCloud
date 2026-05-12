'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const rows = [
  {
    n: '01', name: 'Brand Systems',
    desc: 'Identity, narrative and design language built to flex across product, marketing and platform.',
    deliv: ['Identity', 'Narrative', 'Guidelines'],
    href: '/services#brand',
  },
  {
    n: '02', name: 'Web Design',
    desc: 'Editorial, product-grade marketing sites with measurable performance.',
    deliv: ['Marketing site', 'Design system', 'CMS'],
    href: '/services#web-design',
  },
  {
    n: '03', name: 'Web Development',
    desc: 'Next.js, headless CMS and edge-grade infrastructure — engineered for scale.',
    deliv: ['Next.js', 'Sanity / Contentful', 'Edge'],
    href: '/services#engineering',
  },
  {
    n: '04', name: 'SEO & Growth',
    desc: 'Search visibility, analytics and conversion engineering wired in from day one.',
    deliv: ['SEO', 'Analytics', 'CRO'],
    href: '/services#seo',
  },
  {
    n: '05', name: 'Paid Advertising',
    desc: 'Google, Meta and programmatic campaigns built around acquisition economics.',
    deliv: ['Google Ads', 'Meta Ads', 'Reporting'],
    href: '/services#ads',
  },
  {
    n: '06', name: 'Graphic Design',
    desc: 'Print, digital and motion design that extends the brand across every surface.',
    deliv: ['Print', 'Motion', 'Social'],
    href: '/services#graphic',
  },
  {
    n: '07', name: 'Website Migration',
    desc: 'Seamless platform migrations with zero data loss and maintained SEO equity.',
    deliv: ['Audit', 'Migration', 'Redirects'],
    href: '/services#migration',
  },
  {
    n: '08', name: 'Hosting & Infrastructure',
    desc: 'Managed hosting, CDN, uptime monitoring and performance optimisation.',
    deliv: ['Hosting', 'CDN', 'Monitoring'],
    href: '/services#hosting',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ac-container ac-section" id="services" ref={ref}>
      <div className="sect-head">
        <div className="sect-tag reveal">
          <span className="num">02</span>Services
        </div>
        <h2 className="h-1 reveal reveal-d-1">
          A full-stack of <span className="serif-italic">design,</span> engineering and growth — under one roof.
        </h2>
      </div>

      <div className="services-list">
        {rows.map((r, i) => (
          <Link
            key={r.n}
            href={r.href}
            className={`svc-row reveal reveal-d-${Math.min(i, 5)}`}
          >
            <div className="svc-num">{r.n}</div>
            <div className="svc-name" data-name={r.name}>{r.name}</div>
            <div className="svc-desc">{r.desc}</div>
            <div className="svc-deliv">
              {r.deliv.map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="svc-arrow">↗</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
