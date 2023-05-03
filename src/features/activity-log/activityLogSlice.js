import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: {},
    isLoading: false,
    alert: false,
    responseStatus: '',
    responseMsg: '',
};

export const getActivityLogs = createAsyncThunk(
    "activityLog/getActivityLogs",
    async (id, thunkAPI) => {
        try {
        const resp = await axios.get(
            `http://34.236.149.254/api/admin/staff/listofActivityLog/${id}`,
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
export const addActivityLog = createAsyncThunk(
    "activityLog/addActivityLog",
    async (values, thunkAPI) => {
        try {
        const resp = await axios.post(
            `http://34.236.149.254/api/admin/staff/addActivityLog`,
            values,
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

const activityLogSlice = createSlice({
    name: "activityLog",
    initialState,
    reducers: {
      activityLogResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      }
    },
    extraReducers: {
      [getActivityLogs.pending]: (state) => {
        state.isLoading = true;
      },
      [getActivityLogs.fulfilled]: (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.list = action.payload;
      },
      [getActivityLogs.rejected]: (state) => {
        state.isLoading = false;
      },
      [addActivityLog.pending]: (state) => {
        state.isLoading = true;
      },
      [addActivityLog.fulfilled]: (state, action) => {
        state.isLoading = false;
      },
      [addActivityLog.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  });
  
  export const { activityLogResponseClr } = activityLogSlice.actions;
  
  export default activityLogSlice.reducer;
  