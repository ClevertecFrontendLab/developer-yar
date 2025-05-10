import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState } from '~/app/providers/redux';
import type { AppDispatch } from '~/app/providers/redux';

export { AppDispatch, RootState };
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
