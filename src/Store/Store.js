import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './Services/contactApi';
import authReducer from './Services/Auth/authSlice'; 
import { authApi } from './Services/Auth/authApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),  // Add the middleware for RTK Query APIs
});

export default store;
