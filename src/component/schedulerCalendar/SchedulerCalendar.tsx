import s from "./SchedulerCalendar.module.scss";
import SchedulerHeader from "../schedulerHeader/SchedulerHeader";
import SchedulList from "../schedulList/SchedulList";

export default function SchedulerCalendar() {
  return (
    <section className={s.schedulCalendar}>
      <SchedulerHeader />
      <SchedulList />
    </section>
  );
}
