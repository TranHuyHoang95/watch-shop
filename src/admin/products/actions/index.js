import axios from "axios";
import { useParams } from "react-router";
import { TokenUtils } from "../../../utils/token.utils";


const token = localStorage.getItem("token");
const urlParams = new URLSearchParams(window.location.search);
export const getProduct = (payload) => {
    return async (dispatch) => {
      return axios
        .get("https://shopwatchdut.herokuapp.com/api/product/", payload)
        .then((response) => {
          const data = response.data.data;
          dispatch({
            type: "GET_PRODUCT",
            payload: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  
  export const getOne = (payload) => {
    const urlParams = new URLSearchParams(window.location.search);
    return async (dispatch) => {
      return axios
        .get(`https://shopwatchdut.herokuapp.com/api/product/${urlParams.get('id')}`, payload)
        .then((response) => {
        
          const data = response.data.data;
          console.log("item nef", data);
          dispatch({
            type: "GET_ONE",
            payload: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    };
  }
  export const postProduct = (payload) => {
    return async (dispatch) => {
      return axios
        .post("https://shopwatchdut.herokuapp.com/api/product/", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data.data;
          dispatch({
            type: "POST_PRODUCT",
            payload: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  
  export const updateProduct = (payload) => {
    return async (dispatch) => {
      return axios
        .put(
          `https://shopwatchdut.herokuapp.com/api/product/${payload._id}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          }
        )
        .then((response) => {
          const data = response.data.data;
          dispatch({
            type: "UPDATE_PRODUCT",
            payload: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  