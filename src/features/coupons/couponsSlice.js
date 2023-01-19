import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  name: "malik",
  list: {},
};
export const getCoupons = createAsyncThunk(
  "coupon/getCoupons",
  async (thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(
        "http://34.236.149.254/api/admin/coupons/listing",
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
export const addCoupon = createAsyncThunk(
  "coupon/addCoupon",
  async (values, thunkAPI) => {
    const formData = new FormData()
    // {
    //   name: "Dustin Mckee",
    //   description: "adsflkjalskdjf lksjdf lkjsdf",
    //   code: "HJDFHSJDHSD",
    // }
    formData.append("name", values.name)
    formData.append("description", values.description)
    formData.append("code", values.code)
    formData.append("image", values.image)
    formData.append("service", values.service)
    formData.append("statusBit", values.statusBit)
    try {
      console.log(values);
      const resp = await axios.post(
        "http://34.236.149.254/api/admin/coupons/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(resp);
      // return resp.data;
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: {
    [getCoupons.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoupons.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.list = action.payload;
    },
    [getCoupons.rejected]: (state) => {
      state.isLoading = false;
    },
    [addCoupon.pending]: (state) => {
      state.isLoading = true;
    },
    [addCoupon.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      // state.list = action.payload;
    },
    [addCoupon.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart } = couponSlice.actions;

export default couponSlice.reducer;
