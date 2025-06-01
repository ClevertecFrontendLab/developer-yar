import { ChakraProps } from '@chakra-ui/react';

export const getErrorOutline = (isInvalid: boolean): ChakraProps => {
    if (!isInvalid) return {};
    return {
        ...(typeof Cypress !== 'undefined'
            ? { borderColor: 'red.500', borderStyle: 'solid', borderWidth: '2px' }
            : {}),
        outline: '2px solid',
        outlineColor: 'red.500',
        outlineOffset: -2,
    };
};
