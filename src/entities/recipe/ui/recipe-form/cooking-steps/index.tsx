import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';

import { Step } from '~/entities/recipe';
import { AddIcon } from '~/shared/ui/icons';

import { RecipeFormData } from '../../../model/types';
import { RecipeTextLabel } from '../recipe-text-label';
import { CookingStep } from './cooking-step';
import { cookingStepsStyles as styles } from './index.styles';

type CookingStepsProps = {
    append: (step: Step) => void;
    control: Control<RecipeFormData>;
    errors: FieldErrors<RecipeFormData>;
    fields: { id: string }[];
    remove: (index: number) => void;
    setValue: UseFormSetValue<RecipeFormData>;
};

export const CookingSteps: FC<CookingStepsProps> = ({
    append,
    fields,
    errors,
    control,
    remove,
    setValue,
}) => (
    <Stack {...styles.cookingSteps}>
        <RecipeTextLabel>Добавьте шаги приготовления</RecipeTextLabel>

        {fields.map((field, index) => (
            <CookingStep
                control={control}
                errors={errors}
                fieldId={field.id}
                index={index}
                key={field.id}
                remove={remove}
                setValue={setValue}
            />
        ))}

        <Button
            {...styles.addNewStepButton}
            onClick={() => append({ description: '', stepNumber: fields.length })}
        >
            Новый шаг
            <AddIcon {...styles.addNewStepButtonIcon} />
        </Button>
    </Stack>
);
