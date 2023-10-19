import s from "./SchedulerCalendar.module.scss";

export default function SchedularCalendar() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  return (
    <section>
      <h1 className={s.dateTitle}>
        {date.getDate() + " " + monthNames[date.getMonth()]}
      </h1>
    </section>
  );
}
