import { name, initialState } from "./slice";

export const pokemonsItemsSelector = (state) => state[name].items;

export const pokemonsSelector = (state) => state[name] || initialState;

export const pokemonsLoadedSelector = (state) => state[name].loaded;
