import s from "./SchedulList.module.scss";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

export default function SchedulList() {
  const currentDate = "2018-11-01";
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
      backgroundColor: "rgba(244, 241, 187, 0.15)",
      borderColor: "rgb(244, 241, 187) solid 4px",
      color: "rgb(36, 61, 111)",
    },
    {
      startDate: "2018-11-01T09:00",
      endDate: "2018-11-01T10:00",
      title: "Meeting",
      backgroundColor: "rgba(244, 23, 187, 0.15)",
      borderColor: "rgb(244, 23, 187) solid 4px",
      color: "rgb(36, 61, 111)",
    },
    {
      startDate: "2018-11-01T09:00",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
      backgroundColor: "rgba(24, 23, 17, 0.15)",
      borderColor: "rgb(24, 23, 17) solid 4px",
      color: "rgb(36, 61, 111)",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
      cellBackgroundColor: "green ",
    },
  ];

  const Appointment = ({ children, style, data, ...restProps }: any) => (
    <Appointments.Appointment
      {...restProps}
      data={data}
      style={{
        ...style,
        backgroundColor: data.backgroundColor,
        borderLeft: data.borderColor,
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
          color: data.color,
        }}
        {...props}
      />
    );
  };

  return (
    <section className={s.schedulList}>
      <Scheduler data={schedulerData}>
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
