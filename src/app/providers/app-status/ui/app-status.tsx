import { FC, PropsWithChildren } from 'react';

import { AppErrorNotification } from './app-error-notification';
import { AppLoader } from './app-loader';

export const AppStatus: FC<PropsWithChildren> = ({ children }) => (
    <>
        <AppLoader />
        <AppErrorNotification />
        {children}
    </>
);
