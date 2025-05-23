import { ImageProps } from '@chakra-ui/react';

type ModalIllustrationStyleProps = {
    illustration: ImageProps;
};

export const modalIllustrationStyles: ModalIllustrationStyleProps = {
    illustration: {
        boxSize: { base: '108px', xl: '206px' },
    },
};
