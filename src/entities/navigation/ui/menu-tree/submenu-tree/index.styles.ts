import {
    AccordionButtonProps,
    AccordionIconProps,
    AccordionItemProps,
    AccordionPanelProps,
    FlexProps,
    TextProps,
} from '@chakra-ui/react';

type SubmenuTreeStyleProps = {
    accordionIcon: AccordionIconProps;
    accordionItem: AccordionItemProps;
    accordionPanel: AccordionPanelProps;
    accordionToggleButton: AccordionButtonProps;
    text: (isExpanded: boolean) => TextProps;
    textWrapper: FlexProps;
};

export const submenuTreeStyles: SubmenuTreeStyleProps = {
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
        _expanded: {
            bg: 'lime.100',
            color: 'white',
        },
        _hover: {
            bg: 'lime.50',
        },
        cursor: 'pointer',
        px: 2,
        py: 3,
    },
    text: (isExpanded) => ({
        _hover: { textDecoration: 'none' },
        color: 'black',
        fontSize: 'md',
        fontWeight: isExpanded ? 'semibold' : 'medium',
        lineHeight: '6',
    }),
    textWrapper: {
        flex: 1,
        justify: 'start',
        ml: 3,
        textAlign: 'left',
    },
};
