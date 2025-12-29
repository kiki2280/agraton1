const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            aboutSection.classList.add('animate');
            observer.unobserve(aboutSection);
        }
    },
    {
        threshold: 0.3
    }
);

observer.observe(aboutSection);




const counters = document.querySelectorAll('.about__stats dt');

const animateCounter = (el) => {
    const target = parseFloat(el.dataset.value);
    const text = el.textContent.replace(/[0-9.,]/g, '').trim();
    const duration = 3000;
    const startTime = performance.now();

    const update = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const value = target * progress;

        el.textContent =
            (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) +
            (text ? ' ' + text : '');

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + (text ? ' ' + text : '');
        }
    };

    requestAnimationFrame(update);
};
const statsSection = document.querySelector('.about__stats');

const statsObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            counters.forEach(animateCounter);
            statsObserver.disconnect();
        }
    },
    { threshold: 0.4 }
);

statsObserver.observe(statsSection);





const aboutSection1 = document.querySelector('.about');
const progressBox = document.querySelector('.about__progress-box');
const progressItems = document.querySelectorAll('.about__progress-item');

const runProgressListAnimation = () => {
    let delay = 0;

    progressItems.forEach((item) => {
        setTimeout(() => {
            item.classList.add('show');
        }, delay);

        delay += 400; // задержка между пунктами
    });
};

const progressObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            // запускаем общие анимации
            aboutSection1.classList.add('animate-progress');

            // запускаем построчную анимацию списка
            setTimeout(runProgressListAnimation, 900);

            progressObserver.disconnect();
        }
    },
    { threshold: 0.35 }
);

progressObserver.observe(progressBox);




const partnersSection = document.querySelector('.partners');
const listItems = document.querySelectorAll('.partners__box-item');

if (partnersSection) {
    const runPartnersAnimation = () => {
        let delay = 0;

        // 1. Title (top -> down)
        setTimeout(() => {
            partnersSection.classList.add('show-title');
        }, delay);
        delay += 100;

        // 2. Subtitle (bottom -> up)
        setTimeout(() => {
            partnersSection.classList.add('show-subtitle');
        }, delay);
        delay += 100;

        // 3. Pause ~2s
        delay += 100;

        // 4.   (bottom -> up)
        setTimeout(() => {
            partnersSection.classList.add('show-button');
        }, delay);
        delay += 100;

        // 5. Image fade in
        setTimeout(() => {
            partnersSection.classList.add('show-image');
        }, delay);
        delay += 100;

        // 6. List items (stagger bottom -> up)
        listItems.forEach((item) => {
            setTimeout(() => {
                item.classList.add('show');
            }, delay);
            delay += 300;
        });

        // 7. Bottom black text (right -> left)
        setTimeout(() => {
            partnersSection.classList.add('show-bottom-text');
        }, delay);
    };

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                runPartnersAnimation();
                observer.disconnect();
            }
        },
        { threshold: 0.35 }
    );

    observer.observe(partnersSection);
}




const blogSection = document.querySelector('.blog');
const blogBigItem = document.querySelector('.blog__item-big');
const blogSmallItems = document.querySelectorAll('.blog__item-small');

if (blogSection) {
    const runBlogAnimation = () => {
        let delay = 0;

        // 1. Title (top -> down)
        setTimeout(() => {
            blogSection.classList.add('animate-blog');
        }, delay);
        delay += 900;

        // 2. Big blog card
        setTimeout(() => {
            blogSection.classList.add('show-big');
        }, delay);
        delay += 1000;

        // 3. Small cards (stagger)
        blogSmallItems.forEach((item) => {
            setTimeout(() => {
                item.classList.add('show');
            }, delay);
            delay += 350;
        });
    };

    const blogObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                runBlogAnimation();
                blogObserver.disconnect();
            }
        },
        { threshold: 0.35 }
    );

    blogObserver.observe(blogSection);
}

/* ============================= */
/* PRODUCTS — FIX */
/* ============================= */

const productsSection = document.querySelector('.products');
const productItems = document.querySelectorAll('.product__item');

if (productsSection) {
    const productsObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                productsSection.classList.add('animate-products');

                // назначаем направления
                productItems.forEach((item, index) => {
                    item.classList.add(index % 2 === 0 ? 'from-top' : 'from-bottom');
                });

                // последовательное появление карточек
                let delay = 0;
                productItems.forEach((item) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, delay);
                    delay += 250;
                });

                productsObserver.disconnect();
            }
        },
        { threshold: 0.35 }
    );

    productsObserver.observe(productsSection);
}


/* ============================= */
/* SLOGAN — FIX */
/* ============================= */

const sloganSection = document.querySelector('.slogan');

if (sloganSection) {
    const sloganObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                sloganSection.classList.add('animate-slogan');
                sloganObserver.disconnect();
            }
        },
        { threshold: 0.4 }
    );

    sloganObserver.observe(sloganSection);
}

