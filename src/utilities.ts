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
  Sat: 1
};

export function generateDate(): string {
  const isSunday = new Date().toString().includes("Sun");
  const dateArray = Date().split(" ");
  if (isSunday) {
    return `${monthsDictionary[dateArray[1]]} ${dateArray[2]}`;
  } else {
    const day = dateArray[0];
    const nextSunday = new Date(
      Date.now() + millisecondsInDay * daysTillSunday[day]
    ).toString();
    const nextSundayArray = nextSunday.split(" ");
    return `${monthsDictionary[nextSundayArray[1]]} ${nextSundayArray[2]}`;
  }
}
