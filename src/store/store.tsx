// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import CalendarTaskReducer from "../reducer/CalendarTaskReducer";

const store = configureStore({
  reducer: {
    // Vous pouvez ajouter vos reducers ici
    CalendarTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
