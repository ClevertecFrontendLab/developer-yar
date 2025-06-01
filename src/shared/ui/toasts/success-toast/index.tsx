import { FC, PropsWithChildren } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { Alert, AlertBody, AlertCloseButton, AlertIcon, AlertTitle } from '~/shared/ui/alert';

export type SuccessToastProps = {
    onClose: () => void;
    title: string;
} & PropsWithChildren;

export const SuccessToast: FC<SuccessToastProps> = ({ title, onClose }) => (
    <Alert data-test-id={DATA_TEST_ATTRIBUTES.ERROR_NOTIFICATION} status='success'>
        <AlertIcon />
        <AlertBody>
            <AlertTitle>{title}</AlertTitle>
        </AlertBody>
        <AlertCloseButton
            data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_ALERT_BUTTON}
            onClick={onClose}
        />
    </Alert>
);
