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
            "MuiDateCalendar-root": {
              height: "auto",
            },
            "& .MuiDayCalendar-header span": {
              color: "rgba(255, 255, 255, 1)",
              fontSize: "1rem",
              fontWeight: "500",
            },
            "&  .MuiDayCalendar-weekContainer button": {
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              marginTop: "2rem",
            },

            "& .MuiPickersDay-today": {
              border: "2px solid white !important",
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
