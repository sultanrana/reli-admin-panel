import axios from 'axios'
export const userLogin = async (userData) => {
    return await axios
    .post("https://demo.appcrates.net/date_closet_latest/public/api/login", userData)
}
export const userForgot = async (userData) => {
    return await axios
    .post("https://xyz/public/api/login", userData)
}
export const userSetPassword = async (userData) => {
    return await axios
    .post("https://xyz/public/api/login", userData)
}
export const userConfirmation = async (userData) => {
    return await axios
    .post("https://xyz/public/api/login", userData)
}
