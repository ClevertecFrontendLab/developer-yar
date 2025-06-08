import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { loadMoreButtonStyles as styles } from './load-more-button.styles';

type LoadMoreButtonProps = ButtonProps & {
    isFetching?: boolean;
};

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({ isFetching = false, ...props }) => (
    <Button
        {...props}
        {...styles.loadMoreButton}
        data-test-id={DATA_TEST_ATTRIBUTES.LOAD_MORE_BUTTON}
    >
        {isFetching ? 'Загрузка...' : 'Загрузить ещё'}
    </Button>
);
