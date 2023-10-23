import { InputHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./input.module.scss";

export const Input = ({
  children,
  kind = "inputDefault",
  ...props
}: PropsWithChildren &
  InputHTMLAttributes<HTMLElement> & {
    kind?: "inputDefault" | "inputred";
  }) => {
  return (
    <input
      className={clsx(s.inputDefault, {
        [s.inputred]: kind === "inputDefault",
      })}
      {...props}
    >
      {children}
    </input>
  );
};
