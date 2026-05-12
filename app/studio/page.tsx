import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Studio | AceCloud',
  description: 'Meet the AceCloud studio — a full-stack digital agency founded in Toronto, 2023.',
};

const principles = [
  { t: 'Senior by default', d: 'No layers of juniors. Every project is staffed by partners and senior practitioners from day one.' },
  { t: 'Written first', d: 'Every engagement starts with a written brief. Every decision gets a written rationale. Writing forces clarity.' },
  { t: 'Two-week cycles', d: 'Sprints, demos, retrospectives. We operate at a studio cadence so you feel velocity, not chaos.' },
  { t: 'Numbers, not vibes', d: 'Performance budgets, SEO baselines, and conversion targets are locked in at brief stage. We measure everything.' },
  { t: 'Own your infrastructure', d: 'We hand back codebases, design systems, and growth playbooks. Your leverage should outlast us.' },
  { t: 'Quietly bold', d: 'We don\'t show up for the attention. We show up to build the thing that earns it.' },
];

const team = [
  { name: 'Mahian', role: 'Founder & Creative Director', loc: 'Toronto' },
  { name: 'Design', role: 'Brand & Visual Systems', loc: 'Remote' },
  { name: 'Engineering', role: 'Full-Stack Development', loc: 'Remote' },
  { name: 'Growth', role: 'SEO & Performance', loc: 'Remote' },
];

export default function StudioPage() {
  return (
    <main style={{ paddingTop: 'clamp(120px,16vh,180px)', paddingBottom: 'clamp(80px,12vh,160px)' }}>
      <div className="ac-container">
        {/* Header */}
        <div className="sect-head" style={{ marginBottom: 'clamp(48px,8vh,80px)' }}>
          <div className="sect-tag">
            <span className="num">01</span>Studio
          </div>
          <h1 className="h-1">
            A digital infrastructure studio for <span className="serif-italic">ambitious</span> brands.
          </h1>
        </div>

        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 'clamp(32px,5vw,100px)', marginBottom: 'clamp(80px,12vh,140px)' }}>
          <div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mid-1)', marginBottom: 16 }}>
              Founded 2023 · Toronto, Canada
            </p>
          </div>
          <div>
            <p className="lede" style={{ margin: '0 0 24px' }}>
              AceCloud was founded in Toronto in 2023 with a simple belief: the best digital work happens when strategy, design, and engineering share one table — not three separate agency proposals.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--mid-1)' }}>
              We&apos;re a full-stack studio. We take brands from positioning brief to live infrastructure and beyond — building compounding systems, not one-shot deliverables. Our clients range from Series B startups to category-defining established businesses.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div style={{ marginBottom: 'clamp(80px,12vh,140px)' }}>
          <div className="sect-head" style={{ marginBottom: 'clamp(32px,5vh,56px)' }}>
            <div className="sect-tag">
              <span className="num">02</span>How we operate
            </div>
            <h2 className="h-2">
              Six principles that govern <span className="serif-italic">every</span> project.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: '#fff', padding: 'clamp(28px,4vw,44px)' }}>
                <div style={{ width: 32, height: 2, background: 'var(--accent)', marginBottom: 20 }} />
                <h3 className="h-3" style={{ marginBottom: 12 }}>{p.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--mid-1)', margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: 'clamp(80px,12vh,140px)' }}>
          <div className="sect-head" style={{ marginBottom: 'clamp(32px,5vh,56px)' }}>
            <div className="sect-tag">
              <span className="num">03</span>Team
            </div>
            <h2 className="h-2">
              Senior practitioners, <span className="serif-italic">every</span> project.
            </h2>
          </div>
          <div style={{ borderTop: '1px solid var(--ink)' }}>
            {team.map((m, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--line)', padding: 'clamp(20px,3vh,32px) 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(22px,2vw,32px)', letterSpacing: '-0.02em' }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--mid-1)' }}>{m.role}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--mid-2)' }}>{m.loc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/book-meeting" className="ac-btn">
            <span>Start a project</span>
            <span className="arr">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
