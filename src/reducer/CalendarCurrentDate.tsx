// src/features/calendarSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

type CalendarCurrentDate = {
  currentDate: dayjs.Dayjs;
};

// const date = new Date();

const initialState: CalendarCurrentDate = {
  currentDate: dayjs(),
};

const CalendarCurrentDateReducer = createSlice({
  name: "calendarCurrentDateReducer",
  initialState,
  reducers: {
    // Définissez ici les actions et les reducers pour le calendrier
    setDate: (state, action: PayloadAction<dayjs.Dayjs>) => {
      state.currentDate = action.payload;
    },
  },
});

export const {
  /* listez vos actions ici */
  setDate,
} = CalendarCurrentDateReducer.actions;
export default CalendarCurrentDateReducer.reducer;
