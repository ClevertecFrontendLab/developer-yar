import { ImageProps } from '@chakra-ui/react';

import { IconVariant } from './icon.types';

type IconStyleProps = {
    icon: (variant: IconVariant) => ImageProps;
};

export const iconStyles: IconStyleProps = {
    icon: (variant: IconVariant): ImageProps => ({
        boxSize: variant === 'big' ? 6 : 4,
    }),
};
