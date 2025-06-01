import { FC, PropsWithChildren } from 'react';

import { AppErrorNotification } from './app-error-notification';
import { AppLoader } from './app-loader';
import { AppSuccessNotification } from './app-success-notification';

export const AppStatus: FC<PropsWithChildren> = ({ children }) => (
    <>
        <AppLoader />
        <AppSuccessNotification />
        <AppErrorNotification />
        {children}
    </>
);
