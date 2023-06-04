import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootStore } from './root-store';

export type RootState = ReturnType<typeof RootStore.store.getState>;
export type AppDispatch = typeof RootStore.store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
