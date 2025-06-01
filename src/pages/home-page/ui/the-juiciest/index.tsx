import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { useFoundRecipes } from '~/features/recipe-refinement';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { RightArrowIcon } from '~/shared/ui/icons';
import { SectionTitle } from '~/shared/ui/section-title';
import { Recipes } from '~/widgets/recipes';

import { recipeListStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const TheJuiciest: FC = () => {
    const navigate = useNavigate();
    const navigateToTheJuiciestPage = () => navigate('/the-juiciest');

    const { isRecipesError, isRecipesLoading, isRecipesSuccess, recipes } = useFoundRecipes({
        sortBy: 'likes',
        sortOrder: 'DESC',
    });

    useApiStatusSync(isRecipesLoading, { isError: isRecipesError });

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
                        {...shownFromXlBreakpoint}
                        {...styles.viewAllButton}
                        data-test-id={DATA_TEST_ATTRIBUTES.JUICIEST_LINK}
                    >
                        Вся подборка
                    </Button>
                    <Button
                        rightIcon={<RightArrowIcon {...styles.viewAllIcon} />}
                        onClick={navigateToTheJuiciestPage}
                        {...shownToLgBreakpoint}
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
