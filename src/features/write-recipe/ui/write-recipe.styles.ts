import { CenterProps, TextProps } from '@chakra-ui/react';

type WriteRecipeStyleProps = {
    container: CenterProps;
    iconWrapper: CenterProps;
    text: TextProps;
};

export const writeRecipeStyles: WriteRecipeStyleProps = {
    container: {
        bgImage:
            'radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
        boxSize: 52,
        cursor: 'pointer',
        flexDirection: 'column',
        gap: 3,
    },
    iconWrapper: {
        bgColor: 'black',
        borderRadius: 'full',
        p: 3,
    },
    text: {
        color: 'blackAlpha.700',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: '4',
    },
};
