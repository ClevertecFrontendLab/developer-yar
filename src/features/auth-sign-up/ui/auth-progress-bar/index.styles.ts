import { BoxProps, ProgressProps, TextProps } from '@chakra-ui/react';

type AuthProgressBarStyleProps = {
    progressBar: ProgressProps;
    progressBarTitle: TextProps;
    progressBarWrapper: BoxProps;
};

export const authProgressBarStyles: AuthProgressBarStyleProps = {
    progressBar: {
        bg: 'blackAlpha.100',
        h: 2,
        sx: {
            '& > div': {
                bg: 'lime.300',
            },
        },
    },
    progressBarTitle: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
    },
    progressBarWrapper: {},
};
