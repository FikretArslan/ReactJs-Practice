import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookList: data,
    cart: [],
  },
  reducers: {
    ekle: (state, action) => {
      state.cart = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      )
        ? state.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...action.payload, count: 1 }];
    },

    arttir: (state, action) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );
    },

    azalt: (state, action) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      );
    },

    cikart: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

// reducer isimleri ile aynı olacak şekilde action lar otomatik oluşturulur
// ve export edilir
export const { ekle, arttir, azalt, cikart } = bookSlice.actions;

// reducer export edilir.
export default bookSlice.reducer;
