import { FC } from 'react';

import { Overlay } from '~/shared/ui/overlay';

import { useModalContext } from '../../lib/modal-context';

export const ModalOverlay: FC = () => {
    const { onClose } = useModalContext();

    return <Overlay onClick={onClose} />;
};
