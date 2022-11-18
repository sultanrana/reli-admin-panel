import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    baseUrl: 'http://34.236.149.254/api/admin/users',
    code: 0,
    errorMessage: '',
    storeUserToken: false,
    loggedInUser: {},
    isDrawerOpen: true,
    isAddCompanyModal: false,
    isEditCompanyModal: false,
    isAddUserModal: false,
    isEditCustomerModal: false,
    isAddAdminPortalUserModal: false,
    isEditAdminPortalUserModal: false,
    isDeleteModal: false,
};
export const login = createAsyncThunk('login/login', () => {

})
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.loggedInUser = action.payload
            state.storeUserToken = true
        },
        logout: (state) => {
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
        handleAddCompanyModal: (state, action) => {
            if(state.isAddCompanyModal){
                state.isAddCompanyModal = false
            }else{
                state.isAddCompanyModal = true
            }
        },
        handleEditCompanyModal: (state, action) => {
            if(state.isEditCompanyModal){
                state.isEditCompanyModal = false
            }else{
                state.isEditCompanyModal = true
            }
        },
        handleAddUserModal: (state, action) => {
            if(state.isAddUserModal){
                state.isAddUserModal = false
            }else{
                state.isAddUserModal = true
            }
        },
        handleEditCustomerModal: (state, action) => {
            if(state.isEditCustomerModal){
                state.isEditCustomerModal = false
            }else{
                state.isEditCustomerModal = true
            }
        },
        handleAddAdminPortalUserModal: (state, action) => {
            if(state.isAddAdminPortalUserModal){
                state.isAddAdminPortalUserModal = false
            }else{
                state.isAddAdminPortalUserModal = true
            }
        },
        handleEditAdminPortalUserModal: (state, action) => {
            if(state.isEditAdminPortalUserModal){
                state.isEditAdminPortalUserModal = false
            }else{
                state.isEditAdminPortalUserModal = true
            }
        },
        handleDeleteModal: (state, action) => {
            if(state.isDeleteModal){
                state.isDeleteModal = false
            }else{
                state.isDeleteModal = true
            }
        },
    },
    extraReducers:{
        
    }
})

// console.log(loginSlice);
export const { loginUser, setError, logout, emptyToken, showError, responseCode, setIsDrawerOpen, handleAddCompanyModal, handleEditCompanyModal, handleAddUserModal, handleEditCustomerModal, handleAddAdminPortalUserModal, handleEditAdminPortalUserModal, handleDeleteModal } = loginSlice.actions;

export default loginSlice.reducer;