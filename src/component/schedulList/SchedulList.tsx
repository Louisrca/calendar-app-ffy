import s from "./SchedulList.module.scss";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

export default function SchedulList() {
  const [schedulersData, setSchedulersData] = useState([]);
  const reduxCurrentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );

  const currentDate =
    reduxCurrentDate.year() +
    "-" +
    (reduxCurrentDate.month() + 1) +
    "-" +
    reduxCurrentDate.date();

  useEffect(() => {
    const savedTodos = localStorage.getItem("scheduler");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a JavaScript object
      setSchedulersData(JSON.parse(savedTodos));
    } else {
      // set your state to an empty array when there are no todos in localStorage
      setSchedulersData([]);
    }
  }, []);

  console.log(schedulersData);
  const Appointment = ({ children, style, data, ...restProps }: any) => (
    <Appointments.Appointment
      {...restProps}
      data={data}
      style={{
        ...style,
        backgroundColor: data.backgroundColor,
        borderLeft: data.borderLeft,
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const AppointmentContent = (props: any) => {
    const { data, style } = props;
    return (
      <Appointments.AppointmentContent
        style={{
          ...style,
          color: "rgb(36, 61, 111)",
        }}
        {...props}
      />
    );
  };

  return (
    <section className={s.schedulList}>
      <Scheduler data={schedulersData} locale={"fr-FR"}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={9} endDayHour={21} />
        <Appointments
          appointmentComponent={Appointment}
          appointmentContentComponent={AppointmentContent}
        />
        <AppointmentTooltip showCloseButton showOpenButton />
      </Scheduler>
      
      
    </section>
  );
}
