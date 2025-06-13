import { Center, CenterProps, Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import { useRecipeDataTestAttributesContext } from '~/entities/recipe/hooks/use-data-test-attributes-context';
import { getErrorOutline } from '~/shared/lib';
import { PictureIcon } from '~/shared/ui/icons';

import { UploadedFile } from '../../../model/types';
import { ImageUploadModal } from './image-upload-modal';
import { recipeImageUploadPreviewStyles as styles } from './index.styles';

type RecipeImageUploadPreviewProps = {
    onFileDelete: () => void;
    onFileSave: (uploadedFile: UploadedFile) => void;
    imageSrc?: string;
    isInvalid?: boolean;
} & CenterProps;

export const RecipeImageUploadPreview: FC<RecipeImageUploadPreviewProps> = ({
    imageSrc,
    isInvalid,
    onFileSave,
    onFileDelete,
    ...props
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { recipeImageBlockPreviewImage, recipeImageBlock } = useRecipeDataTestAttributesContext();

    return (
        <>
            <Center
                onClick={onOpen}
                {...styles.container}
                {...getErrorOutline(Boolean(isInvalid))}
                {...props}
                data-test-id={recipeImageBlock}
            >
                {imageSrc ? (
                    <Image
                        data-test-id={recipeImageBlockPreviewImage}
                        src={imageSrc}
                        {...styles.image}
                    />
                ) : (
                    <PictureIcon {...styles.icon} />
                )}
            </Center>
            <ImageUploadModal
                imageSrc={imageSrc}
                isOpen={isOpen}
                onClose={onClose}
                onFileDelete={onFileDelete}
                onFileSave={onFileSave}
            />
        </>
    );
};
