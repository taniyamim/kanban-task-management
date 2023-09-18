import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardSlice.js";


const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  }
})

export default store