import { GridItemProps, GridProps } from '@chakra-ui/react';

type FollowedBloggersStyleProps = {
    bloggers: GridProps;
    bloggersContainer: GridItemProps;
    gridContainer: GridProps;
    titleContainer: GridItemProps;
};

export const followedBloggersStyles: FollowedBloggersStyleProps = {
    bloggers: {
        gap: 4,
        templateColumns: { base: '1fr', md: 'repeat(2,1fr)' },
    },
    bloggersContainer: {
        area: 'blogger',
    },
    gridContainer: {
        layerStyle: 'blogsLayout',
        p: { base: 3, xl: 6 },
        templateAreas: {
            base: `"title"
                        "blogger"`,
            xl: `"title ."
                        "blogger blogger"`,
        },
    },
    titleContainer: {
        area: 'title',
    },
};
