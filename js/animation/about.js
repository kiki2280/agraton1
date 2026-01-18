export function initAboutAnimation() {
    animateOnView('.about__top', 'animate-top', 0.4);
    animateOnView('.about__achievments', 'animate-achievements', 0.4);
    animateOnView('.about__stats', 'animate-stats',0.4, animateStats);
    animateOnView('.about__progress-text', 'animate-progress-text', 0.4);
    animateOnView('.about__progress-box', 'animate-progress-box', 0.4);
    animateProgressItems();
}


/* GENERIC OBSERVER */


function animateOnView(selector, className, threshold = 0.4, callback) {
    const el = document.querySelector(selector);
    if (!el) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio < threshold) return;

            el.classList.add(className);
            callback && callback(el);
            observer.unobserve(el);
        },
        { threshold }
    );

    observer.observe(el);
}

/* STATS COUNTER */


function animateStats(container) {
    const stats = container.querySelectorAll('dt');
    stats.forEach(stat => animateCounter(stat));
}

function animateCounter(el) {
    const target = parseFloat(el.dataset.value);
    const suffix = el.textContent.replace(/[0-9.]/g, '');
    const duration = 1800;
    let start = null;

    function update(time) {
        if (!start) start = time;
        const progress = Math.min((time - start) / duration, 1);
        const value = target * progress;

        el.textContent =
            value.toFixed(target % 1 ? 1 : 0) + suffix;

        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

/* PROGRESS ITEMS SEQUENCE */


function animateProgressItems() {
    const items = document.querySelectorAll('.about__progress-item');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio < 0.3) return;

            items.forEach((item, i) => {
                item.style.transitionDelay = `${i * 0.3}s`;
                item.classList.add('animate-item');
            });

            observer.disconnect();
        },
        { threshold: 0.3 }
    );

    observer.observe(items[0]);
}
