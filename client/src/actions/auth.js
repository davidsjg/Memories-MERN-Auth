import * as api from "../api/index.js";
import { useNavigate } from "react-router-dom";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //desctructer data from request
    const { data } = await api.signIn(formData);

    console.log(data);

    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
