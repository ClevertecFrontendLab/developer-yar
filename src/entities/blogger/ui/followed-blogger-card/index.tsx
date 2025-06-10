import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { buildAbsoluteUrl } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { Blogger } from '../../model/types';
import { BaseBloggerCard } from '../base-blogger-card';
import { BloggerCardFooter } from '../blogger-card-footer';
import { BloggerCardHeader } from '../blogger-card-header';
import { BloggerReadButton } from '../blogger-read-button';
import { followedBloggersCardStyles as styles } from './index.styles';

type FollowedBloggerCardProps = {
    blogger: Blogger;
};

export const FollowedBloggerCard: FC<FollowedBloggerCardProps> = ({ blogger }) => {
    const navigate = useNavigate();

    const handleNavigateToBlogger = () => navigate(buildAbsoluteUrl(ROUTES.BLOGS, blogger.id));

    return (
        <BaseBloggerCard
            blogger={blogger}
            footer={
                <BloggerCardFooter
                    bookmarks={blogger.bookmarksCount}
                    followers={blogger.followersCount}
                >
                    <Button
                        {...styles}
                        data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_CARD_RECIPES_BUTTON}
                        onClick={handleNavigateToBlogger}
                    >
                        Рецепты
                    </Button>
                    <BloggerReadButton bloggerId={blogger.id} variant='followed' />
                </BloggerCardFooter>
            }
            header={<BloggerCardHeader newRecipesCount={blogger.newRecipesCount} />}
        />
    );
};
