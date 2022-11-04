import { LOGIN_USER } from "../actions/Actions"

// initial state
const initialState = {
    user: {}
}

const authUserReducer = (state = initialState, action) =>{
    if(action.type === "LOGIN_USER"){
        console.log(action.payload);
        return {...state, user: action.payload}
    }
    return {...state}
}


export default authUserReducer