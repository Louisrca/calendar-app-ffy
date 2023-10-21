// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import CalendarTaskReducer from "../reducer/CalendarTaskReducer";
import CalendarCurrentDate from "../reducer/CalendarCurrentDate";

const store = configureStore({
  reducer: {
    // Vous pouvez ajouter vos reducers ici
    CalendarTaskReducer,
    CalendarCurrentDate,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
