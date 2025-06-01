import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';

import { recipeTextareaStyles as styles } from './index.styles';

export const RecipeTextarea: FC<TextareaProps> = ({ ...props }) => (
    <Textarea {...styles.textarea} {...props} />
);
