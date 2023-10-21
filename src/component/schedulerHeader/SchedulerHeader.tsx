import { useState } from "react";
import s from "./SchedulerHeader.module.scss";
import { Button } from "../ui/button/button";
import { PlusIcon } from "../../common/svg/plusIcon/plusIcon";
import SchedulerModal from "../schedulerModal/SchedulerModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//...

// Dans un composant React, vous pouvez accéder à la valeur initiale de votre slice à l'aide de useSelector.

export default function SchedulerHeader() {
  const currentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );

  const [isModalActive, setIsModalActive] = useState(false);
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

  return (
    <>
      <section className={s.schedulHeader}>
        <h1 className={s.dateTitle}>
          {currentDate.date() + " " + monthNames[currentDate.month()]}
        </h1>
        <Button
          kind="buttonBlue"
          onClick={() => {
            isModalActive
              ? setIsModalActive(isModalActive)
              : setIsModalActive(!isModalActive);
          }}
        >
          <PlusIcon fill="white" width={"1.375rem"} />
        </Button>
      </section>
      <SchedulerModal kind={isModalActive ? "active" : "inactive"}>
        <div>Hello World</div>
      </SchedulerModal>
    </>
  );
}
