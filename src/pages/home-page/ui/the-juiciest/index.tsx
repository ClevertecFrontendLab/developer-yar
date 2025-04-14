import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { RightArrowIcon } from '~/shared/ui/icons';
import { SectionTitle } from '~/shared/ui/section-title';
import { Recipes } from '~/widgets/recipes';

import { mockTheJuiciest } from '../../consts/mock-the-juiciest';
import { recipeListStyles as styles } from './index.styles';

export const TheJuiciest: FC = () => {
    const navigate = useNavigate();
    const navigateToTheJuiciestPage = () => navigate('/the-juiciest');

    return (
        <Grid {...styles.sectionContainer}>
            <GridItem {...styles.headerArea}>
                <SectionTitle>Самое сочное</SectionTitle>
            </GridItem>
            <GridItem {...styles.recipesArea}>
                <Recipes recipes={mockTheJuiciest} />
            </GridItem>
            <GridItem {...styles.actionArea}>
                <Button
                    data-test-id='juiciest-link'
                    onClick={navigateToTheJuiciestPage}
                    {...styles.viewAllButton}
                >
                    Вся подборка <RightArrowIcon {...styles.viewAllIcon} />
                </Button>
                <Button
                    data-test-id='juiciest-link-mobile'
                    onClick={navigateToTheJuiciestPage}
                    display='none'
                >
                    Вся подборка <RightArrowIcon {...styles.viewAllIcon} />
                </Button>
            </GridItem>
        </Grid>
    );
};
