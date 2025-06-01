import { DeleteIcon } from '@chakra-ui/icons';
import { Grid, GridItem, Input, Stack, Text } from '@chakra-ui/react';
import { FC, useCallback } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { Ingredient } from '~/entities/recipe';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getDisplayForBreakpoints, getErrorOutline } from '~/shared/lib';
import { AddIcon, AddSmallIcon } from '~/shared/ui/icons';

import { RecipeFormData } from '../../../model/types';
import { RecipeTextLabel } from '../recipe-text-label';
import { ingredientsSectionStyles as styles } from './index.styles';
import { MeasureUnitsMenu } from './measure-units-menu';

type IngredientsSectionProps = {
    append: (ingredient: Ingredient) => void;
    control: Control<RecipeFormData>;
    errors: FieldErrors<RecipeFormData>;
    fields: { id: string }[];
    remove: (index: number) => void;
};

const shownFromMdBreakpoint = getDisplayForBreakpoints({ display: 'grid', from: 'md' });

export const IngredientsSection: FC<IngredientsSectionProps> = ({
    control,
    errors,
    fields,
    append,
    remove,
}) => {
    const handleAddNewIngredient = useCallback(() => {
        append({ count: 0, measureUnit: '', title: '' });
    }, [append]);

    return (
        <Stack {...styles.ingredientsContainer}>
            <RecipeTextLabel>
                Добавьте ингредиенты рецепта, нажав на кнопку
                <AddSmallIcon {...styles.addSmallIcon} />
            </RecipeTextLabel>

            <Grid {...styles.ingredientsLabelContainer} {...shownFromMdBreakpoint}>
                <Text {...styles.ingredientLabel}>Ингредиенты</Text>
                <Text {...styles.ingredientLabel}>Количество</Text>
                <Text {...styles.ingredientLabel}>Единица измерения</Text>
            </Grid>

            {fields.map((field, index) => (
                <Grid key={field.id} {...styles.ingredientsTableGrid}>
                    <GridItem {...styles.ingredientInput}>
                        <Controller
                            control={control}
                            name={`ingredients.${index}.title`}
                            render={({ field }) => (
                                <Input
                                    placeholder='Ингредиент'
                                    {...field}
                                    {...styles.ingredientsTableInput}
                                    {...getErrorOutline(
                                        Boolean(errors.ingredients?.[index]?.title),
                                    )}
                                    data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_INGREDIENTS_TITLE}-${index}`}
                                />
                            )}
                        />
                    </GridItem>

                    <GridItem {...styles.countInput}>
                        <Controller
                            control={control}
                            name={`ingredients.${index}.count`}
                            render={({ field }) => (
                                <Input
                                    placeholder='100'
                                    value={field.value}
                                    onChange={(e) => field.onChange(+e.target.value)}
                                    {...styles.ingredientsTableInput}
                                    {...getErrorOutline(
                                        Boolean(errors.ingredients?.[index]?.count),
                                    )}
                                    data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_INGREDIENTS_COUNT}-${index}`}
                                />
                            )}
                        />
                    </GridItem>

                    <GridItem {...styles.measureUnitInput}>
                        <Controller
                            control={control}
                            name={`ingredients.${index}.measureUnit`}
                            render={({ field }) => (
                                <MeasureUnitsMenu
                                    index={index}
                                    isInvalid={Boolean(errors.ingredients?.[index]?.measureUnit)}
                                    value={field.value}
                                    onChange={(val) => field.onChange(val)}
                                />
                            )}
                        />
                    </GridItem>

                    <GridItem {...styles.deleteIngredientButton}>
                        {index === fields.length - 1 ? (
                            <AddIcon
                                {...styles.addIngredientIcon}
                                data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_INGREDIENTS_ADD}
                                onClick={handleAddNewIngredient}
                            />
                        ) : (
                            <DeleteIcon
                                {...styles.deleteIngredientIcon}
                                data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_INGREDIENTS_REMOVE}-${index}`}
                                onClick={() => remove(index)}
                            />
                        )}
                    </GridItem>
                </Grid>
            ))}
        </Stack>
    );
};
