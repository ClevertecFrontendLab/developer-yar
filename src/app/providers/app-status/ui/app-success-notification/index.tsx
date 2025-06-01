import { Box } from '@chakra-ui/react';
import { FC, useCallback } from 'react';

import { hideSuccess, selectSuccessInfo, useAppDispatch, useAppSelector } from '~/shared/model';
import { AutoClose } from '~/shared/ui/auto-close';
import { SuccessToast } from '~/shared/ui/toasts';

import { successNotificationStyles as styles } from './index.styles';

export const AppSuccessNotification: FC = () => {
    const { isSuccess, successAlignment, successMessage } = useAppSelector(selectSuccessInfo);
    const dispatch = useAppDispatch();

    const handleOnClose = useCallback(() => {
        dispatch(hideSuccess());
    }, [dispatch]);

    if (isSuccess)
        return (
            <AutoClose isOpen={!!successMessage} onClose={handleOnClose}>
                <Box {...styles.container(successAlignment)}>
                    <SuccessToast title={successMessage} onClose={handleOnClose} />
                </Box>
            </AutoClose>
        );
};
