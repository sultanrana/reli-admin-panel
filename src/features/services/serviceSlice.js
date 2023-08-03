import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    services: {},
    serviceDetail: {},
    isLoading: false,
    alert: false,
    responseStatus: '',
    responseMsg: '',
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

  export const serviceProductList = createAsyncThunk(
    "service/serviceProductList",
    async (id, thunkAPI) => {
      try {
        const resp = await axios.get(
          `http://34.236.149.254/api/admin/csv/getProducts/${id}`,
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

  export const uploadProductServiceCSV = createAsyncThunk('service/uploadProductServiceCSV', async(values, thunkAPI) => {
    try {
      const resp = await axios.post(
        `http://34.236.149.254/api/admin/csv/upload-csv`, values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
  })
 

  export const updatePriceColumn = createAsyncThunk(
    "service/updatePriceColumn",
    async (values, thunkAPI) => {
      // const formData = new FormData();
      // formData.append('price', values.price);
      // // for (let [key, value] of formData.entries()) {
      // //   console.log(key + ': ' + value);
      // // }
      // // return
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/csv/update/${values.id}`,
          {'price': values.price},
          {
            headers: {
              // "Content-Type": "multipart/form-data",
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




  const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
      },
      serviceResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      },
    },
    extraReducers: {
      [getServices.pending]: (state) => {
        state.isLoading = true;
      },
      [getServices.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
      },
      [getServices.rejected]: (state) => {
        state.isLoading = false;
      },
      [serviceProductList.pending]: (state) => {
        state.isLoading = true;
      },
      [serviceProductList.fulfilled]: (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.serviceDetail = action.payload;
        state.alert = true;
      },
      [serviceProductList.rejected]: (state) => {
        state.isLoading = false;
      },
      [uploadProductServiceCSV.pending]: (state) => {
        state.isLoading = true;
      },
      [uploadProductServiceCSV.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.isLoading = false;
      },
      [uploadProductServiceCSV.rejected]: (state) => {
        state.isLoading = false;
      },
      [updatePriceColumn.pending]: (state) => {
        state.isLoading = true;
        state.alert = false;

      },
      [updatePriceColumn.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.isLoading = false;
      },
      [updatePriceColumn.rejected]: (state) => {
        state.isLoading = false;
      },
    }
  });
  
  
  export const { clearCart, serviceResponseClr } = serviceSlice.actions;
  
  export default serviceSlice.reducer;