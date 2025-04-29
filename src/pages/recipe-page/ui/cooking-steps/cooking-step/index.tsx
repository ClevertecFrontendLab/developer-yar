import { Grid, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Step } from '~/entities/recipe';
import { Tag } from '~/shared/ui/tag';

import { cookingStepStyles as styles } from './index.styles';

type CookingStepProps = Step;

export const CookingStep: FC<CookingStepProps> = memo(({ stepNumber, description, image }) => (
    <Grid {...styles.cookingStep(Boolean(image))}>
        {image && <Image alt={`Шаг ${stepNumber}`} src={image} {...styles.image} />}
        <Stack {...styles.content}>
            <Tag>Шаг {stepNumber}</Tag>
            <Text {...styles.description}>{description}</Text>
        </Stack>
    </Grid>
));
