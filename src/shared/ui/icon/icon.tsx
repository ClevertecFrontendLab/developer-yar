import { Image } from '@chakra-ui/react';
import { FC } from 'react';

import { iconStyles as styles } from './icon.styles';
import { IconVariant } from './icon.types';

type IconProps = {
    icon: string;
    variant?: IconVariant;
};

export const Icon: FC<IconProps> = ({ icon, variant = 'small' }) => (
    <Image alt='Иконка' src={icon} {...styles.icon(variant)} />
);
