import { Center, Spinner as ChakraSpinner } from '@chakra-ui/react';
import { FC } from 'react';

import { spinnerStyles as styles } from './spinner.styles';
import { SpinnerVariant } from './spinner.types';

type SpinnerProps = {
    variant: SpinnerVariant;
};
export const Spinner: FC<SpinnerProps> = ({ variant }) => (
    <Center {...styles.spinnerWrapper(variant)}>
        <ChakraSpinner />
    </Center>
);
