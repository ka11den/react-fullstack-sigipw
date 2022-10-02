import { loginFailure, loginStart, loginSuccess, loginLogout, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));   
    window.location.replace('/profile'); 
  } catch (err) {
    dispatch(loginFailure());
    dispatch(loginLogout());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));    
    window.location.replace('/profile');
  } catch (err) {
    dispatch(registerFailure());
  }
};