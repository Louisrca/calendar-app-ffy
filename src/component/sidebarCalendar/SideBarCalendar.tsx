import { useState } from "react";
import s from "./SideBarCalendar.module.scss";
import { DateCalendar } from "@mui/x-date-pickers";

import dayjs from "dayjs";
import clsx from "clsx";

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
            "& .css-1tvctpl-MuiDateCalendar-root": {
              minHeight: "800px",
            },
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
