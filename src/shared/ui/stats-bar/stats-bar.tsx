import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarkBadge, EmojiBadge, PeopleBadge } from '~/shared/ui/badges';

import { statsBarStyles as styles } from './stats-bar.styles';

export const StatsBar: FC = () => (
    <Stack {...styles.container}>
        <BookmarkBadge
            wrapperStyles={styles.badgeContainer}
            iconStyles={styles.badgeIcon}
            textStyles={styles.badgeText}
            value={185}
        />
        <PeopleBadge
            wrapperStyles={styles.badgeContainer}
            iconStyles={styles.badgeIcon}
            textStyles={styles.badgeText}
            value={589}
        />
        <EmojiBadge
            wrapperStyles={styles.badgeContainer}
            iconStyles={styles.badgeIcon}
            textStyles={styles.badgeText}
            value={597}
        />
    </Stack>
);
