import { ROUTES } from '~/shared/routes';

export const theJuiciestPageLoader = async () => {
    const breadcrumbs = [{ title: 'Самое сочное', url: ROUTES.THE_JUICIEST }];
    return { breadcrumbs };
};
