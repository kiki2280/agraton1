
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

// toggle menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('menu--active');
});

// close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// close menu on scroll (ВАЖНО для твоего кейса)
window.addEventListener('scroll', () => {
    if (menuList.classList.contains('menu--active')) {
        closeMenu();
    }
});

function closeMenu() {
    menuBtn.classList.remove('active');
    menuList.classList.remove('menu--active');
}

