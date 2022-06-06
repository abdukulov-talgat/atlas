export default function initSwiper() {
    const swiper = new Swiper('.swiper', {
        loop: true,

        // // Navigation arrows
        navigation: {
            nextEl: '.team__button--next',
            prevEl: '.team__button--prev',
        },
        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 60,
            }
        }
    });
}
