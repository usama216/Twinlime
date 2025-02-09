import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('authToken') || null,  // Get the token from localStorage if it exists
  user: null,  // You can store user data if needed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;  // Store the token in state
      localStorage.setItem('authToken', action.payload);  // Store token in localStorage
    },
    clearAuthToken: (state) => {
      state.token = null;  // Clear the token from state
      localStorage.removeItem('authToken');  // Remove the token from localStorage
    },
    setUserData: (state, action) => {
      state.user = action.payload;  // Store user data
    },
    clearUserData: (state) => {
      state.user = null;  // Clear user data
    },
  },
});

export const { setAuthToken, clearAuthToken, setUserData, clearUserData } = authSlice.actions;

export default authSlice.reducer;
