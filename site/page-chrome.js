/* Shared chrome (nav + footer) — vanilla JS for sub-pages.
   Set window.PAGE_ACTIVE before this loads to highlight active nav item. */
(function () {
  // ── Curtain enter transition ─────────────────────────────
  // Inject keyframe CSS and curtain synchronously — first paint shows curtain
  const kfStyle = document.createElement('style');
  kfStyle.textContent = '@keyframes curtain-sweep{0%{transform:translateY(0%)}100%{transform:translateY(-105%)}}';
  document.head.appendChild(kfStyle);

  const curtain = document.createElement('div');
  curtain.id = 'ac-curtain';
  curtain.style.cssText = 'position:fixed;top:0;left:-5%;width:110%;height:100%;background:#0A0A0A;z-index:9998;pointer-events:none;overflow:visible;will-change:transform;';
  const arch = document.createElement('div');
  arch.style.cssText = 'position:absolute;bottom:-70px;left:-2%;width:104%;height:140px;background:#fff;border-radius:50% 50% 0 0/70px 70px 0 0;';
  curtain.appendChild(arch);
  document.body.insertBefore(curtain, document.body.firstChild);

  const active = window.PAGE_ACTIVE || "";
  const isRes = ["blog","faqs","testimonials"].includes(active);
  const isSvc = ["services"].includes(active);

  const navHTML = `
    <nav class="nav nav-v2 tight" id="ac-nav">
      <a href="AceCloud.html" class="nav-brand">
        <span class="mark-v2"><img src="assets/cloud.png" alt="" class="mark-cloud"/></span>
      </a>
      <div class="nav-links">
        <a href="portfolio.html" class="${active==='portfolio'?'active':''}">Portfolio</a>
        <div class="nav-dd">
          <a href="services.html" class="${isSvc?'active':''}">Services <span class="chev">↓</span></a>
          <div class="nav-dd-menu">
            <a href="service-brand.html">Brand Systems</a>
            <a href="service-web-design.html">Web Design</a>
            <a href="service-web-dev.html">Web Development</a>
            <a href="service-growth.html">Growth Infrastructure</a>
            <a href="service-digital.html">Digital Systems</a>
            <a href="service-retainer.html">Retainer Partnership</a>
          </div>
        </div>
        <a href="process.html" class="${active==='process'?'active':''}">Process</a>
        <a href="studio.html" class="${active==='studio'?'active':''}">Studio</a>
        <div class="nav-dd">
          <a href="blog.html" class="${isRes?'active':''}">Resources <span class="chev">↓</span></a>
          <div class="nav-dd-menu">
            <a href="blog.html">Blog</a>
            <a href="faqs.html">FAQs</a>
            <a href="testimonials.html">Testimonials</a>
            <a href="studio.html">About us</a>
          </div>
        </div>
      </div>
      <a href="book.html" class="nav-cta nav-cta-v2">
        <span class="dot"></span><span>Start a project</span>
      </a>
    </nav>`;

  const footHTML = `
    <footer class="footer-v2">
      <div class="container">
        <div class="ft-row">
          <div class="ft-brand">
            <span class="mark-v2 sm"><img src="assets/cloud.png" alt="" class="mark-cloud"/></span>
            <span>Toronto, Canada · Est. 2023</span>
          </div>
          <div class="ft-links">
            <a href="portfolio.html">Portfolio</a>
            <a href="services.html">Services</a>
            <a href="process.html">Process</a>
            <a href="studio.html">Studio</a>
            <a href="blog.html">Blog</a>
            <a href="faqs.html">FAQs</a>
            <a href="testimonials.html">Testimonials</a>
            <a href="book.html">Start a project</a>
          </div>
          <div class="ft-social">
            <a href="#">↗ LinkedIn</a>
            <a href="#">↗ Instagram</a>
            <a href="mailto:hello@acecloud.ca">hello@acecloud.ca</a>
          </div>
        </div>
        <div class="ft-rule"></div>
        <div class="ft-base">
          <span>© 2026 AceCloud</span>
          <span>Toronto, Canada</span>
          <span>All systems · operational</span>
        </div>
      </div>
    </footer>
`;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('link[href="styles-nav.css"]').length === 0 &&
      (function(){var l=document.createElement('link');l.rel='stylesheet';l.href='styles-nav.css';document.head.appendChild(l);})();
    const navMount = document.getElementById("nav-mount");
    const footMount = document.getElementById("footer-mount");
    if (navMount) navMount.innerHTML = navHTML;
    if (footMount) footMount.innerHTML = footHTML;

    // Curved curtain sweep — short hold then animate out
    setTimeout(() => {
      curtain.style.animation = 'curtain-sweep 1.35s cubic-bezier(0.76,0,0.24,1) forwards';
    }, 80);
    setTimeout(() => { if (curtain.parentNode) curtain.parentNode.removeChild(curtain); }, 1500);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".rv, .rv-up, .rv-blur, .rv-left").forEach((n) => io.observe(n));
  });
})();
