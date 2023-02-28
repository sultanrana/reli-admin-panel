import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    transactions: {},
    isLoading: false,
};

export const getTransactions = createAsyncThunk(
    "transaction/getTransactions",
    async (thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios(
          "http://34.236.149.254/api/admin/transactions/listing",
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

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
    extraReducers: {
      [getTransactions.pending]: (state) => {
        state.isLoading = true;
      },
      [getTransactions.fulfilled]: (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.transactions = action.payload;
      },
      [getTransactions.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  });
  
  export const {  } = transactionSlice.actions;
  
  export default transactionSlice.reducer;
  