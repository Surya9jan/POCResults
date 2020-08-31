import { USER_SUCCESS, USER_FAIL } from "../actions/types";

const initialState = {
  users: [],
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        users: payload,
      };

    case USER_FAIL:
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
