import { Center, Grid } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { Spinner } from '~/shared/ui/spinner';

import { cardWithLoaderStyles as styles } from './card-with-loader.styles';

type CardWithLoaderProps = {
    isLoading: boolean;
} & PropsWithChildren;

export const CardWithLoader: FC<CardWithLoaderProps> = ({ children, isLoading }) => (
    <Grid {...styles.container}>
        {isLoading && (
            <Center {...styles.loader} data-test-id={DATA_TEST_ATTRIBUTES.MOBILE_LOADER}>
                <Spinner variant='card' />
            </Center>
        )}
        {children}
    </Grid>
);
