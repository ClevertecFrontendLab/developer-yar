import { Link as ChakraLink } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { LogoBigIcon, LogoSmallIcon } from '../icons';
import { logotypeStyles as styles } from './logotype.styles';

const shownFromSmBreakpoint = getDisplayForBreakpoints({ from: 'sm' });
const shownToBaseBreakpoint = getDisplayForBreakpoints({ to: 'base' });

export const Logotype: FC = () => (
    <ChakraLink as={ReactRouterLink} to={ROUTES.HOME}>
        <LogoBigIcon {...shownFromSmBreakpoint} {...styles.logotypeBig} />
        <LogoSmallIcon {...shownToBaseBreakpoint} {...styles.logotypeSmall} />
    </ChakraLink>
);
