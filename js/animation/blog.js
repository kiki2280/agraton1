export function initBlogAnimation() {
    const section = document.querySelector('.blog');
    if (!section) return;

    const title = section.querySelector('.blog__title');
    const images = section.querySelectorAll('.blog__item-img');
    const items = section.querySelectorAll('.blog__item-big, .blog__item-small');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            section.classList.add('animate');

            // 1. Картинки — по очереди
            images.forEach((img, i) => {
                img.style.transitionDelay = `${0.3 + i * 0.25}s`;
            });

            // 2. Контент — строго по блокам
            items.forEach((item, i) => {
                const baseDelay = 0.9 + i * 0.6;

                const info = item.querySelector('.blog__item-info');
                const title = item.querySelector('.blog__item-title');
                const text = item.querySelector('.blog__item-text');

                if (info) info.style.transitionDelay = `${baseDelay}s`;
                if (title) title.style.transitionDelay = `${baseDelay + 0.15}s`;
                if (text) text.style.transitionDelay = `${baseDelay + 0.3}s`;
            });

            observer.disconnect();
        },
        { threshold: 0.25 }
    );

    observer.observe(section);
}
