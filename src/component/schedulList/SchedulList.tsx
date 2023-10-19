import s from "./SchedulList.module.scss";

export default function SchedulList() {
  const hoursOfDay = ["09:00", "10:00", "11:00"];
  return (
    <section className={s.schedulList}>
      {hoursOfDay.map((hour) => (
        <div className={s.schedulTimeLine}>
          <div className={s.schedulHour}>{hour}</div>
          <div className={s.schedulItem}>salut</div>
        </div>
      ))}
    </section>
  );
}
