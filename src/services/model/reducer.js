import Types from "./types";
const initialState = {
  isOpen: false,
};

export function modelsReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case Types.ADD_POST_FORM_MODEL: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    default: {
      return state;
    }
  }
}
