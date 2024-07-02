import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import userDetailsService from "./userDetailsService";

export interface userDetailsState {
  user: [] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: userDetailsState = {
  user: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//GET USER DETAILS
export const userInfo = createAsyncThunk("userInfo", async (thunkAPI) => {
  try {
    const response = await userDetailsService.userDetails();
    // console.log(response);
    return response;
  } catch (error: any) {
    let message = error.message || error.toString();

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }

    return thunkAPI.rejectWithValue(message);
  }
});

//UPDATE USER DETAILS

export const updateUserDetails = createAsyncThunk(
  "updateUserDetails",
  async (userData, thunkAPI) => {
    try {
      const response = await userDetailsService.updateDetails(userData);
      console.log(response);
      return response;
    } catch (error: any) {
      let message = error.message || error.toString();

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message = error.response.data.message;
      }

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userDetailsSlice = createSlice({
  name: "userinfo",
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
      .addCase(userInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userInfo.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(userInfo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateUserDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
      }).addCase(updateUserDetails.rejected, (state, action) => { 
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;
