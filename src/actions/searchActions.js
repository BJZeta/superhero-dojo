import axios from "axios";
import {
  CHARACTER_SEARCH_REQUEST,
  CHARACTER_SEARCH_SUCCESS,
  CHARACTER_SEARCH_FAIL,
} from "../constants/index";

export const listCharacters = (name) => async (dispatch) => {
  try {
    dispatch({ type: CHARACTER_SEARCH_REQUEST });

    const { data } = await axios.get(
      `https://www.superheroapi.com/api.php/3619192178108339/search/${name}`
    );

    dispatch({
      type: CHARACTER_SEARCH_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: CHARACTER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
