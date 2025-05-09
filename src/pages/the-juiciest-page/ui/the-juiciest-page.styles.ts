import { BoxProps, StackProps } from '@chakra-ui/react';

type TheJuiciestPageStyleProps = {
    layout: StackProps;
    pageHeroBox: BoxProps;
};

export const theJuiciestPageStyles: TheJuiciestPageStyleProps = {
    layout: { layerStyle: 'pageLayout' },
    pageHeroBox: {
        margin: 'auto',
        maxW: { '2xl': '898px', base: 'full', md: '480px', xl: '578px' },
        pb: { base: 4, xl: 0 },
        w: 'full',
    },
};
