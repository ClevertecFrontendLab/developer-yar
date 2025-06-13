import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const swiperConfig: SwiperOptions = {
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    speed: 0,
};
