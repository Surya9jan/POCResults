import { USER_SUCCESS, USER_FAIL } from "./types";
import axios from "axios";

// Load User
export const getUsers = () => async (dispatch) => {
  try {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log("Surya Data ", persons);
      dispatch({
        type: USER_SUCCESS,
        payload: persons,
      });
    });
  } catch (err) {
    console.log("Surya F ", err);
    dispatch({
      type: USER_FAIL,
    });
  }
};
