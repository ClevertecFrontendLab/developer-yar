import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';
import {
    Modal,
    ModalBody,
    ModalCloseIcon,
    ModalContent,
    ModalContentGroup,
    ModalFooterText,
    ModalHeaderText,
    ModalIllustration,
    ModalLink,
    ModalOverlay,
    ModalText,
    ModalTextGroup,
} from '~/shared/ui/modal';

import authVerificationNoticeImage from '../../assets/auth-verify-notice-image.svg';
import { authVerificationNoticeStyles as styles } from './index.styles';

type AuthVerificationNoticeModalProps = {
    email: string;
    isOpen: boolean;
    onClose: () => void;
};

export const AuthVerificationNoticeModal: FC<AuthVerificationNoticeModalProps> = ({
    email,
    isOpen,
    onClose,
}) => (
    <Modal
        data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_VERIFY_NOTICE_MODAL}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalCloseIcon />
            <ModalBody>
                <ModalIllustration src={authVerificationNoticeImage} />

                <ModalContentGroup>
                    <ModalHeaderText>
                        Остался последний шаг. Нужно верифицировать ваш e-mail
                    </ModalHeaderText>

                    <ModalTextGroup>
                        <ModalText>Мы отправили вам на почту</ModalText>
                        <ModalText weight='bold'>{email}</ModalText>
                        <ModalText>ссылку для верификации.</ModalText>
                    </ModalTextGroup>
                </ModalContentGroup>

                <ModalFooterText>
                    Не пришло письмо?
                    <Box as='span' {...styles.footerText}>
                        {' '}
                        Проверьте папку «Спам».
                    </Box>
                    <Box as='span' display='block'>
                        {' '}
                        По другим вопросам свяжитесь{' '}
                        <Box as='span' {...styles.footerText}>
                            <ModalLink href={ROUTES.HOME}>с поддержкой</ModalLink>
                        </Box>
                    </Box>
                </ModalFooterText>
            </ModalBody>
        </ModalContent>
    </Modal>
);
