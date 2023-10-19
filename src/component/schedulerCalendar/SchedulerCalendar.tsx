import s from "./SchedulerCalendar.module.scss";
import { Button } from "../ui/button/button";
import { PlusIcon } from "../../common/svg/plusIcon/plusIcon";
import SchedulList from "../schedulList/SchedulList";

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
    <section className={s.schedulCalendar}>
      <div className={s.schedulHeader}>
        <h1 className={s.dateTitle}>
          {date.getDate() + " " + monthNames[date.getMonth()]}
        </h1>
        <Button kind="buttonBlue">
          <PlusIcon fill="white" width={"1.375rem"} />
        </Button>
      </div>
      <div>
        <SchedulList />
      </div>
    </section>
  );
}
