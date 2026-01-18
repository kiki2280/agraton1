import './modal/modal.js';

import { initAboutAnimation } from './animation/about.js';
import { initProductsAnimation } from './animation/products.js';
import { initSloganAnimation } from './animation/slogan.js';
import { initPartnersAnimation } from './animation/partners.js';
import { initBlogAnimation } from './animation/blog.js';

document.addEventListener('DOMContentLoaded', () => {
    initAboutAnimation();
    initProductsAnimation();
    initSloganAnimation();  
    initPartnersAnimation();
    initBlogAnimation();
});
