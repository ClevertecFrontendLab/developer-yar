import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { selectErrorState, useAppDispatch, useAppSelector } from '~/shared/model';
import { clearError } from '~/shared/model';

import { errorNotificationStyles as styles } from './error-notification.styles';

export const ErrorNotification: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

    const { errorType, errorMessage } = useAppSelector(selectErrorState);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (errorType) onOpen();
    }, [errorType, onOpen]);

    const handleOnClose = () => {
        dispatch(clearError());
        onClose();
    };

    if (errorType && isOpen)
        return (
            <Box {...styles.container} data-test-id={DATA_TEST_ATTRIBUTES.ERROR_NOTIFICATION}>
                <Alert {...styles.alert}>
                    <AlertIcon {...styles.alertIcon} />
                    <Box>
                        <AlertTitle {...styles.title}>Ошибка сервера</AlertTitle>
                        <AlertDescription {...styles.description}>{errorMessage}</AlertDescription>
                    </Box>
                    <CloseButton
                        data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_ALERT_BUTTON}
                        onClick={handleOnClose}
                        {...styles.closeButton}
                    />
                </Alert>
            </Box>
        );

    return null;
};
