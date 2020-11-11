import { useReducer, useEffect } from "react";
import reducer from "../reducers";
import axios from "axios";
import ACTIONS from "../actions";

const request = axios.create({
  baseURL: "https://www.superheroapi.com/api.php/3619192178108339/",
});

export default function useFetchCharacters(params) {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    loading: true,
  });

  useEffect(() => {
    // const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    request
      .get(`/search/${params}`)
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { characters: res.data } });
      })
      .catch((err) => {
        dispatch({
          type: ACTIONS.ERROR,
          payload: { error: err },
        });
      });
  }, [params]);

  return state;
}
