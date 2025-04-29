import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Breadcrumbs as BreadcrumbsWrapper } from '~/entities/navigation';

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
        <Box data-test-id='breadcrumbs' onClick={handleClick}>
            <BreadcrumbsWrapper />
        </Box>
    );
};
