import { Allergen } from '~/entities/allergen';
import { Recipe } from '~/entities/recipe';

function normalize(text: string): string {
    return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

export function excludeRecipesWithAllergens(
    recipes: Recipe[],
    activeAllergens: Allergen[],
): Recipe[] {
    const allergens = activeAllergens.map((allergen) => normalize(allergen.title));

    return recipes.filter((recipe) =>
        recipe.ingredients.every((ingredient) => {
            const ingredientTitle = normalize(ingredient.title);
            return !allergens.some((allergen) => ingredientTitle.includes(allergen));
        }),
    );
}
