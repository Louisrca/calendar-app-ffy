import s from "./SchedulerHeader.module.scss";
import { Button } from "../ui/button/button";
import { PlusIcon } from "../../common/svg/plusIcon/plusIcon";

export default function SchedulerHeader() {
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
    <section className={s.schedulHeader}>
      <h1 className={s.dateTitle}>
        {date.getDate() + " " + monthNames[date.getMonth()]}
      </h1>
      <Button
        kind="buttonBlue"
        onClick={() => {
          alert("hello");
        }}
      >
        <PlusIcon fill="white" width={"1.375rem"} />
      </Button>
    </section>
  );
}
