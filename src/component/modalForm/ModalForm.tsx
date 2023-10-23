import s from "./ModalForm.module.scss";
import { useEffect, useState } from "react";
import { useHandleColorChange } from "../../utils/useHandleColorChange";
import { DateIcon } from "../../common/svg/dateIcon/dateIcon";
import { TimeIcon } from "../../common/svg/timeIcon/timeIcon";
import { SubmitButton } from "../ui/submitButton/submitButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useSavedScheduler } from "../../utils/useSavedScheduler";
import uuid from "react-uuid";
import { useRecurringAppointment } from "../../utils/useRecurringAppointment";
type FormInputValue = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  commentInput: string;
  color: string;
  backgroundColor: string;
  borderLeft: string;
  rRule: string;
};
export default function ModalForm() {
  const { parseDate, datediff } = useRecurringAppointment();
  const { color, backgroundColor, handleColorChange } = useHandleColorChange();
  const [endHour, setEndHour] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const currentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );

  const initialFormInputValue: FormInputValue = {
    id: "",
    title: "",
    startDate: "",
    endDate: "",
    startHour: "",
    endHour: "",
    commentInput: "",
    color: "",
    backgroundColor: "",
    borderLeft: "",
    rRule: "",
  };
  const [schedulers, setSchedulers] = useState<FormInputValue[]>(() => {
    const savedScheduler = localStorage.getItem("scheduler");

    if (savedScheduler) {
      return JSON.parse(savedScheduler);
    } else {
      return [];
    }
  });
  const [formInputValue, setFormInputValue] = useState<FormInputValue>(
    initialFormInputValue
  );

  useEffect(() => {
    const newCurrentDate =
      currentDate.year() +
      "-" +
      (currentDate.month() + 1) +
      "-" +
      currentDate.date();
    const newCurrentColor = color;
    const newCurrentBackgroundColor = backgroundColor;
    const newStartDate = startDate;
    const newStartHour = startHour;
    const newEndDate = endDate;
    const newEndHour = endHour;

    setFormInputValue((prevFormInputValue) => ({
      ...prevFormInputValue,
      id: uuid(),
      currentDate: newCurrentDate,
      startDate: newStartDate + "T" + newStartHour,
      endDate: newStartDate + "T" + newEndHour,
      color: newCurrentColor,
      backgroundColor: newCurrentBackgroundColor,
      borderLeft: newCurrentColor + "solid 4px",
      rRule: `FREQ=DAILY;COUNT=${
        datediff(parseDate(newStartDate), parseDate(newEndDate)) + 1
      }`,
    }));
    localStorage.setItem("scheduler", JSON.stringify(schedulers));
  }, [
    currentDate,
    color,
    backgroundColor,
    schedulers,
    startDate,
    startHour,
    endDate,
    endHour,
  ]);

  const handleSubmit = () => {
    setSchedulers([...schedulers, formInputValue]);
    localStorage.setItem("scheduler", JSON.stringify(schedulers));
  };

  return (
    <form onSubmit={handleSubmit} className={s.schedulerForm}>
      <div className={s.title}>
        <input
          type="text"
          name="title"
          required
          placeholder="Add Title"
          className={s.titleInput}
          onChange={(e) => {
            setFormInputValue({
              ...formInputValue,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
      <div className={s.colorPircker}>
        <div
          className={s.separator}
          style={{
            width: "100%",
            height: "0.188rem",
            backgroundColor: backgroundColor,
            color: color,
            boxSizing: "border-box",
            borderLeft: `solid 0.375rem ${color}`,
          }}
        ></div>
        <input
          type="color"
          required
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
              name="startDate"
              required
              className={s.startDate}
              style={{ backgroundColor: backgroundColor }}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <input
              type="date"
              name="endDate"
              required
              className={s.endDate}
              style={{ backgroundColor: backgroundColor }}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={s.schedulerTime}>
          <TimeIcon kind="darkIcon" width={"34"} />
          <div className={s.inputTime}>
            <input
              type="time"
              name="startHour"
              required
              className={s.startHour}
              style={{ backgroundColor: backgroundColor }}
              onChange={(e) => {
                setStartHour(e.target.value);
              }}
            />
            <input
              type="time"
              name="endHour"
              required
              className={s.endHour}
              style={{ backgroundColor: backgroundColor }}
              onChange={(e) => {
                setEndHour(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={s.schedulerCommment}>
          <input
            type="text"
            name="commentInput"
            required
            className={s.commentInput}
            placeholder="Comment"
            onChange={(e) => {
              setFormInputValue({
                ...formInputValue,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <div
            className={s.separator}
            style={{
              width: "100%",
              height: "0.188rem",
              backgroundColor: backgroundColor,
              color: color,
              boxSizing: "border-box",
              borderLeft: `solid 0.375rem ${color}`,
            }}
          ></div>
        </div>
        <div className={s.submitButton}>
          <SubmitButton colorButton={color}>Add</SubmitButton>
        </div>
      </div>
    </form>
  );
}
