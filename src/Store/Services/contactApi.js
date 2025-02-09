import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://default-api-url.com/api';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl }), 
  endpoints: (builder) => ({
    sendContactForm: builder.mutation({
      query: (formData) => ({
        url: '/contact', 
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useSendContactFormMutation } = contactApi;
