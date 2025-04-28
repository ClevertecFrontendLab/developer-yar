import { HeadingProps } from '@chakra-ui/react';

type SectionTitleStyleProps = {
    heading: HeadingProps;
};

export const sectionTitleStyles: SectionTitleStyleProps = {
    heading: {
        color: 'black',
        fontSize: { '2xl': '5xl', base: '2xl', xl: '4xl' },
        fontWeight: 'medium',
        lineHeight: { base: '8', xl: '10' },
    },
};
