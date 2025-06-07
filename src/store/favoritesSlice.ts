import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../entities/Product";

export interface Favorites {
  favorites: Product[];
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] } as Favorites,
  reducers: {
    addToFavorites: (state, action) => {
      const productInFavorites = state.favorites.find(
        (product) => product.id === action.payload.id
      );
      if (!productInFavorites) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
