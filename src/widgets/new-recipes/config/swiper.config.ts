import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const swiperConfig: SwiperOptions = {
    allowTouchMove: true,
    breakpoints: {
        320: {
            allowTouchMove: true,
        },
        1280: {
            allowTouchMove: false,
        },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    speed: 500,
};
