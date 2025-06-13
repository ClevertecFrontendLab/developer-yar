import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { BloggerCardFooterVariant } from '../../model/types';
import { BloggerStats } from '../blogger-stats';
import { bloggerCardFooterStyles as styles } from './index.styles';

type BloggerCardFooterProps = {
    bookmarks: number;
    followers: number;
    variant?: BloggerCardFooterVariant;
} & PropsWithChildren;

export const BloggerCardFooter: FC<BloggerCardFooterProps> = ({
    bookmarks,
    children,
    followers,
    variant = 'row',
}) => (
    <Flex {...styles.bloggerMetaContainer(variant)}>
        <Flex {...styles.bloggerActionButtons}>{children}</Flex>
        <BloggerStats bookmarks={bookmarks} followers={followers} />
    </Flex>
);
