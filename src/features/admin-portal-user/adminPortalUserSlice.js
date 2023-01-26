import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    portalUsers: {},
    isLoading: false,
    responseStatus: "",
    reponseMsg: "",
    alert: "",
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
        console.log(resp);
        return resp.data;
      } catch (error) {
        console.log(error.response);
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

export const addPortalUser = createAsyncThunk(
  'adminPortalUser/addPortalUser',
    async (values, {dispatch}) => {
      try {
        const resp = await axios.post('http://34.236.149.254/api/admin/users/add', 
        values,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });

        // console.log(resp);
        return resp.data;
      } catch (error) {
        // console.log(error.response);
        return error.response;
      }
    }
  )




const adminPortalUserSlice = createSlice({
    name: 'adminPortalUser',
    initialState: initialState,
    reducers: {
      adminPortalUserResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      }
    },
    extraReducers: {
        [getPortalUser.pending]: (state) => {
            state.isLoading = true;
        },
        [getPortalUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.portalUsers = action.payload;
            localStorage.setItem('portalUsers', JSON.stringify(action.payload));
            state.isLoading = false;
        },
        [getPortalUser.rejected]: (state) => {
            state.isLoading = false;
        },
        [addPortalUser.pending]: (state) => {
            state.isLoading = true;
        },  
        [addPortalUser.fulfilled]: (state, action) => {
            if(action.payload.message){
              state.responseStatus = "success";
            }else{
              state.responseStatus = "error";
            }
            state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
            state.alert = true;
            state.isLoading = false;
        },
        [addPortalUser.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export const { adminPortalUserResponseClr } = adminPortalUserSlice.actions;

export default adminPortalUserSlice.reducer;