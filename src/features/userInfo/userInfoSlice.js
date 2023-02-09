import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    users: {},
    isLoading: false,
    alert: false,
    responseStatus: '',
    responseMsg: '',
}

export const getUsers = createAsyncThunk(
  'userInfo/getUsers',
  async (id, thunkAPI) => {
    try {
      const resp = await axios(`http://34.236.149.254/api/admin/staff/listing/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      // console.log(resp);
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const addUser = createAsyncThunk(
  "userInfo/addUser",
  async (values, thunkAPI) => {
    try {
      const resp = await axios.post(
        `http://34.236.149.254/api/admin/staff/add`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      // return "something went wrong";
      return error.response;
    }
  }
);



const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      userInfoResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users     = {}
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state) => {
            state.isLoading = false;
        },
        [addUser.pending]: (state) => {
            state.isLoading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            if(action.payload.message){
              state.responseStatus = "success";
            }else{
              state.responseStatus = "error";
            }
            state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
            state.alert = true;
            state.isLoading = false;
        },
        [addUser.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})



export const { userInfoResponseClr } = userInfoSlice.actions;
  
export default userInfoSlice.reducer;