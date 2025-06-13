import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import {
    Alert,
    AlertBody,
    AlertCloseButton,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '~/shared/ui/alert';

type ErrorToastProps = {
    onClose: () => void;
    title: string;
    description?: string;
};

export const ErrorToast: FC<ErrorToastProps> = ({ description, onClose, title }) => (
    <Alert status='error'>
        <AlertIcon />
        <AlertBody>
            <AlertTitle data-test-id={DATA_TEST_ATTRIBUTES.ERROR_NOTIFICATION_TITLE}>
                {title}
            </AlertTitle>
            <AlertDescription data-test-id={DATA_TEST_ATTRIBUTES.ERROR_NOTIFICATION_DESCRIPTION}>
                {description}
            </AlertDescription>
        </AlertBody>
        <AlertCloseButton
            data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_ALERT_BUTTON}
            onClick={onClose}
        />
    </Alert>
);
