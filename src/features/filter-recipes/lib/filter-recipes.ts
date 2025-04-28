import { Allergen } from '~/entities/allergen';
import { excludeRecipesWithAllergens, Recipe } from '~/entities/recipe';

type FilterRecipesFunctionArgs = {
    selectedAllergens: Allergen[];
    selectedAuthors: string[];
    selectedCategories: string[];
    selectedGarnishTypes: string[];
    selectedMeatTypes: string[];
};

export const filterRecipes = (
    recipes: Recipe[],
    {
        selectedCategories,
        selectedAuthors,
        selectedMeatTypes,
        selectedGarnishTypes,
        selectedAllergens,
    }: FilterRecipesFunctionArgs,
) => {
    const filteredRecipes = excludeRecipesWithAllergens(recipes, selectedAllergens);

    return filteredRecipes.filter((recipe) => {
        const matchesCategory =
            selectedCategories.length === 0 ||
            recipe.category.some((category) => selectedCategories.includes(category));

        const matchesAuthor =
            selectedAuthors.length === 0 || selectedAuthors.includes(recipe.author.fullName);

        const matchesMeat =
            selectedMeatTypes.length === 0 ||
            (recipe.meat && selectedMeatTypes.includes(recipe.meat));

        const matchesSide =
            selectedGarnishTypes.length === 0 ||
            (recipe.side && selectedGarnishTypes.includes(recipe.side));

        return matchesCategory && matchesAuthor && matchesMeat && matchesSide;
    });
};
