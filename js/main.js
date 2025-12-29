

// элементы
const menuBtn1 = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

// открыть / закрыть бургер
menuBtn1.addEventListener('click', () => {
    menuList.classList.toggle('menu--active');
    menuBtn1.classList.toggle('active');
});

// закрывать меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('menu--active');
        menuBtn.classList.remove('active');
    });
});
