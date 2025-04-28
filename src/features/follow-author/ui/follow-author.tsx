import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { FollowIcon } from '~/shared/ui/icons';

import { followAuthorButtonStyles as styles } from './follow-author.styles';

export const FollowAuthorButton: FC = () => (
    <Button {...styles.button}>
        <FollowIcon {...styles.buttonIcon} />
        Подписаться
    </Button>
);
