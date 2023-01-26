import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    services: {},
    isLoading: false,
};

export const getServices = createAsyncThunk(
    'services/getServices',
    async (thunkAPI) => {
      try {
        const resp = await axios('http://34.236.149.254/api/admin/service/listing', {
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



  const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
    },
    extraReducers: {
      [getServices.pending]: (state) => {
        state.isLoading = true;
      },
      [getServices.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
        // localStorage.setItem('variableDetials', JSON.stringify(state.variables));
      },
      [getServices.rejected]: (state) => {
        state.isLoading = false;
      },
    }
  });
  
  
  export const { clearCart } = serviceSlice.actions;
  
  export default serviceSlice.reducer;