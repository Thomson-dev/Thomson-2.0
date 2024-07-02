import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import experienceService from "./ExperienceService";


export interface ExpeienceState {
  experience: [] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: ExpeienceState = {
  experience: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//GET USER EXPERIENCE
export const ExpeienceInfo = createAsyncThunk("experience", async (thunkAPI) => {
  try {
    const response = await experienceService.getexperience()
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





export const experienceSlice = createSlice({
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
      .addCase(ExpeienceInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(ExpeienceInfo.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.experience = action.payload;
      })
      .addCase(ExpeienceInfo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
    
  },
});

export default experienceSlice.reducer;
