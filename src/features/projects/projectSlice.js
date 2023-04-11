import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    projects: {},
    projectDetail: {},
    staffReassignList: {},
    isLoading: false,
    alert: false,
    responseStatus: '',
    responseMsg: '',
};

export const getProjects = createAsyncThunk(
    "project/getProjects",
    async (thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios(
          "http://34.236.149.254/api/admin/projects/listing",
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

  export const singleProjectDetail = createAsyncThunk(
    "project/singleProjectDetail",
    async (id, thunkAPI) => {
      try {
        const resp = await axios.get(
          `http://34.236.149.254/api/admin/projects/projectDetail/${id}`,
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
        // console.log(error.response);
        // return "something went wrong";
        return error.response;
      }
    }
  );

  export const rescheduleProject = createAsyncThunk(
    "project/rescheduleProject",
    async (values, thunkAPI) => {
      let id = thunkAPI.getState().project.projectDetail.data.order_info._id;
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/projects/changeProjectStatus/${id}`,
          values,
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
        // console.log(error.response);
        // return "something went wrong";
        return error.response;
      }
    }
  );

  export const cancelProject = createAsyncThunk(
    "project/cancelProject",
    async (values, thunkAPI) => {
      let id = thunkAPI.getState().project.projectDetail.data.order_info._id;
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/projects/changeProjectStatus/${id}`,
          values,
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
        // console.log(error.response);
        // return "something went wrong";
        return error.response;
      }
    }
  );

  export const reassignProjectStaff = createAsyncThunk(
    "project/reassignProjectStaff",
    async (thunkAPI) => {
      let id = thunkAPI.getState().project.projectDetail.data.order_info._id;
      try {
        const resp = await axios.get(
          `http://34.236.149.254/api/admin/staff/assignStaff/${id}`,
          {
            headers: {
              // "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(resp);
        // return resp.data;
      } catch (error) {
        console.log(error.response);
        // return "something went wrong";
        // return error.response;
      }
    }
  );

  export const refundTransaction = createAsyncThunk(
    "project/refundTransaction",
    async (values, thunkAPI) => {
      try {
        const resp = await axios.post(
          `http://34.236.149.254/api/admin/transactions/refund-transaction`,
          values,
          {
            headers: {
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

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
      projectResponseClr: (state, action) => {
        state.responseMsg = "";
        state.responseStatus = "";
        state.alert = false;
      }
    },
    extraReducers: {
      [getProjects.pending]: (state) => {
        state.isLoading = true;
      },
      [getProjects.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.projects = action.payload;
      },
      [getProjects.rejected]: (state) => {
        state.isLoading = false;
      },
      [singleProjectDetail.pending]: (state) => {
        state.isLoading = true;
      },
      [singleProjectDetail.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.projectDetail = action.payload;
      },
      [singleProjectDetail.rejected]: (state) => {
        state.isLoading = false;
      },
      [refundTransaction.pending]: (state) => {
        state.isLoading = true;
      },
      [refundTransaction.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.isLoading = false;
      },
      [refundTransaction.rejected]: (state) => {
        state.isLoading = false;
      },
      [rescheduleProject.pending]: (state) => {
        state.isLoading = true;
      },
      [rescheduleProject.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.isLoading = false;
      },
      [rescheduleProject.rejected]: (state) => {
        state.isLoading = false;
      },
      [cancelProject.pending]: (state) => {
        state.isLoading = true;
      },
      [cancelProject.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.isLoading = false;
      },
      [cancelProject.rejected]: (state) => {
        state.isLoading = false;
      },
      [reassignProjectStaff.pending]: (state) => {
        state.isLoading = true;
      },
      [reassignProjectStaff.fulfilled]: (state, action) => {
        if(action.payload.message){
          state.responseStatus = "success";
        }else{
          state.responseStatus = "error";
        }
        state.responseMsg = action.payload.message ? action.payload.message : action.payload.data.message;
        state.alert = true;
        state.staffReassignList = action.payload;
        state.isLoading = false;
      },
      [reassignProjectStaff.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  });
  
  export const { projectResponseClr } = projectSlice.actions;
  
  export default projectSlice.reducer;
  