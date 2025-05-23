import { Box, Progress, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { STEPS } from '../../consts/steps';
import { useSignUpContext } from '../../hooks/use-sign-up-context';
import { authProgressBarStyles as styles } from './index.styles';

export const AuthProgressBar: FC = () => {
    const { progress, step } = useSignUpContext();

    return (
        <Box {...styles.progressBarWrapper}>
            <Text {...styles.progressBarTitle}>
                Шаг {step === STEPS.PERSONAL_INFO ? '1. Личная информация' : '2. Логин и пароль'}
            </Text>
            <Progress
                hasStripe
                value={progress.personal + progress.account}
                {...styles.progressBar}
                data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_PROGRESS}
            />
        </Box>
    );
};
