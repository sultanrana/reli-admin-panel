import axios from 'axios'
export const userLogin = async (userData) => {
    return await axios
    .post("https://demo.appcrates.net/date_closet_latest/public/api/login", userData)
}
