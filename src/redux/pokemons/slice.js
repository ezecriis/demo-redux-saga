import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  loaded: true,
};

const packagesBySearchCode = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    fetchPokemons: (state) => {
      state.loaded = false;
    },
    fetchPokemonsSuccess: (state, action) => {
      const { items, total } = action.payload;
      state.loaded = true;
      state.items = items;
      state.total = total;
    },
    fetchPokemonsFailure: (state) => {
      state.loaded = true;
    },
    reset: () => initialState,
  },
});

export const { name, actions, reducer } = packagesBySearchCode;
