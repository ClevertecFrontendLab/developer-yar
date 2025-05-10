import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Breadcrumbs as BreadcrumbsWrapper } from '~/entities/navigation';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

type BreadcrumbsMobileProps = {
    onLinkClick: () => void;
};

export const BreadcrumbsMobile: FC<BreadcrumbsMobileProps> = ({ onLinkClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target;

        if (target instanceof HTMLElement && target.closest('a')) {
            onLinkClick();
        }
    };

    return (
        <Box data-test-id={DATA_TEST_ATTRIBUTES.BREADCRUMBS} onClick={handleClick}>
            <BreadcrumbsWrapper />
        </Box>
    );
};
