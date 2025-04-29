import { Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import { PostCard, useGetAllPostsQuery } from '~/entities/post';
import { RightArrowIcon } from '~/shared/ui/icons';

import { foodBlogStyles as styles } from './index.styles';

export const FoodBlog: FC = () => {
    const { data: posts, isSuccess } = useGetAllPostsQuery();

    if (isSuccess)
        return (
            <Grid {...styles.gridContainer}>
                <GridItem {...styles.titleContainer}>
                    <Heading as='h2' {...styles.title}>
                        Кулинарные блоги
                    </Heading>
                </GridItem>
                <GridItem {...styles.foodBlogContainer}>
                    <Grid {...styles.foodBlogGrid}>
                        {posts.map((post) => (
                            <PostCard key={post.id} {...post} />
                        ))}
                    </Grid>
                </GridItem>
                <GridItem {...styles.authorButtonContainer}>
                    <Button {...styles.authorButton}>
                        Все авторы <RightArrowIcon color='black' />
                    </Button>
                </GridItem>
            </Grid>
        );
};
