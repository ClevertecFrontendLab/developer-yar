import { Box } from '@chakra-ui/react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { selectIsLoading, useAppSelector } from '~/shared/model';
import { Overlay } from '~/shared/ui/overlay';
import { Spinner } from '~/shared/ui/spinner';

import { appLoaderStyles as styles } from './index.styles';

export const AppLoader = () => {
    const isLoading = useAppSelector(selectIsLoading);

    if (isLoading)
        return (
            <Box {...styles.box} data-test-id={DATA_TEST_ATTRIBUTES.APP_LOADER}>
                <Overlay>
                    <Spinner variant='page' />
                </Overlay>
            </Box>
        );
    return null;
};
