import { homePage } from '../consts/home-page';
import { recipePage } from '../consts/recipe-page';
import { recipesPage } from '../consts/recipes-page';
import { theJuiciestPage } from '../consts/the-juiciest-page';
import { withBreadcrumbs } from '../lib/with-breadcrumbs';

export const routes = [homePage, theJuiciestPage, recipesPage, recipePage].map(withBreadcrumbs);
