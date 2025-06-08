import { BoxProps } from '@chakra-ui/react';

type CardWithLoaderStyleProps = {
    container: BoxProps;
    loader: BoxProps;
};

export const cardWithLoaderStyles: CardWithLoaderStyleProps = {
    container: {
        pos: 'relative',
    },
    loader: {
        boxSize: 'full',
        pos: 'absolute',
    },
};
