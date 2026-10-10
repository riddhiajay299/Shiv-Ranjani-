/**
 * DARSHANA — Framer Motion Animation Engine
 * Luxury, buttery-smooth spring physics, scroll-triggered reveals, staggered entries, and clean fade in/out transitions.
 * Inspired by Framer Motion (ease: [0.16, 1, 0.3, 1]).
 */

(function () {
  'use strict';

  // 1. Inject Framer Motion Core Stylesheet into <head>
  const motionStyles = document.createElement('style');
  motionStyles.id = 'darshana-framer-motion-css';
  motionStyles.textContent = `
    /* ========================================================
       FRAMER MOTION EASING & PHYSICS CONSTANTS
       ======================================================== */
    :root {
      --fm-ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
      --fm-ease-soft: cubic-bezier(0.25, 1, 0.5, 1);
      --fm-ease-inout: cubic-bezier(0.4, 0.0, 0.2, 1);
      --fm-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
      --fm-duration-normal: 0.85s;
      --fm-duration-fast: 0.4s;
      --fm-duration-instant: 0.2s;
    }

    /* ========================================================
       INITIAL MOTION STATES (whileNotInView)
       ======================================================== */
    [data-motion],
    .motion-fade-up,
    .motion-fade-in,
    .motion-fade-down,
    .motion-scale-up,
    .motion-fade-left,
    .motion-fade-right,
    .motion-hero-title,
    .motion-hero-divider,
    .motion-hero-subtitle,
    .motion-hero-btn {
      will-change: opacity, transform, filter;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }

    /* Fade Up (Default Framer Motion reveal) */
    .motion-fade-up:not(.motion-in-view),
    [data-motion="fade-up"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateY(32px) !important;
    }

    /* Fade Down */
    .motion-fade-down:not(.motion-in-view),
    [data-motion="fade-down"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateY(-28px) !important;
    }

    /* Pure Clean Fade */
    .motion-fade-in:not(.motion-in-view),
    [data-motion="fade-in"]:not(.motion-in-view) {
      opacity: 0 !important;
    }

    /* Scale Up */
    .motion-scale-up:not(.motion-in-view),
    [data-motion="scale-up"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: scale(0.92) translateY(16px) !important;
    }

    /* Fade from Left */
    .motion-fade-left:not(.motion-in-view),
    [data-motion="fade-left"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateX(-36px) !important;
    }

    /* Fade from Right */
    .motion-fade-right:not(.motion-in-view),
    [data-motion="fade-right"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateX(36px) !important;
    }

    /* ========================================================
       FIRST PAGE HERO CHOREOGRAPHED MOTION
       ======================================================== */
    /* Hero Title (Shiv Ranjani signature logo) */
    .motion-hero-title:not(.motion-in-view),
    [data-motion="hero-title"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateY(36px) scale(0.95) !important;
      filter: blur(6px) !important;
    }

    /* Hero Ornamental Divider (Group 7.svg) */
    .motion-hero-divider:not(.motion-in-view),
    [data-motion="hero-divider"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: scale(0.7) !important;
      filter: blur(4px) !important;
    }

    /* Hero Subtitle ("The Art of Draping") */
    .motion-hero-subtitle:not(.motion-in-view),
    [data-motion="hero-subtitle"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateY(20px) !important;
      letter-spacing: 0.1em !important;
    }

    /* Hero CTA Button Container */
    .motion-hero-btn:not(.motion-in-view),
    [data-motion="hero-btn"]:not(.motion-in-view) {
      opacity: 0 !important;
      transform: translateY(24px) scale(0.96) !important;
    }

    /* Hero Background Zoom Entrance */
    .motion-hero-bg {
      animation: fmHeroBgReveal 1.6s var(--fm-ease-soft) forwards;
    }

    @keyframes fmHeroBgReveal {
      0% {
        opacity: 0.7;
        transform: scale(1.06);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* ========================================================
       ACTIVE MOTION STATES (whileInView)
       ======================================================== */
    .motion-in-view {
      opacity: 1 !important;
      transform: translate3d(0, 0, 0) scale(1) !important;
      filter: blur(0px) !important;
      transition: 
        opacity var(--fm-duration-normal) var(--fm-ease-spring) var(--stagger-delay, 0s),
        transform var(--fm-duration-normal) var(--fm-ease-spring) var(--stagger-delay, 0s),
        filter var(--fm-duration-normal) var(--fm-ease-spring) var(--stagger-delay, 0s),
        letter-spacing var(--fm-duration-normal) var(--fm-ease-spring) var(--stagger-delay, 0s) !important;
    }

    /* ========================================================
       INTERACTIVE MICRO-INTERACTIONS (whileHover, whileTap)
       ======================================================== */
    /* Button spring scale & hover lift */
    a, button, .motion-interactive {
      transition: 
        transform 0.3s var(--fm-ease-spring), 
        box-shadow 0.3s var(--fm-ease-spring), 
        background-color 0.25s ease, 
        border-color 0.25s ease, 
        opacity 0.25s ease;
    }

    a:active:not(.no-motion-tap):not([class*="-translate-y-1/2"]), 
    button:active:not(.no-motion-tap):not([class*="-translate-y-1/2"]),
    .motion-tap:active {
      transform: scale(0.96) !important;
      transition-duration: 0.12s !important;
    }

    /* Product Cards Framer-like Spring Lift */
    article, .motion-card {
      transition: 
        transform 0.45s var(--fm-ease-spring),
        box-shadow 0.45s var(--fm-ease-spring),
        border-color 0.3s ease !important;
    }

    article:hover, .motion-card:hover {
      transform: translateY(-6px) translateZ(0) !important;
      box-shadow: 0 20px 40px -12px rgba(188, 4, 45, 0.2) !important;
    }

    /* Category Navigation Pills Smooth Morph */
    .category-pill {
      transition: all 0.3s var(--fm-ease-spring) !important;
    }

    .category-pill:hover {
      transform: translateY(-2px) scale(1.04) !important;
    }

    .category-pill:active {
      transform: scale(0.95) !important;
    }

    /* Modal Clean Fade In / Fade Out & Absolute Click-through Guarantee */
    #detailsModal {
      transition: opacity 0.32s var(--fm-ease-inout), backdrop-filter 0.32s var(--fm-ease-inout) !important;
    }

    #detailsModal:not(.modal-active),
    #detailsModal.pointer-events-none,
    #detailsModal.opacity-0 {
      pointer-events: none !important;
      visibility: hidden !important;
    }

    #detailsModal.modal-active,
    #detailsModal.opacity-100 {
      pointer-events: auto !important;
      visibility: visible !important;
    }

    #detailsModal > div {
      transition: transform 0.4s var(--fm-ease-spring), opacity 0.32s var(--fm-ease-inout) !important;
    }

    /* Smooth image color-swatch crossfade */
    #modalProductImg, .motion-crossfade {
      transition: opacity 0.22s var(--fm-ease-inout), transform 0.35s var(--fm-ease-spring) !important;
    }

    /* Swatch buttons interactive ring bounce */
    .color-thumb-btn {
      transition: transform 0.28s var(--fm-ease-spring), border-color 0.2s ease, box-shadow 0.28s var(--fm-ease-spring) !important;
    }

    .color-thumb-btn:active {
      transform: scale(0.93) !important;
    }

    /* Page 2 Carousel Navigation Arrows — Clean static placement without motion distortions */
    #carouselPrevBtn,
    #carouselNextBtn {
      transform: translateY(-50%) !important;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.12s ease !important;
      animation: none !important;
    }

    #carouselPrevBtn:active,
    #carouselNextBtn:active {
      transform: translateY(-50%) scale(0.92) !important;
    }

    /* Ornamental sparks / lotus pulse */
    .motion-spark {
      display: inline-block;
      animation: fmSparkle 3s ease-in-out infinite;
    }

    @keyframes fmSparkle {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      50% { transform: scale(1.25) rotate(90deg); opacity: 1; filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.8)); }
    }

    /* Floating subtle float */
    .motion-float {
      animation: fmFloat 6s ease-in-out infinite;
    }

    @keyframes fmFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    /* Smooth Navbar Blur on Scroll */
    header#siteHeader {
      transition: background-color 0.4s var(--fm-ease-spring), backdrop-filter 0.4s var(--fm-ease-spring), border-color 0.4s var(--fm-ease-spring), box-shadow 0.4s var(--fm-ease-spring), padding 0.35s var(--fm-ease-spring);
    }
  `;
  document.head.appendChild(motionStyles);

  // 2. IntersectionObserver for whileInView Scroll Triggers
  let motionObserver = null;

  function initMotionObserver() {
    if (motionObserver) {
      motionObserver.disconnect();
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: [0, 0.05, 0.1]
    };

    motionObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('motion-in-view');
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    scanAndAttachMotionElements();
  }

  // 3. Scan DOM & Attach Framer Motion Attributes + Automatic Stagger
  function scanAndAttachMotionElements() {
    // A. Explicit motion elements
    const explicitElements = document.querySelectorAll(
      '[data-motion], .motion-fade-up, .motion-fade-in, .motion-fade-down, .motion-scale-up, .motion-fade-left, .motion-fade-right, .motion-hero-title, .motion-hero-divider, .motion-hero-subtitle, .motion-hero-btn'
    );
    explicitElements.forEach((el) => {
      if (!el.classList.contains('motion-in-view')) {
        motionObserver.observe(el);
      }
    });

    // B. Hero Section First Page Orchestration
    const heroMain = document.querySelector('main');
    if (heroMain) {
      // 1. Hero background images
      const heroBgs = heroMain.querySelectorAll('img[src*="hero.jpg"], img[src*="small.png"]');
      heroBgs.forEach((bg) => bg.classList.add('motion-hero-bg'));

      // 2. Hero Brand Signature Logo Title
      const heroTitle = heroMain.querySelector('img[src*="Shiv Ranjani.svg"]');
      if (heroTitle && !heroTitle.hasAttribute('data-motion')) {
        heroTitle.setAttribute('data-motion', 'hero-title');
        heroTitle.style.setProperty('--stagger-delay', '0.2s');
        motionObserver.observe(heroTitle);
      }

      // 3. Hero Ornamental Divider
      const heroDivider = heroMain.querySelector('img[src*="Group 7.svg"]');
      if (heroDivider && !heroDivider.hasAttribute('data-motion')) {
        heroDivider.setAttribute('data-motion', 'hero-divider');
        heroDivider.style.setProperty('--stagger-delay', '0.45s');
        motionObserver.observe(heroDivider);
      }

      // 4. Hero Subtitle ("The Art of Draping")
      const heroSubtitle = heroMain.querySelector('p');
      if (heroSubtitle && !heroSubtitle.hasAttribute('data-motion')) {
        heroSubtitle.setAttribute('data-motion', 'hero-subtitle');
        heroSubtitle.style.setProperty('--stagger-delay', '0.65s');
        motionObserver.observe(heroSubtitle);
      }

      // 5. Hero CTA Container
      const heroCtaContainer = heroMain.querySelector('.flex.items-center.justify-center.gap-3, .flex.items-center.justify-center.gap-4, .flex.items-center.justify-center.gap-5');
      if (heroCtaContainer && !heroCtaContainer.hasAttribute('data-motion')) {
        heroCtaContainer.setAttribute('data-motion', 'hero-btn');
        heroCtaContainer.style.setProperty('--stagger-delay', '0.85s');
        motionObserver.observe(heroCtaContainer);

        // Sparks inside CTA
        heroCtaContainer.querySelectorAll('span').forEach((spark) => {
          if (spark.textContent.includes('❖')) {
            spark.classList.add('motion-spark');
          }
        });
      }
    }

    // C. Navbar items entrance
    const navbar = document.querySelector('header#siteHeader');
    if (navbar && !navbar.hasAttribute('data-motion')) {
      navbar.setAttribute('data-motion', 'fade-down');
      navbar.style.setProperty('--stagger-delay', '0.1s');
      motionObserver.observe(navbar);
    }

    // D. Product Cards & Carousel Items (Staggered spring)
    const cardGrids = document.querySelectorAll('.grid, #collectionCarousel');
    cardGrids.forEach((grid) => {
      const children = grid.children;
      let staggerIndex = 0;
      for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (item.tagName === 'ARTICLE' || item.tagName === 'A' || item.classList.contains('flower-separator')) {
          if (!item.hasAttribute('data-motion') && !item.classList.contains('motion-in-view')) {
            item.setAttribute('data-motion', 'fade-up');
            item.style.setProperty('--stagger-delay', `${(staggerIndex % 6) * 0.08}s`);
            motionObserver.observe(item);
          }
          staggerIndex++;
        }
      }
    });

    // E. Section Headings, Titles & Ornamental Dividers
    const headingsAndDividers = document.querySelectorAll('section h2, section p, img[src*="Group 7"], img[src*="border.png"], footer h2');
    headingsAndDividers.forEach((el) => {
      if (!el.closest('article') && !el.closest('#detailsModal') && !el.closest('main') && !el.hasAttribute('data-motion') && !el.classList.contains('motion-in-view')) {
        el.setAttribute('data-motion', 'fade-up');
        motionObserver.observe(el);
      }
    });

    // F. Category Banners (desktop + mobile)
    const bannerSections = document.querySelectorAll('section > div > img[src*="banner"], main > div > img[src*="banner"]');
    bannerSections.forEach((banner) => {
      const parent = banner.closest('div');
      if (parent && !parent.hasAttribute('data-motion') && !parent.classList.contains('motion-in-view')) {
        parent.setAttribute('data-motion', 'scale-up');
        motionObserver.observe(parent);
      }
    });

    // G. Immediate trigger for elements in viewport on load
    setTimeout(() => {
      const inViewOnLoad = document.querySelectorAll('[data-motion]:not(.motion-in-view)');
      inViewOnLoad.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('motion-in-view');
        }
      });
    }, 60);
  }

  // 4. Modal Clean Fade In / Fade Out Enhancer & Click-through Guard
  function setupModalMotion() {
    const modal = document.getElementById('detailsModal');
    if (!modal) return;

    // Ensure modal starts completely closed, non-interactive, and invisible
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
    modal.classList.remove('modal-active', 'pointer-events-auto', 'opacity-100');
    modal.classList.add('pointer-events-none', 'opacity-0');

    const originalOpen = window.openProductDetails;
    if (typeof originalOpen === 'function' && !window.__darshana_modal_hooked) {
      window.__darshana_modal_hooked = true;
      window.openProductDetails = function (productId, colorIdx = 0) {
        if (typeof originalOpen === 'function') {
          originalOpen(productId, colorIdx);
        }

        modal.style.visibility = 'visible';
        modal.style.pointerEvents = 'auto';
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto', 'modal-active');

        const card = modal.querySelector('div');
        if (card) {
          card.classList.remove('scale-95');
          card.classList.add('scale-100');
        }
        document.body.classList.add('overflow-hidden');
      };
    }

    const originalClose = window.closeProductDetails;
    if (typeof originalClose === 'function' && !window.__darshana_close_hooked) {
      window.__darshana_close_hooked = true;
      window.closeProductDetails = function () {
        const card = modal.querySelector('div');
        if (card) {
          card.classList.remove('scale-100');
          card.classList.add('scale-95');
        }

        // IMMEDIATELY disable pointer events so clicks pass through instantly
        modal.style.pointerEvents = 'none';
        modal.classList.remove('opacity-100', 'pointer-events-auto', 'modal-active');
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');

        if (typeof originalClose === 'function') {
          originalClose();
        }

        setTimeout(() => {
          if (!modal.classList.contains('modal-active')) {
            modal.style.visibility = 'hidden';
            modal.style.pointerEvents = 'none';
          }
        }, 300);
      };
    }

    // Handle backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (typeof window.closeProductDetails === 'function') {
          window.closeProductDetails();
        }
      }
    });

    // Handle Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (typeof window.closeProductDetails === 'function') {
          window.closeProductDetails();
        }
      }
    });

    // Handle BFCache (pageshow) and navigation restoration
    window.addEventListener('pageshow', () => {
      if (modal) {
        modal.style.pointerEvents = 'none';
        modal.style.visibility = 'hidden';
        modal.classList.remove('modal-active', 'opacity-100', 'pointer-events-auto');
        modal.classList.add('opacity-0', 'pointer-events-none');
      }
      document.body.classList.remove('overflow-hidden');
    });

    // Handle mobile / browser back button (popstate)
    window.addEventListener('popstate', () => {
      if (modal && modal.classList.contains('modal-active')) {
        if (typeof window.closeProductDetails === 'function') {
          window.closeProductDetails();
        }
      }
    });
  }

  // 5. Initializer on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMotionObserver();
      setupModalMotion();
    });
  } else {
    initMotionObserver();
    setupModalMotion();
  }

  // Expose global Framer Motion refresh utility
  window.DarshanaMotion = {
    refresh: () => {
      scanAndAttachMotionElements();
    },
    inView: (element) => {
      if (element) element.classList.add('motion-in-view');
    }
  };

})();
