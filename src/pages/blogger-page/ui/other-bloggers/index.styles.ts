import { ButtonProps, FlexProps, GridProps, StackProps } from '@chakra-ui/react';

type OtherBloggersStyleProps = {
    button: ButtonProps;
    container: StackProps;
    otherBloggers: GridProps;
    titleContainer: FlexProps;
};

export const otherBloggersStyles: OtherBloggersStyleProps = {
    button: {
        borderRadius: 'md',
        color: 'black',
        fontSize: { base: 'xs', xl: 'lg' },
        fontWeight: 'semibold',
        gap: 2,
        h: { base: 6, xl: 12 },
        lineHeight: { base: '4', xl: '5' },
        px: { base: 2, xl: 6 },
        w: { base: '104px', xl: '176px' },
    },
    container: {
        gap: { base: 3, xl: 6 },
        py: { xl: 6 },
    },
    otherBloggers: {
        gap: 3,
        templateColumns: { base: '1fr', md: 'repeat(3,1fr)' },
    },
    titleContainer: {
        align: 'center',
        justify: 'space-between',
    },
};
