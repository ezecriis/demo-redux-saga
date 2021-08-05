import { all, call, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import { getData } from "../../defaultValues/rest";

function* fetchPokemon(action) {
  const response = yield call(getData, "https://pokeapi.co/api/v2/pokemon");
  console.log({ response });
}

export default function* rootSaga() {
  yield all([takeLatest([actions.fetchPokemons], fetchPokemon)]);
}
