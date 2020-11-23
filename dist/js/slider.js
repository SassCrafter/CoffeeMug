let mySwiper = new Swiper('.swiper-container', {
    grabCursor: true,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});