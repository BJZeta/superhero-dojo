import ACTIONS from "../actions/index";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, characters: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        characters: action.payload.characters,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        characters: [],
      };
    default:
      return state;
  }
}
