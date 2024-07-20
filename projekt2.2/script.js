const menuIcon = document.querySelector('.menu-icon');
const hamburgerIcon = document.querySelector('.fa-solid');
const menuList = document.querySelector('nav');
const shiftedContainer = document.querySelector('.shifted-container');
const header = document.querySelector('header');
const toTop = document.querySelector('.to-top');

const toggleMenu = () => {

    const menuListTop = window.scrollY;
    menuList.style.top = `${menuListTop}px`;

    if (menuList.classList.contains('open')) {
        menuList.classList.remove('open');
        shiftedContainer.classList.remove('shifted');

    } else {
        menuList.classList.add('open');
        shiftedContainer.classList.add('shifted');
    }

    hamburgerIcon.classList.add('hidden');

    setTimeout(() => {
        if (hamburgerIcon.classList.contains('fa-bars')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
           // menuList.style.display = 'block';
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
           // menuList.style.display = 'none';
        }
        hamburgerIcon.classList.remove('hidden');
    }, 400);

};

hamburgerIcon.addEventListener('click', toggleMenu);

menuList.addEventListener('click', (event) => {
    if (menuList.classList.contains('open') && event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        toggleMenu();
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 450);
    } else {
        toggleMenu();
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrinked');
        if (menuList.classList.contains('open')) {
            toggleMenu();
        }
    } else {
        header.classList.remove('shrinked');
    }
})


