import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { BaseBloggerCard, Blogger, BloggersContainerTitle } from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';
import { RightArrowIcon } from '~/shared/ui/icons';

import { foodBlogStyles as styles } from './index.styles';

type FoodBlogProps = {
    bloggers: Blogger[];
};

export const FoodBlog: FC<FoodBlogProps> = ({ bloggers }) => {
    const navigate = useNavigate();

    const handleNavigateToAllBlogs = () => navigate(ROUTES.BLOGS);

    return (
        <Grid {...styles.gridContainer} data-test-id={DATA_TEST_ATTRIBUTES.MAIN_PAGE_BLOGS_BOX}>
            <GridItem {...styles.titleContainer}>
                <BloggersContainerTitle>Кулинарные блоги</BloggersContainerTitle>
            </GridItem>
            <GridItem {...styles.foodBlogContainer}>
                <Grid
                    {...styles.foodBlogGrid}
                    data-test-id={DATA_TEST_ATTRIBUTES.MAIN_PAGE_BLOGS_GRID}
                >
                    {bloggers.map((blogger) => (
                        <BaseBloggerCard blogger={blogger} key={blogger.id} />
                    ))}
                </Grid>
            </GridItem>
            <GridItem {...styles.authorButtonContainer}>
                <Button {...styles.authorButton} onClick={handleNavigateToAllBlogs}>
                    Все авторы
                    <RightArrowIcon
                        color='black'
                        data-test-id={DATA_TEST_ATTRIBUTES.MAIN_PAGE_BLOGS_BUTTON}
                    />
                </Button>
            </GridItem>
        </Grid>
    );
};
