import s from "./ModalForm.module.scss";
import { useEffect, useState } from "react";
import { useHandleColorChange } from "../../utils/useHandleColorChange";
import { DateIcon } from "../../common/svg/dateIcon/dateIcon";
import { TimeIcon } from "../../common/svg/timeIcon/timeIcon";
import { SubmitButton } from "../ui/inputButton/submitButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import uuid from "react-uuid";
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
};
export default function ModalForm() {
  const { color, backgroundColor, handleColorChange } = useHandleColorChange();
  const currentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );
  const [endHour, setEndHour] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const initialFormInputValue: FormInputValue = {
    id: "urerYRUERTZEtzeTZET32532",
    title: "",
    startDate: "",
    endDate: "",
    startHour: "",
    endHour: "",
    commentInput: "",
    color: "",
    backgroundColor: "",
    borderLeft: "",
  };
  const [schedulers, setSchedulers] = useState<FormInputValue[]>(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("scheduler");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed the JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                setFormInputValue({
                  ...formInputValue,
                  [e.target.name]: e.target.value,
                });
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
