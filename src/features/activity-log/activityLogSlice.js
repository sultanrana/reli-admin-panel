import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    activityList: {},
    isLoading: false,
    responseStatus: "",
    reponseMsg: "",
    activityAlert: "",
};

export const getActivityLog = createAsyncThunk(
    'activityLog/getActivityList',
    async (id, thunkAPI) => {
      try {
        const resp = await axios(`http://34.236.149.254/api/admin/staff/listofActivityLog/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        return resp.data;
      } catch (error) {
        console.log(error.response);
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

const activityLogSlice = createSlice({
    name: 'activityLog',
    initialState: initialState,
    reducers: {
      activityLogResponseClr: (state, action) => {
        state.reponseMsg = "";
        state.responseStatus = "";
        state.activityAlert = false;
      }
    },
    extraReducers: {
        [getActivityLog.pending]: (state) => {
            state.isLoading = true;
        },
        [getActivityLog.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.activityList = action.payload;
            localStorage.setItem('activityList', JSON.stringify(action.payload));
            state.isLoading = false;
        },
        [getActivityLog.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export const { activityLogResponseClr } = activityLogSlice.actions;

export default activityLogSlice.reducer;