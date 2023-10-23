export const useRecurringAppointment = () => {
  const datediff = (first: any, second: any) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  };

  const parseDate = (str: any) => {
    var mdy = str.split("-");
    return new Date(mdy[0], mdy[1], mdy[2]);
  };

  return { datediff, parseDate };
};
