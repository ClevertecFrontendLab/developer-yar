import { FlexProps, IconProps, TextProps } from '@chakra-ui/react';

type LogOutStyleProps = {
    container: FlexProps;
    icon: IconProps;
    label: TextProps;
};

export const logOutStyles: LogOutStyleProps = {
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
