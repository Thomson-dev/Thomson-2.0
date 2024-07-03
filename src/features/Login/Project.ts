import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

import projectService from "./projectService";

export interface projectState {
  project: [] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: projectState = {
  project: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//GET USER PROJECTS
export const getproject = createAsyncThunk("getproject", async (thunkAPI) => {
  try {
    const response = await projectService.getproject();
    console.log(response);
    return response;
  } catch (error: any) {
    let message = error.message || error.toString();

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
       //@ts-ignore
    return thunkAPI.rejectWithValue(message);
  }
});

export const createproject = createAsyncThunk(
  "createproject",
  async (projectData, thunkAPI) => {
    console.log(createproject);
    try {
      const response = await projectService.createProject(projectData);
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

export const projectSlice = createSlice({
  name: "project",
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
      .addCase(getproject.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getproject.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.project = action.payload;
      })
      .addCase(getproject.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
         //@ts-ignore
        state.message = action.payload;
      })
      .addCase(createproject.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createproject.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
         //@ts-ignore
        state.project = action.payload;
      })
      .addCase(createproject.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
         //@ts-ignore
        state.message = action.payload;
      });
  },
});

export default projectSlice.reducer;
