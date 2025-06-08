import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { BloggerStats } from '../blogger-stats';
import { bloggerCardFooterStyles as styles } from './index.styles';

type BloggerCardFooterProps = {
    bookmarks: number;
    followers: number;
} & PropsWithChildren;

export const BloggerCardFooter: FC<BloggerCardFooterProps> = ({
    bookmarks,
    followers,
    children,
}) => (
    <Flex {...styles.bloggerMetaContainer}>
        <Flex {...styles.bloggerActionButtons}>{children}</Flex>
        <BloggerStats bookmarks={bookmarks} followers={followers} />
    </Flex>
);
