import { Box } from '@chakra-ui/react';
import { FC, useCallback } from 'react';

import { hideError, selectErrorInfo, useAppDispatch, useAppSelector } from '~/shared/model';
import { AutoClose } from '~/shared/ui/auto-close';
import { ErrorToast } from '~/shared/ui/toasts';

import { appErrorNotificationStyles as styles } from './index.styles';

export const AppErrorNotification: FC = () => {
    const { errorAlignment, errorMessage, errorType } = useAppSelector(selectErrorInfo);
    const dispatch = useAppDispatch();

    const handleOnClose = useCallback(() => {
        dispatch(hideError());
    }, [dispatch]);

    if (errorType)
        return (
            <AutoClose isOpen={!!errorType} onClose={handleOnClose}>
                <Box {...styles.container(errorAlignment)}>
                    <ErrorToast
                        description={errorMessage.description}
                        title={errorMessage.title}
                        onClose={handleOnClose}
                    />
                </Box>
            </AutoClose>
        );
    return null;
};
