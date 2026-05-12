'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ac-footer ac-container">
      <div className="foot-mega reveal">
        <span>AceCloud</span>
        <span className="foot-star">© 2026 / v.04</span>
      </div>

      <div className="foot-grid">
        <div className="foot-col">
          <h4>Studio</h4>
          <p className="addr">
            A digital infrastructure studio for ambitious brands. Toronto, Canada.
          </p>
          <p style={{ marginTop: 18, color: 'var(--mid-1)' }}>Founded 2023</p>
        </div>

        <div className="foot-col">
          <h4>Sitemap</h4>
          <Link href="/projects">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Process</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/book-meeting">Start a project</Link>
        </div>

        <div className="foot-col">
          <h4>Services</h4>
          <Link href="/services#brand">Brand systems</Link>
          <Link href="/services#web-design">Web design</Link>
          <Link href="/services#engineering">Engineering</Link>
          <Link href="/services#hosting">Hosting</Link>
          <Link href="/services#migration">Website migration</Link>
        </div>

        <div className="foot-col">
          <h4>Resources</h4>
          <Link href="/blog">Blog</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/about">About us</Link>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <a href="mailto:hello@acecloud.ca">hello@acecloud.ca</a>
          <a href="tel:+16479311690">+1 (647) 931-1690</a>
          <Link href="/book-meeting">Start a project</Link>
          <a
            href="https://ca.linkedin.com/company/acecloud-ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 14, display: 'inline-flex', gap: 6 }}
          >
            ↗ LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', gap: 6 }}
          >
            ↗ Instagram
          </a>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© AceCloud Studio — 2023/2026</span>
        <span>Toronto, Canada</span>
        <span>All systems · operational</span>
      </div>
    </footer>
  );
}
