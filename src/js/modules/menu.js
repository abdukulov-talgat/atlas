// **************** Burger menu ****************

export default function initMenu(){
    const burger = document.querySelector('.menu__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('menu__burger--opened');
        document.documentElement.classList.toggle('opened')
    });
}
