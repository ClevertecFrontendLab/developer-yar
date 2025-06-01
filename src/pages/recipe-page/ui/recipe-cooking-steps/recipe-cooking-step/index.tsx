import { Grid, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Step } from '~/entities/recipe';
import { Tag } from '~/shared/ui/tag';

import { RecipeCookingStepstyles as styles } from './index.styles';

type RecipeCookingStepProps = {
    step: Step;
};

export const RecipeCookingStep: FC<RecipeCookingStepProps> = memo(
    ({ step: { description, image, stepNumber } }) => (
        <Grid {...styles.recipeRecipeCookingStep(Boolean(image))}>
            {image && <Image alt={`Шаг ${stepNumber}`} src={image} {...styles.image} />}
            <Stack {...styles.content}>
                <Tag>Шаг {stepNumber}</Tag>
                <Text {...styles.description}>{description}</Text>
            </Stack>
        </Grid>
    ),
);
