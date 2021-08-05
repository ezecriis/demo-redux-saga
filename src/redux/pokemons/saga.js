import { all, call, takeLatest, put } from "redux-saga/effects";
import { actions } from "./slice";
import { getData } from "../../defaultValues/rest";

function* fetchPokemon(action) {
  // esto se va a ejecutar en paralelo cuando hagamos un dispatch(actions.fetchPokemons())
  const response = yield call(getData, "https://pokeapi.co/api/v2/pokemon");
  yield put({
    type: actions.fetchPokemonsSuccess.type,
    payload: {
      items: response.results,
      total: response.count,
    },
  });
}

export default function* rootSaga() {
  yield all([takeLatest([actions.fetchPokemons], fetchPokemon)]);
}
