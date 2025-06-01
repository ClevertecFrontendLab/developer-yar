import { FC } from 'react';

import {
    RecipeForm,
    RecipeItem,
    RecipeUnsavedWarningModal,
    useRecipeForm,
} from '~/entities/recipe';

type RecipeEditFormProps = {
    recipe: RecipeItem;
};

export const RecipeEditForm: FC<RecipeEditFormProps> = ({ recipe }) => {
    const {
        appendIngredient,
        appendStep,
        control,
        errors,
        handleCheckboxChange,
        handleFileDelete,
        handleFileSave,
        ingredients,
        onDraftClick,
        onPublishClick,
        register,
        removeIngredient,
        removeStep,
        setValidatedValue,
        shouldBlock,
        steps,
        trimField,
    } = useRecipeForm(recipe);

    return (
        <>
            <RecipeForm
                appendIngredient={appendIngredient}
                appendStep={appendStep}
                control={control}
                errors={errors}
                handleCheckboxChange={handleCheckboxChange}
                handleFileDelete={handleFileDelete}
                handleFileSave={handleFileSave}
                ingredients={ingredients}
                register={register}
                removeIngredient={removeIngredient}
                removeStep={removeStep}
                setValidatedValue={setValidatedValue}
                steps={steps}
                trimField={trimField}
                onDraftButton={onDraftClick}
                onPublishButton={onPublishClick}
            />
            <RecipeUnsavedWarningModal shouldBlock={shouldBlock} onSaveDraft={onDraftClick} />
        </>
    );
};
