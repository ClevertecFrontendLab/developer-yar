import { ButtonProps, GridProps, StackProps } from '@chakra-ui/react';

type OtherBloggersStyleProps = {
    bloggers: GridProps;
    button: ButtonProps;
    container: StackProps;
};

export const otherBloggersStyles: OtherBloggersStyleProps = {
    bloggers: {
        gap: 4,
        sx: {
            '& > div > div': {
                h: 'full',
            },
        },

        templateColumns: { base: '1fr', md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' },
    },
    button: {
        borderRadius: 'md',
        color: 'black',
        fontSize: 'lg',
        fontWeight: 'semibold',
        gap: 2,
        h: 12,
        lineHeight: '7',
        m: 'auto',
        px: 6,
        w: '176px',
    },
    container: {
        bgColor: 'blackAlpha.200',
        borderRadius: 'lg',
        gap: 4,
        p: { base: 4, xl: 6 },
    },
};
