import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
const RequireAuth = () => {
  const token = localStorage.getItem('token');
  if(token){
    return <Navigate to={'/services'}/>
  }
  return <Login/>
}

export default RequireAuth