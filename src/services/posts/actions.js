import Types from "./types";

export const getAllPostsSuccess = (payload) => ({
  type: Types.GET_ALL_POSTS_SUCCESS,
  payload,
});

export const postsLoading = (payload) => ({
  type: Types.POSTS_LOADING,
  payload,
});

export const createPostSuccess = (payload) => ({
  type: Types.CREATE_POST_SUCCESS,
  payload,
});

export const getPostDetailsSuccess = (payload) => ({
  type: Types.GET_POST_DETAILS_SUCCESS,
  payload,
});

export const getPostCommentsSuccess = (payload) => ({
  type: Types.GET_POST_COMMENTS_SUCCESS,
  payload,
});
