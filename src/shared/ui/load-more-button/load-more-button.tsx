import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { loadMoreButtonStyles as styles } from './load-more-button.styles';

type LoadMoreButtonProps = ButtonProps & {
    isFetching?: boolean;
};

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({ isFetching = false, ...props }) => (
    <Button {...props} {...styles.loadMoreButton}>
        {isFetching ? 'Загрузка...' : 'Загрузить ещё'}
    </Button>
);
