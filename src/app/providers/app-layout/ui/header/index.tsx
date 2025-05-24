import { Box } from '@chakra-ui/react';

import { useScrollOnNavigate } from '~/shared/lib';
import { Header as BaseHeader } from '~/widgets/header';

import { headerStyles as styles } from './index.styles';

export const Header = () => {
    useScrollOnNavigate();

    return (
        <Box {...styles.headerWrapper} id='site-header'>
            <BaseHeader />
        </Box>
    );
};
