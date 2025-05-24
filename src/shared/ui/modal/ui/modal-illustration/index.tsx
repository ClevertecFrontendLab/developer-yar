import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalIllustrationStyles as styles } from './index.styles';

export const ModalIllustration: FC<ImageProps> = ({ src, ...props }) => (
    <Image src={src} {...props} {...styles.illustration} />
);
