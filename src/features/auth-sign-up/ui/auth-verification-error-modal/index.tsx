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

import authVerificationErrorImage from '../../assets/auth-verify-error-image.svg';
import { useVerificationNotification } from '../../hooks/use-verification-notification';

export const AuthVerificationErrorModal: FC = () => {
    const { isOpen, onClose } = useVerificationNotification(false);

    return (
        <Modal
            data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_VERIFY_ERROR_MODAL}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseIcon />
                <ModalBody>
                    <ModalIllustration src={authVerificationErrorImage} />

                    <ModalContentGroup>
                        <ModalHeaderText>Упс! Что-то пошло не так</ModalHeaderText>

                        <ModalTextGroup>
                            <ModalText color='light'>
                                Ваша ссылка для верификации недействительна. Попробуйте
                                зарегистрироваться снова.
                            </ModalText>
                        </ModalTextGroup>
                    </ModalContentGroup>

                    <ModalFooterText>
                        Остались вопросы? Свяжитесь{' '}
                        <ModalLink href={ROUTES.HOME}>с поддержкой.</ModalLink>
                    </ModalFooterText>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
