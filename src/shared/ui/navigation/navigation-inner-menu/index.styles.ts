import { FlexProps, LinkProps } from '@chakra-ui/react';

type NavigationInnerItemStyleProps = {
    activeIndicator: (isActiveLink: boolean) => FlexProps;
    iconContainer: FlexProps;
    itemWrapper: FlexProps;
    link: (isActiveLink: boolean) => LinkProps;
};

const commonHoverStyles = {
    _hover: {
        bg: 'lime.50',
        '.icon': { bg: 'transparent' },
    },
};

export const navigationInnerItemStyles: NavigationInnerItemStyleProps = {
    activeIndicator: (isActiveLink) => ({
        bg: 'lime.300',
        ml: 'auto',
        w: isActiveLink ? 2 : 'px',
        ...commonHoverStyles,
    }),
    iconContainer: {
        boxSize: 6,
    },
    itemWrapper: {
        cursor: 'pointer',
        gap: '11px',
        pl: 4,
        pr: 2,
        py: 1.5,
        ...commonHoverStyles,
    },
    link: (isActiveLink) => ({
        color: 'black',
        flex: '1',
        fontSize: 'md',
        fontWeight: isActiveLink ? 'bold' : 'medium',
        lineHeight: '6',
        _hover: { textDecoration: 'none' },
    }),
};
