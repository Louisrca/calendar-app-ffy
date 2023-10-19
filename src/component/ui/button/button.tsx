import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./button.module.scss";

export const Button = ({
  children,
  kind = "buttonBlue",
}: PropsWithChildren & {
  kind?: "buttonBlue" | "buttonRed";
}) => {
  return (
    <button
      className={clsx(s.buttonBlue, {
        [s.buttonRed]: kind === "buttonRed",
      })}
    >
      {children}
    </button>
  );
};
