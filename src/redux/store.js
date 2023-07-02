import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, currencyReducer } from './currencySlice';
import { exchangeApi } from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};


export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(exchangeApi.middleware),
});

export const persistor = persistStore(store);
