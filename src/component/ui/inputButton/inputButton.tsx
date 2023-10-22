import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./inputButton.module.scss";

type ButtonProps = {
  colorButton: string;
};
export const InputButton = ({
  children,
  colorButton,
  kind = "inputButton",
  ...props
}: PropsWithChildren &
  ButtonProps &
  ButtonHTMLAttributes<HTMLElement> & {
    kind?: "inputButton" | "buttonRed";
  }) => {
  return (
    <button
      className={clsx(s.buttonBlue, {
        [s.buttonRed]: kind === "buttonRed",
      })}
      style={{ color: colorButton }}
      {...props}
    >
      {children}
    </button>
  );
};
