import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    customers: {},
    customerDetail: {},
    isLoading: false,
};

export const getCutomers = createAsyncThunk(
  'customer/getCutomers',
  async (thunkAPI) => {
    try {
      const resp = await axios('http://34.236.149.254/api/admin/customers/listing', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
    //   console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
export const getCutomerDetail = createAsyncThunk(
  'customer/getCutomerDetail',
  async (id, thunkAPI) => {
    try {
      const resp = await axios(`http://34.236.149.254/api/admin/customers/detail/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      console.log(resp);
      return resp.data;
    } catch (error) {
    //   console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);


export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (values, thunkAPI) => {
    let id = thunkAPI.getState().customerDetail.data.id;
    console.log(values);
    const formData = new FormData();
    
    formData.append("firstName", values.firstName);
    // formData.append("email", values.email);
    formData.append("statusBit", values.statusBit);
    // if(values.profileImage){
    //   formData.append("profileImage", values.profileImage);
    // }
    try {
      console.log(values);
      const resp = await axios.post(
        `http://34.236.149.254/api/admin/customers/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(resp);
      // return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);










const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCutomers.pending]: (state) => {
      state.isLoading = true;
    },
    [getCutomers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.customers = action.payload;
    },
    [getCutomers.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCutomerDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getCutomerDetail.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.customerDetail = action.payload;
    },
    [getCutomerDetail.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCustomer.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      // state.customerDetail = action.payload;
    },
    [updateCustomer.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});


export const {  } = customerSlice.actions;

export default customerSlice.reducer;
