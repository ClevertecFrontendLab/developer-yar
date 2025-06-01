import { EditIcon } from '@chakra-ui/icons';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import {
    Modal,
    ModalBody,
    ModalButton,
    ModalCloseIcon,
    ModalContent,
    ModalContentGroup,
    ModalHeaderText,
    ModalIllustration,
    ModalOverlay,
    ModalText,
    ModalTextGroup,
} from '~/shared/ui/modal';

import recipeUnsavedWraningImage from '../../assets/recipe-unsaved-warning-image.svg';
import { useUnsavedChangesWarning } from '../../hooks/use-unsaved-changes-warning';

type RecipeUnsavedWarningModalProps = {
    onSaveDraft: () => Promise<boolean>;
    shouldBlock: boolean;
};

export const RecipeUnsavedWarningModal: FC<RecipeUnsavedWarningModalProps> = ({
    shouldBlock,
    onSaveDraft,
}) => {
    const { isBlocked, reset, proceed } = useUnsavedChangesWarning(shouldBlock);

    const handleSaveDraft = async () => {
        const success = await onSaveDraft();
        if (success) {
            proceed();
        } else {
            reset();
        }
    };

    return (
        <Modal
            data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_PREVENTIVE_MODAL}
            isOpen={isBlocked}
            onClose={reset}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseIcon />
                <ModalBody>
                    <ModalIllustration src={recipeUnsavedWraningImage} />

                    <ModalContentGroup>
                        <ModalHeaderText>Выйти без сохранения?</ModalHeaderText>
                        <ModalTextGroup>
                            <ModalText color='light'>
                                Чтобы сохранить, нажмите на кнопку сохранить черновик
                            </ModalText>
                        </ModalTextGroup>
                    </ModalContentGroup>

                    <ModalContentGroup>
                        <ModalButton onClick={handleSaveDraft}>
                            <EditIcon />
                            Сохранить черновик
                        </ModalButton>
                        <ModalButton variant='white' onClick={proceed}>
                            Выйти без сохранения
                        </ModalButton>
                    </ModalContentGroup>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
