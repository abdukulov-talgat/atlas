// **************** Burger menu ****************
const burgerBreakpoint = 991.98;

export default function initMenu() {
    initBurger();

    if(window.innerWidth > burgerBreakpoint){
        window.addEventListener('scroll', onScroll);
    }

    window.addEventListener('resize', (evt) => {
        if (window.innerWidth > burgerBreakpoint) {
            window.addEventListener('scroll', onScroll);
            return;
        }
        window.removeEventListener('scroll', onScroll);
    });
}

function initBurger() {
    const burger = document.querySelector('.menu__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('menu__burger--opened');
        document.documentElement.classList.toggle('opened')
    });
}


const header = document.querySelector('.header');
const subMenu = document.querySelector('.sub-menu');

function onScroll(evt) {
    let bgColor = window.scrollY === 0 ? '' : '#fff';
    header.style.backgroundColor = subMenu.style.backgroundColor = bgColor;
}


