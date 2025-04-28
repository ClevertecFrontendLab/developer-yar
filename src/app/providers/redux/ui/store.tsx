import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '../config/store';

type StoreProps = PropsWithChildren;

export const Store: FC<StoreProps> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
