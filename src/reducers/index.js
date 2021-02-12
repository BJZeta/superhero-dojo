import {
  CHARACTER_SEARCH_REQUEST,
  CHARACTER_SEARCH_SUCCESS,
  CHARACTER_SEARCH_FAIL,
} from "../constants/index";

export const searchListReducer = (state = { characters: [] }, action) => {
  switch (action.type) {
    case CHARACTER_SEARCH_REQUEST:
      return { loading: true, characters: [] };
    case CHARACTER_SEARCH_SUCCESS:
      return { loading: false, characters: action.payload };
    case CHARACTER_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
