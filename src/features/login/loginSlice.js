import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseUrl: 'http://54.85.165.176:3000/admin/users',
    code: 0,
    errorMessage: '',
    storeUserToken: false,
    loggedInUser: {},
    isDrawerOpen: true
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.loggedInUser = action.payload
            state.storeUserToken = true
        },
        logout: (state) => {
            state.loggedInUser = {}
            state.storeUserToken = false
        },
        emptyToken: (state, action) => {
            state.storeUserToken = false
        },
        showError: (state, action) => {
            state.errorMessage = action.payload
        },
        responseCode: (state, action) => {
            state.code = action.payload
        },
        setIsDrawerOpen: (state, action) => {
            state.isDrawerOpen = action.payload
        },
        
    }
})

// console.log(loginSlice);
export const { loginUser, setError, logout, emptyToken, showError, responseCode, setIsDrawerOpen } = loginSlice.actions;

export default loginSlice.reducer;