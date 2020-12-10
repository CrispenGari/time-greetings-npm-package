/*

    time-greeting
*/

const messages = {
  MORNING: "Good Morning",
  AFTERNOON: "Good Afternoon",
  EVENING: "Good Evening",
  NIGHT: "Good Night",
  ERROR:
    "Date passed is in the wrong format or you did not pass the date to the function call!",
};
const timeGreetingsAutoDetectTime = () => {
  const date_time = new Date();
  const hours = date_time.getHours();
  if (hours >= 0 && hours < 12) {
    return messages.MORNING;
  } else if (hours >= 12 && hours < 17) {
    return messages.AFTERNOON;
  } else if (hours >= 17 && hours < 20) {
    return messages.EVENING;
  } else {
    return messages.NIGHT;
  }
};

const timeGreetings = (date_time) => {
  try {
    const hours = date_time.getHours();
    if (hours >= 0 && hours < 12) {
      return messages.MORNING;
    } else if (hours >= 12 && hours < 17) {
      return messages.AFTERNOON;
    } else if (hours >= 17 && hours < 20) {
      return messages.EVENING;
    } else {
      return messages.NIGHT;
    }
  } catch (error) {
    return messages.ERROR;
  }
};

module.exports = {
  timeGreetingsAutoDetectTime,
  timeGreetings,
};
