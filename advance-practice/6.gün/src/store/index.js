import { configureStore } from "@reduxjs/toolkit";
import listeSlice from "./slices/listeSlice";

export default configureStore({
  reducer: {
    liste: listeSlice,
  },
});
