import { FormHelperTextProps } from '@chakra-ui/react';

type AuthHelperTextStyleProps = {
    helperText: FormHelperTextProps;
};

export const AuthHelperTextStyles: AuthHelperTextStyleProps = {
    helperText: {
        color: 'blackAlpha.700',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: '4',
        mt: 0,
    },
};
