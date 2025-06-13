import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { buildAbsoluteUrl } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { bloggerReadButtonStyles as styles } from './index.styles';
import { BloggerReadButtonVariant } from './index.types';

type BloggerReadButtonProps = {
    bloggerId: string;
    variant: BloggerReadButtonVariant;
};

export const BloggerReadButton: FC<BloggerReadButtonProps> = ({ bloggerId, variant }) => {
    const navigate = useNavigate();

    const handleNavigateToBlogger = () =>
        navigate(buildAbsoluteUrl(ROUTES.BLOGS, bloggerId) + '#notes');

    return (
        <Button
            {...styles(variant)}
            data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_CARD_NOTES_BUTTON}
            onClick={handleNavigateToBlogger}
        >
            Читать
        </Button>
    );
};
