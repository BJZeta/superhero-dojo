import {
  CHARACTER_SEARCH_REQUEST,
  CHARACTER_SEARCH_SUCCESS,
  CHARACTER_SEARCH_FAIL,
  CHARACTER_INFO_REQUEST,
  CHARACTER_INFO_SUCCESS,
  CHARACTER_INFO_FAIL,
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

export const characterInfoReducer = (state = { character: {} }, action) => {
  switch (action.type) {
    case CHARACTER_INFO_REQUEST:
      return { loading: true, character: {} };
    case CHARACTER_INFO_SUCCESS:
      return { loading: false, character: action.payload };
    case CHARACTER_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
