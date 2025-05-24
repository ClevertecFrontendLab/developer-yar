import { FlexProps, IconProps, TextProps } from '@chakra-ui/react';

type LogOutButtonStyleProps = {
    container: FlexProps;
    icon: IconProps;
    label: TextProps;
};

export const logOutButtonStyles: LogOutButtonStyleProps = {
    container: {
        align: 'center',
        cursor: 'pointer',
        gap: 1.5,
    },
    icon: {
        boxSize: 3,
    },
    label: {
        color: 'black',
        fontSize: 'xs',
        fontWeight: 'semibold',
        lineHeight: '4',
    },
};
