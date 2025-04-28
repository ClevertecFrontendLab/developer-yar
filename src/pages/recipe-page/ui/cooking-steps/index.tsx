import { Heading, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Step } from '~/entities/recipe';

import { CookingStep } from './cooking-step';
import { cookingStepsStyles as styles } from './index.styles';

type CookingStepsProps = {
    steps: Step[];
};

export const CookingSteps: FC<CookingStepsProps> = memo(({ steps }) => (
    <Stack {...styles.cookingSteps}>
        <Heading as='h2' {...styles.title}>
            Шаги приготовления
        </Heading>
        {steps.map(({ stepNumber, image, description }) => (
            <CookingStep
                key={stepNumber}
                description={description}
                image={image}
                stepNumber={stepNumber}
            />
        ))}
    </Stack>
));
