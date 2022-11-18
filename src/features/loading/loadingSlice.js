import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            console.log(action.payload);
            state.isLoading = action.payload
        }
    }
})

// console.log(loginSlice);
export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;