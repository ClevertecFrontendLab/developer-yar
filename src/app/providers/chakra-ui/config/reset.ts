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
};
