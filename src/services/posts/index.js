import axios from "axios";
import {
  createPostSuccess,
  getAllPostsSuccess,
  getPostCommentsSuccess,
  getPostDetailsSuccess,
  postsLoading,
} from "./actions";
const baseURL = "http://localhost:8000";

export const getAllPostsRequest = () => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "list", loading: true }));
    try {
      const { data } = await axios.get(`${baseURL}/posts`);
      dispatch(getAllPostsSuccess(data));
    } catch (error) {
      throw Error(error);
    } finally {
      dispatch(postsLoading({ type: "", loading: false }));
    }
  };
};

export const getPostDetailsRequest = ({ postId }) => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "details", loading: true }));
    try {
      const { data } = await axios.get(`${baseURL}/posts/${postId}`);
      dispatch(getPostDetailsSuccess(data));
    } catch (error) {
    } finally {
      dispatch(postsLoading({ type: "", loading: false }));
    }
  };
};

export const getPostCommentsRequest = ({ postId }) => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "details", loading: true }));
    try {
      const { data } = await axios.get(`${baseURL}/posts/${postId}/comments`);
      dispatch(getPostCommentsSuccess(data));
    } catch (error) {
    } finally {
      dispatch(postsLoading({ type: "", loading: false }));
    }
  };
};

export const createPostRequest = (body, action) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${baseURL}/posts`, body);
      action && action();
      dispatch(createPostSuccess(data));
    } catch (error) {}
  };
};
