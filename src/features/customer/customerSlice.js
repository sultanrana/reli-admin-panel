import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customers: {},
  customerDetail: {},
  isLoading: false,
  responseStatus: '',
  responseMsg: '',
  alert: false,
};

export const getCutomers = createAsyncThunk(
  "customer/getCutomers",
  async (thunkAPI) => {
    try {
      const resp = await axios(
        "http://34.236.149.254/api/admin/customers/listing",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //   console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getCutomerDetail = createAsyncThunk(
  "customer/getCutomerDetail",
  async (id, thunkAPI) => {
    try {
      const resp = await axios(
        `http://34.236.149.254/api/admin/customers/detail/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(resp);
      return resp.data;
    } catch (error) {
      //   console.log(error.response);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (values, thunkAPI) => {
    
    let id = thunkAPI.getState().customer.customerDetail.data.id;
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("statusBit", values.statusBit);
    if (values.profileImage) {
      formData.append("profileImage", values.profileImage);
    }
    try {
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
      // console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      // return "something went wrong";
      return error.response;
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerResponseClr: (state, action) => {
      state.responseMsg = "";
      state.responseStatus = "";
      state.alert = false;
    }
  },
  extraReducers: {
    [getCutomers.pending]: (state) => {
      state.isLoading = true;
    },
    [getCutomers.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.customers = action.payload;
      localStorage.setItem('customers', JSON.stringify(action.payload));
      state.isLoading = false;
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
      console.log(action.payload.message);
      if(action.payload.message){
        state.responseStatus = "success";
      }else{
        state.responseStatus = "error";
      }
      state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
      state.alert = true;
      state.isLoading = false;
    },
    [updateCustomer.rejected]: (state, action) => {
      console.log('action.payload:', action.payload);
      state.responseStatus = "error";
      state.responseMsg = action.payload;
      state.alert = true;
      state.isLoading = false;
    },
  },
});

export const { customerResponseClr } = customerSlice.actions;

export default customerSlice.reducer;
