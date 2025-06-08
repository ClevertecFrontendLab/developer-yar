import { AvatarProps, FlexProps, HeadingProps, StackProps, TextProps } from '@chakra-ui/react';

type BloggerProfileCardStyleProps = {
    profileAvatar: AvatarProps;
    profileCard: FlexProps;
    profileData: StackProps;
    profileFullName: HeadingProps;
    profileUsername: TextProps;
};

export const bloggerProfileCardStyles: BloggerProfileCardStyleProps = {
    profileAvatar: {
        boxSize: 32,
    },
    profileCard: {
        alignItems: { base: 'center', xl: 'flex-start' },
        direction: { base: 'column', md: 'row' },
        gap: 6,
        py: { '2xl': 8, base: 4 },
        w: { base: 'full', md: 'auto' },
    },
    profileData: {
        align: { base: 'center', md: 'flex-start' },
        gap: 3,
        minW: { md: '268px' },
        w: 'full',
    },
    profileFullName: {
        color: 'black',
        fontSize: { base: '2xl', xl: '5xl' },
        fontWeight: 'bold',
        lineHeight: { base: 8, xl: 'none' },
        textAlign: 'center',
    },
    profileUsername: {
        color: 'blackAlpha.700',
        fontSize: 'sm',
        fontWeight: 'normal',

        lineHeight: '5',
    },
};
