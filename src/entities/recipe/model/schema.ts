import { z } from 'zod';

const trimmedString = z.string().trim();
const nonEmptyString = trimmedString.nonempty();
const positiveNumber = z.number().positive();

const ingredientSchema = z.object({
    count: z.number(),
    measureUnit: z.string(),
    title: trimmedString.max(50),
});

const stepSchema = z.object({
    description: trimmedString.max(300),
    image: trimmedString.or(z.null()).optional(),
});

export const baseFields = {
    description: trimmedString.max(500),
    image: trimmedString,
    ingredients: z.array(ingredientSchema),
    portions: z.number().max(10000),
    steps: z.array(stepSchema),
    subcategories: z.array(trimmedString),
    time: z.number().max(10000),
    title: trimmedString.nonempty().max(50),
};

export const baseSchema = z.object({
    ...baseFields,
});

export const draftSchema = z.object({
    ...baseFields,
});

export const publishSchema = z.object({
    ...baseFields,
    description: nonEmptyString.max(500),
    image: nonEmptyString,
    ingredients: z.array(
        ingredientSchema.extend({
            count: positiveNumber,
            measureUnit: nonEmptyString,
            title: nonEmptyString.max(50),
        }),
    ),
    portions: positiveNumber.max(10000),
    steps: z.array(
        stepSchema.extend({
            description: nonEmptyString.max(300),
        }),
    ),
    subcategories: z.array(nonEmptyString).min(3),
    time: positiveNumber.max(10000),
});
