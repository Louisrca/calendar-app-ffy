import { clsx } from "clsx";
import s from "./dateIcon.module.scss";
import { IconProps } from "../svgType";

export const DateIcon = ({
  kind = "lightIcon",
  fill,
  ...props
}: IconProps & { kind?: "lightIcon" | "darkIcon" }): JSX.Element => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(s.lightIcon, { [s.darkIcon]: kind === "darkIcon" })}
      {...props}
    >
      <path
        d="M29.7501 3.4H24.6502V0.85C24.6502 0.380591 24.2696 0 23.8002 0C23.3309 0 22.9503 0.380591 22.9503 0.85V3.4H11.0506V0.85C11.0506 0.380591 10.67 0 10.2006 0C9.73118 0 9.3506 0.380591 9.3506 0.85V3.4H4.2499C1.90374 3.40249 0.0024901 5.30378 0 7.65V29.75C0.0024901 32.0962 1.90374 33.9975 4.2499 34H29.7501C32.0964 33.9978 33.9978 32.0963 34 29.75V7.65C33.9978 5.30368 32.0964 3.40218 29.7501 3.4ZM32.3 29.75C32.2985 31.1577 31.1578 32.2984 29.7501 32.3H4.2499C2.84222 32.2984 1.70151 31.1577 1.69996 29.75V15.3H32.3V29.75ZM32.3 13.6H1.69996V7.65C1.70151 6.24229 2.84222 5.10156 4.2499 5.1H9.3506V7.65C9.3506 7.65031 9.3506 7.65062 9.3506 7.65104C9.35091 8.12014 9.73139 8.50031 10.2006 8.5C10.2009 8.5 10.2012 8.5 10.2016 8.5C10.6707 8.49969 11.0509 8.1192 11.0506 7.65V5.1H22.9503V7.65C22.9503 7.65031 22.9503 7.65062 22.9503 7.65104C22.9506 8.12014 23.3311 8.50031 23.8002 8.5C23.8006 8.5 23.8009 8.5 23.8013 8.5C24.2704 8.49969 24.6505 8.1192 24.6502 7.65V5.1H29.7501C31.1578 5.10156 32.2985 6.24229 32.3 7.65V13.6Z"
        // fill="black"
      />
    </svg>
  );
};
