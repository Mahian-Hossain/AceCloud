'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavbarProps {
  ready?: boolean;
}

export default function Navbar({ ready = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const navClass = [
    'ac-nav',
    !ready ? 'intro' : '',
    scrolled ? 'scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass}>
        <Link href="/" className="ac-nav-brand">
          <Image
            src="/logo/acecloud.png"
            alt="AceCloud"
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <div className="ac-nav-links">
          <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>
            Portfolio
          </Link>
          <Link href="/services" className={isActive('/services') ? 'active' : ''}>
            Services
          </Link>
          <Link href="/process" className={isActive('/process') ? 'active' : ''}>
            Process
          </Link>
          <Link href="/studio" className={isActive('/studio') ? 'active' : ''}>
            Studio
          </Link>
          <div className="ac-nav-dd">
            <a
              href="/blog"
              className={
                ['/blog', '/faqs', '/testimonials', '/about'].some(p => pathname.startsWith(p))
                  ? 'active'
                  : ''
              }
            >
              Resources <span className="chev">↓</span>
            </a>
            <div className="ac-nav-dd-menu">
              <Link href="/blog">Blog</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/about">About us</Link>
            </div>
          </div>
        </div>

        <Link href="/book-meeting" className="ac-nav-cta">
          <span className="dot" />
          Start a project
        </Link>

        <button
          className="ac-nav-mobile-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`ac-mobile-drawer${mobileOpen ? ' open' : ''}`}>
        {[
          { label: 'Portfolio', href: '/projects' },
          { label: 'Services', href: '/services' },
          { label: 'Process', href: '/process' },
          { label: 'Studio', href: '/studio' },
          { label: 'Blog', href: '/blog' },
          { label: 'FAQs', href: '/faqs' },
          { label: 'Testimonials', href: '/testimonials' },
          { label: 'About us', href: '/about' },
          { label: 'Start a project', href: '/book-meeting' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
            {label}
          </Link>
        ))}
      </div>

      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.2)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
