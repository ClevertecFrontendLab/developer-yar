import { AvatarProps, FlexProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipeAuthorStyleProps = {
    authorContainer: FlexProps;
    authorContentWrapper: StackProps;
    authorFullName: TextProps;
    authorLabelText: TextProps;
    authorMeta: FlexProps;
    authorNameWrapper: StackProps;
    authorTextWrapper: FlexProps;
    authorUsername: TextProps;
    avatar: AvatarProps;
};

export const authorStyles: RecipeAuthorStyleProps = {
    authorContainer: {
        align: 'center',
        bgColor: 'lime.300',
        borderRadius: 'lg',
        gap: { base: 2, md: 8 },
        pb: { base: 3, md: 6 },
        pos: 'relative',
        pt: { base: 5, md: 6 },
        px: { base: 3, md: 6 },
    },
    authorContentWrapper: {
        flex: '1 0 auto',
        gap: 4,
    },
    authorFullName: {
        color: 'black',
        fontSize: { base: 'lg', md: '2xl' },
        fontWeight: 'bold',
        lineHeight: { base: '7', md: '8' },
    },
    authorLabelText: {
        alignSelf: 'flex-start',
        color: 'black',
        fontSize: { base: 'xs', md: 'sm' },
        fontWeight: 'normal',
        lineHeight: { base: '4', md: '5' },
        pos: { base: 'absolute', md: 'static' },
        right: { base: 2, md: 'auto' },
        top: { base: 2, md: 'auto' },
    },
    authorMeta: {
        align: 'center',
        justify: 'space-between',
    },
    authorNameWrapper: {
        gap: 1,
        left: 0,
        top: 2,
    },
    authorTextWrapper: {
        direction: { base: 'column', md: 'row-reverse' },
        justify: 'space-between',
    },
    authorUsername: {
        color: 'blackAlpha.700',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
    },
    avatar: {
        boxSize: 24,
    },
};
