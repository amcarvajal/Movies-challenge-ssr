import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film, FilmsState } from "../../interfaces/Film";

const initialState: FilmsState = {
  items: [],
  wishlist: [],
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<Film[]>) => {
      state.items = action.payload;
    },

    addToWishlist: (state, action: PayloadAction<Film>) => {
      const exists = state.wishlist.find((f) => f.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((f) => f.id !== action.payload);
    },
  },
});

export const { setFilms, addToWishlist, removeFromWishlist } =
  filmsSlice.actions;
export default filmsSlice.reducer;
