import { CenterProps, ChakraProps, ImageProps } from '@chakra-ui/react';

type ImageWithPreviewStyleProps = {
    image: ImageProps;
    imageUploader: CenterProps;
};

const baseProps: ChakraProps = {
    boxSize: '206px',
};

export const imageWithPreviewStyles: ImageWithPreviewStyleProps = {
    image: {
        ...baseProps,
        objectFit: 'cover',
    },
    imageUploader: {
        ...baseProps,
    },
};
