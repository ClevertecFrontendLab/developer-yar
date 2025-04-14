import { Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import { Post, PostCard } from '~/entities/post';
import { RightArrowIcon } from '~/shared/ui/icons';

import { mockPosts } from '../../consts/mock-posts';
import { foodBlogStyles as styles } from './index.styles';

interface FoodBlogProps {}

export const FoodBlog: FC<FoodBlogProps> = () => (
    <Grid {...styles.gridContainer}>
        <GridItem {...styles.titleContainer}>
            <Heading as='h2' {...styles.title}>
                Кулинарные блоги
            </Heading>
        </GridItem>
        <GridItem {...styles.foodBlogContainer}>
            <Grid {...styles.foodBlogGrid}>
                {mockPosts.map((post: Post) => (
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
