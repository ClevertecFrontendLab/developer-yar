import { FC } from 'react';

import { AuthButton } from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import {
    Modal,
    ModalBody,
    ModalCloseIcon,
    ModalContent,
    ModalContentGroup,
    ModalHeaderText,
    ModalIllustration,
    ModalOverlay,
    ModalText,
    ModalTextGroup,
} from '~/shared/ui/modal';

import authSignInErrorImage from '../../assets/auth-sign-in-error-image.svg';

type SignInErrorModalProps = {
    isOpen: boolean;
    onClose: () => void;
    retrySignIn: () => void;
};

export const AuthSignInErrorModal: FC<SignInErrorModalProps> = ({
    isOpen,
    onClose,
    retrySignIn,
}) => (
    <Modal
        data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_ERROR_MODAL}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalCloseIcon />
            <ModalBody>
                <ModalIllustration src={authSignInErrorImage} />

                <ModalContentGroup>
                    <ModalHeaderText>Вход не выполнен</ModalHeaderText>

                    <ModalTextGroup>
                        <ModalText color='light'>Что-то пошло не так.</ModalText>
                        <ModalText color='light'>Попробуйте еще раз</ModalText>
                    </ModalTextGroup>
                </ModalContentGroup>

                <AuthButton
                    data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_RETRY_BUTTON}
                    onClick={retrySignIn}
                >
                    Повторить
                </AuthButton>
            </ModalBody>
        </ModalContent>
    </Modal>
);
