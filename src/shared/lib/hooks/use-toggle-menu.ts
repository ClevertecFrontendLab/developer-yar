import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

type MenuToggle = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    onToggle: () => void;
};

export const useToggleMenu = (lockScroll = true): MenuToggle => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

    useEffect(() => {
        if (!lockScroll) return;

        document.documentElement.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isOpen, lockScroll]);

    return { isOpen, onClose, onOpen, onToggle };
};
