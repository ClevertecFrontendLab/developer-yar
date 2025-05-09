import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { useFoundRecipes } from '~/features/recipe-search';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { useAppStatusSync } from '~/shared/model';
import { RightArrowIcon } from '~/shared/ui/icons';
import { SectionTitle } from '~/shared/ui/section-title';
import { Recipes } from '~/widgets/recipes';

import { recipeListStyles as styles } from './index.styles';

const shownFromMdBreakpoint = getDisplayForBreakpoints({ from: 'md' });
const shownToSmBreakpoint = getDisplayForBreakpoints({ to: 'sm' });

export const TheJuiciest: FC = () => {
    const navigate = useNavigate();
    const navigateToTheJuiciestPage = () => navigate('/the-juiciest');

    const { recipes, isRecipesLoading, isRecipesError, isRecipesSuccess } = useFoundRecipes({
        sortBy: 'likes',
        sortOrder: 'DESC',
    });

    useAppStatusSync(isRecipesLoading, isRecipesError);

    if (isRecipesSuccess && recipes)
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
                        {...shownFromMdBreakpoint}
                        {...styles.viewAllButton}
                        data-test-id={DATA_TEST_ATTRIBUTES.JUICIEST_LINK}
                    >
                        Вся подборка
                    </Button>
                    <Button
                        rightIcon={<RightArrowIcon {...styles.viewAllIcon} />}
                        onClick={navigateToTheJuiciestPage}
                        {...shownToSmBreakpoint}
                        {...styles.viewAllButton}
                        data-test-id={DATA_TEST_ATTRIBUTES.JUICIEST_LINK_MOBILE}
                    >
                        Вся подборка
                    </Button>
                </GridItem>
            </Grid>
        );
    else return null;
};
