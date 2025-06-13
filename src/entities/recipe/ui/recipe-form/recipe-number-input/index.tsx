import {
    Flex,
    FlexProps,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { Control, useController } from 'react-hook-form';

import { getErrorOutline } from '~/shared/lib';

import { RecipeFormData } from '../../../model/types';
import { RecipeTextLabel } from '../recipe-text-label';
import { recipeNumberInputStyles as styles } from './index.styles';

type NumberFieldNames<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type RecipeNumberFieldName = NumberFieldNames<RecipeFormData>;

type RecipeNumberFieldProps = {
    control: Control<RecipeFormData>;
    isInvalid: boolean;
    label: string;
    name: RecipeNumberFieldName;
} & FlexProps;

export const RecipeNumberField: FC<RecipeNumberFieldProps> = ({
    control,
    name,
    label,
    isInvalid,
    id,
    ...props
}) => {
    const {
        field: { value, onChange },
    } = useController({
        control,
        defaultValue: 0,
        name,
    });

    const [inputValue, setInputValue] = useState<string>(String(value ?? ''));

    useEffect(() => {
        setInputValue(String(value ?? ''));
    }, [value]);

    const handleChange = (valueAsString: string, valueAsNumber: number) => {
        setInputValue(valueAsString);

        if (!isNaN(valueAsNumber)) {
            onChange(valueAsNumber);
        }
    };

    return (
        <Flex {...styles.numberInputContainer} {...props}>
            <RecipeTextLabel>{label}</RecipeTextLabel>
            <NumberInput
                clampValueOnBlur={false}
                keepWithinRange={false}
                min={-Infinity}
                value={inputValue}
                onChange={handleChange}
            >
                <NumberInputField data-test-id={id} {...getErrorOutline(isInvalid)} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    );
};
