import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    //const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: "Surya",
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login = (username, password, history) => async (dispatch) => {
  console.log("Surya " + username + password + history);
  if (password === "surya" && username === "surya") {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: "Surya",
    });

    dispatch(loadUser());
    history.push("/Welcome#/dashboard");
  } else {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
