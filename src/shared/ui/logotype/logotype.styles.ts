import { IconProps } from '@chakra-ui/react';

type LogotypeStyleProps = {
    logotypeBig: IconProps;
    logotypeSmall: IconProps;
};

export const logotypeStyles: LogotypeStyleProps = {
    logotypeBig: {
        h: 'auto',
        w: '136px',
    },
    logotypeSmall: {
        boxSize: 8,
    },
};
