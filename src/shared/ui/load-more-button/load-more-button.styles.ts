import { ButtonProps } from '@chakra-ui/react';

type LoadMoreButtonStyleProps = {
    loadMoreButton: ButtonProps;
};

export const loadMoreButtonStyles: LoadMoreButtonStyleProps = {
    loadMoreButton: {
        bg: 'lime.400',
        borderRadius: 'lg',
        color: 'black',
        fontSize: 'md',
        fontWeight: 600,
        h: 10,
        lineHeight: '6',
        margin: 'auto',
        px: 4,
        w: '152px',
    },
};
