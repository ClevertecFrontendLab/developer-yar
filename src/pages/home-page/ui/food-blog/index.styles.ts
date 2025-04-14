import { ButtonProps, GridItemProps, GridProps, HeadingProps } from '@chakra-ui/react';

type FoodBlogStyleProps = {
    authorButton: ButtonProps;
    authorButtonContainer: GridItemProps;
    blogContentGrid: GridProps;
    foodBlogContainer: GridItemProps;
    foodBlogGrid: GridProps;
    gridContainer: GridProps;
    title: HeadingProps;
    titleContainer: GridItemProps;
};

export const foodBlogStyles: FoodBlogStyleProps = {
    authorButton: {
        bg: 'transparent',
        bgColor: 'lime.300',
        color: 'black',
        fontSize: { base: 'md', '2xl': 'lg' },
        fontWeight: 'semibold',
        gap: 2,
        h: { base: 10, '2xl': 12 },
        lineHeight: { base: '6', '2xl': '7' },
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
        alignItems: 'center',
        bgColor: 'lime.300',
        borderRadius: '2xl',
        gap: { base: 3, xl: 4, '2xl': 6 },
        padding: { base: 3, xl: 6 },
        templateAreas: {
            base: `"title"
                        "foodBlog"
                        "allAuthors"`,
            xl: `"title . allAuthors"
                        "foodBlog foodBlog foodBlog"`,
        },
    },
    title: {
        color: 'black',
        fontSize: { base: '2xl', xl: '3xl', '2xl': '4xl' },
        fontWeight: { base: 'medium', '2xl': 'normal' },
        lineHeight: { base: '8', xl: '9', '2xl': '10' },
    },
    titleContainer: {
        area: 'title',
    },
};
