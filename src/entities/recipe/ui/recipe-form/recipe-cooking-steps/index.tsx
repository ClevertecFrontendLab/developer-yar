import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';

import { Step } from '~/entities/recipe';
import { AddIcon } from '~/shared/ui/icons';

import { RecipeFormData } from '../../../model/types';
import { RecipeTextLabel } from '../recipe-text-label';
import { RecipeCookingStepsStyles as styles } from './index.styles';
import { RecipeCookingStep } from './recipe-cooking-step';

type RecipeCookingStepsProps = {
    append: (step: Step) => void;
    control: Control<RecipeFormData>;
    errors: FieldErrors<RecipeFormData>;
    fields: { id: string }[];
    remove: (index: number) => void;
    setValue: UseFormSetValue<RecipeFormData>;
};

export const RecipeCookingSteps: FC<RecipeCookingStepsProps> = ({
    append,
    fields,
    errors,
    control,
    remove,
    setValue,
}) => {
    const handleAddNewStep = () => {
        append({ description: '', stepNumber: fields.length });
    };

    return (
        <Stack {...styles.RecipeCookingSteps}>
            <RecipeTextLabel>Добавьте шаги приготовления</RecipeTextLabel>

            {fields.map((field, index) => (
                <RecipeCookingStep
                    control={control}
                    errors={errors}
                    fieldId={field.id}
                    index={index}
                    key={field.id}
                    remove={remove}
                    setValue={setValue}
                />
            ))}

            <Button {...styles.addNewStepButton} onClick={handleAddNewStep}>
                Новый шаг
                <AddIcon {...styles.addNewStepButtonIcon} />
            </Button>
        </Stack>
    );
};
