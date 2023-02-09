import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    list: {},
    companyDetail: {},
    isLoading: false,
    alert: false,
    responseStatus: '',
    responseMsg: '',
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

  export const addCompany = createAsyncThunk(
    "company/addCompany",
    async (values, thunkAPI) => {
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/company/add`,
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
  export const updateCompany = createAsyncThunk(
    "company/updateCompany",
    async (values, thunkAPI) => {
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/company/update/${values.id}`,
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
  export const singleCompanyDetail = createAsyncThunk(
    "company/singleCompanyDetail",
    async (id, thunkAPI) => {
      try {
        const resp = await axios.get(
          `http://34.236.149.254/api/admin/company/detail/${id}`,
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


const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
      companyResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      }
    },
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
        [addCompany.pending]: (state) => {
            state.isLoading = true;
        },
        [addCompany.fulfilled]: (state, action) => {
            if(action.payload.message){
              state.responseStatus = "success";
            }else{
              state.responseStatus = "error";
            }
            state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
            state.alert = true;
            state.isLoading = false;
        },
        [addCompany.rejected]: (state) => {
            state.isLoading = false;
        },
        [singleCompanyDetail.pending]: (state) => {
            state.isLoading = false;
        },
        [singleCompanyDetail.fulfilled]: (state, action) => {
          state.companyDetail = {};
          state.isLoading = false;
          state.companyDetail = action.payload;
        },
        [singleCompanyDetail.rejected]: (state) => {
            state.isLoading = false;
        },
        [updateCompany.pending]: (state) => {
            state.isLoading = false;
        },
        [updateCompany.fulfilled]: (state, action) => {
          if(action.payload.message){
            state.responseStatus = "success";
          }else{
            state.responseStatus = "error";
          }
          state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
          state.alert = true;
          state.isLoading = false;
        },
        [updateCompany.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})



export const { companyResponseClr } = companySlice.actions;
  
export default companySlice.reducer;