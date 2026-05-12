import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | AceCloud',
  description: 'Frequently asked questions about working with AceCloud.',
};

const faqs = [
  { q: 'What does an engagement with AceCloud look like?', a: 'We start with a two-week diagnostic — audit, narrative interrogation, and a written brief. From there, design and engineering run in overlapping sprints across a 10-week core engagement.' },
  { q: 'What is the minimum engagement size?', a: 'Our core engagements start from $24K CAD. We also offer ongoing retainer partnerships for teams shipping every week.' },
  { q: 'Do you work with startups or established businesses?', a: 'Both. We\'ve taken brands from seed round to IPO and repositioned established companies for new markets. The common thread is ambition.' },
  { q: 'How long does a typical project take?', a: 'A full-stack brand + web engagement runs 10–14 weeks. Growth retainers are ongoing. We\'re transparent about timelines from day one.' },
  { q: 'Do you offer website hosting?', a: 'Yes. We offer managed hosting with CDN, uptime monitoring and performance optimization as a standalone or add-on service.' },
  { q: 'Can you migrate our existing website to a new platform?', a: 'Absolutely. We handle platform migrations with zero data loss and carefully maintained SEO equity throughout the transition.' },
  { q: 'How do we get started?', a: 'Book a call via our Start a Project page. We\'ll send a written point of view on your situation within 48 hours — no decks, no boilerplate.' },
];

export default function FAQsPage() {
  return (
    <main style={{ paddingTop: 'clamp(120px,16vh,180px)', paddingBottom: 'clamp(80px,12vh,160px)' }}>
      <div className="ac-container">
        <div className="sect-head" style={{ marginBottom: 'clamp(48px,8vh,80px)' }}>
          <div className="sect-tag">
            <span className="num">01</span>FAQs
          </div>
          <h1 className="h-1">
            Everything you need to know before we <span className="serif-italic">start.</span>
          </h1>
        </div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--line)', padding: 'clamp(24px,4vh,40px) 0', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(24px,4vw,80px)' }}>
              <h3 className="h-3" style={{ maxWidth: '28ch' }}>{f.q}</h3>
              <p className="lede" style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
