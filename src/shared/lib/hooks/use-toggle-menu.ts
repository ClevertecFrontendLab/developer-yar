import { useEffect, useState } from 'react';

type MenuToggle = {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
};

export const useToggleMenu = (): MenuToggle => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    return {
        isOpen,
        toggle,
        open,
        close,
    };
};
