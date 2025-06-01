import { FC, PropsWithChildren, useEffect } from 'react';

type AutoCloseProps = {
    isOpen: boolean;
    onClose: () => void;
    autoCloseDelayMs?: number;
} & PropsWithChildren;

export const AutoClose: FC<AutoCloseProps> = ({
    autoCloseDelayMs = 30000,
    children,
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        if (!isOpen) return;
        const timeoutId = window.setTimeout(onClose, autoCloseDelayMs);
        return () => window.clearTimeout(timeoutId);
    }, [isOpen, onClose, autoCloseDelayMs]);

    return isOpen ? <>{children}</> : null;
};
