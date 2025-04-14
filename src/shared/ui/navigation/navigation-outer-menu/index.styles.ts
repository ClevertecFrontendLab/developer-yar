import {
    AccordionButtonProps,
    AccordionIconProps,
    AccordionItemProps,
    AccordionPanelProps,
    FlexProps,
    ImageProps,
    LinkProps,
} from '@chakra-ui/react';

type NavigationOuterItemStyleProps = {
    accordionIcon: AccordionIconProps;
    accordionItem: AccordionItemProps;
    accordionPanel: AccordionPanelProps;
    accordionToggleButton: AccordionButtonProps;
    iconWrapper: ImageProps;
    link: (isExpanded: boolean) => LinkProps;
    linkWrapper: FlexProps;
};

export const navigationOuterItemStyles: NavigationOuterItemStyleProps = {
    accordionIcon: {
        color: 'black',
    },
    accordionItem: {
        border: 'none',
    },
    accordionPanel: {
        p: 0,
    },
    accordionToggleButton: {
        cursor: 'pointer',
        px: 2,
        py: 3,
        _expanded: {
            bg: 'lime.100',
            color: 'white',
        },
        _hover: {
            bg: 'lime.50',
        },
    },
    iconWrapper: {
        boxSize: 6,
    },
    link: (isExpanded) => ({
        color: 'black',
        fontSize: 'md',
        fontWeight: isExpanded ? 'semibold' : 'medium',
        lineHeight: '6',
        _hover: { textDecoration: 'none' },
    }),
    linkWrapper: {
        flex: 1,
        justify: 'start',
        ml: 3,
    },
};
