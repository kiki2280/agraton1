/* ============================= */
/* DEVICE DETECTION */
/* ============================= */

const isMobile = window.matchMedia('(max-width: 768px)').matches;

/* ============================= */
/* GLOBAL OBSERVER */
/* ============================= */

function observeOnce(element, callback, options = {}) {
    if (!element) return;

    const observer = new IntersectionObserver(
        ([entry], obs) => {
            if (entry.intersectionRatio >= (options.ratio ?? 0.25)) {
                callback();
                obs.disconnect();
            }
        },
        {
            threshold: options.threshold ?? [options.ratio ?? 0.25],
            rootMargin: options.rootMargin ?? '0px'
        }
    );

    observer.observe(element);
}

/* ============================= */
/* HELPER — MOBILE STAGGER */
/* ============================= */

function mobileStagger(elements, delay = 200) {
    let time = 0;
    elements.forEach(el => {
        el.classList.add('mobile-init');
        setTimeout(() => el.classList.add('show'), time);
        time += delay;
    });
}

/* ============================= */
/* ABOUT */
/* ============================= */

const about = document.querySelector('.about');

observeOnce(about, () => {
    about.classList.add('animate');
}, { ratio: 0.3 });

/* ============================= */
/* ABOUT — STATS */
/* ============================= */

const stats = document.querySelector('.about__stats');
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

observeOnce(stats, () => {
    counters.forEach(animateCounter);
}, { ratio: 0.3 });

/* ============================= */
/* ABOUT — PROGRESS */
/* ============================= */

const progressBox = document.querySelector('.about__progress-box');
const progressItems = document.querySelectorAll('.about__progress-item');

observeOnce(progressBox, () => {
    about.classList.add('animate-progress');

    if (isMobile) {
        mobileStagger(progressItems, 220);
    } else {
        let delay = 0;
        progressItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 300;
        });
    }
}, { ratio: 0.25 });

/* ============================= */
/* PRODUCTS */
/* ============================= */

const products = document.querySelector('.products');
const productItems = document.querySelectorAll('.product__item');

observeOnce(products, () => {
    products.classList.add('animate-products');

    if (isMobile) {
        mobileStagger(productItems, 180);
    } else {
        productItems.forEach((item, i) => {
            item.classList.add(i % 2 === 0 ? 'from-top' : 'from-bottom');
        });

        let delay = 0;
        productItems.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 180;
        });
    }
}, { ratio: 0.3 });

/* ============================= */
/* SLOGAN */
/* ============================= */

const slogan = document.querySelector('.slogan');

observeOnce(slogan, () => {
    slogan.classList.add('animate-slogan');
}, { ratio: 0.3 });

/* ============================= */
/* PARTNERS */
/* ============================= */
const partners = document.querySelector('.partners');
const partnerItems = document.querySelectorAll('.partners__box-item');

observeOnce(partners, () => {

    if (isMobile) {
        // показываем ВСЮ структуру
        partners.classList.add('mobile-show');

        const staticBlocks = partners.querySelectorAll(
            '.partners__box-top img, .partners__box-text'
        );

        staticBlocks.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });

        // список — по очереди
        mobileStagger(partnerItems, 220);
        return;
    }

    // desktop — без изменений
    let delay = 0;
    setTimeout(() => partners.classList.add('show-title'), delay); delay += 200;
    setTimeout(() => partners.classList.add('show-subtitle'), delay); delay += 200;
    setTimeout(() => partners.classList.add('show-button'), delay); delay += 200;
    setTimeout(() => partners.classList.add('show-image'), delay); delay += 200;

    partnerItems.forEach(item => {
        setTimeout(() => item.classList.add('show'), delay);
        delay += 280;
    });

    setTimeout(() => partners.classList.add('show-bottom-text'), delay);

}, { ratio: 0.25 });

/* ============================= */
/* BLOG */
/* ============================= */

const blog = document.querySelector('.blog');
const blogSmall = document.querySelectorAll('.blog__item-small');

observeOnce(blog, () => {
    blog.classList.add('animate-blog');

    if (isMobile) {
        mobileStagger(blogSmall, 220);
        blog.classList.add('mobile-show');
    } else {
        setTimeout(() => blog.classList.add('show-big'), 600);

        let delay = 1100;
        blogSmall.forEach(item => {
            setTimeout(() => item.classList.add('show'), delay);
            delay += 320;
        });
    }
}, { ratio: 0.25 });
