import { FC, PropsWithChildren, useEffect } from 'react';

type AutoCloseProps = {
    autoCloseDelayMs?: number;
    isOpen: boolean;
    onClose: () => void;
} & PropsWithChildren;

export const AutoClose: FC<AutoCloseProps> = ({
    autoCloseDelayMs = 15000,
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
