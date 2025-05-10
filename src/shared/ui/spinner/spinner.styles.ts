import { CenterProps } from '@chakra-ui/react';

import { SpinnerVariant } from './spinner.types';

type SpinnerStyleProps = {
    spinnerWrapper: (variant: SpinnerVariant) => CenterProps;
};

export const spinnerStyles: SpinnerStyleProps = {
    spinnerWrapper: (variant: SpinnerVariant): CenterProps => ({
        background:
            'radial-gradient(50% 50% at 50% 50%,rgba(196, 255, 97,0.5), rgba(255, 255, 255, 0) 100%)',
        boxSize: variant === 'page' ? { base: '134px', xl: '206px' } : { base: 8, xl: '134px' },
    }),
};
