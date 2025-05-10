import { FC } from 'react';

import { useHandleRedirectError } from '~/shared/model';
import { AppLoader } from '~/shared/ui/app-loader';
import { ErrorNotification } from '~/shared/ui/error-notification';

export const AppStatus: FC = () => {
    useHandleRedirectError();

    return (
        <>
            <AppLoader />
            <ErrorNotification />
        </>
    );
};
