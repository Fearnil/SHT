const swiper = new Swiper(".swiper", {
    effect: "fade",
    // #14 плавная смена картинок
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    //#13 Автоматическая смена картинок в слайдере
});

