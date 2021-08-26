import axios from 'axios';
import { toast } from "react-toastify";
// import { getInforByToken } from '../../../redux/action/inforStaff';

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://shopwatchdut.herokuapp.com/api/user/login', payload)
      .then(response => {
        console.log("data", response.data);
        console.log("token",response.data.token)
        const data = response.data;
        const isRoot = payload.username === "admin" ? true : false;

        dispatch({
          type: "SET_ADMIN_LOGIN",
          payload: {
            ...data,
            isRoot: isRoot
          }
        });
        // dispatch(getInforByToken(data.token))
        toast.success("Đăng nhập thành công! Chào mừng bạn đã trở lại.")
      })
      .catch(error => {
        toast.error("Username or password is not correct.")
      });
  };
};


export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_ADMIN_AUTH",
    })
  }
};