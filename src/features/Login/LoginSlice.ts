import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import authService from "./LoginSevice";

const user = JSON.parse(localStorage.getItem("user"));

// Assuming you have a User type defined somewhere
export interface User {
  // Define your user properties here
}

export interface LoginState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: LoginState = {
  user: user,

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk("login", async (user: User, thunkAPI) => {
  try {
    const response = await authService.login(user);
    return response.data;
  } catch (error) {
    let message = error.message || error.toString();

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }

    return thunkAPI.rejectWithValue(message);
  }
});

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = LoginSlice.actions;

export default LoginSlice.reducer;
