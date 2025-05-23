import { GridItemProps, GridProps } from '@chakra-ui/react';

type AuthFeedbackStyleProps = {
    feedbackGridContainer: GridProps;
    feedbackGridItem: (isVisible: boolean) => GridItemProps;
};

export const authFeedbackStyles: AuthFeedbackStyleProps = {
    feedbackGridContainer: {
        justifyContent: 'start',
        minH: 4,
        templateAreas: 'feedback',
    },
    feedbackGridItem: (isVisible: boolean): GridItemProps => ({
        area: 'feedback',
        visibility: isVisible ? 'visible' : 'hidden',
    }),
};
