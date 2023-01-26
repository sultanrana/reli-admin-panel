import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    name: '',
    variables: {},
    isLoading: false,
};
export const getVariables = createAsyncThunk(
  'systemVariable/getVariables',
  async (thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios('http://34.236.149.254/api/admin/system-variables/detail', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
    //   console.log(resp);
      return resp.data;
    } catch (error) {
    //   console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);


export const updateVariable = createAsyncThunk(
  "systemVariable/updateVariable",
  async (values, thunkAPI) => {
    let id = thunkAPI.getState().systemVariable.variables.data._id;
    console.log(values);
    const formData = new FormData();
    
    formData.append("reliPortion", values.reliPortion);
    formData.append("materialSurcharge", values.materialSurcharge);
    formData.append("windowsPermitFee", values.windowsPermitFee);
    formData.append("windowsDeliveryFee", values.windowsDeliveryFee);
    formData.append("slidingGlassDoorPermitFee", values.slidingGlassDoorPermitFee);
    formData.append("slidingGlassDoorDeliveryFee", values.slidingGlassDoorDeliveryFee);
    formData.append("interiorDoorPermitFee", values.interiorDoorPermitFee);
    formData.append("interiorDoorDeliveryFee", '30.00');
    try {
      console.log(values);
      const resp = await axios.post(
        `http://34.236.149.254/api/admin/system-variables/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);



const systemVariableSlice = createSlice({
  name: 'systemVariable',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: {
    [getVariables.pending]: (state) => {
      state.isLoading = true;
    },
    [getVariables.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.variables = action.payload;
      localStorage.setItem('variableDetials', JSON.stringify(state.variables));
    },
    [getVariables.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateVariable.pending]: (state) => {
      state.isLoading = true;
    },
    [updateVariable.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
    [updateVariable.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});


export const { clearCart } = systemVariableSlice.actions;

export default systemVariableSlice.reducer;
