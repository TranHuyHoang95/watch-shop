import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";
    
const token = localStorage.getItem("token");
export const getBranch = () => {
  return async (dispatch) => {
    return axios
      .get("https://shopwatchdut.herokuapp.com/api/brand/", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        dispatch({
          type: "GET_BRANCH",
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
      .get(`https://shopwatchdut.herokuapp.com/api/brand/${urlParams.get('id')}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
      
        const data = response.data.data;
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

export const getClockwork = () => {
  return async (dispatch) => {
    return axios
      .get("https://shopwatchdut.herokuapp.com/api/clockwork/", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        dispatch({
          type: "GET_CLOCKWORK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getColor = () => {
  return async (dispatch) => {
    return axios
      .get("https://shopwatchdut.herokuapp.com/api/color/", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        dispatch({
          type: "GET_COLOR",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};


export const getAlbert = () => {
  return async (dispatch) => {
    return axios
      .get("https://shopwatchdut.herokuapp.com/api/albert/", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        dispatch({
          type: "GET_ALBERT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postCategory = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/category", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_CATEGORY",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateCategory = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://salty-dawn-54578.herokuapp.com/category/${payload._id}`,
        {
          name: payload.name,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "UPDATE_CAT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
