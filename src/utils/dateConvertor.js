const getWeekDay = (date) => {
  let days = ["Нед", "Пон", "Вів", "Сер", "Чет", "П'ят", "Суб"];

  return days[new Date(date).getDay()];
};

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

const getMonthDay = (date) => {
  return ("0" + new Date(date).getDate()).slice(-2);
};

// Convert new Date() to YYYY-MM-DD
const convertDate = (date) =>
  `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)}`;

const determineDaysBetween = (startDate, count) => {
  // Make array with list of days between dates
  const daysList = [];

  for (let day = 0; day <= count; day++) {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + day);
    const convertedDate = convertDate(new Date(newDate));
    daysList.push(convertedDate);
  }

  return daysList;
};

module.exports = {
  getWeekDay,
  getMonthName,
  getMonthDay,
  determineDaysBetween,
};
