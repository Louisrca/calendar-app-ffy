import { clsx } from "clsx";
import s from "./plusIcon.module.scss";
import { IconProps } from "../svgType";

export const PlusIcon = ({
  kind = "lightIcon",
  fill,
  ...props
}: IconProps & { kind?: "lightIcon" | "darkIcon" }): JSX.Element => {
  return (
    <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={clsx(s.lightIcon, { [s.darkIcon]: kind === "darkIcon" })}
      {...props}
    >
      <style type="text/css">
        {`
          .st0{fill:${fill || "#222A30"};}
          .st1{fill:none;stroke:#222A30;stroke-width:2.0101;stroke-linejoin:round;stroke-miterlimit:10;}
          .st2{fill: ${fill || "#171715"} ;}
          .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#222A30;}
        `}
      </style>
      <path
        className="st0"
        d="M19.6,2h-3.2c-0.9,0-1.6,0.7-1.6,1.6v11.2H3.6c-0.9,0-1.6,0.7-1.6,1.6v3.2c0,0.9,0.7,1.6,1.6,1.6   h11.2v11.2c0,0.9,0.7,1.6,1.6,1.6h3.2c0.9,0,1.6-0.7,1.6-1.6V21.2h11.2c0.9,0,1.6-0.7,1.6-1.6v-3.2c0-0.9-0.7-1.6-1.6-1.6H21.2V3.6   C21.2,2.7,20.5,2,19.6,2z"
        id="add_1_"
      />
    </svg>
  );
};
