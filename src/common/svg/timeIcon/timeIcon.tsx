import { clsx } from "clsx";
import s from "./timeIcon.module.scss";
import { IconProps } from "../svgType";
export const TimeIcon = ({
  kind = "lightIcon",
  fill,
  ...props
}: IconProps & { kind?: "lightIcon" | "darkIcon" }): JSX.Element => {
  return (
    <svg
      viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(s.lightIcon, { [s.darkIcon]: kind === "darkIcon" })}
      {...props}
    >
      <path d="M18.5 0C8.28304 0 0 8.28304 0 18.5C0 28.717 8.28304 37 18.5 37C28.717 37 37 28.717 37 18.5C37 8.28304 28.717 0 18.5 0ZM18.5 35.2485C9.26825 35.2485 1.75148 27.7318 1.75148 18.5C1.75148 9.26825 9.26825 1.75148 18.5 1.75148C27.7318 1.75148 35.2485 9.26825 35.2485 18.5C35.2485 27.7318 27.7318 35.2485 18.5 35.2485Z" />
      <path d="M19.3757 18.1347V7.91773C19.3757 7.44337 18.9744 7.04199 18.5 7.04199C18.0256 7.04199 17.6243 7.44337 17.6243 7.91773V18.4996C17.6243 18.7185 17.7337 18.9739 17.8797 19.1199L24.9221 26.1623C25.1045 26.3448 25.3235 26.4177 25.5424 26.4177C25.7614 26.4177 25.9803 26.3448 26.1627 26.1623C26.4911 25.8339 26.4911 25.2501 26.1627 24.9217L19.3757 18.1347Z" />
    </svg>
  );
};
