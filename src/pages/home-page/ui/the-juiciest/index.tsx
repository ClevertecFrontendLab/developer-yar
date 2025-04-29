import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router';

import { Recipe } from '~/entities/recipe';
import { RightArrowIcon } from '~/shared/ui/icons';
import { SectionTitle } from '~/shared/ui/section-title';
import { Recipes } from '~/widgets/recipes';

import { recipeListStyles as styles } from './index.styles';

type TheJuiciestProps = {
    recipes: Recipe[];
};

export const TheJuiciest: FC<TheJuiciestProps> = memo(({ recipes }) => {
    const navigate = useNavigate();
    const navigateToTheJuiciestPage = () => navigate('/the-juiciest');

    return (
        <Grid {...styles.sectionContainer}>
            <GridItem {...styles.headerArea}>
                <SectionTitle>Самое сочное</SectionTitle>
            </GridItem>
            <GridItem {...styles.recipesArea}>
                <Recipes recipes={recipes} />
            </GridItem>
            <GridItem {...styles.actionArea}>
                <Button
                    rightIcon={<RightArrowIcon {...styles.viewAllIcon} />}
                    onClick={navigateToTheJuiciestPage}
                    {...styles.viewAllButton}
                    data-test-id='juiciest-link'
                >
                    Вся подборка
                </Button>
                <Button
                    rightIcon={<RightArrowIcon {...styles.viewAllIcon} />}
                    onClick={navigateToTheJuiciestPage}
                    {...styles.viewAllButton}
                    data-test-id='juiciest-link-mobile'
                    display='none'
                >
                    Вся подборка
                </Button>
            </GridItem>
        </Grid>
    );
});
