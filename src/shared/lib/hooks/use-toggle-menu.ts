import { useDisclosure } from '@chakra-ui/react';

import { useLockScroll } from '~/shared/lib';

type MenuToggle = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    onToggle: () => void;
};

export const useToggleMenu = (): MenuToggle => {
    const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

    useLockScroll(isOpen);

    return { isOpen, onClose, onOpen, onToggle };
};
