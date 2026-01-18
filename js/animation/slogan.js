// animation/slogan.js
export function initSloganAnimation() {
    const slogan = document.querySelector('.slogan');
    if (!slogan) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            slogan.classList.add('animate');
            observer.disconnect();
        },
        {
            threshold: 0.35
        }
    );

    observer.observe(slogan);
}
