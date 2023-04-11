import Types from "./types";

const COURSES_INIT_STATE = {
  posts: [],
  post: {},
  comments: [],
  isLoading: {
    type: "",
    loading: false,
  },
};

export function postsReducer(state = COURSES_INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        posts: payload,
      };
    }
    case Types.CREATE_POST_SUCCESS: {
      return {
        ...state,
        posts: state.posts.concat(payload),
      };
    }
    case Types.GET_POST_DETAILS_SUCCESS: {
      return {
        ...state,
        post: payload,
      };
    }

    case Types.GET_POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: payload,
      };
    }

    case Types.POSTS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default: {
      return state;
    }
  }
}
