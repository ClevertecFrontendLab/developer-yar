import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import { AuthErrorMessage } from '../auth-error-message';
import { AuthHelperText } from '../auth-helper-text';
import { authFeedbackStyles as styles } from './index.styles';

type AuthFeedbackProps = {
    error?: string;
    helper?: string;
};

export const AuthFeedback: FC<AuthFeedbackProps> = ({ error, helper }) => (
    <Grid {...styles.feedbackGridContainer}>
        <GridItem {...styles.feedbackGridItem(Boolean(helper && !error))}>
            <AuthHelperText>{helper}</AuthHelperText>
        </GridItem>
        <GridItem {...styles.feedbackGridItem(Boolean(error))}>
            <AuthErrorMessage message={error} />
        </GridItem>
    </Grid>
);
