import { useEffect, useState } from "react";
export type FormInputValue = {
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
export const useSavedScheduler = () => {
  const [schedulersData, setSchedulersData] = useState<FormInputValue[]>([]);
  useEffect(() => {
    const savedScheduler = localStorage.getItem("scheduler");

    if (savedScheduler) {
      setSchedulersData(JSON.parse(savedScheduler));
    } else {
      setSchedulersData([]);
    }
  }, []);

  return { schedulersData, setSchedulersData };
};
