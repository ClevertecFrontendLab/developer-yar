import { CenterProps, TooltipProps } from '@chakra-ui/react';

type BloggerPageStyleProps = {
    profileCardContainer: CenterProps;
    tooltip: Omit<TooltipProps, 'children'>;
};

export const bloggerPageStyles: BloggerPageStyleProps = {
    profileCardContainer: {
        bgColor: 'white',
        pos: { xl: 'sticky' },
        top: 0,
        zIndex: { xl: 'docked' },
    },
    tooltip: {
        left: 6,
    },
};
