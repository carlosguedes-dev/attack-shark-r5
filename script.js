(() => {
    'use strict';

    /* ==============================================
       CONFIG
       ============================================== */
    const TOTAL_FRAMES   = 192;
    const FRAME_PATH     = 'frames/frame_';
    const FRAME_EXT      = '.jpg';
    // A partir de que progresso o texto começa a sumir (0.78 = 78% do scroll)
    const FADE_OUT_START = 0.78;
    // A que progresso está totalmente invisível
    const FADE_OUT_END   = 0.94;

    /* ==============================================
       ELEMENTOS
       ============================================== */
    const canvas         = document.getElementById('hero-canvas');
    const ctx            = canvas.getContext('2d');
    const progressFill   = document.getElementById('hero-progress-fill');
    const scrollIndicator= document.getElementById('scroll-indicator');
    const scrollBound    = document.querySelector('.scroll-bound');
    const heroContent    = document.getElementById('hero-content');

    const frames = [];
    let currentFrame = 0;
    let heroFadedOut = false;

    /* ==============================================
       PRELOAD DE FRAMES
       ============================================== */
    function framePath(i) {
        return `${FRAME_PATH}${String(i).padStart(4, '0')}${FRAME_EXT}`;
    }

    function preloadFrames() {
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = framePath(i);
            img.onload = () => {
                if (i === 1) {
                    resizeCanvas();
                    drawFrame(0);
                }
            };
            frames.push(img);
        }
    }

    /* ==============================================
       CANVAS — RESIZE & DRAW
       ============================================== */
    function resizeCanvas() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(currentFrame);
    }

    function drawFrame(index) {
        if (index < 0 || index >= frames.length) return;
        const img = frames[index];
        if (!img || !img.complete || !img.naturalWidth) return;

        const cw = canvas.width,  ch = canvas.height;
        const iw = img.naturalWidth, ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih);
        const dw = iw * scale, dh = ih * scale;
        const dx = (cw - dw) / 2, dy = (ch - dh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, dw, dh);
    }

    /* ==============================================
       HERO TEXT — FADE OUT
       ============================================== */
    function updateHeroTextFade(progress) {
        if (!heroContent) return;

        if (progress >= FADE_OUT_START) {
            if (!heroFadedOut) {
                heroContent.classList.add('fade-out-hero');
                heroFadedOut = true;
            }
        } else {
            if (heroFadedOut) {
                heroContent.classList.remove('fade-out-hero');
                heroFadedOut = false;
            }
        }
    }

    /* ==============================================
       SCROLL → SYNC
       ============================================== */
    function onScroll() {
        const scrollTop    = window.scrollY;
        const offsetTop    = scrollBound.offsetTop;
        const scrollHeight = scrollBound.scrollHeight;
        const windowHeight = window.innerHeight;

        let progress = (scrollTop - offsetTop) / (scrollHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Frame
        const frameIndex = Math.min(
            Math.floor(progress * TOTAL_FRAMES),
            TOTAL_FRAMES - 1
        );

        if (frameIndex !== currentFrame) {
            currentFrame = frameIndex;
            requestAnimationFrame(() => drawFrame(currentFrame));
        }

        // Progress bar
        progressFill.style.width = `${progress * 100}%`;

        // Scroll indicator fade
        if (scrollIndicator) {
            scrollIndicator.style.opacity = Math.max(0, (1 - progress * 5) * 0.4);
        }

        // Hero text fade out
        updateHeroTextFade(progress);
    }

    /* ==============================================
       REVEAL ANIMATIONS — Intersection Observer
       ============================================== */
    function setupRevealAnimations() {
        const elements = document.querySelectorAll('[data-reveal]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Delay escalonado entre os siblings
                    const siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
                    let idx = 0;
                    siblings.forEach((s, si) => { if (s === entry.target) idx = si; });
                    entry.target.style.transitionDelay = `${idx * 0.1}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    /* ==============================================
       INIT
       ============================================== */
    function init() {
        preloadFrames();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', resizeCanvas);
        setupRevealAnimations();
        onScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
