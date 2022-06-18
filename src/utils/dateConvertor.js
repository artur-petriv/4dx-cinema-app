// Return day name from set date
const getWeekDay = (date) => {
  let days = ["Нед", "Пон", "Вів", "Сер", "Чет", "П'ят", "Суб"];

  return days[new Date(date).getDay()];
};

// Return month name from set date
const getMonthName = (date) => {
  let months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  return months[new Date(date).getMonth()];
};

// Return month day
const getMonthDay = (date) => {
  return ("0" + new Date(date).getDate()).slice(-2);
};

// Convert new Date() to YYYY-MM-DD
const convertDate = (date) =>
  `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)}`;

// Make array with list of days between dates
const determineDaysBetween = (startDate, count) => {
  const daysList = [];

  for (let day = 0; day <= count; day++) {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + day);
    const convertedDate = convertDate(new Date(newDate));
    daysList.push(convertedDate);
  }

  return daysList;
};

// Convert YYYY-MM-DD to DD.MM.YY
const convertDateToDDMMYY = (date) => {
  const newDate = new Date(date);

  return `${("0" + newDate.getDate()).slice(-2)}.${(
    "0" +
    (newDate.getMonth() + 1)
  ).slice(-2)}.${newDate.getFullYear().toString().slice(-2)}`;
};

module.exports = {
  getWeekDay,
  getMonthName,
  getMonthDay,
  determineDaysBetween,
  convertDateToDDMMYY,
};
