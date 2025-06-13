import { Button, Flex, Grid, Input, Stack } from '@chakra-ui/react';
import { FC, FocusEventHandler } from 'react';
import {
    Control,
    Controller,
    ControllerRenderProps,
    FieldArrayWithId,
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getErrorOutline } from '~/shared/lib';
import { Form } from '~/shared/ui/form';

import { RecipeDataTestAttributesContext } from '../../contexts/recipe/context';
import { registerWithTrim } from '../../lib/register-with-trim';
import { Ingredient, RecipeFormData, Step, UploadedFile } from '../../model/types';
import { recipeFormStyles as styles } from './index.styles';
import { RecipeCookingSteps } from './recipe-cooking-steps';
import { RecipeImageUploadPreview } from './recipe-image-upload-preview';
import { RecipeIngredientsSection } from './recipe-ingredients-section';
import { RecipeNumberField } from './recipe-number-input';
import { RecipeSubcategoriesMenu } from './recipe-subcategories-menu';
import { RecipeTextLabel } from './recipe-text-label';
import { RecipeTextarea } from './recipe-textarea';

export type RecipeFormProps = {
    appendIngredient: (value: Ingredient) => void;
    appendStep: (value: Step) => void;
    control: Control<RecipeFormData>;
    errors: FieldErrors<RecipeFormData>;
    handleCheckboxChange: (
        id: string,
        field: ControllerRenderProps<RecipeFormData, 'subcategories'>,
    ) => void;
    handleFileDelete: () => void;
    handleFileSave: (file: UploadedFile) => void;
    ingredients: FieldArrayWithId<RecipeFormData, 'ingredients', 'id'>[];
    onDraftButton: () => void;
    onPublishButton: () => void;
    register: UseFormRegister<RecipeFormData>;
    removeIngredient: (index: number) => void;
    removeStep: (index: number) => void;
    setValidatedValue: UseFormSetValue<RecipeFormData>;
    steps: FieldArrayWithId<RecipeFormData, 'steps', 'id'>[];
    trimField: (
        fieldName: keyof RecipeFormData,
    ) => FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const RecipeForm: FC<RecipeFormProps> = ({
    appendIngredient,
    appendStep,
    control,
    errors,
    handleCheckboxChange,
    handleFileDelete,
    handleFileSave,
    ingredients,
    register,
    removeIngredient,
    removeStep,
    setValidatedValue,
    steps,
    trimField,
    onDraftButton,
    onPublishButton,
}) => (
    <>
        <Form data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_FORM}>
            <Stack {...styles.recipeCreationContainer}>
                <Grid {...styles.recipeCreationHeader}>
                    <Controller
                        control={control}
                        name='image'
                        render={({ field }) => (
                            <RecipeDataTestAttributesContext.Provider
                                value={{
                                    recipeImageBlock: DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_BLOCK,
                                    recipeImageBlockInputFile:
                                        DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_BLOCK_INPUT_FILE,
                                    recipeImageBlockPreviewImage:
                                        DATA_TEST_ATTRIBUTES.RECIPE_IMAGE_BLOCK_PREVIEW_IMAGE,
                                }}
                            >
                                <RecipeImageUploadPreview
                                    imageSrc={field.value}
                                    isInvalid={Boolean(errors[field.name])}
                                    onFileDelete={handleFileDelete}
                                    onFileSave={handleFileSave}
                                    {...styles.recipeImage}
                                />
                            </RecipeDataTestAttributesContext.Provider>
                        )}
                    />
                    <Grid {...styles.recipeData}>
                        <Grid {...styles.recipeSubcategoriesMenuContainer}>
                            <RecipeTextLabel>Выберите не менее 3-х тегов</RecipeTextLabel>
                            <Controller
                                control={control}
                                name='subcategories'
                                render={({ field }) => (
                                    <RecipeSubcategoriesMenu
                                        isInvalid={Boolean(errors[field.name])}
                                        items={field.value}
                                        onCheckboxChange={(id) => handleCheckboxChange(id, field)}
                                    />
                                )}
                            />
                        </Grid>

                        <Stack {...styles.recipeText}>
                            <Input
                                {...styles.recipeTitle}
                                placeholder='Название рецепта'
                                {...registerWithTrim('title', register, trimField)}
                                {...getErrorOutline(Boolean(errors.title))}
                                data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_TITLE}
                            />

                            <RecipeTextarea
                                placeholder='Краткое описание рецепта'
                                {...registerWithTrim('description', register, trimField)}
                                {...getErrorOutline(Boolean(errors.description))}
                                data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_DESCRIPTION}
                            />

                            <RecipeNumberField
                                control={control}
                                id={DATA_TEST_ATTRIBUTES.RECIPE_PORTIONS}
                                isInvalid={Boolean(errors.portions)}
                                label='На сколько человек ваш рецепт?'
                                name='portions'
                            />

                            <RecipeNumberField
                                control={control}
                                id={DATA_TEST_ATTRIBUTES.RECIPE_TIME}
                                isInvalid={Boolean(errors.time)}
                                label='Сколько времени готовить в минутах?'
                                name='time'
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <Stack {...styles.recipeIngredientsAndStepsContainer}>
                    <RecipeIngredientsSection
                        append={appendIngredient}
                        control={control}
                        errors={errors}
                        fields={ingredients}
                        remove={removeIngredient}
                    />

                    <RecipeCookingSteps
                        append={appendStep}
                        control={control}
                        errors={errors}
                        fields={steps}
                        remove={removeStep}
                        setValue={setValidatedValue}
                    />

                    <Flex {...styles.actionButtons}>
                        <Button
                            {...styles.saveRecipeToDraft}
                            data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_SAVE_DRAFT_BUTTON}
                            type='submit'
                            onClick={onDraftButton}
                        >
                            Сохранить черновик
                        </Button>
                        <Button
                            {...styles.publishRecipe}
                            data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_PUBLISH_RECIPE_BUTTON}
                            type='submit'
                            onClick={onPublishButton}
                        >
                            Опубликовать рецепт
                        </Button>
                    </Flex>
                </Stack>
            </Stack>
        </Form>
    </>
);
