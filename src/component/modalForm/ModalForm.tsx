import s from "./ModalForm.module.scss";
import { useHandleColorChange } from "../../utils/useHandleColorChange";
import { DateIcon } from "../../common/svg/dateIcon/dateIcon";
import { TimeIcon } from "../../common/svg/timeIcon/timeIcon";
export default function ModalForm() {
  const { color, backgroundColor, handleColorChange } = useHandleColorChange();
  return (
    <form onSubmit={() => {}} className={s.schedulerForm}>
      <div className={s.title}>
        <input type="text" placeholder="Add Title" className={s.titleInput} />
      </div>
      <div className={s.colorPircker}>
        <div
          className={s.separator}
          style={{
            width: "100%",
            height: "0.188rem",
            backgroundColor: backgroundColor,
            color: color,
            borderLeft: `solid 0.375rem ${color}`,
          }}
        ></div>
        <input
          type="color"
          className={s.inputColor}
          onChange={handleColorChange}
        />
      </div>

      <div className={s.schedulerData}>
        <div className={s.schedulerDate}>
          <DateIcon kind="darkIcon" />
          <div className={s.inputDate}>
            {" "}
            <input
              type="date"
              datatype=""
              className={s.startDate}
              style={{ backgroundColor: backgroundColor }}
            />
            <input
              type="date"
              className={s.endDate}
              style={{ backgroundColor: backgroundColor }}
            />
          </div>
        </div>
        <div className={s.schedulerTime}>
          <TimeIcon kind="darkIcon" width={"34"} />
          <div className={s.inputTime}>
            <input
              type="time"
              datatype=""
              className={s.startHour}
              style={{ backgroundColor: backgroundColor }}
            />
            <input
              type="time"
              className={s.endHour}
              style={{ backgroundColor: backgroundColor }}
            />
          </div>
        </div>
        <div className={s.schedulerCommment}>
          <input type="text" className={s.commentInput} placeholder="Comment" />
          <div
            className={s.separator}
            style={{
              width: "100%",
              height: "0.188rem",
              backgroundColor: backgroundColor,
              color: color,
              borderLeft: `solid 0.375rem ${color}`,
            }}
          ></div>
        </div>
        <div></div>
      </div>
    </form>
  );
}
