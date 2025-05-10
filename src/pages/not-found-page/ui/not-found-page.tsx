import { Center, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';

import notFoundImage from '../assets/not-found-image.svg';
import { notFoundPageStyles as styles } from './not-found-page.styles';

const NotFoundPage = () => (
    <Center {...styles.outerContainer}>
        <Center {...styles.contentContainer}>
            <Image alt='Страница не найдена' src={notFoundImage} {...styles.image} />
            <Stack {...styles.textBlock}>
                <Heading as='h1' {...styles.titleText}>
                    Упс! Такой страницы нет
                </Heading>
                <Text {...styles.descriptionText}>
                    Можете поискать другой рецепт{' '}
                    <Link
                        as={ReactRouterLink}
                        data-test-id={DATA_TEST_ATTRIBUTES.ERROR_PAGE_GO_HOME}
                        to={ROUTES.HOME}
                    >
                        здесь.
                    </Link>
                </Text>
            </Stack>
        </Center>
    </Center>
);

export default NotFoundPage;
