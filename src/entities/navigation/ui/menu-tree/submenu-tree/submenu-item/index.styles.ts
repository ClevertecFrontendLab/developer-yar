import { FlexProps, LinkProps } from '@chakra-ui/react';

type SubmenuItemStyleProps = {
    activeIndicator: (isActiveLink: boolean) => FlexProps;
    iconContainer: FlexProps;
    itemWrapper: FlexProps;
    link: (isActiveLink: boolean) => LinkProps;
};

const commonHoverStyles = {
    _hover: {
        '.icon': { bg: 'transparent' },
        bg: 'lime.50',
    },
};

export const submenuItemStyles: SubmenuItemStyleProps = {
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
        _hover: { textDecoration: 'none' },
        color: 'black',
        flex: '1',
        fontSize: 'md',
        fontWeight: isActiveLink ? 'bold' : 'medium',
        lineHeight: '6',
    }),
};
