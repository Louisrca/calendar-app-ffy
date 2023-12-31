import s from "./Calendar.module.scss";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SideBarCalendar from "../../component/sidebarCalendar/SideBarCalendar";
import SchedulerCalendar from "../../component/schedulerCalendar/SchedulerCalendar";

export default function Calendar() {
  return (
    <main className={s.calendarPage}>
      <section className={s.schedulerCalendar}>
        <SchedulerCalendar />
      </section>

      <section className={s.sidebar}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SideBarCalendar />
        </LocalizationProvider>
      </section>
    </main>
  );
}
