import s from "./CardWrapper.module.scss";
import { HTMLAttributes, PropsWithChildren } from "react";

export default function CardWrapper({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={s.cardWrapper} {...props}>
      {children}
    </div>
  );
}
