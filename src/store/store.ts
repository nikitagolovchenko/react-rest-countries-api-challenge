import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import countryReducer from './slices/countrySlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    country: countryReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
