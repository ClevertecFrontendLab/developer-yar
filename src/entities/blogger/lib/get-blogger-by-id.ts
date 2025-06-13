import { store } from '~/app/providers/redux';
import { ERRORS, isApiError } from '~/shared/api';
import { getCurrentUserId } from '~/shared/lib';

import { getBloggerById } from '../model/api';

export const getBloggerByIdQuery = async (bloggerId: string) => {
    const currentUserId = getCurrentUserId();

    const bloggerResult = await store.dispatch(
        getBloggerById.initiate(
            {
                bloggerId,
                currentUserId,
            },
            { subscribe: false },
        ),
    );

    const error = bloggerResult.error;

    if (isApiError(error)) {
        const { status } = error;

        if (status === ERRORS.NOT_FOUND) {
            throw new Response('Blogger not found', { status: ERRORS.NOT_FOUND });
        }

        throw new Response('Failed to fetch blogger', { status: ERRORS.INTERNAL_SERVER_ERRROR });
    }

    const blogger = bloggerResult.data;

    return blogger;
};
