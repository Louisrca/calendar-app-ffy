import { useState } from "react";
import s from "./SideBarCalendar.module.scss";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function SideBarCalendar() {
  const [date, setDate] = useState(dayjs());
  console.log(date.date() + "/" + (date.month() + 1) + "/" + date.year());

  return (
    <section className={s.sidebarCalendar}>
      <div className={s.calendarContent}>
        <DateCalendar
          views={["day", "month", "year"]}
          onChange={(selectedDate: any) => setDate(selectedDate)}
          sx={{
            color: "white",
            "& .MuiDayCalendar-header span": {
              color: "white",
            },
            "&  .MuiDayCalendar-weekContainer button": {
              color: "white",
            },

            "& .MuiPickersDay-today": {
              border: "2px solid white !important",
            },
          }}
        />
      </div>
    </section>
  );
}
