import s from "./SchedulList.module.scss";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useSavedScheduler } from "../../utils/useSavedScheduler";

export default function SchedulList() {
  const { schedulersData, setSchedulersData } = useSavedScheduler();
  const reduxCurrentDate = useSelector(
    (state: RootState) => state.CalendarCurrentDate.currentDate
  );

  const currentDate =
    reduxCurrentDate.year() +
    "-" +
    (reduxCurrentDate.month() + 1) +
    "-" +
    reduxCurrentDate.date();

  const Appointment = ({ children, style, data, ...restProps }: any) => (
    <Appointments.Appointment
      {...restProps}
      data={data}
      style={{
        ...style,
        backgroundColor: data.backgroundColor,
        borderLeft: data.borderLeft,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
      <button
        style={{ zIndex: "50", width: "30px", height: "30px", border: "none" }}
        onClick={() => {
          const updatedSchedulersData = schedulersData.filter(
            (item) => item.id !== data.id
          );
          setSchedulersData(updatedSchedulersData);
          localStorage.setItem(
            "scheduler",
            JSON.stringify(updatedSchedulersData)
          );
        }}
      >
        click
      </button>
    </Appointments.Appointment>
  );

  const AppointmentContent = (props: any) => {
    const { style } = props;
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
      </Scheduler>
    </section>
  );
}
