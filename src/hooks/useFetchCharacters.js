import { useReducer, useEffect } from "react";
import reducer from "../reducers";
import axios from "axios";
import ACTIONS from "../actions";

// https://www.superheroapi.com/api.php/3619192178108339/

export default function useFetchCharacters(name) {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    loading: true,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(
        `https://www.superheroapi.com/api.php/3619192178108339/search/${name}`,
        {
          cancelToken: cancelToken.token,
        }
      )
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { characters: res.data.results },
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTIONS.ERROR,
          payload: { error: err },
        });
      });

    return () => {
      cancelToken.cancel();
    };
  }, [name]);

  return state;
}
