const millisecondsInDay = 86400000;

const monthsDictionary: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December"
};

const daysTillSunday: Record<string, number> = {
  Mon: 6,
  Tue: 5,
  Wed: 4,
  Thu: 3,
  Fri: 2,
  Sat: 1,
  Sun: 0
};

export function generateDate(): string {
  const dateArray = Date().split(" ");
  const day = dateArray[0];
  const nextSunday = new Date(
    Date.now() + millisecondsInDay * daysTillSunday[day]
  ).toString();
  const nextSundayArray = nextSunday.split(" ");
  let dayNumber = nextSundayArray[2];
  if (dayNumber.startsWith("0")) {
    dayNumber = dayNumber.slice(1);
  }
  return `${monthsDictionary[nextSundayArray[1]]} ${dayNumber}, ${
    nextSundayArray[3]
  }`;
}
