import axios from "axios";
import {
  createPostSuccess,
  getAllPostsSuccess,
  getPostCommentsSuccess,
  getPostDetailsSuccess,
  postsLoading,
} from "./actions";
const base_url = "http://localhost:8000";

export const getAllPostsRequest = () => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "list", loading: true }));
    try {
      const { data } = await axios.get(`${base_url}/posts`);
      dispatch(getAllPostsSuccess(data));
    } catch (error) {
      throw Error(error);
    } finally {
      dispatch(postsLoading({ type: "", loading: false }));
    }
  };
};

export const getPostDetailsRequest = ({ post_id }) => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "details", loading: true }));
    try {
      const { data } = await axios.get(`${base_url}/posts/${post_id}`);
      dispatch(getPostDetailsSuccess(data));
    } catch (error) {
    } finally {
      dispatch(postsLoading({ type: "", loading: false }));
    }
  };
};

export const getPostCommentsRequest = ({ post_id }) => {
  return async (dispatch) => {
    dispatch(postsLoading({ type: "details", loading: true }));
    try {
      const { data } = await axios.get(`${base_url}/posts/${post_id}/comments`);
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
      const { data } = await axios.post(`${base_url}/posts`, body);
      action && action();
      dispatch(createPostSuccess(data));
    } catch (error) {}
  };
};
