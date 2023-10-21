import { PropsWithChildren } from "react";
import s from "./SchedulerModal.module.scss";
import CardWrapper from "../cardWrapper/CardWrapper";

type ModalProps = {
  isClose: boolean;
  handleClose: () => void;
};

export default function SchedulerModal({
  children,
  handleClose,
  isClose,
  kind = "default",
  ...props
}: PropsWithChildren & {
  kind?: "default" | "active" | "inactive";
} & ModalProps): JSX.Element {
  return (
    <section
      className={s.schedulerModal}
      {...props}
      style={isClose ? { display: "block" } : { display: "none" }}
    >
      <div className={s.wrapper}>
        <CardWrapper>{children}</CardWrapper>{" "}
      </div>

      <div className={s.closeModal} onClick={handleClose}></div>
    </section>
  );
}
