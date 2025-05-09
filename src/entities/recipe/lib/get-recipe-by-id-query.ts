import { store } from '~/app/providers/redux';

import { getRecipeById } from '../model/api';

export const getRecipeByIdQuery = async (id: string) => {
    const recipesResult = await store.dispatch(getRecipeById.initiate(id, { subscribe: false }));

    const recipe = recipesResult.data;

    if (!recipe) {
        throw new Error('Failed to fetch recipes or categories');
    }

    return recipe;
};
