import { Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { recipeTextLabelStyles as styles } from './index.styles';

export const RecipeTextLabel: FC<PropsWithChildren> = ({ children }) => (
    <Text {...styles.text}>{children}</Text>
);
