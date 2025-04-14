import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../config/configure-store';

interface ReduxStoreProps {
    children: ReactNode;
}

export const ReduxStore: FC<ReduxStoreProps> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
