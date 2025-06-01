import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { useModalContext } from '../../lib/modal-context';
import { modalOverlayStyles as styles } from './index.styles';

export const ModalOverlay: FC = () => {
    const { onClose } = useModalContext();

    return <Box as='span' {...styles.overlay} onClick={onClose} />;
};
