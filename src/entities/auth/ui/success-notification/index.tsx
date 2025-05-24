import { FC, PropsWithChildren } from 'react';

import { AutoClose } from '~/shared/ui/auto-close';
import { SuccessToast } from '~/shared/ui/toasts';

export type SuccessNotificationProps = {
    isOpen: boolean;
    onClose: () => void;
} & PropsWithChildren;

export const SuccessNotification: FC<SuccessNotificationProps> = ({
    children,
    isOpen,
    onClose,
}) => (
    <AutoClose isOpen={isOpen} onClose={onClose}>
        <SuccessToast onClose={onClose}>{children}</SuccessToast>
    </AutoClose>
);
