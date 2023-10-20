import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./button.module.scss";

export const Button = ({
  children,
  kind = "buttonBlue",
  ...props
}: PropsWithChildren &
  ButtonHTMLAttributes<HTMLElement> & {
    kind?: "buttonBlue" | "buttonRed";
  }) => {
  return (
    <button
      className={clsx(s.buttonBlue, {
        [s.buttonRed]: kind === "buttonRed",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
