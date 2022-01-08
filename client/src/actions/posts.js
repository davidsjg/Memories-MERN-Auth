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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);

    console.log(response);

    dispatch({ type: "UPDATE", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};
