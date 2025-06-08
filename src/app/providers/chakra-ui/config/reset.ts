import { defineStyleConfig } from '@chakra-ui/react';

export const componentsWithDefaultStyles = {
    Button: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
        variants: {
            unstyled: {
                _disabled: {
                    _hover: {},
                    cursor: 'not-allowed',
                    opacity: 1,
                    pointerEvents: 'none',
                },
                _hover: {},
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
            },
        },
    }),
    Checkbox: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    CloseButton: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    Drawer: {
        baseStyle: {
            dialog: {
                zIndex: 'tooltip',
            },
            dialogContainer: {
                zIndex: 'tooltip',
            },
        },
    },
    IconButton: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    Input: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    NumberInput: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
        variants: {
            unstyled: {
                field: {
                    bgColor: 'white',
                    borderColor: 'gray.200',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    color: 'black',
                    fontSize: 'md',
                    fontWeight: 'normal',
                    h: 10,
                    lineHeight: '6',
                    px: 4,
                    w: '90px',
                },
            },
        },
    }),
    PinInput: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    Switch: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
    Tabs: {
        defaultProps: {
            variant: 'unstyled',
        },
    },
    Textarea: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
};
