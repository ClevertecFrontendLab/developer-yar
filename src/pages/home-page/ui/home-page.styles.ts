import { StackProps } from '@chakra-ui/react';

type HomePageStyleProps = {
    container: StackProps;
    layout: StackProps;
};

export const homePageStyles: HomePageStyleProps = {
    container: { gap: { base: 8, xl: 6 } },
    layout: { gap: { base: 8, xl: 10 }, justify: 'center' },
};
