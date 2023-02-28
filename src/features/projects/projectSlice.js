import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    projects: {},
    isLoading: false,
};

export const getProjects = createAsyncThunk(
    "project/getProjects",
    async (thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios(
          "http://34.236.149.254/api/admin/projects/listing",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(resp);
        return resp.data;
      } catch (error) {
        // console.log(error.response);
        return thunkAPI.rejectWithValue("something went wrong");
      }
    }
  );

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: {
      [getProjects.pending]: (state) => {
        state.isLoading = true;
      },
      [getProjects.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.projects = action.payload;
      },
      [getProjects.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  });
  
  export const {  } = projectSlice.actions;
  
  export default projectSlice.reducer;
  