import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  loaded: false,
};

const packagesBySearchCode = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    fetchPokemons: (state) => {
      state.loaded = false;
    },
    fetchPokemonsSuccess: (state, action) => {
      state.items = action.payload.items;
      state.pageable.totalElements = action.payload.total;
      state.loaded = true;
    },
    fetchPokemonsFailure: (state) => {
      state.loaded = true;
    },
    reset: () => initialState,
  },
});

export const { name, actions, reducer } = packagesBySearchCode;
