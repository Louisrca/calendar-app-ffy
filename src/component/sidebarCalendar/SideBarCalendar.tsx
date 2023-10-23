import { useState } from "react";
import s from "./SideBarCalendar.module.scss";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setDate } from "../../reducer/CalendarCurrentDate";

export default function SideBarCalendar() {
  const currentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );
  const dispatch = useDispatch();

  const [, setDateSelected] = useState(currentDate);

  return (
    <section className={s.sidebarCalendar}>
      <div className={s.calendarContent}>
        <DateCalendar
          views={["day", "month", "year"]}
          onChange={(selectedDate: Date | null) => {
            if (selectedDate) {
              const newDate = dayjs(selectedDate);
              setDateSelected(newDate);
              dispatch(setDate(newDate));
            }
          }}
          sx={{
            "& .MuiDayCalendar-header span": {
              color: "rgba(255, 255, 255, 1)",
              fontSize: "1rem",
              fontWeight: "500",
            },

            "& .MuiDayCalendar-weekContainer button": {
              color: "white",
              fontSize: "0.75rem",
              fontWeight: "500",
              marginTop: "1.5rem",
            },

            "& .MuiPickersDay-today": {
              border: "1px solid white !important",
            },
            "& .MuiSvgIcon-root": {
              fill: "white",
            },
          }}
        />
      </div>
    </section>
  );
}
