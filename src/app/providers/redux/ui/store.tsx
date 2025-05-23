import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '../config/store';

export const Store: FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
