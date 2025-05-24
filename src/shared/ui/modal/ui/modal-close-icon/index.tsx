import { FC, PropsWithChildren } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { CloseModalIcon } from '~/shared/ui/icons';

import { useModalContext } from '../../lib/modal-context';
import { modalCloseIconStyles as styles } from './index.styles';

export const ModalCloseIcon: FC<PropsWithChildren> = () => {
    const { onClose } = useModalContext();
    return (
        <CloseModalIcon
            {...styles.closeModalIcon}
            data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_MODAL_BUTTON}
            onClick={onClose}
        />
    );
};
