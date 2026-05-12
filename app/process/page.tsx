import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process | AceCloud',
  description: 'How AceCloud works — our four-phase operating system.',
};

const phases = [
  {
    n: '01', t: 'Diagnose', w: 'Weeks 01–02',
    sub: 'Audit, research & brief',
    d: 'Every engagement begins with a structured diagnostic. We audit your existing digital estate, conduct stakeholder interviews, and produce a written brief that defines your positioning, audience, KPIs, and the scope of work ahead. Nothing ships without a brief.',
    deliverables: ['Digital audit report', 'Positioning brief', 'KPI baseline', 'Scope of work', 'Project timeline'],
  },
  {
    n: '02', t: 'Design', w: 'Weeks 03–06',
    sub: 'Identity, system & surfaces',
    d: 'Design happens in vertical slices — brand, then web, then product — so each layer informs the next. We don\'t hand off a static Figma; we build in the open with weekly design demos, feedback cycles, and a living design system you own at the end.',
    deliverables: ['Brand identity system', 'Design system', 'Marketing site mockups', 'Component library', 'Design tokens'],
  },
  {
    n: '03', t: 'Engineer', w: 'Weeks 05–10',
    sub: 'Build, test & ship',
    d: 'We build on Next.js with headless CMS and edge infrastructure. Code ships behind feature flags so you can review in a production-like environment before anything goes live. SEO, performance, and accessibility are baked in, not bolted on.',
    deliverables: ['Next.js codebase', 'Headless CMS integration', 'Edge deployment', 'Performance audit', 'Accessibility review'],
  },
  {
    n: '04', t: 'Compound', w: 'Weeks 10+',
    sub: 'Measure, iterate & grow',
    d: 'Post-launch we instrument analytics, run CRO experiments, and execute the SEO roadmap. We don\'t disappear after go-live. We hand over a system — with documentation, a trained team, and a growth playbook — that compounds over time.',
    deliverables: ['Analytics instrumentation', 'CRO roadmap', 'SEO execution', 'Growth playbook', 'Handover documentation'],
  },
];

export default function ProcessPage() {
  return (
    <main style={{ paddingTop: 'clamp(120px,16vh,180px)', paddingBottom: 'clamp(80px,12vh,160px)' }}>
      <div className="ac-container">
        <div className="sect-head" style={{ marginBottom: 'clamp(48px,8vh,80px)' }}>
          <div className="sect-tag">
            <span className="num">01</span>Process
          </div>
          <h1 className="h-1">
            Four phases. <span className="serif-italic">One</span> compounding system.
          </h1>
        </div>

        <p className="lede" style={{ maxWidth: '56ch', marginBottom: 'clamp(48px,8vh,96px)' }}>
          Strategy, design and engineering operate as a single shipping team — not handoffs across silos. Every phase has clear gates, deliverables, and a written record so you know exactly where you are.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          {phases.map((p) => (
            <div key={p.n} style={{ background: '#fff', padding: 'clamp(32px,5vw,60px)', display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 'clamp(32px,5vw,80px)' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mid-1)', marginBottom: 16 }}>
                  Phase {p.n} · {p.w}
                </div>
                <h2 className="h-2" style={{ marginBottom: 8 }}>{p.t}</h2>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-ink)' }}>{p.sub}</div>
              </div>
              <div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--mid-1)', margin: '0 0 28px' }}>{p.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.deliverables.map(d => (
                    <span key={d} style={{ fontFamily: 'var(--mono)', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '5px 12px', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', color: 'var(--mid-1)', background: 'var(--paper)' }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(60px,10vh,100px)' }}>
          <Link href="/book-meeting" className="ac-btn">
            <span>Start a project</span>
            <span className="arr">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
