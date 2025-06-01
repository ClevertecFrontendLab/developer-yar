import { BoxProps, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { useUploadImageMutation } from '~/entities/recipe';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useApiStatusSync } from '~/shared/model';
import { ImageUploader } from '~/shared/ui/image-uploader';
import {
    Modal,
    ModalBody,
    ModalButton,
    ModalCloseIcon,
    ModalContent,
    ModalContentGroup,
    ModalHeaderText,
    ModalOverlay,
    ModalTextGroup,
} from '~/shared/ui/modal';

import { useRecipeDataTestAttributesContext } from '../../../../hooks/use-data-test-attributes-context';
import { useFileUploader } from '../../../../hooks/use-file-uploader';
import { imageWithPreviewStyles as styles } from './index.styles';

type ImageUploadModalProps = {
    imageSrc?: string;
    isOpen: boolean;
    onClose: () => void;
    onFileDelete: () => void;
    onFileSave: (uploadedFile: string) => void;
} & BoxProps;

export const ImageUploadModal: FC<ImageUploadModalProps> = ({
    imageSrc,
    isOpen,
    onClose,
    onFileSave,
    onFileDelete,
}) => {
    const [uploadImage, { isLoading, isError }] = useUploadImageMutation();

    const { recipeImageBlockInputFile, recipeStepsImageBlockInputFile } =
        useRecipeDataTestAttributesContext();

    const { file, handleFileUpload, imagePreview, clearImagePreview } = useFileUploader();

    const handleSave = async () => {
        if (file) {
            const url = await uploadImage(file).unwrap();
            if (url) {
                onFileSave(url);
                clearImagePreviewAndClose();
            }
        }
    };

    const handleDelete = async () => {
        onFileDelete();
        clearImagePreviewAndClose();
    };

    const clearImagePreviewAndClose = () => {
        clearImagePreview();
        onClose();
    };

    useApiStatusSync(isLoading, {
        isError,
        message: {
            description: 'Попробуйте сохранить фото позже.',
            title: 'Ошибка сервера',
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseIcon />
                <ModalBody data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_MODAL}>
                    <ModalTextGroup>
                        <ModalHeaderText>Изображение</ModalHeaderText>
                    </ModalTextGroup>

                    {imagePreview || imageSrc ? (
                        <>
                            <Image
                                alt='Главное фото рецепта'
                                data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_MODAL_PREVIEW_IMAGE}
                                src={imagePreview ?? imageSrc}
                                {...styles.image}
                            />
                            <ModalContentGroup>
                                <ModalButton onClick={handleSave}>Сохранить</ModalButton>
                                <ModalButton variant='white' onClick={handleDelete}>
                                    Удалить
                                </ModalButton>
                            </ModalContentGroup>
                        </>
                    ) : (
                        <ImageUploader
                            data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_MODAL_IMAGE_BLOCK}
                            id={recipeImageBlockInputFile ?? recipeStepsImageBlockInputFile}
                            onFileUpload={handleFileUpload}
                            {...styles.imageUploader}
                        />
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
