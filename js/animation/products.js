// animation/products.js
export function initProductsAnimation() {
    const section = document.querySelector('.products');
    if (!section) return;

    const title = section.querySelector('.product__title');
    const items = section.querySelectorAll('.product__item');
    const link = section.querySelector('.products__link');

    if (!title || !items.length) return;

    /* TITLE ANIMATION */
    observeOnce(title, 'animate-title', 0.35);

    /* PRODUCTS SEQUENCE */
    const itemsObserver = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            items.forEach((item, i) => {
                item.style.transitionDelay = `${i * 0.25}s`;
                item.classList.add('animate-item');
            });

            if (link) {
                link.style.transitionDelay = `${items.length * 0.25}s`;
                link.classList.add('animate-link');
            }

            itemsObserver.disconnect();
        },
        { threshold: 0.3 }
    );

    itemsObserver.observe(items[0]);
}

/* ===================== */
/* HELPER */
/* ===================== */

function observeOnce(el, className, threshold = 0.3) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;
            el.classList.add(className);
            observer.disconnect();
        },
        { threshold }
    );

    observer.observe(el);
}
