/* ============================= */
/* GLOBAL OBSERVER HELPER */
/* ============================= */

function observeOnce(element, callback, options = {}) {
    if (!element) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio >= (options.ratio ?? 0.25)) {
                callback();
                observer.disconnect();
            }
        },
        {
            threshold: options.threshold ?? [0.25],
            rootMargin: options.rootMargin ?? '0px'
        }
    );

    observer.observe(element);
}

/* ============================= */
/* ABOUT — HERO */
/* ============================= */

const aboutSection = document.querySelector('.about');

observeOnce(
    aboutSection,
    () => {
        aboutSection.classList.add('animate');
    },
    { ratio: 0.25 }
);

/* ============================= */
/* ABOUT — STATS COUNTERS */
/* ============================= */

const statsSection = document.querySelector('.about__stats');
const counters = document.querySelectorAll('.about__stats dt');

function animateCounter(el) {
    const target = parseFloat(el.dataset.value);
    const suffix = el.textContent.replace(/[0-9.,]/g, '').trim();
    const duration = 2500;
    const start = performance.now();

    function update(time) {
        const progress = Math.min((time - start) / duration, 1);
        const value = target * progress;

        el.textContent =
            (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) +
            (suffix ? ' ' + suffix : '');

        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

observeOnce(
    statsSection,
    () => {
        counters.forEach(animateCounter);
    },
    { ratio: 0.3 }
);

/* ============================= */
/* ABOUT — PROGRESS LIST */
/* ============================= */

const progressBox = document.querySelector('.about__progress-box');
const progressItems = document.querySelectorAll('.about__progress-item');

observeOnce(
    progressBox,
    () => {
        aboutSection.classList.add('animate-progress');

        let delay = 0;
        progressItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 300;
        });
    },
    { ratio: 0.25 }
);

/* ============================= */
/* PRODUCTS */
/* ============================= */

const productsSection = document.querySelector('.products');
const productItems = document.querySelectorAll('.product__item');

observeOnce(
    productsSection,
    () => {
        productsSection.classList.add('animate-products');

        productItems.forEach((item, index) => {
            item.classList.add(index % 2 === 0 ? 'from-top' : 'from-bottom');
        });

        let delay = 0;
        productItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 180;
        });
    },
    { ratio: 0.3 }
);

/* ============================= */
/* SLOGAN */
/* ============================= */

const sloganSection = document.querySelector('.slogan');

observeOnce(
    sloganSection,
    () => {
        sloganSection.classList.add('animate-slogan');
    },
    { ratio: 0.3 }
);

/* ============================= */
/* PARTNERS */
/* ============================= */

const partnersSection = document.querySelector('.partners');
const partnerItems = document.querySelectorAll('.partners__box-item');

observeOnce(
    partnersSection,
    () => {
        let delay = 0;

        setTimeout(() => partnersSection.classList.add('show-title'), delay);
        delay += 200;

        setTimeout(() => partnersSection.classList.add('show-subtitle'), delay);
        delay += 200;

        setTimeout(() => partnersSection.classList.add('show-button'), delay);
        delay += 200;

        setTimeout(() => partnersSection.classList.add('show-image'), delay);
        delay += 200;

        partnerItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 280;
        });

        setTimeout(
            () => partnersSection.classList.add('show-bottom-text'),
            delay
        );
    },
    { ratio: 0.25 }
);

/* ============================= */
/* BLOG */
/* ============================= */

const blogSection = document.querySelector('.blog');
const blogSmallItems = document.querySelectorAll('.blog__item-small');

observeOnce(
    blogSection,
    () => {
        blogSection.classList.add('animate-blog');

        setTimeout(() => blogSection.classList.add('show-big'), 600);

        let delay = 1100;
        blogSmallItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 320;
        });
    },
    { ratio: 0.25 }
);
