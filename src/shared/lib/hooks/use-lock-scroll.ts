import { useEffect } from 'react';

export const useLockScroll = (isOpen: boolean) => {
    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);
};
