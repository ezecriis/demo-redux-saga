import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import usePokemons from "../../../redux/pokemons";
import {
  pokemonsItemsSelector,
  pokemonsLoadedSelector,
} from "../../../redux/pokemons/selectors";
import { actions } from "../../../redux/pokemons/slice";

function Home() {
  usePokemons();
  const dispatch = useDispatch();
  const loaded = useSelector(pokemonsLoadedSelector);
  const pokemons = useSelector(pokemonsItemsSelector);

  console.log({ loaded, pokemons });

  const handleFetchPokemons = () => {
    // disparar un action que llene el store de pokemons pidiendo los pokemons desde la api
    console.log("Fetching pokemons...");
    dispatch(actions.fetchPokemons());
  };

  const handleResetPokemons = () => {
    dispatch(actions.reset());
  };

  return (
    <div>
      <h1>Home de pokemons :)</h1>
      <Button onClick={handleFetchPokemons}>Fetchear pokemons :)</Button>
      <Button onClick={handleResetPokemons}>Reiniciar pokemons :(</Button>
      {loaded && <h2>Pokemons cargados :)</h2>}
    </div>
  );
}

export default Home;
