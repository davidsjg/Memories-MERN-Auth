//Action creators = functions that return an action(an objet with an action and a payload)
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    //destructuring data off of response
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
