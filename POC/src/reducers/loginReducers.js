import { USER_LOADED, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
