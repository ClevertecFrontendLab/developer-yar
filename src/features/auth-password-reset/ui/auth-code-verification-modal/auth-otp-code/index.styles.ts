import { FlexProps, PinInputFieldProps } from '@chakra-ui/react';

type AuthOtpCodeInputStyleProps = {
    authPinInput: (isInvalid: boolean) => PinInputFieldProps;
    container: FlexProps;
};

export const authOtpCodeInputStyles: AuthOtpCodeInputStyleProps = {
    authPinInput: (isInvalid: boolean): PinInputFieldProps => ({
        _hover: { borderColor: isInvalid ? 'red.500' : 'blackAlpha.100' },
        _placeholder: { color: 'lime.800' },
        borderColor: isInvalid ? 'red.500' : 'blackAlpha.100',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'lime.800',
    }),
    container: {
        gap: 1.5,
        margin: 'auto',
    },
};
