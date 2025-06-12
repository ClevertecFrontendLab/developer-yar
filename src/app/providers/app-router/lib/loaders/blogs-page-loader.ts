import { Breadcrumb } from '~/entities/navigation';
import { ROUTES } from '~/shared/routes';

export const blogsPageLoader = async () => {
    const breadcrumbs: Breadcrumb[] = [
        {
            title: 'Блоги',
            url: ROUTES.BLOGS,
        },
    ];
    return { breadcrumbs };
};
