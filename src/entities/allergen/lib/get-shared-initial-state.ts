import { AllergenState, initialAllergenState } from '../model/init';

export const getSharedAllergenState = (): AllergenState => structuredClone(initialAllergenState);
