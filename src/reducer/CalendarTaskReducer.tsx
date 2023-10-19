// src/features/calendarSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CalendarTaskState = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  hour: string;
};

const initialState: CalendarTaskState = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  hour: "",
};

const CalendarTaskReducer = createSlice({
  name: "calendarTaskReducer",
  initialState,
  reducers: {
    // Définissez ici les actions et les reducers pour le calendrier
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const {
  /* listez vos actions ici */
  setTitle,
} = CalendarTaskReducer.actions;
export default CalendarTaskReducer.reducer;
