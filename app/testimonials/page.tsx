import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials | AceCloud',
  description: 'What our clients say about working with AceCloud.',
};

const testimonials = [
  {
    who: 'Priya Mehta', role: 'VP Marketing · Halycon Capital',
    quote: 'They re-platformed our public face in eight weeks — and we closed the largest fund in our history the same quarter. AceCloud doesn\'t ship websites. They ship leverage.',
    result: '+84% pipeline',
  },
  {
    who: 'Daniel Okafor', role: 'Founder · Northwind',
    quote: 'Most agencies pitch a deck. AceCloud pitched a six-month system — design, infra, and growth — and then actually built it. We\'ve been shipping on top of it ever since.',
    result: 'Series B launch',
  },
  {
    who: 'Sophie Lang', role: 'CMO · Mercato',
    quote: 'Senior people, every meeting, every week. The conversion lift paid for the engagement in the first month. The brand work paid forward for years.',
    result: '+3.1× conversion',
  },
  {
    who: 'James Whitfield', role: 'CEO · Atlas Foundry',
    quote: 'We came in needing SEO. We left with a system that compounds every month. The +312% in organic traffic was just the first chapter.',
    result: '+312% organic / 6 mo',
  },
];

export default function TestimonialsPage() {
  return (
    <main style={{ paddingTop: 'clamp(120px,16vh,180px)', paddingBottom: 'clamp(80px,12vh,160px)' }}>
      <div className="ac-container">
        <div className="sect-head" style={{ marginBottom: 'clamp(48px,8vh,80px)' }}>
          <div className="sect-tag">
            <span className="num">01</span>Testimonials
          </div>
          <h1 className="h-1">
            Operators on what it&apos;s <span className="serif-italic">like</span> to work with us.
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px,5vh,60px)' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              border: '1px solid var(--line)', borderRadius: 'var(--r-lg)',
              padding: 'clamp(32px,5vw,60px)',
              background: 'var(--paper)',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-ink)', marginBottom: 24 }}>
                {t.result}
              </div>
              <blockquote style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,36px)', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, marginBottom: 32 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24 }}>
                <div style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>{t.who}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mid-1)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(48px,8vh,80px)' }}>
          <Link href="/book-meeting" className="ac-btn">
            <span>Start a project</span>
            <span className="arr">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
