import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    list: {},
    isLoading: false,
}

export const getCompanies = createAsyncThunk(
    'company/getCompanies',
    async (thunkAPI) => {
      try {
        const resp = await axios('http://34.236.149.254/api/admin/company/listing', {
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


const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [getCompanies.pending]: (state) => {
            state.isLoading = true;
        },
        [getCompanies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.list = action.payload;
            // localStorage.setItem('variableDetials', JSON.stringify(state.variables));
        },
        [getCompanies.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})



export const {  } = companySlice.actions;
  
export default companySlice.reducer;