import { CheckboxProps } from '@chakra-ui/react';

export type CheckboxStyleProps = {
    checkbox: CheckboxProps;
};

export const checkboxStyles: CheckboxStyleProps = {
    checkbox: {
        borderRadius: 'sm',
        iconColor: 'black',
        size: 'sm',
        sx: {
            '.chakra-checkbox__control': {
                _checked: {
                    _hover: {
                        bg: 'lime.400 !important',
                        borderColor: 'transparent !important',
                    },
                    bg: 'lime.400',
                    borderColor: 'lime.400',
                },
                _focus: {
                    boxShadow: 'none',
                    outline: 'none',
                },
                borderColor: 'lime.150',
            },
            '.chakra-checkbox__label': {
                color: 'gray.800',
                fontSize: 'sm',
                fontWeight: 'normal',
                lineHeight: '5',
            },
        },
        w: 'full',
    },
};
