import { ButtonProps, IconProps } from '@chakra-ui/react';

export type BloggerFollowButtonStyleProps = {
    button: (isFollowing: boolean) => ButtonProps;
    buttonIcon: IconProps;
};

export const bloggerFollowButtonStyles: BloggerFollowButtonStyleProps = {
    button: (isFollowing: boolean) => ({
        bgColor: isFollowing ? 'whiteAlpha.100' : 'blackAlpha.900',
        borderColor: isFollowing ? 'blackAlpha.200' : 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: isFollowing ? 'black' : 'white',
        fontSize: 'xs',
        fontWeight: 'semibold',
        gap: 1.5,
        h: 6,
        lineHeight: '4',
        minW: '114px',
        px: 2,
    }),
    buttonIcon: {
        boxSize: 3,
    },
};
