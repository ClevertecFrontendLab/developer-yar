import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const swiperConfig: SwiperOptions = {
    allowTouchMove: true,
    breakpoints: {
        1280: {
            allowTouchMove: false,
        },
        320: {
            allowTouchMove: true,
        },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    speed: 150,
};
