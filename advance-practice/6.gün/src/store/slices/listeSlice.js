import { createSlice } from "@reduxjs/toolkit";
export const listeSlice = createSlice({
  name: "liste",
  initialState: {
    liste: [
      { id: 1, baslik: "Alışveriş Yap", tamamlandi: false },
      { id: 2, baslik: "Kitap oku", tamamlandi: true },
      { id: 3, baslik: "Code pratiği", tamamlandi: false },
    ],
  },
  reducers: {
    ekle: (state, action) => {
      state.liste = [
        ...state.liste,
        {
          id: state.liste.length + 1,
          baslik: action.payload,
          tamamlandi: false,
        },
      ];
    },
    isaretle: (state, action) => {
      state.liste = state.liste.map((item) =>
        item.id === action.payload
          ? { ...item, tamamlandi: !item.tamamlandi }
          : item
      );
    },
    temizle: (state) => {
      state.liste = state.liste.filter((item) => item.tamamlandi === false);
    },
  },
});

export const { ekle, isaretle, temizle } = listeSlice.actions;
export default listeSlice.reducer;
