import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { useZodForm } from '~/shared/lib';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';

import { adaptRecipeToDto } from '../adapters/adapt-recipe-to-dto';
import {
    useDraftRecipeMutation,
    useEditRecipeMutation,
    usePublishRecipeMutation,
} from '../model/api';
import { draftSchema, publishSchema } from '../model/schema';
import { RecipeFormData, RecipeItem, UploadedFile } from '../model/types';
import { useRecipeById } from './use-recipe-by-id';

export const useRecipeForm = (recipe?: RecipeItem) => {
    const isEditMode = Boolean(recipe);
    const navigate = useNavigate();

    const {
        control,
        errors,
        isDirty,
        register,
        handleSubmit,
        trigger,
        setError,
        trimField,
        setValidatedValue,
        getValues,
    } = useZodForm(draftSchema, {
        defaultValues: {
            description: recipe?.description ?? '',
            image: recipe?.image ?? '',
            ingredients: recipe?.ingredients ?? [{ count: 0, measureUnit: 'г', title: '' }],
            portions: recipe?.portions ?? 0,
            steps: recipe?.steps ?? [{ description: '' }],
            subcategories: recipe?.subcategories.map((subcategory) => subcategory.id) ?? [],
            time: recipe?.time ?? 0,
            title: recipe?.title ?? '',
        },
        mode: 'onChange',
    });

    const {
        fields: ingredients,
        append: appendIngredient,
        remove: removeIngredient,
    } = useFieldArray({ control, name: 'ingredients' });

    const {
        fields: steps,
        append: appendStep,
        remove: removeStep,
    } = useFieldArray({ control, name: 'steps' });

    const handleFileSave = (uploadedFile: UploadedFile) => {
        setValidatedValue('image', uploadedFile);
    };
    const handleFileDelete = () => {
        setValidatedValue('image', '');
    };

    const [
        draftRecipe,
        { isError: isDraftError, isLoading: isDraftLoading, isSuccess: isDraftSuccess },
    ] = useDraftRecipeMutation();

    const [
        editRecipe,
        { isError: isEditError, isLoading: isEditLoading, isSuccess: isEditSuccess },
    ] = useEditRecipeMutation();

    const [
        publishRecipe,
        { isError: isPublishError, isLoading: isPublishLoading, isSuccess: isPublishSuccess },
    ] = usePublishRecipeMutation();

    const [createdRecipeId, setCreatedRecipeId] = useState<string>('');
    const { data: createdRecipe } = useRecipeById(createdRecipeId);

    useEffect(() => {
        if (!isEditMode && createdRecipe?.url) {
            navigate(createdRecipe.url);
        }
    }, [createdRecipe, isEditMode, navigate]);

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const mapErrorToMessage = (error: ApiError, isDraft: boolean): AppErrorMessage | undefined => {
        switch (error.status) {
            case ERRORS.CONFLICT:
                return { description: 'Рецепт с таким названием уже существует', title: 'Ошибка' };
            case ERRORS.INTERNAL_SERVER_ERRROR:
                return {
                    description: isDraft
                        ? 'Не удалось сохранить черновик рецепта'
                        : 'Попробуйте пока сохранить в черновик.',
                    title: 'Ошибка сервера',
                };
            default:
                return undefined;
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmitDraft: SubmitHandler<RecipeFormData> = async (data) => {
        const dto = adaptRecipeToDto(data);
        try {
            await draftRecipe(dto).unwrap();
            setIsSubmitted(true);
        } catch (e) {
            if (isApiError(e)) {
                setErrorMessage(mapErrorToMessage(e, true));
            }
        }
    };

    const onSubmitPublish: SubmitHandler<RecipeFormData> = async (data) => {
        const parsed = publishSchema.safeParse(data);
        if (!parsed.success) {
            Object.keys(errors).forEach((field) => setError(field, {}));

            parsed.error.errors.forEach((err) => {
                setError(err.path.join('.'), {
                    message: err.message,
                    type: 'manual',
                });
            });
            return;
        }
        const dto = adaptRecipeToDto(data);
        try {
            if (isEditMode) {
                await editRecipe({ data: dto, id: recipe!.id }).unwrap();
            } else {
                const result = await publishRecipe(dto).unwrap();
                setCreatedRecipeId(result._id);
            }
            setIsSubmitted(true);
        } catch (e) {
            if (isApiError(e)) {
                setErrorMessage(mapErrorToMessage(e, false));
            }
        }
    };

    const onDraftClick = async (): Promise<boolean> => {
        const valid = await trigger();
        if (!valid) return false;
        await handleSubmit(onSubmitDraft)();
        return true;
    };

    const onPublishClick = async (): Promise<void> => {
        const data = getValues();
        await onSubmitPublish(data);
    };

    useApiStatusSync(
        isDraftLoading || isEditLoading || isPublishLoading,
        {
            isError: isDraftError || isEditError || isPublishError,
            message: errorMessage,
        },
        {
            isSuccess: isDraftSuccess || isEditSuccess || isPublishSuccess,
            message: isDraftSuccess
                ? 'Черновик успешно сохранен'
                : isPublishSuccess || isEditSuccess
                  ? 'Рецепт успешно опубликован'
                  : '',
        },
    );

    return {
        appendIngredient,
        appendStep,
        control,
        errors,
        handleFileDelete,
        handleFileSave,
        handleSubmit,
        ingredients,
        onDraftClick,
        onPublishClick,
        register,
        removeIngredient,
        removeStep,
        setValidatedValue,
        shouldBlock: isDirty && !isSubmitted,
        steps,
        trigger,
        trimField,
    };
};
