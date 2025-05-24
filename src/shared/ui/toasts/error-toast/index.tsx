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
    description?: string;
    onClose: () => void;
    title: string;
};

export const ErrorToast: FC<ErrorToastProps> = ({ description, onClose, title }) => (
    <Alert status='error'>
        <AlertIcon />
        <AlertBody>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </AlertBody>
        <AlertCloseButton
            data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_ALERT_BUTTON}
            onClick={onClose}
        />
    </Alert>
);
