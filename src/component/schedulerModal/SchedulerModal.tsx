import { useState, PropsWithChildren } from "react";
import s from "./SchedulerModal.module.scss";
import CardWrapper from "../cardWrapper/CardWrapper";
import clsx from "clsx";

export default function SchedulerModal({
  children,
  kind = "active",
  ...props
}: PropsWithChildren & {
  kind?: "active" | "inactive";
}): JSX.Element {
  const [isClose, setIsClose] = useState(false);
  return (
    <section
      className={clsx(s.schedulerModal, { [s.inactive]: kind === "inactive" })}
      {...props}
      // style={isClose ? { display: "none" } : { display: "block" }}
    >
      <div
        className={s.closeModal}
        onClick={() => {
          isClose ? setIsClose(isClose) : setIsClose(!isClose);
        }}
      ></div>
      <CardWrapper>{children}</CardWrapper>
    </section>
  );
}
