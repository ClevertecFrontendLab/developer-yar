import { FC } from 'react';

import { RecipeForm, RecipeUnsavedWarningModal, useRecipeForm } from '~/entities/recipe';

export const RecipeCreationForm: FC = () => {
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
    } = useRecipeForm();

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
