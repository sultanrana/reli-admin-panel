import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    name: 'malik',
    portalUsers: {},
    isLoading: false,
};

export const getPortalUser = createAsyncThunk(
    'adminPortalUser/getPortalUser',
    async (thunkAPI) => {
      try {
        const resp = await axios('http://34.236.149.254/api/admin/users/listing', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        // console.log(resp);
        return resp.data;
      } catch (error) {
        console.log(error.response);
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

const adminPortalUserSlice = createSlice({
    name: 'adminPortalUser',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getPortalUser.pending]: (state) => {
            state.isLoading = true;
        },
        [getPortalUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.portalUsers = action.payload;
        },
        [getPortalUser.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export const {  } = adminPortalUserSlice.actions;

export default adminPortalUserSlice.reducer;