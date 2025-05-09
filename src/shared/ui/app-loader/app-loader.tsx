import { Center } from '@chakra-ui/react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { selectLoading, useAppSelector } from '~/shared/model';
import { Spinner } from '~/shared/ui/spinner';

import { appLoaderStyles as styles } from './app-loader.styles';

export const AppLoader = () => {
    const isLoading = useAppSelector(selectLoading);

    if (isLoading)
        return (
            <Center {...styles.box} data-test-id={DATA_TEST_ATTRIBUTES.APP_LOADER}>
                <Spinner variant='page' />
            </Center>
        );
    return null;
};
