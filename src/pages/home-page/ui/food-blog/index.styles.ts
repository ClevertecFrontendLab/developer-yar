import { ButtonProps, GridItemProps, GridProps } from '@chakra-ui/react';

type FoodBlogStyleProps = {
    authorButton: ButtonProps;
    authorButtonContainer: GridItemProps;
    blogContentGrid: GridProps;
    foodBlogContainer: GridItemProps;
    foodBlogGrid: GridProps;
    gridContainer: GridProps;
    titleContainer: GridItemProps;
};

export const foodBlogStyles: FoodBlogStyleProps = {
    authorButton: {
        bg: 'transparent',
        bgColor: 'lime.300',
        color: 'black',
        fontSize: { '2xl': 'lg', base: 'md' },
        fontWeight: 'semibold',
        gap: 2,
        h: { '2xl': 12, base: 10 },
        lineHeight: { '2xl': '7', base: '6' },
        px: 4,
    },
    authorButtonContainer: {
        area: 'allAuthors',
        justifySelf: { base: 'center', xl: 'right' },
    },
    blogContentGrid: {
        gap: { base: 3, xl: 4 },
        rowGap: 4,
        templateColumns: { base: '1fr', md: 'repeat(3,1fr)' },
    },
    foodBlogContainer: {
        area: 'foodBlog',
    },
    foodBlogGrid: {
        gap: { base: 3, xl: 4 },
        rowGap: 4,
        templateColumns: { base: '1fr', md: 'repeat(3,1fr)' },
    },
    gridContainer: {
        layerStyle: 'blogsLayout',
        templateAreas: {
            base: `"title"
                        "foodBlog"
                        "allAuthors"`,
            xl: `"title . allAuthors"
                        "foodBlog foodBlog foodBlog"`,
        },
    },
    titleContainer: {
        area: 'title',
    },
};
