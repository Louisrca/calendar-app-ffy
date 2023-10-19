import s from "./SchedulList.module.scss";

export default function SchedulList() {
  const hoursOfDay = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  return (
    <section className={s.schedulList}>
      {hoursOfDay.map((hour) => (
        <div className={s.schedulTimeLine}>
          <div className={s.schedulHour}>{hour}</div>
          <div className={s.schedulItem}>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
      ))}
    </section>
  );
}
