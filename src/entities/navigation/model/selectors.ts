import { RootState } from '~/shared/model';

export const selectBreadcrumbs = (state: RootState) => state.breadcrumbs;
