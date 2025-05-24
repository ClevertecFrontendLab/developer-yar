import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { FollowIcon } from '~/shared/ui/icons';

import { authorFollowButtonStyles as styles } from './author-follow-button.styles';

export const AuthorFollowButton: FC = () => (
    <Button {...styles.button}>
        <FollowIcon {...styles.buttonIcon} />
        Подписаться
    </Button>
);
