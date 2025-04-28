import { Flex, IconButton } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { LeftArrowIcon, RightArrowIcon } from '~/shared/ui/icons';

import { arrowStyles } from './index.styles';

export const Arrows: FC = memo(() => (
    <Flex {...arrowStyles.arrows}>
        <IconButton
            aria-label='Предыдущий слайд'
            className='swiper-button-prev'
            data-test-id='carousel-back'
            icon={<LeftArrowIcon {...arrowStyles.arrow} />}
            {...arrowStyles.arrowBox}
        />
        <IconButton
            aria-label='Следующий слайд'
            className='swiper-button-next'
            data-test-id='carousel-forward'
            icon={<RightArrowIcon {...arrowStyles.arrow} />}
            {...arrowStyles.arrowBox}
        />
    </Flex>
));
