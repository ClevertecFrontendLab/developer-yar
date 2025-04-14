import { Center, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { LeftArrowIcon, RightArrowIcon } from '~/shared/ui/icons';

import { arrowStyles as styles } from './index.styles';

export const Arrows: FC = () => (
    <Flex {...styles.arrows}>
        <Center {...styles.arrowBox}>
            <LeftArrowIcon {...styles.arrow} />
        </Center>
        <Center {...styles.arrowBox}>
            <RightArrowIcon {...styles.arrow} />
        </Center>
    </Flex>
);
