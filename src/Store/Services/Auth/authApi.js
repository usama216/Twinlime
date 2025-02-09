import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-api-url.com/api' }),
  endpoints: (builder) => ({
    // Endpoint for Login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',  // The login route of your API
        method: 'POST',
        body: credentials,  // { email, password }
      }),
    }),

    // Endpoint for Signup
    signup: builder.mutation({
      query: (userData) => ({
        url: '/signup',  // The signup route of your API
        method: 'POST',
        body: userData,  // { name, email, password }
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
