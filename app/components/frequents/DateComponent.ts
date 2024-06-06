const monthName = (m: number) => {
  const mArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return mArray[m - 1];
};
interface DateComponentProps {
  d: Date;
}
const DateComponent: React.FC<DateComponentProps> = ({ d }) => {
  const myDate = new Date(d);
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();
  const date = myDate.getDate();
  const writeDate = date + " " + monthName(month) + ", " + year;
  return writeDate;
};

export default DateComponent;
