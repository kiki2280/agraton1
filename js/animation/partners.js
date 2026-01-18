export function initPartnersAnimation() {
    const section = document.querySelector('.partners');
    if (!section) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            section.classList.add('animate');
            observer.disconnect();
        },
        {
            threshold: 0.35
        }
    );

    observer.observe(section);
}
