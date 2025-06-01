import { Heading, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Step } from '~/entities/recipe';

import { RecipeCookingStepsStyles as styles } from './index.styles';
import { RecipeCookingStep } from './recipe-cooking-step';

type RecipeCookingStepsProps = {
    steps: Step[];
};

export const RecipeCookingSteps: FC<RecipeCookingStepsProps> = memo(({ steps }) => (
    <Stack {...styles.RecipeCookingSteps}>
        <Heading as='h2' {...styles.title}>
            Шаги приготовления
        </Heading>
        {steps.map((step) => (
            <RecipeCookingStep key={step.stepNumber} step={step} />
        ))}
    </Stack>
));
