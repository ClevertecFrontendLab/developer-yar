import { defineStyleConfig } from '@chakra-ui/react';

export const componentsWithDefaultStyles = {
    Button: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
        variants: {
            unstyled: {
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
    Switch: defineStyleConfig({
        defaultProps: {
            variant: 'unstyled',
        },
    }),
};
