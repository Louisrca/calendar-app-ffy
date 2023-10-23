import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";
import s from "./submitButton.module.scss";

type ButtonProps = {
  colorButton: string;
};
export const SubmitButton = ({
  children,
  colorButton,
  kind = "submitButton",
  ...props
}: PropsWithChildren &
  ButtonProps &
  ButtonHTMLAttributes<HTMLElement> & {
    kind?: "submitButton" | "submitButtonRed";
  }) => {
  return (
    <button
      type="submit"
      className={clsx(s.submitButton, {
        [s.submitButtonRed]: kind === "submitButtonRed",
      })}
      style={{ backgroundColor: colorButton }}
      {...props}
    >
      {children}
    </button>
  );
};
