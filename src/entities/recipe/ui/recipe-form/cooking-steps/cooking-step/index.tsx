import { DeleteIcon } from '@chakra-ui/icons';
import { Flex, Grid, Stack, Tag } from '@chakra-ui/react';
import { FC } from 'react';
import { Control, Controller, FieldErrors, UseFormSetValue } from 'react-hook-form';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getErrorOutline } from '~/shared/lib';

import { RecipeDataTestAttributesContext } from '../../../../contexts/recipe/context';
import { RecipeFormData, UploadedFile } from '../../../../model/types';
import { RecipeImageUploadPreview } from '../../recipe-image-upload-preview';
import { RecipeTextarea } from '../../recipe-textarea';
import { cookingStepStyles as styles } from './index.styles';

type CookingStepProps = {
    control: Control<RecipeFormData>;
    errors: FieldErrors<RecipeFormData>;
    fieldId: string;
    index: number;
    remove: (index: number) => void;
    setValue: UseFormSetValue<RecipeFormData>;
};

export const CookingStep: FC<CookingStepProps> = ({
    index,
    fieldId,
    control,
    errors,
    setValue,
    remove,
}) => {
    const handleFileSave = (uploadedFile: UploadedFile) => {
        setValue(`steps.${index}.image`, uploadedFile);
    };

    const handleFileDelete = () => {
        setValue(`steps.${index}.image`, '');
    };

    return (
        <Grid key={fieldId} {...styles.cookingStep}>
            <Controller
                control={control}
                name={`steps.${index}.image`}
                render={({ field }) => (
                    <RecipeDataTestAttributesContext.Provider
                        value={{
                            recipeStepsImageBlock: `${DATA_TEST_ATTRIBUTES.RECIPE_STEPS_IMAGE_BLOCK}-${index}`,
                            recipeStepsImageBlockInputFile: `${DATA_TEST_ATTRIBUTES.RECIPE_STEPS_IMAGE_BLOCK}-${index}-input-file`,
                            recipeStepsImageBlockPreviewImage: `${DATA_TEST_ATTRIBUTES.RECIPE_STEPS_IMAGE_BLOCK}-${index}-preview-image`,
                        }}
                    >
                        <RecipeImageUploadPreview
                            imageSrc={field.value}
                            onFileDelete={handleFileDelete}
                            onFileSave={handleFileSave}
                            {...styles.cookingStepImage}
                        />
                    </RecipeDataTestAttributesContext.Provider>
                )}
            />
            <Stack {...styles.cookingStepText}>
                <Flex {...styles.cookingStepHeader}>
                    <Tag {...styles.cookingStepTag}>Шаг {index + 1}</Tag>
                    {index > 0 && (
                        <DeleteIcon
                            {...styles.cookingStepDeleteIcon}
                            data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_STEPS_REMOVE_BUTTON}-${index}`}
                            onClick={() => remove(index)}
                        />
                    )}
                </Flex>
                <Controller
                    control={control}
                    name={`steps.${index}.description`}
                    render={({ field }) => (
                        <RecipeTextarea
                            placeholder='Шаг'
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            {...styles.cookingStepDescription}
                            {...getErrorOutline(Boolean(errors.steps?.[index]?.description))}
                            data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_STEPS_DESCRIPTION}-${index}`}
                        />
                    )}
                />
            </Stack>
        </Grid>
    );
};
