import { useState } from "react";
import s from "./Calendar.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { setTitle } from "../../reducer/CalendarTaskReducer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SideBarCalendar from "../../component/sidebarCalendar/SideBarCalendar";
import SchedularCalendar from "../../component/schedulerCalendar/SchedulerCalendar";

export default function Calendar() {
  const [calendarTitle] = useState("");
  console.log(calendarTitle);
  // const calendar = useSelector((state: RootState) => state.CalendarTaskReducer);
  // const dispatch = useDispatch();

  // const handleSetTitle = () => {
  //   dispatch(setTitle(calendarTitle));
  // };

  return (
    <section className={s.calendarPage}>
      <div className={s.grid}>
        <SchedularCalendar />
      </div>
      <div className={s.sidebar}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SideBarCalendar />
        </LocalizationProvider>
      </div>
    </section>
  );
}
