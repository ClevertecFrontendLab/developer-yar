import { ButtonProps } from '@chakra-ui/react';

type FollowedBloggersCardStyleProps = {
    bloggerRecipesButton: ButtonProps;
};

export const followedBloggersCardStyles: FollowedBloggersCardStyleProps = {
    bloggerRecipesButton: {
        bgColor: 'lime.400',
        borderRadius: 'md',
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'semibold',
        h: 6,
        lineHeight: '5',
        px: 3,
        w: '86px',
    },
};
