import { Breadcrumb } from '~/entities/navigation';

export const homePageLoader = async () => {
    const breadcrumbs: Breadcrumb[] = [];
    return { breadcrumbs };
};
